import type { Metadata } from 'next'
import { LegalProse } from '@/components/layout/legal-prose'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de Privacidad de MyMerchantAI. Cómo recopilamos, usamos y protegemos tus datos. Cumplimos con la Ley 1581 de Colombia, GDPR y CCPA.',
  alternates: { canonical: '/privacidad' },
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

const h3Style = {
  fontSize: '16.5px',
  fontWeight: 650,
  color: 'var(--ink)',
  marginTop: '1.6em',
  marginBottom: '0.4em',
}

const linkStyle = { color: 'var(--teal-ink)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }

export default function PrivacidadPage() {
  return (
    <LegalProse
      eyebrow="Legal"
      title="Política de Privacidad"
      description="Cómo recopilamos, usamos y protegemos la información de nuestros clientes y usuarios. Cumplimos con la Ley 1581 de Colombia (Habeas Data), el RGPD (GDPR) y la CCPA de California."
      updatedDate="16 de junio de 2026"
    >
      <h2 style={h2Style}>1. Responsable del tratamiento e información de contacto</h2>
      <p>El responsable del tratamiento de los datos personales recogidos a través de mymerchantai.com y del Servicio es:</p>
      <p>
        <strong>«RAZÓN SOCIAL» (NIT «NIT»)</strong>, operando bajo la marca comercial <strong>MyMerchantAI</strong>.<br />
        Domicilio: República de Colombia.<br />
        Correo electrónico para asuntos de privacidad: <a href="mailto:privacidad@mymerchantai.com" style={linkStyle}>privacidad@mymerchantai.com</a>
      </p>

      <h2 style={h2Style}>2. Datos que recopilamos</h2>
      <p>Recopilamos los siguientes tipos de información en función de cómo utiliza el Servicio:</p>

      <h3 style={h3Style}>2.1 Datos de cuenta y registro</h3>
      <ul>
        <li>Nombre, correo electrónico y contraseña del titular de la cuenta.</li>
        <li>Nombre del negocio, sector y país de operación.</li>
        <li>Información de perfil de usuarios adicionales (empleados, cajeros) creados dentro de la cuenta.</li>
      </ul>

      <h3 style={h3Style}>2.2 Datos de uso y actividad</h3>
      <ul>
        <li>Registros de ventas, transacciones e interacciones con el POS.</li>
        <li>Datos de inventario, catálogo de productos y créditos a clientes (fiados) que usted ingresa.</li>
        <li>Registros de acceso (dirección IP, tipo de navegador, sistema operativo, páginas visitadas, fecha y hora).</li>
      </ul>

      <h3 style={h3Style}>2.3 Datos de facturación</h3>
      <ul>
        <li>Los datos de tarjetas de crédito/débito son procesados directamente por nuestra pasarela de pago (proveedor externo). MyMerchantAI no almacena números completos de tarjetas ni códigos CVV.</li>
        <li>Datos de facturación como nombre en la tarjeta, país de facturación y últimos 4 dígitos, que pueden ser conservados por la pasarela de pago conforme a sus propios términos.</li>
      </ul>

      <h3 style={h3Style}>2.4 Datos de los clientes de su negocio</h3>
      <p>Cuando usted registra clientes en el Servicio (para fiados, pedidos u otros fines), actúa como responsable del tratamiento de dichos datos y MyMerchantAI actúa como encargado del tratamiento. Usted es responsable de cumplir con las leyes de protección de datos aplicables respecto a sus propios clientes.</p>

      <h3 style={h3Style}>2.5 Cookies y tecnologías de seguimiento</h3>
      <p>Utilizamos cookies y tecnologías similares. Ver la sección 9 de esta política para más detalle.</p>

      <h2 style={h2Style}>3. Finalidades del tratamiento</h2>
      <p>Utilizamos sus datos para:</p>
      <ul>
        <li><strong>Prestar el Servicio:</strong> operar las funciones del POS, inventario, fiados, reportes y demás.</li>
        <li><strong>Gestión de la cuenta:</strong> autenticación, soporte técnico y comunicaciones operativas esenciales.</li>
        <li><strong>Facturación y pagos:</strong> procesar cobros y gestionar suscripciones.</li>
        <li><strong>Mejora del Servicio:</strong> análisis de uso agregado y anonimizado para mejorar funcionalidades.</li>
        <li><strong>Seguridad:</strong> detectar y prevenir fraude, uso no autorizado y amenazas de seguridad.</li>
        <li><strong>Cumplimiento legal:</strong> atender obligaciones legales, requerimientos de autoridades y ejercicio o defensa de acciones legales.</li>
        <li><strong>Comunicaciones comerciales:</strong> informarle sobre actualizaciones, nuevas funciones o planes, con la posibilidad de darse de baja en cualquier momento.</li>
      </ul>

      <h2 style={h2Style}>4. Base legal del tratamiento</h2>
      <p>Conforme al Reglamento General de Protección de Datos (RGPD/GDPR) de la Unión Europea, que adoptamos como estándar internacional, el tratamiento de sus datos se fundamenta en:</p>
      <ul>
        <li><strong>Ejecución del contrato (Art. 6.1.b RGPD):</strong> el tratamiento es necesario para la prestación del Servicio contratado.</li>
        <li><strong>Consentimiento (Art. 6.1.a RGPD):</strong> para comunicaciones comerciales opcionales y cookies no esenciales.</li>
        <li><strong>Interés legítimo (Art. 6.1.f RGPD):</strong> para la seguridad de la plataforma, prevención del fraude y mejora del producto.</li>
        <li><strong>Obligación legal (Art. 6.1.c RGPD):</strong> para cumplir con requerimientos de autoridades fiscales, judiciales o administrativas.</li>
      </ul>
      <p>Bajo la Ley 1581 de 2012 (Habeas Data, Colombia), el tratamiento se realiza con la autorización del titular o dentro de las causales legales que no requieren autorización (ejecución de relación contractual, obligaciones legales).</p>

      <h2 style={h2Style}>5. Cómo compartimos los datos</h2>
      <p>MyMerchantAI no vende, alquila ni comercializa sus datos personales. Podemos compartir información con:</p>
      <ul>
        <li><strong>Proveedores de servicios / subencargados:</strong> empresas que nos ayudan a operar el Servicio (proveedor de hosting en la nube, pasarela de pagos, proveedor de facturación electrónica, herramientas de análisis, servicio de correo transaccional). Todos actúan bajo contratos de procesamiento de datos con obligaciones equivalentes a las de esta política.</li>
        <li><strong>Autoridades competentes:</strong> cuando sea legalmente requerido o para proteger derechos e intereses legítimos.</li>
        <li><strong>Cesiones corporativas:</strong> en el marco de una fusión, adquisición o venta de activos, con notificación previa a los usuarios afectados.</li>
      </ul>

      <h2 style={h2Style}>6. Transferencias internacionales de datos</h2>
      <p>Para operar el Servicio utilizamos infraestructura en la nube cuyo procesamiento puede ocurrir fuera de Colombia. En dichos casos, nos aseguramos de que existan salvaguardas adecuadas, incluyendo cláusulas contractuales tipo reconocidas por la normativa aplicable, para proteger sus datos con un nivel equivalente al exigido por la Ley 1581 y el RGPD.</p>

      <h2 style={h2Style}>7. Conservación de datos</h2>
      <p>Conservamos sus datos mientras su cuenta esté activa o durante el tiempo necesario para prestar el Servicio. Tras la terminación de la cuenta:</p>
      <ul>
        <li>Los datos operativos (ventas, inventario, clientes) se conservan durante un período de 90 días para permitir su exportación, y posteriormente son eliminados.</li>
        <li>Los datos de facturación se conservan por el período que exija la normativa fiscal aplicable (generalmente 5 a 10 años según legislación colombiana).</li>
        <li>Los registros de seguridad y auditoría se conservan por un máximo de 12 meses.</li>
      </ul>

      <h2 style={h2Style}>8. Tus derechos</h2>
      <p>Dependiendo de su jurisdicción, puede ejercer los siguientes derechos respecto a sus datos personales:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {[
          { title: 'Acceso', desc: 'Conocer qué datos personales tenemos sobre usted.' },
          { title: 'Rectificación', desc: 'Solicitar la corrección de datos inexactos o incompletos.' },
          { title: 'Supresión / Eliminación', desc: 'Solicitar la eliminación de sus datos cuando ya no sean necesarios.' },
          { title: 'Oposición', desc: 'Oponerse al tratamiento basado en interés legítimo.' },
          { title: 'Limitación', desc: 'Solicitar que restrinjamos el tratamiento en determinadas circunstancias.' },
          { title: 'Portabilidad', desc: 'Recibir sus datos en un formato estructurado y legible por máquina.' },
        ].map(({ title, desc }) => (
          <div key={title} className="rounded-[14px] p-4" style={{ background: 'var(--surface-2)', border: '1px solid var(--line)' }}>
            <strong className="block text-[14px] mb-1" style={{ color: 'var(--ink)' }}>{title}</strong>
            <span className="text-[13.5px] leading-[1.5]" style={{ color: 'var(--ink-3)' }}>{desc}</span>
          </div>
        ))}
      </div>

      <h3 style={h3Style}>Derechos bajo la CCPA (California, EE. UU.)</h3>
      <p>Los residentes de California tienen derecho a saber qué datos personales recopilamos, a solicitar su eliminación y a no ser objeto de discriminación por ejercer sus derechos. Como declaramos anteriormente, no vendemos datos personales.</p>

      <h3 style={h3Style}>Derechos bajo la Ley 1581 de 2012 (Habeas Data, Colombia)</h3>
      <p>Los titulares de datos personales en Colombia tienen derecho a conocer, actualizar, rectificar y suprimir sus datos, a revocar la autorización otorgada y a presentar quejas ante la Superintendencia de Industria y Comercio (SIC).</p>

      <h3 style={h3Style}>Cómo ejercer sus derechos</h3>
      <p>Para ejercer cualquiera de los derechos anteriores, envíe su solicitud a <a href="mailto:privacidad@mymerchantai.com" style={linkStyle}>privacidad@mymerchantai.com</a>, indicando su nombre, correo registrado y el derecho que desea ejercer. Responderemos en un plazo máximo de 15 días hábiles, conforme a la legislación aplicable.</p>

      <h2 style={h2Style}>9. Cookies y tecnologías similares</h2>
      <p>Utilizamos cookies y tecnologías equivalentes para:</p>
      <ul>
        <li><strong>Cookies esenciales:</strong> necesarias para el funcionamiento del Servicio (autenticación de sesión, seguridad).</li>
        <li><strong>Cookies de análisis:</strong> recopilan datos de uso de forma anonimizada para mejorar el Servicio.</li>
        <li><strong>Cookies de preferencias:</strong> recuerdan sus configuraciones y preferencias.</li>
      </ul>
      <p>Puede controlar y eliminar cookies desde la configuración de su navegador. La desactivación de cookies esenciales puede afectar el funcionamiento del Servicio.</p>

      <h2 style={h2Style}>10. Seguridad de la información</h2>
      <p>MyMerchantAI implementa medidas técnicas y organizativas adecuadas para proteger sus datos frente a accesos no autorizados, pérdida, alteración o divulgación indebida. Estas medidas incluyen cifrado en tránsito (TLS) y en reposo, controles de acceso basados en roles, auditorías periódicas de seguridad y monitoreo de amenazas. Sin embargo, ningún sistema de seguridad es absolutamente invulnerable. En caso de una violación de seguridad que afecte sus datos, lo notificaremos conforme a los plazos exigidos por la legislación aplicable.</p>

      <h2 style={h2Style}>11. Menores de edad</h2>
      <p>El Servicio está dirigido exclusivamente a comercios y empresas. No recopilamos deliberadamente datos personales de menores de 18 años. Si tiene conocimiento de que un menor ha proporcionado datos personales sin la debida autorización, contáctenos a <a href="mailto:privacidad@mymerchantai.com" style={linkStyle}>privacidad@mymerchantai.com</a> para proceder a su eliminación.</p>

      <h2 style={h2Style}>12. Cambios a esta política</h2>
      <p>Podemos actualizar esta Política de Privacidad periódicamente. Los cambios sustanciales serán notificados por correo electrónico o mediante aviso destacado en la Plataforma, con al menos 15 días de antelación. La fecha de &quot;Última actualización&quot; en la parte superior refleja la versión vigente.</p>

      <h2 style={h2Style}>13. Contacto</h2>
      <p>Para preguntas, solicitudes o reclamaciones relacionadas con esta Política de Privacidad:</p>
      <p>
        <strong>MyMerchantAI — «RAZÓN SOCIAL» (NIT «NIT»)</strong><br />
        Correo electrónico: <a href="mailto:privacidad@mymerchantai.com" style={linkStyle}>privacidad@mymerchantai.com</a>
      </p>
      <p>Si no recibe respuesta satisfactoria dentro del plazo legal, tiene derecho a presentar una queja ante la Superintendencia de Industria y Comercio de Colombia (SIC) o ante la autoridad de protección de datos competente en su jurisdicción.</p>
    </LegalProse>
  )
}
