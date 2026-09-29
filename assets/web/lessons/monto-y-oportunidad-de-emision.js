Lesson.start({
  id: 'monto-y-oportunidad-de-emision', area: 'Recepción, liquidación y certificados', areaIcon: '🧾', icon: '📆',
  title: 'Monto y oportunidad de emisión', subtitle: 'Cuánto se reconoce, cuándo se pide y qué puede demorarlo',
  norma: 'El MEF emite el certificado por el monto invertido; reportes indican que el reglamento vigente flexibiliza la emisión conforme al avance de obra. Reglas exactas: verificar la norma vigente (DS 038-2026-EF) y el expediente técnico aprobado.',
  intro: '<p>Dos preguntas definen el flujo de caja de la empresa: <b>¿cuánto</b> me van a reconocer en certificados? y <b>¿cuándo</b> podré tenerlos? La respuesta general es que el MEF emite el certificado por el monto invertido y sustentado. Pero el detalle (hitos, porcentajes, qué gastos entran) depende del reglamento vigente y del convenio.</p><p>Esta lección da el marco y una lista de verificación. No promete plazos ni montos.</p>',
  sections: [
    { h: 'El monto: la regla general', html: '<p>El certificado se emite por el <b>monto que invierte la empresa</b>, tal como queda reconocido y sustentado. Esto significa que el punto de partida es el costo de la intervención aprobado en los documentos del proceso, ajustado por lo efectivamente ejecutado y acreditado.</p><p>Qué conceptos se reconocen además del costo directo (por ejemplo costo financiero o gastos de supervisión) y con qué límites: <b>NO está confirmado en esta lección</b>; verificar el reglamento vigente y el convenio.</p>' },
    { h: 'La oportunidad: ¿cuándo se emite?', html: '<p>Según reportes sobre el DS 038-2026-EF, el nuevo reglamento «flexibiliza» la emisión de CIPRL y CIPGN, con emisión conforme al <b>avance de obra</b>. Antes, la lógica se asociaba más al cierre. Lo importante para el usuario:</p><ul><li>No asumas que hay un solo momento de emisión.</li><li>Confirma en el reglamento y el convenio si hay emisiones parciales, sus hitos y sus requisitos.</li><li>Cada emisión requiere sustento: valorizaciones, conformidades y, si corresponde, actas.</li></ul>' },
    { h: 'El trámite en términos generales', html: '<ol><li>La empresa reúne el sustento (valorizaciones, comprobantes, conformidad del supervisor).</li><li>La entidad da su conformidad y remite la solicitud, según el procedimiento vigente.</li><li>El MEF revisa y, si procede, emite el certificado.</li></ol><p>Cada paso tiene un dueño. Si un paso se atasca, el certificado no sale. Por eso conviene identificar responsables y fechas objetivo, sin darlas por garantizadas.</p>' },
    { h: 'Qué puede retrasar la emisión', html: '<table><tr><th>Causa</th><th>Cómo prevenirla</th></tr><tr><td>Sustento incompleto o inconsistente</td><td>Conciliar valorizaciones, pagos y comprobantes cada mes</td></tr><tr><td>Observaciones de la entidad o del supervisor</td><td>Subsanar rápido y por escrito</td></tr><tr><td>Diferencias con el monto aprobado</td><td>Documentar adicionales y deductivos aprobados</td></tr><tr><td>Trámites internos sin responsable</td><td>Designar un coordinador en cada parte</td></tr></table>' },
    { h: 'Lista de verificación', html: '<ul><li>¿Qué hito o evento habilita cada emisión según el convenio?</li><li>¿Qué documentos exige la solicitud?</li><li>¿Qué conceptos integran el monto reconocido?</li><li>¿Hay topes o límites aplicables a la empresa o a la entidad?</li></ul><p><b>Verificar la norma vigente y el expediente técnico aprobado.</b> Para temas de presupuesto y control, las apps hermanas <b>Gestión Pública PRO</b> y <b>Valoriza</b> pueden complementar. Esta lección no sustituye asesoría legal ni tributaria.</p>' }
  ],
  keypoints: [
    'El certificado se emite por el monto invertido, sustentado y reconocido.',
    'Reportes indican que el reglamento vigente flexibiliza la emisión conforme al avance de obra.',
    'Los hitos, porcentajes y conceptos reconocidos exactos se verifican en el reglamento y el convenio.',
    'Cada emisión exige sustento completo y coherente con lo aprobado.',
    'Los retrasos suelen venir de sustento incompleto, observaciones o falta de responsables.',
    'Ni el monto ni la fecha de emisión deben tratarse como garantizados.'
  ],
  flashcards: [
    { q: '¿Por qué monto se emite el certificado?', a: 'Por el monto invertido, sustentado y reconocido.' },
    { q: '¿Qué reportan sobre la oportunidad de emisión en el reglamento vigente?', a: 'Que se flexibiliza, con emisión conforme al avance de obra; confirmar hitos en el texto.' },
    { q: '¿Quién emite el certificado?', a: 'El MEF, tras revisar el sustento y la conformidad de la entidad.' },
    { q: '¿Causa frecuente de retraso?', a: 'Sustento incompleto o inconsistente con lo aprobado.' },
    { q: '¿Se garantiza una fecha de emisión?', a: 'No. Depende del cumplimiento de requisitos y trámites.' }
  ],
  quiz: [
    { q: '¿Qué determina, en general, el monto del certificado?', opts: ['La voluntad del ejecutor', 'El monto invertido sustentado y reconocido', 'El impuesto a la renta del año anterior'], correct: 1, why: 'El certificado se emite por lo invertido y sustentado; el uso contra impuestos es otra etapa.' },
    { q: 'Sobre la oportunidad de emisión, lo prudente es...', opts: ['Asumir una sola emisión al final', 'Prometer una fecha al alcalde', 'Confirmar hitos y requisitos en el reglamento y el convenio'], correct: 2, why: 'Los reportes hablan de flexibilización por avance, pero las reglas exactas se verifican.' },
    { q: '¿Qué reduce el riesgo de retraso?', opts: ['Conciliar y documentar mes a mes', 'Presentar el expediente al final', 'Evitar al supervisor'], correct: 0, why: 'Un sustento ordenado acelera la revisión.' },
    { q: 'El costo financiero y los gastos de supervisión reconocidos...', opts: ['Están confirmados con un porcentaje fijo', 'Deben verificarse en el reglamento vigente y el convenio', 'Nunca se reconocen'], correct: 1, why: 'No hay confirmación general; depende del texto vigente.' }
  ]
});
