import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalProse } from '@/components/layout/legal-prose'

export const metadata: Metadata = {
  title: 'Política de Reembolsos — MyMerchantAI',
  description: 'Política de Reembolsos de MyMerchantAI. Conoce tus derechos de retracto (Colombia) y desistimiento (UE), cancelación y cómo solicitar un reembolso.',
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

const calloutStyle = {
  background: 'var(--teal-soft)',
  border: '1px solid var(--teal-soft-2)',
  borderRadius: 'var(--r-3)',
  padding: '18px 22px',
  marginBottom: '1.4em',
  color: 'var(--teal-ink)',
  fontSize: '15px',
  lineHeight: 1.65,
}

const calloutWarnStyle = {
  ...calloutStyle,
  background: 'var(--warn-soft)',
  borderColor: '#e8c97a',
  color: 'var(--warn)',
}

export default function ReembolsosPage() {
  return (
    <LegalProse
      eyebrow="Legal"
      title="Política de Reembolsos"
      description="Tus derechos de retracto, cancelación y las condiciones aplicables a los planes de suscripción de MyMerchantAI."
      updatedDate="16 de junio de 2026"
    >
      <h2 style={h2Style}>1. Resumen</h2>
      <div style={calloutStyle}>
        <strong style={{ display: 'block', marginBottom: '4px', fontSize: '15.5px' }}>Lo esencial en pocas palabras:</strong>
        Los planes de pago se facturan por adelantado. Puedes cancelar en cualquier momento y conservas acceso hasta el fin del período pagado. No realizamos reembolsos prorrateados del período en curso, excepto cuando la ley lo exige (ver secciones 2 y 3). El plan gratuito no genera ningún cargo.
      </div>
      <p>Esta política aplica a todos los planes de suscripción de MyMerchantAI adquiridos a través de mymerchantai.com o de la aplicación. Está sujeta a los <Link href="/terminos" style={linkStyle}>Términos de Servicio</Link>.</p>

      <h2 style={h2Style}>2. Derecho de retracto (Colombia — Ley 1480 de 2011)</h2>
      <p>Conforme al Estatuto del Consumidor colombiano (Ley 1480 de 2011), los consumidores que contraten a distancia (por internet) tienen derecho a retractarse de la compra dentro de los <strong>5 días hábiles</strong> siguientes a la fecha del pago inicial.</p>
      <div style={calloutStyle}>
        <strong style={{ display: 'block', marginBottom: '4px', fontSize: '15.5px' }}>Cómo ejercer el derecho de retracto en Colombia:</strong>
        Envía un correo electrónico a <a href="mailto:soporte@mymerchantai.com" style={linkStyle}>soporte@mymerchantai.com</a> con el asunto &quot;Retracto — [nombre del negocio]&quot;, indicando tu nombre, correo de la cuenta y la fecha de la compra. Dispones de 5 días hábiles desde el pago para ejercer este derecho.
      </div>
      <p>Una vez confirmado el ejercicio del derecho de retracto dentro del plazo legal:</p>
      <ul>
        <li>El acceso al plan de pago se suspenderá.</li>
        <li>Reembolsaremos el monto pagado en su totalidad, por el mismo medio de pago utilizado, en un plazo máximo de 30 días calendario.</li>
      </ul>
      <p><strong>Importante:</strong> MyMerchantAI dirige su Servicio a comercios y empresas (B2B). Si usted contrató en nombre de un negocio o empresa, la aplicabilidad del derecho de retracto como consumidor puede estar sujeta a análisis caso a caso conforme a la legislación colombiana.</p>

      <h2 style={h2Style}>3. Derecho de desistimiento (consumidores en la Unión Europea)</h2>
      <p>Si usted es un consumidor residente en un país de la Unión Europea, tiene derecho a desistir del contrato sin necesidad de justificación dentro de los <strong>14 días calendario</strong> a partir de la fecha de suscripción al plan de pago (período de desistimiento).</p>
      <p>Para ejercer este derecho, notifíquenos antes de que expire el período de 14 días mediante un escrito inequívoco a <a href="mailto:soporte@mymerchantai.com" style={linkStyle}>soporte@mymerchantai.com</a>. El reembolso se realizará utilizando el mismo medio de pago en un plazo de 14 días desde la recepción de la notificación.</p>
      <div style={calloutWarnStyle}>
        <strong style={{ display: 'block', marginBottom: '4px', fontSize: '15.5px' }}>Excepción al desistimiento en la UE:</strong>
        Si ha solicitado expresamente el inicio inmediato del Servicio durante el período de desistimiento (por ejemplo, activando funciones de pago de forma inmediata), podremos deducir del reembolso un importe proporcional al uso del Servicio hasta la fecha de notificación del desistimiento, conforme al Art. 14 de la Directiva 2011/83/UE.
      </div>

      <h2 style={h2Style}>4. Suscripciones</h2>
      <p>Los planes de pago de MyMerchantAI funcionan como suscripciones recurrentes:</p>
      <ul>
        <li><strong>Facturación anticipada:</strong> el importe total del período (mensual o anual) se cobra al inicio del mismo.</li>
        <li><strong>Renovación automática:</strong> la suscripción se renueva automáticamente al finalizar cada período, cargando el precio vigente al método de pago registrado.</li>
        <li><strong>Aviso de renovación:</strong> recibirás un recordatorio por correo electrónico antes de la renovación anual.</li>
      </ul>

      <h2 style={h2Style}>5. Cancelación</h2>
      <p>Puedes cancelar tu suscripción en cualquier momento desde el panel de administración de tu cuenta o contactando a <a href="mailto:soporte@mymerchantai.com" style={linkStyle}>soporte@mymerchantai.com</a>.</p>
      <ul>
        <li>La cancelación surte efecto al final del período de facturación en curso.</li>
        <li>Conservas acceso a todas las funciones del plan hasta el último día del período ya pagado.</li>
        <li><strong>No se realizan reembolsos prorrateados</strong> por los días no utilizados del período en curso, excepto en los casos previstos en las secciones 2 y 3 de esta política.</li>
      </ul>

      <h2 style={h2Style}>6. Plan gratuito</h2>
      <p>El plan Emprende es gratuito para siempre y no genera ningún cargo. No aplica ninguna condición de reembolso a este plan. Puedes eliminar tu cuenta en cualquier momento.</p>

      <h2 style={h2Style}>7. Excepciones — montos no reembolsables</h2>
      <p>No son objeto de reembolso, fuera de los derechos legales descritos en las secciones 2 y 3:</p>
      <ul>
        <li>La parte proporcional de cualquier período de facturación ya transcurrido al momento de la cancelación.</li>
        <li>Períodos de prueba gratuita consumidos antes de la conversión a un plan de pago.</li>
        <li>Descuentos o créditos aplicados en períodos anteriores.</li>
        <li>Cargos originados por incumplimiento de los Términos de Servicio que hayan derivado en la suspensión de la cuenta.</li>
        <li>Servicios complementarios o integraciones de terceros adquiridos por separado (se rigen por los términos del proveedor respectivo).</li>
      </ul>

      <h2 style={h2Style}>8. Cómo solicitar un reembolso</h2>
      <p>Para solicitar un reembolso al que tengas derecho:</p>
      <ol>
        <li>Envía un correo electrónico a <a href="mailto:soporte@mymerchantai.com" style={linkStyle}>soporte@mymerchantai.com</a> con el asunto: <strong>&quot;Solicitud de reembolso — [nombre del negocio]&quot;</strong>.</li>
        <li>Incluye: nombre del titular de la cuenta, correo electrónico registrado, fecha de la compra o del cargo y el motivo de la solicitud.</li>
        <li>Recibirás un acuse de recibo en un plazo de 2 días hábiles.</li>
        <li>Revisaremos tu solicitud y te comunicaremos la resolución en un plazo máximo de 10 días hábiles desde la recepción de la solicitud completa.</li>
      </ol>

      <h2 style={h2Style}>9. Medio de reembolso</h2>
      <p>Los reembolsos aprobados se realizarán por el mismo medio de pago utilizado en la compra original, a través de la pasarela de pago. El tiempo de acreditación en tu cuenta bancaria o tarjeta depende del banco o procesador y puede tomar entre 5 y 15 días hábiles adicionales desde la aprobación del reembolso por parte de MyMerchantAI.</p>
      <p>Si el método de pago original no está disponible (por ejemplo, una tarjeta cancelada), nos coordinaremos contigo para acordar un método alternativo.</p>

      <h2 style={h2Style}>10. Cambios a esta política</h2>
      <p>MyMerchantAI se reserva el derecho de modificar esta Política de Reembolsos. Los cambios sustanciales serán notificados con al menos 15 días de anticipación por correo electrónico o mediante aviso en la Plataforma. Los cambios no afectan las suscripciones ya activas en su período en curso.</p>

      <h2 style={h2Style}>11. Contacto</h2>
      <p>Para consultas sobre reembolsos o cancelaciones:</p>
      <p>
        <strong>MyMerchantAI — «RAZÓN SOCIAL» (NIT «NIT»)</strong><br />
        Correo electrónico: <a href="mailto:soporte@mymerchantai.com" style={linkStyle}>soporte@mymerchantai.com</a>
      </p>
      <p>También puedes consultar nuestros <Link href="/terminos" style={linkStyle}>Términos de Servicio</Link> y <Link href="/privacidad" style={linkStyle}>Política de Privacidad</Link> para más información.</p>
    </LegalProse>
  )
}
