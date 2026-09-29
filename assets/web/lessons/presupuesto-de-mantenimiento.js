Lesson.start({
  id: 'presupuesto-de-mantenimiento', area: 'Mantenimiento y sostenibilidad', areaIcon: '🌱', icon: '💵',
  title: 'Presupuesto de mantenimiento',
  subtitle: 'Sin plata todos los años, la mejor obra se convierte en ruina lenta.',
  norma: 'El mantenimiento se financia cada año o no se hace: presupuestarlo es una decisión de gestión (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Construir tiene un momento; mantener tiene <b>todos los años</b>. Muchos gobiernos locales logran una obra y luego no reservan recursos para cuidarla, porque el presupuesto del siguiente año ya está comprometido con otras urgencias. Esta lección explica cómo estimar el costo anual, dónde buscar fuentes y cómo lograr que el mantenimiento entre al presupuesto institucional antes de que la obra se entregue.</p>',
  sections: [
    { h: 'Estimar el costo anual de mantener',
      html: '<p>Parte del plan de O&amp;M y suma por rubros:</p><ul><li><b>Personal</b> de operación y de mantenimiento.</li><li><b>Energía, agua e insumos</b> del servicio.</li><li><b>Mantenimiento rutinario</b> (limpieza, pequeñas reparaciones).</li><li><b>Mantenimiento periódico</b>, que se prorratea por año aunque se ejecute cada varios años.</li><li><b>Reposición</b> de equipos al final de su vida útil.</li></ul><p>Ejemplo ilustrativo: si un equipo cuesta S/ 60 000 y dura 10 años, conviene reservar S/ 6 000 cada año, no esperar el año del recambio. Es un cálculo simple que evita el sobresalto.</p>' },
    { h: 'Fuentes posibles de recursos',
      html: '<p>Según el tipo de obra y la entidad, el mantenimiento puede apoyarse en:</p><ol><li><b>Presupuesto institucional</b> de la entidad titular.</li><li><b>Tarifas o cuotas</b> pagadas por los usuarios (por ejemplo, agua y saneamiento).</li><li><b>Canon</b>: según fuentes, la Ley 32460 modificó la Ley 27506 (art. 6.2) para permitir usar canon en la operación y el mantenimiento de inversiones ejecutadas por OxI. Verificar la norma vigente, quiénes reciben canon y qué reglas aplican.</li><li><b>Financiamiento privado por OxI</b>: según fuentes, la Ley 32460 amplía la O&amp;M como acto financiable, y el DL 1534 ya habilitaba convenios de mantenimiento reconocidos con certificados. No hay garantía de que una empresa lo asuma en un caso concreto.</li></ol>' },
    { h: 'Incluirlo en el presupuesto anual',
      html: '<p>Un compromiso verbal no basta. Para que el mantenimiento exista, debe aparecer en el <b>presupuesto anual</b> con una meta o actividad identificable y un responsable de ejecutarla. Pasos prácticos:</p><ol><li>Estimar el costo anual antes de recibir la obra.</li><li>Incorporarlo en la programación presupuestal de los años siguientes.</li><li>Dejar constancia en el acta de recepción o transferencia de quién lo financia.</li><li>Revisar cada año si el monto alcanza.</li></ol><p>Para las reglas de programación, Gestión Pública PRO desarrolla el tema; esta lección solo muestra la conexión con la sostenibilidad.</p>' },
    { h: 'Cuando el gasto no calza',
      html: '<p>Hay tres salidas honestas si el costo de mantener supera lo disponible: <b>ajustar el diseño</b> (tecnología más simple), <b>ajustar el servicio</b> (horarios, cobertura) o <b>buscar una fuente adicional</b> antes de construir. Lo que no funciona es construir primero y esperar que aparezcan recursos. Un proyecto que no puede sostenerse ni siquiera debería priorizarse.</p><p>Esta lección no reemplaza asesoría legal, tributaria ni técnica.</p>' }
  ],
  keypoints: [
    'El costo de mantener se estima por rubros: personal, insumos, rutinario, periódico y reposición.',
    'Lo que se ejecuta cada varios años se prorratea como reserva anual.',
    'Las fuentes posibles son presupuesto institucional, tarifas, canon y, según el caso, financiamiento por OxI.',
    'Según fuentes, la Ley 32460 permite usar canon en O&M de inversiones OxI; verificar la norma vigente.',
    'Un compromiso verbal no sostiene una obra: debe figurar en el presupuesto anual con responsable.',
    'Si el costo no calza, se ajusta el diseño o se busca fuente antes de construir.'
  ],
  flashcards: [
    { q: '¿Qué rubros componen el costo anual de mantenimiento?', a: 'Personal, energía e insumos, mantenimiento rutinario, periódico prorrateado y reposición de equipos.' },
    { q: '¿Cómo se trata un gasto que ocurre cada 10 años?', a: 'Se prorratea y se reserva cada año.' },
    { q: '¿Qué permite la Ley 32460 respecto del canon, según fuentes?', a: 'Usar canon (Ley 27506, art. 6.2 modificado) para operación y mantenimiento de inversiones OxI. Verificar la norma vigente.' },
    { q: '¿Dónde debe figurar el mantenimiento para que se ejecute?', a: 'En el presupuesto anual, con actividad identificable y responsable.' },
    { q: '¿Qué hacer si el costo de mantener supera lo disponible?', a: 'Ajustar el diseño o el servicio, o buscar otra fuente antes de construir.' }
  ],
  quiz: [
    { q: 'Ejemplo ilustrativo: un equipo de S/ 60 000 dura 10 años. ¿Cuánto reservar por año?', opts: ['Nada hasta el año 10', 'S/ 6 000', 'S/ 60 000 cada año'], correct: 1, why: 'Se prorratea: 60 000 dividido entre 10 años da 6 000 por año.' },
    { q: '¿Cuál es una fuente posible para mantenimiento que menciona la Ley 32460 según fuentes?', opts: ['Usar canon para O&M de inversiones OxI', 'Eliminar todo costo recurrente', 'Cobrar impuestos nuevos a los vecinos'], correct: 0, why: 'La ley modificó la Ley 27506 para ese uso; se debe verificar el texto vigente.' },
    { q: '¿Qué es lo más riesgoso al planificar el mantenimiento?', opts: ['Dejarlo para conseguir recursos después de construir', 'Estimarlo antes de entregar la obra', 'Prorratear gastos periódicos'], correct: 0, why: 'Construir primero y esperar recursos deja la obra sin sustento.' },
    { q: '¿Garantiza el marco de OxI que una empresa financiará la O&M de tu obra?', opts: ['Sí, siempre', 'No; depende del convenio, la entidad y la norma vigente', 'Sí, si la obra es grande'], correct: 1, why: 'Nunca es una promesa automática ni tiene monto o plazo garantizado.' }
  ]
});
