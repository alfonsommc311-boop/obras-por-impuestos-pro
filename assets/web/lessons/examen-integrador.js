Lesson.start({
  id: 'examen-integrador', area: 'El alcalde impulsor', areaIcon: '🌟', icon: '🎓',
  title: 'Examen integrador',
  subtitle: 'Autoevaluación final con todo el recorrido.',
  norma: 'Marco vigente: Ley 29230, DL 1534, Ley 32460 y DS 038-2026-EF (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Llegaste al final. Este examen recorre el curso completo: el <b>mecanismo</b>, la <b>normativa vigente</b>, los <b>certificados</b> y la <b>sostenibilidad</b>. No es para aprobar o reprobar, sino para detectar qué repasar. Antes de responder, revisa el repaso; después, contesta las cuatro preguntas del cuestionario y usa las tarjetas para reforzar. Esta autoevaluación no reemplaza asesoría legal, tributaria ni técnica.</p>',
  sections: [
    { h: 'Repaso 1: el mecanismo',
      html: '<p>Una empresa privada financia y ejecuta una intervención de la entidad pública y recibe un certificado que puede aplicar contra su deuda tributaria. Participan la entidad, la empresa, ProInversión (asistencia técnica), el MEF (emisión de certificados), la SUNAT (aplicación) y la Contraloría (Informe Previo, acotado a la capacidad financiera del Estado). Las lecciones «El mecanismo en diez pasos» y «Quién gana qué» lo desarrollan.</p>' },
    { h: 'Repaso 2: normativa vigente',
      html: '<ul><li>Base: Ley 29230, modificada por el DL 1534 y la Ley 32460.</li><li>Reglamento vigente: <b>DS 038-2026-EF</b>, desde el 14/03/2026, que derogó al DS 210-2022-EF y al DS 011-2024-EF.</li><li>La categoría «intervenciones» amplía la idea de obra: incluye operación, mantenimiento y servicios.</li><li>Las guías anteriores a marzo de 2026 describen el régimen derogado.</li></ul>' },
    { h: 'Repaso 3: certificados',
      html: '<p>El CIPRL (regional y local) y el CIPGN (Gobierno Nacional) son documentos valorados emitidos por el MEF, no dinero en efectivo. Según reportes del reglamento vigente, pueden aplicarse hasta el 80 % de la deuda tributaria aplicable; verificar en el texto. Las reglas exactas de emisión, vigencia, cesión y negociación también deben verificarse en el texto vigente. Ninguna entidad puede prometer el recupero de una empresa.</p>' },
    { h: 'Repaso 4: sostenibilidad',
      html: '<p>Una obra sin operación ni mantenimiento se convierte en un problema. La Ley 32460 amplía la operación y el mantenimiento financiables. Antes de salir a buscar financista debes tener: operador definido, presupuesto de mantenimiento, plan de transferencia y respaldo de la comunidad. Revisa «Transferencia al operador» y «Obras abandonadas y lecciones».</p>' },
    { h: 'Autoevaluación de actitud',
      html: '<table><tr><th>Pregunta</th><th>Si la respuesta es sí</th></tr><tr><td>¿Puedo explicar el mecanismo a un vecino en dos minutos?</td><td>Estás listo para conducir la conversación.</td></tr><tr><td>¿Sé qué reglamento rige y cómo verificarlo?</td><td>Evitarás el uso de normas derogadas.</td></tr><tr><td>¿Tengo operador y mantenimiento definidos?</td><td>Tu proyecto es creíble.</td></tr><tr><td>¿Evito prometer financiamiento?</td><td>Cuidas la confianza.</td></tr></table>' }
  ],
  keypoints: [
    'OxI: una empresa financia y ejecuta y recibe un certificado que aplica contra su deuda tributaria.',
    'El marco vigente es la Ley 29230 con sus modificatorias y el DS 038-2026-EF, desde el 14/03/2026.',
    'Los certificados no son dinero: son documentos valorados; el tope y las reglas se verifican en el texto vigente.',
    'La Contraloría emite el Informe Previo acotado a la capacidad financiera del Estado.',
    'Sin operación ni mantenimiento, la obra pierde sentido.',
    'Nadie puede prometer financista, plazos ni montos de recupero.'
  ],
  flashcards: [
    { q: '¿Qué reglamento rige desde el 14/03/2026?', a: 'El DS 038-2026-EF, que derogó al DS 210-2022-EF y al DS 011-2024-EF.' },
    { q: '¿Qué emite el MEF en el mecanismo?', a: 'Los certificados CIPRL y CIPGN.' },
    { q: '¿Qué tope reportan las fuentes para el uso de certificados?', a: 'Hasta el 80 % de la deuda tributaria aplicable, a verificar en el texto vigente.' },
    { q: '¿Qué debe existir antes de buscar financista?', a: 'Operador, presupuesto de mantenimiento, plan de transferencia y respaldo comunal.' },
    { q: '¿Qué mira el Informe Previo de la Contraloría?', a: 'Aspectos que comprometan la capacidad financiera del Estado.' }
  ],
  quiz: [
    { q: 'Una empresa quiere saber qué reglamento rige. ¿Cuál es la respuesta correcta hoy?', opts: ['DS 210-2022-EF', 'DS 038-2026-EF', 'DS 011-2024-EF'], correct: 1, why: 'El DS 038-2026-EF rige desde el 14/03/2026 y derogó a los anteriores.' },
    { q: '¿Cómo describe el curso a los certificados CIPRL y CIPGN?', opts: ['Dinero en efectivo', 'Documentos valorados emitidos por el MEF, aplicables contra deuda tributaria', 'Bonos negociables sin límite alguno'], correct: 1, why: 'No son efectivo; su uso y tope se verifican en el texto vigente.' },
    { q: 'Sobre el mecanismo, ¿qué afirmación es correcta?', opts: ['Todo proyecto garantiza financista si tiene CUI', 'Una empresa financia y ejecuta y recibe un certificado, sin garantía previa de participación', 'La Contraloría aprueba todo el proyecto'], correct: 1, why: 'La participación depende de la decisión de cada empresa y del proceso; el Informe Previo es acotado.' },
    { q: '¿Qué asegura la sostenibilidad de una obra terminada?', opts: ['Solo la inauguración', 'Operador, presupuesto de mantenimiento y plan de transferencia definidos', 'Un nuevo proyecto'], correct: 1, why: 'Sin operación ni mantenimiento la obra se deteriora y pierde su fin.' }
  ]
});
