Lesson.start({
  id: 'transferencia-al-operador', area: 'Mantenimiento y sostenibilidad', areaIcon: '🌱', icon: '🔑',
  title: 'Transferencia al operador',
  subtitle: 'Entregar las llaves no basta: hay que entregar también el saber y el compromiso.',
  norma: 'La entrega al operador exige documentos, capacitación y un responsable formal (verificar la norma vigente, el convenio y el expediente técnico aprobado).',
  intro: '<p>Muchas obras se construyen bien y fallan en el <b>traspaso</b>. La entidad las recibe, pero quien debe operarlas (una EPS, un sector, una junta administradora o la propia comunidad) no sabe cómo, no tiene los documentos o no aceptó la responsabilidad. Esta lección explica qué debe pasar antes, durante y después de la entrega para que la obra siga funcionando.</p>',
  sections: [
    { h: 'Quién puede ser el operador',
      html: '<table><tr><th>Tipo de obra</th><th>Operador habitual</th></tr><tr><td>Agua y saneamiento</td><td>EPS o junta administradora de servicios</td></tr><tr><td>Salud y educación</td><td>Sector correspondiente (red de salud, UGEL o similar)</td></tr><tr><td>Vías, mercados, espacios públicos</td><td>Área municipal u operador designado</td></tr><tr><td>Sistemas comunales</td><td>Organización de usuarios o comunidad</td></tr></table><p>El operador depende del caso y del marco sectorial. Ejemplo ilustrativo: una planta de la Municipalidad Distrital de Villa Esperanza sería entregada a la EPS de la zona, solo si esta aceptó por escrito. Verificar la norma sectorial vigente.</p>' },
    { h: 'Los documentos que deben entregarse',
      html: '<ul><li><b>Planos post-construcción</b> (conforme a obra) y memorias.</li><li><b>Manual de operación y mantenimiento</b> con rutinas y frecuencias.</li><li><b>Protocolos y certificados de pruebas</b> de equipos y sistemas.</li><li><b>Garantías</b> y datos de contacto de los proveedores.</li><li><b>Inventario</b> de bienes, equipos y repuestos entregados.</li><li><b>Acta de recepción o transferencia</b> firmada por quien entrega y quien recibe.</li></ul><p>Sin estos documentos el operador trabaja a ciegas. Las reglas exactas de recepción y liquidación bajo el DS 038-2026-EF deben verificarse en el texto y en el convenio.</p>' },
    { h: 'Capacitar antes de irse',
      html: '<p>Un manual guardado en un cajón no capacita a nadie. La transferencia debe incluir <b>formación práctica</b> a quienes operarán: uso de equipos, rutinas de mantenimiento, qué hacer ante una falla y a quién llamar. Conviene programarla <b>antes</b> de la recepción final y dejar constancia de asistencia y contenido. Si el personal rota con frecuencia, prever una segunda ronda de capacitación.</p>' },
    { h: 'Compromisos claros y por escrito',
      html: '<p>La transferencia debe dejar respondidas cuatro preguntas:</p><ol><li>¿Quién es el responsable de operar desde qué fecha?</li><li>¿Quién financia la operación y el mantenimiento?</li><li>¿Qué pasa durante el periodo de garantía si algo falla?</li><li>¿Cómo se informará el estado del servicio a la entidad titular?</li></ol><p>Si el operador no acepta, es mejor descubrirlo antes de construir. Para el marco contractual consulta Legal Obra PRO; para los adicionales y deductivos, la app específica. Esta lección no reemplaza asesoría legal, tributaria ni técnica.</p>' }
  ],
  keypoints: [
    'Entregar la obra sin operador que la acepte es dejarla sin dueño funcional.',
    'El operador depende del tipo de obra: EPS, sector, área municipal o comunidad organizada.',
    'La entrega incluye planos conforme a obra, manual de O&M, pruebas, garantías, inventario y acta.',
    'La capacitación práctica se hace antes de la recepción final y se deja constancia.',
    'Deben quedar por escrito responsable, financiamiento de la O&M y atención de fallas en garantía.',
    'Las reglas de recepción bajo el reglamento vigente se verifican en el texto y el convenio.'
  ],
  flashcards: [
    { q: '¿Por qué fallan muchas transferencias?', a: 'Porque el operador no tiene documentos, no está capacitado o no aceptó formalmente la responsabilidad.' },
    { q: '¿Qué operador suele recibir una obra de agua y saneamiento?', a: 'La EPS o una junta administradora, según el caso y la norma sectorial.' },
    { q: 'Menciona tres documentos de la entrega.', a: 'Planos conforme a obra, manual de O&M y acta de transferencia (también pruebas, garantías e inventario).' },
    { q: '¿Cuándo conviene capacitar al operador?', a: 'Antes de la recepción final, con constancia de asistencia y contenido.' },
    { q: '¿Qué debe quedar por escrito en la transferencia?', a: 'Responsable, fuente de financiamiento de la O&M, atención de fallas en garantía y reporte a la entidad.' }
  ],
  quiz: [
    { q: 'Ejemplo ilustrativo: la EPS no ha aceptado por escrito operar la planta. ¿Qué conviene?', opts: ['Entregar igual y ver qué pasa', 'Resolver la aceptación antes de la entrega', 'Cerrar el expediente sin operador'], correct: 1, why: 'Una obra sin operador aceptado queda sin quien la haga funcionar.' },
    { q: '¿Qué documento describe rutinas y frecuencias para cuidar la obra?', opts: ['El manual de operación y mantenimiento', 'El acta de inauguración', 'La nota de prensa'], correct: 0, why: 'El manual traduce el diseño en tareas concretas para el operador.' },
    { q: '¿Cuándo debe hacerse la capacitación?', opts: ['Un año después de la entrega', 'Antes de la recepción final, con constancia', 'Solo si hay una falla'], correct: 1, why: 'Debe estar lista cuando el operador asuma el servicio.' },
    { q: '¿Dónde se confirman las reglas de recepción bajo OxI?', opts: ['En la norma vigente, el convenio y el expediente técnico aprobado', 'En cualquier guía anterior a marzo de 2026', 'En una nota de prensa'], correct: 0, why: 'Las guías previas a marzo de 2026 describen el régimen derogado.' }
  ]
});
