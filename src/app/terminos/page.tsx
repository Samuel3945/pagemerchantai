import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalProse } from '@/components/layout/legal-prose'

export const metadata: Metadata = {
  title: 'Términos de Servicio',
  description: 'Términos de Servicio de MyMerchantAI. Condiciones de uso del software POS para comercios, facturación, responsabilidades y ley aplicable.',
  alternates: { canonical: '/terminos' },
}

const h2Style = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(19px, 2vw, 23px)',
  fontWeight: 600,
  color: 'var(--ink)',
  marginTop: '2.5em',
  marginBottom: '0.5em',
  letterSpacing: '-0.015em',
  paddingBottom: '0.35em',
  borderBottom: '1px solid var(--line)',
}

const linkStyle = { color: 'var(--teal-ink)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }

export default function TerminosPage() {
  return (
    <LegalProse
      eyebrow="Legal"
      title="Términos de Servicio"
      description="Condiciones que rigen el uso de los servicios de MyMerchantAI por parte de empresas y comercios."
      updatedDate="16 de junio de 2026"
    >
      <h2 style={h2Style}>1. Aceptación de los términos</h2>
      <p>Al acceder, registrarse o utilizar los servicios de MyMerchantAI (en adelante, &quot;el Servicio&quot;), usted acepta quedar vinculado por estos Términos de Servicio (en adelante, &quot;los Términos&quot;) y por nuestra <Link href="/privacidad" style={linkStyle}>Política de Privacidad</Link>. Si no acepta estos Términos en su totalidad, no debe utilizar el Servicio.</p>
      <p>El Servicio es operado por Samuel Alzate Tejada, con domicilio en la República de Colombia (en adelante, &quot;la Empresa&quot; o &quot;MyMerchantAI&quot;).</p>

      <h2 style={h2Style}>2. Descripción del servicio</h2>
      <p>MyMerchantAI es una plataforma de punto de venta (POS) basada en navegador web, orientada a comercios y empresas. Ofrece funciones de caja, gestión de inventario, control de créditos a clientes (fiados), reportes, facturación electrónica y herramientas de inteligencia artificial, entre otras (en adelante, &quot;el Software&quot; o &quot;la Plataforma&quot;).</p>
      <p>El Servicio se presta <strong>&quot;tal cual&quot;</strong> y <strong>&quot;según disponibilidad&quot;</strong>, sin garantías de funcionamiento ininterrumpido salvo lo establecido en un Acuerdo de Nivel de Servicio (SLA) suscrito por separado. La Empresa se reserva el derecho de modificar, suspender o discontinuar características del Servicio en cualquier momento, con aviso previo razonable cuando sea posible.</p>

      <h2 style={h2Style}>3. Elegibilidad y cuentas</h2>
      <p>El Servicio está dirigido exclusivamente a personas jurídicas, comerciantes y empresas, y a los individuos que actúen en nombre y representación de un negocio. Al aceptar estos Términos, usted declara y garantiza que:</p>
      <ul>
        <li>Actúa en nombre de un negocio, empresa o entidad y tiene plena autoridad para obligar a dicha entidad.</li>
        <li>La entidad que representa tiene capacidad legal para celebrar contratos.</li>
        <li>El uso del Servicio cumple con todas las leyes y regulaciones aplicables en su jurisdicción.</li>
      </ul>

      <h2 style={h2Style}>4. Registro y seguridad de la cuenta</h2>
      <p>Para acceder al Servicio debe crear una cuenta con información veraz, completa y actualizada. Usted es responsable de:</p>
      <ul>
        <li>Mantener la confidencialidad de sus credenciales de acceso (usuario, contraseña, PIN y tokens de autenticación).</li>
        <li>Todas las actividades que ocurran bajo su cuenta, incluyendo las realizadas por empleados u otros usuarios autorizados por usted.</li>
        <li>Notificar a MyMerchantAI de inmediato ante cualquier uso no autorizado de su cuenta o brecha de seguridad, a través de <a href="mailto:soporte@mymerchantai.com" style={linkStyle}>soporte@mymerchantai.com</a>.</li>
      </ul>
      <p>MyMerchantAI no será responsable por pérdidas derivadas del uso no autorizado de su cuenta cuando dicho uso sea consecuencia de negligencia o incumplimiento de sus obligaciones de seguridad.</p>

      <h2 style={h2Style}>5. Planes, facturación, renovación automática, impuestos y cambios de precio</h2>
      <p>MyMerchantAI ofrece planes gratuitos y de pago. Al contratar un plan de pago, usted acepta:</p>
      <ul>
        <li><strong>Facturación:</strong> Los planes se facturan por adelantado, de forma mensual o anual según su elección.</li>
        <li><strong>Renovación automática:</strong> La suscripción se renueva automáticamente al final de cada período, salvo que la cancele antes del inicio del siguiente ciclo.</li>
        <li><strong>Impuestos:</strong> Los precios mostrados pueden no incluir impuestos aplicables (IVA, retenciones u otros). Los tributos correspondientes a su jurisdicción serán calculados y añadidos al momento del cobro.</li>
        <li><strong>Cambios de precio:</strong> La Empresa puede modificar los precios de los planes con un aviso previo de al menos 30 días. El precio vigente al inicio de su período de facturación es el que aplica durante dicho período. Si no acepta el nuevo precio, puede cancelar antes de que entre en vigor.</li>
        <li><strong>Formas de pago:</strong> El pago se procesa a través de una pasarela de pago de terceros. Usted garantiza que tiene autorización para usar el método de pago proporcionado.</li>
      </ul>

      <h2 style={h2Style}>6. Uso aceptable — conductas prohibidas</h2>
      <p>Usted se compromete a no utilizar el Servicio para:</p>
      <ul>
        <li>Actividades ilegales, fraudulentas, o que infrinjan derechos de terceros.</li>
        <li>Procesar, almacenar o transmitir datos de tarjetas de pago fuera del marco PCI-DSS o de la normativa aplicable.</li>
        <li>Realizar ingeniería inversa, descompilar o desensamblar el Software.</li>
        <li>Realizar scraping, extracción masiva de datos o acceso automatizado no autorizado a la Plataforma.</li>
        <li>Introducir virus, malware o cualquier código dañino.</li>
        <li>Vulnerar o intentar comprometer la seguridad de los sistemas de MyMerchantAI o de otros usuarios.</li>
        <li>Revender, sublicenciar o comercializar el Servicio a terceros sin autorización expresa.</li>
        <li>Enviar comunicaciones no solicitadas o spam a través de las funciones del Servicio.</li>
      </ul>
      <p>El incumplimiento de estas prohibiciones faculta a la Empresa para suspender o terminar su cuenta de forma inmediata y sin necesidad de aviso previo.</p>

      <h2 style={h2Style}>7. Propiedad intelectual</h2>
      <p>La Plataforma, el Software, el código fuente, las interfaces, los logotipos, las marcas, el diseño y todo el contenido generado por MyMerchantAI son propiedad exclusiva de Samuel Alzate Tejada y están protegidos por las leyes colombianas e internacionales de propiedad intelectual.</p>
      <p>Sus datos e información (catálogos de productos, bases de clientes, registros de ventas y demás contenido que usted ingrese) son de su propiedad. Al usar el Servicio, usted otorga a MyMerchantAI una licencia no exclusiva, mundial, libre de regalías y limitada para procesar, almacenar y utilizar dichos datos únicamente con el fin de prestar y mejorar el Servicio, conforme a la <Link href="/privacidad" style={linkStyle}>Política de Privacidad</Link>.</p>

      <h2 style={h2Style}>8. Datos del cliente y privacidad</h2>
      <p>El tratamiento de datos personales que usted comparta o que se recopilen en el uso del Servicio se rige por nuestra <Link href="/privacidad" style={linkStyle}>Política de Privacidad</Link>, la cual forma parte integral de estos Términos. En su calidad de responsable del tratamiento de los datos de sus propios clientes y empleados, usted es responsable de cumplir con las leyes de protección de datos que le sean aplicables.</p>

      <h2 style={h2Style}>9. Servicios de terceros y pasarela de pagos</h2>
      <p>El Servicio puede integrarse con plataformas de terceros (pasarelas de pago, proveedores de facturación electrónica, herramientas de mensajería, entre otros). MyMerchantAI no es responsable por el funcionamiento, disponibilidad, términos o prácticas de privacidad de dichos terceros. El uso de servicios de terceros está sujeto a los términos propios de cada proveedor.</p>

      <h2 style={h2Style}>10. Disponibilidad y mantenimiento</h2>
      <p>MyMerchantAI realizará esfuerzos comercialmente razonables para mantener el Servicio disponible. No obstante, la Empresa no garantiza disponibilidad ininterrumpida ni libre de errores. Puede realizarse mantenimiento programado o de emergencia, procurando minimizar el impacto en los usuarios. Los niveles de disponibilidad específicos únicamente serán vinculantes si están recogidos en un SLA escrito.</p>

      <h2 style={h2Style}>11. Suspensión y terminación</h2>
      <p>La Empresa puede suspender o terminar su acceso al Servicio, con o sin aviso previo, en los siguientes casos:</p>
      <ul>
        <li>Incumplimiento de estos Términos o de la legislación aplicable.</li>
        <li>Falta de pago de las cuotas correspondientes.</li>
        <li>Uso del Servicio de manera que cause daño a la Plataforma, a otros usuarios o a terceros.</li>
        <li>Solicitud de autoridades competentes.</li>
      </ul>
      <p>Usted puede cancelar su suscripción en cualquier momento desde el panel de administración. Tras la terminación, MyMerchantAI conservará sus datos durante el plazo establecido en la <Link href="/privacidad" style={linkStyle}>Política de Privacidad</Link>, transcurrido el cual podrán ser eliminados. Las obligaciones de pago devengadas y las cláusulas que por su naturaleza deban subsistir (limitación de responsabilidad, indemnización, propiedad intelectual) continuarán vigentes.</p>

      <h2 style={h2Style}>12. Descargo de garantías</h2>
      <p>EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE, EL SERVICIO SE PROVEE <strong>&quot;TAL CUAL&quot;</strong> Y <strong>&quot;SEGÚN DISPONIBILIDAD&quot;</strong>, SIN GARANTÍAS DE NINGÚN TIPO, EXPRESAS O IMPLÍCITAS, INCLUYENDO, SIN LIMITACIÓN, LAS GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN PARTICULAR, NO INFRACCIÓN DE DERECHOS DE TERCEROS O EXACTITUD.</p>
      <p>MyMerchantAI no garantiza que el Servicio sea ininterrumpido, libre de errores, seguro o exento de virus o componentes dañinos, ni que los resultados obtenidos sean exactos o fiables.</p>

      <h2 style={h2Style}>13. Limitación de responsabilidad</h2>
      <p>EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY COLOMBIANA APLICABLE:</p>
      <ul>
        <li>MyMerchantAI no será responsable por daños indirectos, incidentales, especiales, consecuenciales o punitivos, incluyendo, sin limitación, pérdida de beneficios, pérdida de datos, pérdida de fondo de comercio o interrupción del negocio, aunque se le hubiera advertido de la posibilidad de dichos daños.</li>
        <li>La responsabilidad total agregada de MyMerchantAI frente al cliente, por cualquier reclamación derivada de o relacionada con estos Términos o el Servicio, no excederá el monto total pagado por el cliente a MyMerchantAI durante los doce (12) meses inmediatamente anteriores al hecho que da lugar a la reclamación.</li>
      </ul>
      <p>Estas limitaciones no excluyen la responsabilidad que no pueda ser excluida por ley, ni afectan los derechos legales de consumidores que pudieran aplicar en ciertas jurisdicciones.</p>

      <h2 style={h2Style}>14. Indemnización</h2>
      <p>Usted acepta defender, indemnizar y eximir de responsabilidad a MyMerchantAI, sus directivos, empleados, agentes y proveedores frente a cualquier reclamación, daño, pérdida, responsabilidad, costos y gastos (incluidos honorarios de abogados razonables) que surjan de: (a) su uso del Servicio en violación de estos Términos; (b) el incumplimiento de sus representaciones y garantías; (c) su infracción de derechos de terceros; o (d) el uso del Servicio por parte de sus empleados o usuarios autorizados.</p>

      <h2 style={h2Style}>15. Modificaciones a los términos</h2>
      <p>La Empresa se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones sustanciales serán comunicadas con al menos 15 días de antelación, mediante correo electrónico a la dirección registrada en su cuenta o mediante aviso destacado en la Plataforma. El uso continuado del Servicio tras la entrada en vigor de las modificaciones implica la aceptación de las mismas. Si no acepta los cambios, deberá cancelar su suscripción antes de la fecha de entrada en vigor.</p>

      <h2 style={h2Style}>16. Ley aplicable y resolución de disputas</h2>
      <p>Estos Términos se rigen e interpretan conforme a las leyes de la República de Colombia. Cualquier controversia derivada de o relacionada con estos Términos que no pueda resolverse amigablemente en un plazo de 30 días desde la notificación escrita de la disputa, será sometida a la jurisdicción de los jueces y tribunales competentes de la ciudad de Bogotá, Colombia. Las partes podrán, de mutuo acuerdo, acudir a mecanismos alternativos de resolución de conflictos, como centros de conciliación o arbitraje, conforme a la legislación colombiana vigente.</p>

      <h2 style={h2Style}>17. Fuerza mayor</h2>
      <p>Ninguna de las partes será responsable por incumplimientos derivados de causas que estén fuera de su control razonable, incluyendo, sin limitación: desastres naturales, actos de autoridad pública, guerras, pandemias, fallas en infraestructuras de telecomunicaciones de terceros, o cortes de energía generalizados. La parte afectada notificará a la otra a la mayor brevedad posible.</p>

      <h2 style={h2Style}>18. Disposiciones generales</h2>
      <ul>
        <li><strong>Divisibilidad:</strong> Si alguna disposición de estos Términos es declarada inválida o inaplicable, las demás disposiciones continuarán en plena vigencia y efecto.</li>
        <li><strong>Cesión:</strong> Usted no puede ceder ni transferir sus derechos u obligaciones bajo estos Términos sin el consentimiento previo y escrito de MyMerchantAI. La Empresa puede ceder estos Términos en el marco de una fusión, adquisición o venta de activos, con notificación al cliente.</li>
        <li><strong>Acuerdo íntegro:</strong> Estos Términos, junto con la Política de Privacidad y la Política de Reembolsos, constituyen el acuerdo íntegro entre las partes y reemplazan cualquier acuerdo previo sobre el mismo objeto.</li>
        <li><strong>No renuncia:</strong> El hecho de que MyMerchantAI no ejerza o exija el cumplimiento de algún derecho o disposición no constituirá renuncia al mismo.</li>
        <li><strong>Comunicaciones:</strong> Las comunicaciones formales dirigidas a la Empresa deben enviarse a <a href="mailto:legal@mymerchantai.com" style={linkStyle}>legal@mymerchantai.com</a>.</li>
      </ul>

      <h2 style={h2Style}>19. Contacto</h2>
      <p>Para consultas legales o relacionadas con estos Términos, contáctenos en:</p>
      <p><strong>MyMerchantAI — Samuel Alzate Tejada</strong><br />Correo electrónico: <a href="mailto:legal@mymerchantai.com" style={linkStyle}>legal@mymerchantai.com</a></p>
    </LegalProse>
  )
}
