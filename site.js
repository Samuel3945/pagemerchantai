/* ============================================================================
   MyMerchantAI — interacciones de marca (compartido entre landing y verticales)
   Animaciones scroll-driven que NARRAN el producto. No dependen de
   IntersectionObserver (poco fiable en algunos contextos de preview): usamos un
   handler de scroll/resize con rAF + getBoundingClientRect. Respeta
   prefers-reduced-motion y cada feature corre solo si su DOM existe.
   ============================================================================ */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var vh = function () { return window.innerHeight || document.documentElement.clientHeight; };

  /* Algunos contextos de preview congelan las transiciones CSS en su valor
     inicial (el contenido quedaría invisible). Lo detectamos y, si pasa,
     desactivamos transiciones/animaciones globalmente para que todo salte a su
     estado final. En navegadores reales las transiciones funcionan con normalidad. */
  function detectFrozenTransitions() {
    try {
      var p = document.createElement("div");
      p.style.cssText = "position:fixed;left:-9999px;top:-9999px;width:10px;height:10px;opacity:0;transition:opacity .3s linear;";
      document.body.appendChild(p);
      void p.offsetWidth;
      p.style.opacity = "1";
      setTimeout(function () {
        var o = parseFloat(getComputedStyle(p).opacity);
        if (o <= 0.04) {
          var st = document.createElement("style");
          st.textContent = "*,*::before,*::after{transition:none !important;animation:none !important;}";
          document.head.appendChild(st);
          document.documentElement.classList.add("no-trans");
        }
        if (p.parentNode) p.parentNode.removeChild(p);
      }, 160);
    } catch (e) {}
  }

  /* ---------- Registro de observadores scroll ---------- */
  var watchers = [];
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      for (var i = 0; i < watchers.length; i++) {
        try { watchers[i](); } catch (e) {}
      }
      ticking = false;
    });
  }
  function addWatcher(fn) { watchers.push(fn); }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (!els.length) return;
    if (reduce) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var pending = els.filter(function (e) { return !e.classList.contains("in"); });
    function check() {
      var h = vh();
      for (var i = pending.length - 1; i >= 0; i--) {
        var el = pending[i];
        var r = el.getBoundingClientRect();
        if (r.top < h * 0.92 && r.bottom > 0) {
          el.classList.add("in");
          pending.splice(i, 1);
        }
      }
    }
    addWatcher(check);
    check();
  }

  /* ---------- Contadores numéricos ---------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var dec = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var pre = el.getAttribute("data-prefix") || "";
    var suf = el.getAttribute("data-suffix") || "";
    var dur = parseInt(el.getAttribute("data-dur") || "1500", 10);
    var fmt = function (v) { return pre + v.toLocaleString("es-CO", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf; };
    if (reduce) { el.textContent = fmt(target); return; }
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function initCounters() {
    var els = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));
    if (!els.length) return;
    var pending = els.slice();
    function check() {
      var h = vh();
      for (var i = pending.length - 1; i >= 0; i--) {
        var r = pending[i].getBoundingClientRect();
        if (r.top < h * 0.85 && r.bottom > 0) { animateCount(pending[i]); pending.splice(i, 1); }
      }
    }
    addWatcher(check);
    check();
  }

  /* ---------- Sticky product tour ---------- */
  function initProductTour() {
    var tour = document.querySelector("[data-tour]");
    if (!tour) return;
    var steps = Array.prototype.slice.call(tour.querySelectorAll("[data-tour-step]"));
    var panels = Array.prototype.slice.call(tour.querySelectorAll("[data-tour-panel]"));
    if (!steps.length) return;
    var current = -1;
    function setActive(i) {
      if (i === current) return; current = i;
      steps.forEach(function (s, k) { s.classList.toggle("active", k === i); });
      panels.forEach(function (p, k) { p.classList.toggle("active", k === i); });
    }
    setActive(0);
    function check() {
      var mid = vh() * 0.5, best = 0, bestDist = Infinity;
      for (var i = 0; i < steps.length; i++) {
        var r = steps[i].getBoundingClientRect();
        var c = r.top + r.height / 2;
        var d = Math.abs(c - mid);
        if (d < bestDist) { bestDist = d; best = i; }
      }
      setActive(best);
    }
    addWatcher(check);
    check();
  }

  /* ---------- Nav: scrolled + megamenú + drawer ---------- */
  function initNav() {
    var nav = document.querySelector(".nav");
    if (nav) addWatcher(function () { nav.classList.toggle("scrolled", window.scrollY > 8); });
    var trigger = document.querySelector("[data-mega-trigger]");
    var mega = document.querySelector("[data-mega]");
    if (trigger && mega) {
      var host = trigger.closest("li") || trigger.parentElement;
      var open = false, hideT;
      var show = function () { clearTimeout(hideT); open = true; mega.classList.add("open"); trigger.setAttribute("aria-expanded", "true"); };
      var hide = function () { open = false; mega.classList.remove("open"); trigger.setAttribute("aria-expanded", "false"); };
      trigger.addEventListener("click", function (e) { e.stopPropagation(); open ? hide() : show(); });
      host.addEventListener("mouseenter", show);
      host.addEventListener("mouseleave", function () { hideT = setTimeout(hide, 130); });
      mega.addEventListener("mouseenter", function () { clearTimeout(hideT); });
      mega.addEventListener("mouseleave", function () { hideT = setTimeout(hide, 130); });
      document.addEventListener("click", function (e) { if (open && !mega.contains(e.target) && e.target !== trigger) hide(); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") hide(); });
    }
    var burger = document.querySelector("[data-burger]");
    var drawer = document.querySelector("[data-drawer]");
    if (burger && drawer) {
      var openD = function () { drawer.classList.add("open"); document.body.style.overflow = "hidden"; };
      var closeD = function () { drawer.classList.remove("open"); document.body.style.overflow = ""; };
      burger.addEventListener("click", openD);
      drawer.querySelectorAll("[data-drawer-close]").forEach(function (b) { b.addEventListener("click", closeD); });
      drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeD); });
    }
  }

  /* ---------- FAQ ---------- */
  function initFaq() {
    document.querySelectorAll("[data-faq]").forEach(function (item) {
      var btn = item.querySelector("[data-faq-q]");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var isOpen = item.classList.contains("open");
        var group = item.closest("[data-faq-group]");
        if (group) group.querySelectorAll("[data-faq].open").forEach(function (o) { if (o !== item) o.classList.remove("open"); });
        item.classList.toggle("open", !isOpen);
      });
    });
  }

  /* ---------- Precios mensual/anual ---------- */
  function initPricing() {
    var toggle = document.querySelector("[data-billing-toggle]");
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var annual = toggle.getAttribute("aria-checked") !== "true";
      toggle.setAttribute("aria-checked", annual ? "true" : "false");
      document.querySelectorAll("[data-price]").forEach(function (el) {
        el.textContent = el.getAttribute(annual ? "data-price-annual" : "data-price");
      });
      document.querySelectorAll("[data-billing-note]").forEach(function (el) {
        el.textContent = annual ? (el.getAttribute("data-note-annual") || "") : (el.getAttribute("data-note-monthly") || "");
      });
    });
  }

  /* ---------- Hero: assemble + parallax ---------- */
  function initHero() {
    var hero = document.querySelector("[data-hero]");
    if (!hero) return;
    requestAnimationFrame(function () { hero.classList.add("hero-ready"); });
    if (reduce) return;
    var layers = hero.querySelectorAll("[data-parallax]");
    if (layers.length) addWatcher(function () {
      var y = window.scrollY;
      layers.forEach(function (l) {
        var sp = parseFloat(l.getAttribute("data-parallax")) || 0.05;
        l.style.transform = "translate3d(0," + (y * sp) + "px,0)";
      });
    });
  }

  /* ---------- Selector industria: scroll horizontal ---------- */
  function initIndustryRail() {
    document.querySelectorAll("[data-rail]").forEach(function (rail) {
      var track = rail.querySelector("[data-rail-track]");
      if (!track) return;
      rail.querySelectorAll("[data-rail-nav]").forEach(function (b) {
        b.addEventListener("click", function () {
          var dir = b.getAttribute("data-rail-nav") === "next" ? 1 : -1;
          track.scrollBy({ left: dir * Math.min(track.clientWidth * 0.8, 520), behavior: reduce ? "auto" : "smooth" });
        });
      });
    });
  }

  function boot() {
    detectFrozenTransitions();
    try { initReveal(); } catch (e) {}
    try { initCounters(); } catch (e) {}
    try { initProductTour(); } catch (e) {}
    try { initNav(); } catch (e) {}
    try { initFaq(); } catch (e) {}
    try { initPricing(); } catch (e) {}
    try { initHero(); } catch (e) {}
    try { initIndustryRail(); } catch (e) {}
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    // pasada extra por si el layout/fuentes cambian tras cargar
    setTimeout(onScroll, 300);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  window.__mmReinit = function () {
    watchers = [];
    boot();
  };
})();
