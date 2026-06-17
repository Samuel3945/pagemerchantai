'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-transparent transition-colors" style={{ background: 'color-mix(in srgb, var(--bg) 90%, transparent)' }}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center h-[70px] gap-7">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" style={{ fontWeight: 680, fontSize: '18px', letterSpacing: '-0.02em' }}>
          <span className="w-[30px] h-[30px] rounded-[9px] flex items-center justify-center text-white" style={{ background: 'linear-gradient(115deg, #0F766E 0%, #17B7A8 46%, #6E6BEA 100%)', boxShadow: '0 6px 16px -6px rgba(110,107,234,.5)' }}>
            <svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px]">
              <path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round"/>
              <path d="M12 12v8M4 8.5 12 12l8-3.5" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round"/>
            </svg>
          </span>
          <span style={{ color: 'var(--ink)' }}>
            MyMerchant<span style={{ color: 'var(--teal)' }}>AI</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          <Link href="/#tour" className="inline-flex items-center h-[38px] px-3 rounded-full text-[15px] transition-colors" style={{ fontWeight: 550, color: 'var(--ink-2)' }}>Producto</Link>
          <Link href="/industria/farmacias" className="inline-flex items-center h-[38px] px-3 rounded-full text-[15px] transition-colors" style={{ fontWeight: 550, color: 'var(--ink-2)' }}>Industrias</Link>
          <Link href="/precios" className="inline-flex items-center h-[38px] px-3 rounded-full text-[15px] transition-colors" style={{ fontWeight: 550, color: 'var(--ink-2)' }}>Precios</Link>
          <Link href="/#faq" className="inline-flex items-center h-[38px] px-3 rounded-full text-[15px] transition-colors" style={{ fontWeight: 550, color: 'var(--ink-2)' }}>Recursos</Link>
        </nav>

        <div className="hidden md:flex items-center gap-2.5 ml-auto">
          <a href="https://app.mymerchantai.com/sign-in" className="inline-flex items-center h-10 px-4 rounded-full text-[14.5px] border transition-colors" style={{ fontWeight: 600, color: 'var(--ink)', borderColor: 'var(--line-strong)' }}>
            Inicia sesión
          </a>
          <a href="https://app.mymerchantai.com/sign-up" className="inline-flex items-center h-10 px-4 rounded-full text-[14.5px] text-white transition-all hover:-translate-y-px" style={{ fontWeight: 600, background: 'var(--accent)', boxShadow: '0 10px 24px -10px rgba(221,77,24,.6)' }}>
            Empieza gratis
          </a>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden ml-auto w-[42px] h-[42px] rounded-[10px] flex items-center justify-center" style={{ border: '1px solid var(--line-strong)', background: 'var(--surface)' }} onClick={() => setMobileOpen(true)} aria-label="Abrir menú">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[80] md:hidden">
          <div className="absolute inset-0 backdrop-blur-sm" style={{ background: 'rgba(11,21,18,0.4)' }} onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-[min(360px,88vw)] flex flex-col gap-1.5 overflow-y-auto p-[18px] shadow-2xl" style={{ background: 'var(--bg)' }}>
            <div className="flex items-center justify-between mb-2.5">
              <Link href="/" className="flex items-center gap-2.5" style={{ fontWeight: 680, fontSize: '18px' }} onClick={() => setMobileOpen(false)}>
                <span className="w-[30px] h-[30px] rounded-[9px] flex items-center justify-center" style={{ background: 'linear-gradient(115deg, #0F766E 0%, #17B7A8 46%, #6E6BEA 100%)' }}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px]"><path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round"/></svg>
                </span>
                MyMerchant<span style={{ color: 'var(--teal)' }}>AI</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg" aria-label="Cerrar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
            {[{ href: '/#tour', label: 'Producto' }, { href: '/industria/farmacias', label: 'Industrias' }, { href: '/precios', label: 'Precios' }, { href: '/#faq', label: 'Recursos' }].map(({ href, label }) => (
              <Link key={label} href={href} onClick={() => setMobileOpen(false)} className="flex items-center justify-between px-3 py-3.5 rounded-xl text-[17px] transition-colors" style={{ fontWeight: 600, color: 'var(--ink)' }}>
                {label}
              </Link>
            ))}
            <div className="mt-auto flex flex-col gap-2.5 pt-5">
              <a href="https://app.mymerchantai.com/sign-in" className="flex items-center justify-center h-12 rounded-full border" style={{ fontWeight: 600, color: 'var(--ink)', borderColor: 'var(--line-strong)' }}>Inicia sesión</a>
              <a href="https://app.mymerchantai.com/sign-up" className="flex items-center justify-center h-12 rounded-full text-white" style={{ fontWeight: 600, background: 'var(--accent)' }}>Empieza gratis</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
