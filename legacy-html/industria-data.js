/* ============================================================================
   MyMerchantAI — Datos de verticalización (la PLANTILLA parametrizable)
   Una sola estructura; cambian copy, dolor, mockups, casos, testimonios y FAQ.
   Esto ES el "mapa de adaptación" del brief, expresado como datos: agregar una
   vertical = agregar una entrada acá. Cientos de páginas, una sola marca.
   ============================================================================ */
window.MM_SECTORS = {
  farmacias: {
    slug: "farmacias",
    nombre: "Farmacias",
    crumb: "Farmacias",
    icon: '<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v10M7 12h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    eyebrow: "POS para farmacias",
    h1: "El POS inteligente para tu farmacia.",
    h1accent: "Controla vencimientos",
    sub: "Controla vencimientos, vende rápido y nunca pierdas un medicamento por caducidad. Lleva los fiados del barrio y factura electrónicamente, todo en un solo lugar.",
    dolor: "El problema de toda farmacia de barrio",
    dolorTxt: "Medicamentos que se vencen en la estantería, lotes sin control, clientes que fían y facturación que enreda. Cada caducidad es plata botada.",
    benefits: [
      { ic: "alert", t: "Alertas de vencimiento", d: "El sistema te avisa qué medicamentos están próximos a caducar para que los rotes o promociones antes de perderlos." },
      { ic: "box", t: "Control de lotes y stock crítico", d: "Cada lote con su fecha. Sabés cuánto te queda de cada referencia y cuándo pedir a la droguería." },
      { ic: "credit", t: "Fiados a clientes recurrentes", d: "Lleva el crédito de los clientes del barrio con plazos, abonos y recordatorios automáticos." },
      { ic: "doc", t: "Facturación electrónica", d: "Emite tus documentos cumpliendo la normativa, directo desde la caja." },
      { ic: "cash", t: "Cierre de caja con cuadre", d: "Cuadre automático al cerrar y alertas si algo no concuerda." },
      { ic: "chart", t: "Reportes de productos por vencer", d: "Un informe claro de qué vence esta semana, este mes y qué más rota." }
    ],
    caso: {
      t: "Un día en la farmacia del barrio",
      pasos: [
        "Llega doña Rosa por su acetaminofén. La cajera lo cobra en segundos y el stock baja solo.",
        "El sistema avisa: 3 cajas de un jarabe vencen en 10 días. Las pones en promoción.",
        "Don Julio fía su tratamiento; queda registrado con plazo de 15 días.",
        "Al cerrar, la caja cuadra automáticamente y el reporte del día está listo."
      ]
    },
    invTitle: "Inventario · vencimientos",
    invAlert: "3 por vencer",
    invRows: [
      { name: "Acetaminofén 500mg x10", sub: "Lote A-2241", pct: 70, level: "", tag: "120 und", tagType: "ok" },
      { name: "Jarabe para la tos 120ml", sub: "Vence en 9 días", pct: 24, level: "low", tag: "Pronto vence", tagType: "warn" },
      { name: "Amoxicilina 500mg", sub: "Bajo el mínimo", pct: 14, level: "crit", tag: "8 und", tagType: "crit" },
      { name: "Suero oral", sub: "Lote S-0912", pct: 82, level: "", tag: "64 und", tagType: "ok" }
    ],
    chat: [
      { role: "bot", text: "Buenas, ¿tienen acetaminofén de 500 y a cuánto?" },
      { role: "ai", text: "¡Hola! Sí, <b>Acetaminofén 500mg caja x10</b> a <b>$3.500</b>. Quedan 12 cajas. ¿Te lo aparto o te lo enviamos a domicilio?" },
      { role: "bot", text: "Me lo aparta porfa, paso en la tarde." }
    ],
    testimonio: { quote: "Las alertas de vencimiento me salvaron. No he vuelto a botar un medicamento por caducidad y mis clientes confían más.", nm: "Javier Pineda", rl: "Farmacia La Salud · Cali", res: "0 medicamentos vencidos" },
    faqs: [
      { q: "¿Maneja control de lotes y fechas de vencimiento?", a: "Sí. Cada producto puede tener varios lotes con su fecha de caducidad, y el sistema te alerta antes de que venzan." },
      { q: "¿Se conecta con mi droguería o proveedor?", a: "Llevas tus proveedores y órdenes de compra dentro del sistema, con sugerencias de reposición según tu rotación." },
      { q: "¿Incluye facturación electrónica?", a: "Sí, desde el plan Negocio emites documentos electrónicos cumpliendo la normativa local." }
    ],
    cta: "Empieza gratis tu farmacia"
  },

  ferreterias: {
    slug: "ferreterias",
    nombre: "Ferreterías",
    crumb: "Ferreterías",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="m14 7 3 3-7 7-3 .9.9-3 7-7Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    eyebrow: "POS para ferreterías",
    h1: "El POS hecho para tu ferretería.",
    h1accent: "Catálogo enorme",
    sub: "Maneja miles de referencias con variantes, vende por mayoreo y fía a tus contratistas sin perder el control. Todo conectado con tus proveedores.",
    dolor: "El dolor de la ferretería",
    dolorTxt: "Miles de SKU, el mismo producto en diez medidas, precios distintos por mayoreo y contratistas que compran fiado todo el mes. Llevar eso a mano es imposible.",
    benefits: [
      { ic: "box", t: "Catálogo enorme con variantes", d: "Un producto, muchas medidas y presentaciones. Encontrá cualquier referencia en segundos." },
      { ic: "chart", t: "Precios por mayoreo", d: "Define precios por cantidad y por tipo de cliente. El sistema aplica el correcto automáticamente." },
      { ic: "credit", t: "Fiados a contratistas", d: "Crédito por cliente con cupos, plazos y estado de cuenta — ideal para maestros y constructoras." },
      { ic: "box", t: "Proveedores y órdenes de compra", d: "Reposición sugerida según rotación y órdenes a tus proveedores desde la misma app." },
      { ic: "cash", t: "Cobro rápido con varios cajeros", d: "Mostrador lleno y varios cajeros cobrando a la vez, con permisos por empleado." },
      { ic: "alert", t: "Alertas de bajo inventario", d: "Nunca te quedes sin lo que más se vende: el sistema te avisa antes." }
    ],
    caso: {
      t: "Un sábado en la ferretería",
      pasos: [
        "Un maestro pide 200 tornillos y 12 metros de cable; el sistema aplica precio de mayoreo solo.",
        "Carga todo a su cuenta de crédito; queda con cupo y plazo.",
        "El stock de cable baja del mínimo y se sugiere una orden al proveedor.",
        "Al cierre, ves qué referencias rotaron más y cuánto fiado tenés por cobrar."
      ]
    },
    invTitle: "Inventario · variantes",
    invAlert: "2 bajo mínimo",
    invRows: [
      { name: 'Tornillo 1/4" x 2"', sub: "Variantes: 6 medidas", pct: 64, level: "", tag: "1.200 und", tagType: "ok" },
      { name: "Cable encauchetado 3×12", sub: "Bajo el mínimo", pct: 18, level: "crit", tag: "40 m", tagType: "crit" },
      { name: "Pintura blanca galón", sub: "Mayoreo desde 6", pct: 48, level: "low", tag: "Reponer", tagType: "warn" },
      { name: "Cemento gris 50kg", sub: "Alta rotación", pct: 76, level: "", tag: "90 bultos", tagType: "ok" }
    ],
    chat: [
      { role: "bot", text: "¿A cómo el bulto de cemento si llevo 20?" },
      { role: "ai", text: "Por 20 bultos te aplica precio de mayoreo: <b>$26.500 c/u</b> (normal $29.000). Tenemos 90 disponibles. ¿Te preparo la orden?" },
      { role: "bot", text: "Listo, cárguelo a la cuenta de Construcciones JP." }
    ],
    testimonio: { quote: "Tengo más de 4.000 referencias y antes era un caos. Ahora encuentro todo, aplico mayoreo solo y sé cuánto me deben los contratistas.", nm: "Carolina Téllez", rl: "Ferretería El Tornillo · Bogotá", res: "4.000+ referencias bajo control" },
    faqs: [
      { q: "¿Soporta variantes y miles de SKU?", a: "Sí. Maneja productos con múltiples variantes (medida, color, presentación) y catálogos grandes sin volverse lento." },
      { q: "¿Puedo tener precios por mayoreo y por cliente?", a: "Sí, defines listas de precio por cantidad y por tipo de cliente; el sistema aplica el correcto en la venta." },
      { q: "¿Cómo manejo el fiado de contratistas?", a: "Cada cliente tiene su cuenta de crédito con cupo, plazo, abonos y estado de cuenta." }
    ],
    cta: "Empieza gratis tu ferretería"
  },

  ropa: {
    slug: "ropa",
    nombre: "Tiendas de ropa",
    crumb: "Tiendas de ropa",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M9 4 5 6l1 4 2-.5V20h8V9.5l2 .5 1-4-4-2-2 2-2-2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    eyebrow: "POS para tiendas de ropa",
    h1: "El POS pensado para tu tienda de ropa.",
    h1accent: "Tallas y colores",
    sub: "Controla variantes de talla y color, maneja temporadas, gestiona devoluciones sin enredos y vende a domicilio. Todo conectado a tu inventario.",
    dolor: "El reto de vender ropa",
    dolorTxt: "La misma prenda en cinco tallas y tres colores, temporadas que cambian, cambios y devoluciones, y ventas por WhatsApp y domicilio. Sin un buen control, se pierde stock y plata.",
    benefits: [
      { ic: "box", t: "Variantes de talla y color", d: "Cada prenda con su matriz de talla/color. Sabés exactamente qué te queda de cada combinación." },
      { ic: "chart", t: "Manejo de temporadas", d: "Identifica qué se mueve por temporada y qué rebajar para liberar inventario." },
      { ic: "credit", t: "Devoluciones y cambios fáciles", d: "Procesa cambios y devoluciones en segundos, con el stock actualizándose solo." },
      { ic: "cash", t: "Delivery y venta por WhatsApp", d: "Vende a domicilio y por WhatsApp con tu catálogo y precios siempre al día." },
      { ic: "alert", t: "Alertas de stock por variante", d: "Te avisa cuándo se está agotando una talla específica de tu prenda estrella." },
      { ic: "doc", t: "Reportes por temporada y prenda", d: "Decide qué reponer y qué descontar con datos, no a la corazonada." }
    ],
    caso: {
      t: "Un día en la boutique",
      pasos: [
        "Entra una clienta y prueba un jean; lo cobras eligiendo talla 30 y color azul.",
        "El stock de esa combinación baja solo y avisa que quedan 2.",
        "Otra clienta cambia una blusa por otra talla; la devolución ajusta el inventario.",
        "Por WhatsApp llega un pedido a domicilio que sale del mismo stock."
      ]
    },
    invTitle: "Inventario · talla/color",
    invAlert: "1 talla agotándose",
    invRows: [
      { name: "Jean clásico — Azul", sub: "Tallas 28–34", pct: 58, level: "", tag: "Talla 30: 2", tagType: "warn" },
      { name: "Blusa lino — Blanco", sub: "Tallas S–L", pct: 72, level: "", tag: "24 und", tagType: "ok" },
      { name: "Chaqueta — Negro", sub: "Temporada saliente", pct: 30, level: "low", tag: "Rebajar", tagType: "warn" },
      { name: "Camiseta básica", sub: "Alta rotación", pct: 80, level: "", tag: "60 und", tagType: "ok" }
    ],
    chat: [
      { role: "bot", text: "Hola! La blusa de lino blanca la tienen en talla M?" },
      { role: "ai", text: "¡Sí! <b>Blusa lino blanca talla M</b> disponible a <b>$58.000</b>. Quedan 6. ¿Te la aparto o la quieres a domicilio?" },
      { role: "bot", text: "A domicilio, al norte 🙏" }
    ],
    testimonio: { quote: "Antes no sabía qué tallas se me agotaban. Ahora controlo cada combinación y las devoluciones ya no son un dolor de cabeza.", nm: "Daniela Soto", rl: "Boutique Aura · Barranquilla", res: "−40% en quiebres de stock" },
    faqs: [
      { q: "¿Maneja matriz de talla y color?", a: "Sí. Cada prenda tiene sus variantes de talla y color, con stock independiente por combinación." },
      { q: "¿Cómo proceso cambios y devoluciones?", a: "En segundos desde la caja; el inventario se ajusta automáticamente con cada cambio." },
      { q: "¿Puedo vender por WhatsApp y a domicilio?", a: "Sí, con tu catálogo conectado al inventario y el módulo de domicilios." }
    ],
    cta: "Empieza gratis tu tienda"
  },

  minimercados: {
    slug: "minimercados",
    nombre: "Minimercados",
    crumb: "Minimercados",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16l-1.2 9.5a2 2 0 0 1-2 1.5H7.2a2 2 0 0 1-2-1.5L4 7Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 7a3 3 0 0 1 6 0" stroke="currentColor" stroke-width="1.5"/></svg>',
    eyebrow: "POS para minimercados",
    h1: "El POS más rápido para tu minimercado.",
    h1accent: "Cobra en segundos",
    sub: "Cobro veloz con código de barras, pagos mixtos, alta rotación bajo control y los fiados del barrio sin enredos. Hecho para el ritmo de la tienda.",
    dolor: "El día a día del minimercado",
    dolorTxt: "Cola en la caja, productos que rotan rapidísimo, pagos en efectivo, transferencia y a veces fiado. Cada segundo y cada peso cuentan.",
    benefits: [
      { ic: "cash", t: "Cobro veloz por código de barras", d: "Pasa el producto y cobra en segundos. Menos cola, más ventas." },
      { ic: "credit", t: "Fiados del barrio", d: "Lleva el fiado de los vecinos con plazos y recordatorios — sin cuaderno." },
      { ic: "chart", t: "Alta rotación bajo control", d: "El inventario baja solo y te avisa qué reponer antes de quedarte sin." },
      { ic: "box", t: "Pagos mixtos", d: "Efectivo + transferencia + tarjeta en una misma venta, sin enredos." },
      { ic: "alert", t: "Alertas de bajo inventario", d: "Nunca te quedes sin la leche, el pan o la gaseosa que más se vende." },
      { ic: "doc", t: "Cierre de caja con cuadre", d: "Cuadra la caja al cerrar y detecta diferencias al instante." }
    ],
    caso: {
      t: "Una tarde de mucha venta",
      pasos: [
        "Entra gente del colegio; cobras combos por código de barras en segundos.",
        "Un cliente paga mitad efectivo, mitad transferencia, sin problema.",
        "Doña Marta fía la remesa; queda con su plazo y recordatorio.",
        "Al cerrar, la caja cuadra y ves cuánto vendiste por hora."
      ]
    },
    invTitle: "Inventario · alta rotación",
    invAlert: "2 por reponer",
    invRows: [
      { name: "Leche entera 1L", sub: "Rota a diario", pct: 22, level: "low", tag: "Reponer", tagType: "warn" },
      { name: "Pan tajado", sub: "Vence en 2 días", pct: 40, level: "low", tag: "Pronto vence", tagType: "warn" },
      { name: "Gaseosa 1.5L", sub: "Alta rotación", pct: 74, level: "", tag: "48 und", tagType: "ok" },
      { name: "Arroz 1kg", sub: "SKU 0421", pct: 66, level: "", tag: "52 und", tagType: "ok" }
    ],
    chat: [
      { role: "bot", text: "Tiene huevos por cubeta? a cómo" },
      { role: "ai", text: "Sí, <b>cubeta de huevos x30</b> a <b>$14.500</b>. Quedan 8 cubetas. ¿Se la aparto o la manda a domicilio?" },
      { role: "bot", text: "Mándemela, casa de siempre 🙌" }
    ],
    testimonio: { quote: "Antes anotaba los fiados en un cuaderno y se me perdía la plata. Ahora sé quién me debe y el sistema les recuerda solo.", nm: "Marta Rodríguez", rl: "Minimercado Doña Marta · Medellín", res: "+30% en ventas" },
    faqs: [
      { q: "¿Qué tan rápido es para cobrar?", a: "Cobras por código de barras en segundos, con varios cajeros a la vez y pagos mixtos." },
      { q: "¿Cómo llevo los fiados del barrio?", a: "Cada cliente con su cuenta, plazos, abonos y recordatorios automáticos por WhatsApp." },
      { q: "¿Funciona sin internet?", a: "Sí, sigues cobrando en modo sin conexión y todo se sincroniza al volver la señal." }
    ],
    cta: "Empieza gratis tu minimercado"
  },

  veterinarias: {
    slug: "veterinarias",
    nombre: "Veterinarias",
    crumb: "Veterinarias",
    icon: '<svg viewBox="0 0 24 24" fill="none"><circle cx="7.5" cy="9.5" r="1.6" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="7.5" r="1.6" stroke="currentColor" stroke-width="1.4"/><circle cx="16.5" cy="9.5" r="1.6" stroke="currentColor" stroke-width="1.4"/><path d="M8 15c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 3-4 3-4-.8-4-3Z" stroke="currentColor" stroke-width="1.4"/></svg>',
    eyebrow: "POS para veterinarias",
    h1: "El POS para tu veterinaria.",
    h1accent: "Clientes y mascotas",
    sub: "Lleva clientes y sus mascotas, vende productos y servicios, controla vencimientos de medicamentos y manda recordatorios de vacunas y desparasitación.",
    dolor: "Lo que necesita una veterinaria",
    dolorTxt: "No solo vendes alimento: agendas servicios, llevas la historia de cada mascota, controlas vencimientos de fármacos y necesitas recordarle al dueño la próxima vacuna.",
    benefits: [
      { ic: "credit", t: "Clientes con sus mascotas", d: "Cada dueño con sus mascotas, su historial de compras y servicios en un solo lugar." },
      { ic: "box", t: "Productos y servicios", d: "Vende alimento y accesorios, y cobra consultas, baños y procedimientos como servicios." },
      { ic: "alert", t: "Recordatorios de vacunas", d: "El sistema te ayuda a recordar al dueño la próxima vacuna o desparasitación." },
      { ic: "chart", t: "Control de vencimientos", d: "Alertas de medicamentos y vacunas próximas a caducar para no perder inventario." },
      { ic: "cash", t: "Fiados a clientes frecuentes", d: "Crédito para los clientes de siempre, con plazos y abonos." },
      { ic: "doc", t: "Reportes de productos y servicios", d: "Mira qué deja más: el alimento, los accesorios o los servicios." }
    ],
    caso: {
      t: "Una mañana en la veterinaria",
      pasos: [
        "Llega Laura con su perro Toby; registras la consulta como servicio y le vendes el alimento.",
        "El sistema agenda recordatorio: la vacuna de Toby toca en un mes.",
        "Avisa que un lote de antipulgas vence pronto; lo promocionas.",
        "Al cierre ves cuánto dejó cada servicio y producto del día."
      ]
    },
    invTitle: "Inventario · productos y servicios",
    invAlert: "1 por vencer",
    invRows: [
      { name: "Alimento perro adulto 15kg", sub: "Alta rotación", pct: 68, level: "", tag: "22 und", tagType: "ok" },
      { name: "Antipulgas pipeta", sub: "Vence en 12 días", pct: 30, level: "low", tag: "Pronto vence", tagType: "warn" },
      { name: "Consulta general", sub: "Servicio", pct: 100, level: "", tag: "Servicio", tagType: "ok" },
      { name: "Vacuna múltiple", sub: "Lote V-220", pct: 50, level: "", tag: "18 und", tagType: "ok" }
    ],
    chat: [
      { role: "bot", text: "Hola, cuánto vale el baño para un perro mediano?" },
      { role: "ai", text: "¡Hola! El <b>baño + secado para mediano</b> cuesta <b>$35.000</b>. ¿Quieres que agende a tu mascota? Veo que Toby tiene la vacuna pendiente este mes 🐶" },
      { role: "bot", text: "Sí, agéndame el baño y la vacuna 🙏" }
    ],
    testimonio: { quote: "Tener a cada dueño con su mascota y los recordatorios de vacunas hizo que volvieran más seguido. Y ya no se me vencen los antipulgas.", nm: "Andrés Mejía", rl: "Veterinaria Patitas · Pereira", res: "+25% clientes que regresan" },
    faqs: [
      { q: "¿Puedo llevar clientes y sus mascotas?", a: "Sí, cada cliente con sus mascotas, historial de compras y servicios." },
      { q: "¿Manejo productos y servicios juntos?", a: "Sí, vendes productos y cobras servicios (consultas, baños, procedimientos) en la misma venta." },
      { q: "¿Envía recordatorios de vacunas?", a: "Te ayuda a recordar al dueño la próxima vacuna o desparasitación por WhatsApp." }
    ],
    cta: "Empieza gratis tu veterinaria"
  },

  papelerias: {
    slug: "papelerias",
    nombre: "Papelerías",
    crumb: "Papelerías",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 3h8l4 4v14H6V3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14 3v4h4M9 12h6M9 16h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    eyebrow: "POS para papelerías",
    h1: "El POS que aguanta tu papelería.",
    h1accent: "Temporada escolar",
    sub: "Maneja miles de referencias, prepárate para la temporada escolar, vende por mayoreo y controla el alto número de SKU sin perder de vista lo que rota.",
    dolor: "El reto de la papelería",
    dolorTxt: "Cientos de referencias pequeñas, picos enormes en temporada escolar, ventas por mayoreo a colegios y mucho producto de bajo precio. Controlar eso a mano es agotador.",
    benefits: [
      { ic: "box", t: "Alto número de SKU", d: "Maneja cientos de referencias pequeñas con búsqueda rápida y por código de barras." },
      { ic: "chart", t: "Listo para temporada escolar", d: "Anticipa el pico: ve qué se agota y reabastece a tiempo lo que más se mueve." },
      { ic: "credit", t: "Ventas por mayoreo", d: "Precios por cantidad para colegios y revendedores, aplicados automáticamente." },
      { ic: "cash", t: "Cobro rápido en horas pico", d: "Varios cajeros y pagos mixtos para que la cola avance en temporada." },
      { ic: "alert", t: "Alertas de bajo inventario", d: "Te avisa antes de quedarte sin cuadernos, lápices o lo que más vendes." },
      { ic: "doc", t: "Reportes de lo que más rota", d: "Decide qué surtir con datos de rotación, no a la corazonada." }
    ],
    caso: {
      t: "Inicio de año escolar",
      pasos: [
        "Llega la temporada y el sistema muestra qué referencias se están agotando.",
        "Un colegio compra por mayoreo; el precio por cantidad se aplica solo.",
        "Dos cajeros cobran a la vez para que la fila avance rápido.",
        "Al cierre, ves qué útiles dejaron más y qué reponer mañana."
      ]
    },
    invTitle: "Inventario · alto SKU",
    invAlert: "3 por reponer",
    invRows: [
      { name: "Cuaderno 100 hojas", sub: "Temporada alta", pct: 20, level: "crit", tag: "Reponer ya", tagType: "crit" },
      { name: "Lápiz negro #2", sub: "Mayoreo desde 50", pct: 30, level: "low", tag: "Reponer", tagType: "warn" },
      { name: "Resma carta", sub: "Alta rotación", pct: 64, level: "", tag: "40 und", tagType: "ok" },
      { name: "Colores x12", sub: "SKU 1180", pct: 55, level: "", tag: "36 cajas", tagType: "ok" }
    ],
    chat: [
      { role: "bot", text: "Buenas, tienen cuadernos de 100 hojas por cantidad?" },
      { role: "ai", text: "¡Sí! Por <b>50 o más</b>, el cuaderno de 100 hojas queda en <b>$2.300 c/u</b>. ¿Cuántos necesitas? Te preparo la cotización." },
      { role: "bot", text: "Serían 120 para el colegio." }
    ],
    testimonio: { quote: "En temporada escolar era una locura. Ahora sé qué reponer, aplico mayoreo a los colegios y la fila avanza con dos cajeros.", nm: "Patricia Gil", rl: "Papelería El Lápiz · Cúcuta", res: "Temporada escolar sin quiebres" },
    faqs: [
      { q: "¿Aguanta cientos de referencias?", a: "Sí, maneja catálogos grandes con búsqueda rápida y código de barras sin volverse lento." },
      { q: "¿Puedo vender por mayoreo a colegios?", a: "Sí, defines precios por cantidad y por tipo de cliente; se aplican automáticamente." },
      { q: "¿Me ayuda en temporada escolar?", a: "Te muestra qué se está agotando y qué reponer para no perder ventas en el pico." }
    ],
    cta: "Empieza gratis tu papelería"
  }
};
