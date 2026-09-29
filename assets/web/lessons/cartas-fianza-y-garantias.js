Lesson.start({
  id: 'cartas-fianza-y-garantias', area: 'Convenio e inversión', areaIcon: '🖋️', icon: '🛡️',
  title: 'Cartas fianza y garantías',
  subtitle: 'El seguro que respalda la promesa: qué cubre, qué no y qué preguntar.',
  norma: 'Las garantías exigibles (tipos, montos y vigencia) NO están confirmadas en esta app: leer el convenio-tipo y el reglamento vigente; verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Una <b>garantía</b> es un respaldo económico que permite a una parte cobrarse si la otra no cumple. La forma más conocida es la <b>carta fianza</b>: un documento emitido por una entidad financiera que se compromete a pagar si se activa. En un convenio de inversión, las garantías responden a una pregunta simple: <b>si algo sale mal, ¿quién paga y con qué?</b> Esta lección no da montos ni porcentajes, porque no están confirmados aquí; te explica <b>para qué sirven</b>, qué riesgo cubre cada tipo y qué preguntar al revisar el convenio-tipo.</p>',
  sections: [
    { h: 'Qué es una carta fianza',
      html: '<p>Es una promesa de pago emitida por un banco u otra entidad financiera a favor de quien se protege (el beneficiario). Si la parte garantizada incumple, el beneficiario puede pedir que se ejecute y cobrar sin tener que esperar el resultado de un juicio largo.</p><ul><li><b>Garantizado:</b> quien debe cumplir (por ejemplo, la empresa).</li><li><b>Beneficiario:</b> quien se protege (por ejemplo, la entidad).</li><li><b>Emisor:</b> la entidad financiera que responde.</li></ul><p>Su fuerza depende de sus condiciones: si está mal redactada o vencida, no protege.</p>' },
    { h: 'Para qué sirven en el convenio',
      html: '<table><tr><th>Función de la garantía (concepto)</th><th>Riesgo que cubre</th></tr><tr><td>Fiel cumplimiento</td><td>Que la empresa no ejecute o abandone la intervención</td></tr><tr><td>Buen uso de adelantos o fondos, si los hay</td><td>Que se reciban recursos y no se apliquen a la obra</td></tr><tr><td>Calidad, vicios ocultos o mantenimiento posterior</td><td>Que aparezcan defectos después de recibida la obra</td></tr><tr><td>Obligaciones asociadas a la operación o servicio</td><td>Que los compromisos posteriores queden sin respaldo</td></tr></table><p>Qué garantías exige el marco vigente, en qué momento y por qué monto se verifica en el convenio-tipo y en el DS 038-2026-EF; no se asumen aquí.</p>' },
    { h: 'Vigencia y condiciones: donde se pierde la protección',
      html: '<p>La mayoría de problemas con fianzas no está en el tipo, sino en los detalles:</p><ul><li><b>Vigencia:</b> una fianza que vence antes de terminar la obligación deja el riesgo sin cubrir. Debe preverse cómo y cuándo se renueva.</li><li><b>Condiciones de ejecución:</b> ¿es incondicional y de realización automática, o exige trámites previos? Cuantos más requisitos, más difícil cobrar.</li><li><b>Emisor:</b> ¿qué tipo de entidad financiera es aceptable y cómo se acredita su solvencia?</li><li><b>Cobertura:</b> ¿respalda exactamente la obligación pactada o algo distinto?</li></ul>' },
    { h: 'Qué preguntar al revisar el convenio-tipo',
      html: '<ol><li>¿Qué garantías exige el convenio y quién las presenta?</li><li>¿En qué momento se entregan y hasta cuándo deben mantenerse vigentes?</li><li>¿Qué hechos permiten ejecutarlas y cómo se comunica?</li><li>¿Qué ocurre si la garantía se acerca a vencer y la obligación sigue abierta?</li><li>¿Se libera o se reduce la garantía a medida que se cumple?</li><li>¿Quién asume el costo de emitirla y renovarla, y se reconoce de algún modo? (verificar el reglamento vigente)</li></ol><p>Para revisar la redacción con detalle, apóyate en <b>Legal Obra PRO</b>.</p>' },
    { h: 'Riesgos y mitigación',
      html: '<table><tr><th>Riesgo</th><th>Mitigación</th></tr><tr><td>Fianza vencida con obligación abierta</td><td>Calendario de vencimientos con alertas anticipadas y responsable designado</td></tr><tr><td>Condiciones de ejecución que la vuelven inútil</td><td>Revisar que sea clara y de cobro directo, según lo que permita la norma</td></tr><tr><td>Garantía que no cubre la obligación real</td><td>Verificar que el texto cite el convenio y la obligación exacta</td></tr><tr><td>Costo de la garantía no previsto</td><td>Incluirlo en el análisis financiero desde el inicio</td></tr><tr><td>Asumir montos o plazos de una guía antigua</td><td>Contrastar con el convenio-tipo y el reglamento vigente</td></tr></table>' }
  ],
  keypoints: [
    'Una garantía responde a la pregunta: si alguien incumple, ¿quién paga y con qué?',
    'La carta fianza la emite una entidad financiera a favor del beneficiario y permite cobrar sin esperar un juicio largo.',
    'Los tipos, montos y vigencia exigibles no se dan como definitivos aquí: se leen en el convenio-tipo y el reglamento vigente.',
    'La mayoría de fallas está en la vigencia y en las condiciones de ejecución.',
    'Conviene un calendario de vencimientos con alertas y un responsable claro.',
    'Verificar la norma vigente y el expediente técnico aprobado.'
  ],
  flashcards: [
    { q: '¿Qué es una carta fianza?', a: 'Una promesa de pago de una entidad financiera a favor del beneficiario si la parte garantizada incumple.' },
    { q: '¿Qué riesgo cubre la garantía de fiel cumplimiento?', a: 'Que la empresa no ejecute o abandone la intervención.' },
    { q: '¿Cuál es el fallo más común en las fianzas?', a: 'Que venzan antes de terminar la obligación o tengan condiciones de ejecución que dificultan cobrar.' },
    { q: '¿Dónde se verifican los tipos y montos exigibles?', a: 'En el convenio-tipo y en el reglamento vigente.' }
  ],
  quiz: [
    { q: 'Una fianza vence en junio y la obligación sigue abierta hasta diciembre. ¿Qué pasa?', opts: ['Sigue protegiendo hasta diciembre', 'El riesgo queda sin cubrir desde su vencimiento', 'La obligación se extingue'], correct: 1, why: 'Sin renovación, el beneficiario pierde el respaldo mientras la obligación continúa.' },
    { q: '¿Qué conviene para no perder una fianza por descuido?', opts: ['Confiar en el banco', 'Un calendario de vencimientos con alertas y responsable', 'Renovarla solo si la entidad lo pide'], correct: 1, why: 'La gestión proactiva evita huecos de cobertura.' },
    { q: 'Al leer una guía con montos de fianzas, lo prudente es:', opts: ['Aplicarlos tal cual', 'Contrastarlos con el convenio-tipo y el reglamento vigente', 'Ignorar las garantías'], correct: 1, why: 'Muchas guías describen el régimen derogado; los montos se confirman en la norma vigente.' }
  ]
});
