Lesson.start({
  id: 'adicionales-y-deductivos', area: 'Ejecución de obra', areaIcon: '🏗️', icon: '➕',
  title: 'Adicionales y deductivos',
  subtitle: 'Cambiar una obra en marcha es normal; hacerlo sin aprobación es lo que pone en riesgo el monto reconocido.',
  norma: 'Principio: ningún cambio se ejecuta sin aprobación previa y sustento; competencia, trámite y límites según el reglamento (DS 038-2026-EF) y el convenio: verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Un <b>adicional</b> incorpora trabajos no previstos en el expediente técnico y necesarios para cumplir la finalidad de la obra; un <b>deductivo</b> retira o reduce trabajos que ya no se necesitan o se reemplazan. Son herramientas legítimas cuando el terreno, el diseño o las condiciones cambian. Lo delicado es el <b>orden</b>: primero sustento y aprobación, después ejecución. En Obras por Impuestos hay un riesgo adicional, porque lo que no se apruebe o no se sustente puede quedar fuera del monto reconocido y, con ello, fuera de los certificados.</p>',
  sections: [
    { h: 'Por qué aparecen',
      html: '<ul><li>Errores u omisiones del expediente técnico frente al terreno real.</li><li>Hallazgos no previsibles (suelos, redes, restos arqueológicos).</li><li>Cambios de necesidad de la Entidad o de normativa técnica.</li><li>Partidas que se reemplazan por otras más convenientes.</li></ul><p>La causa importa: determina quién debe asumir el efecto y cómo se sustenta.</p>' },
    { h: 'Qué debe contener un sustento sólido',
      html: '<ol><li><b>Causa:</b> qué cambió o qué faltaba, con evidencia de campo.</li><li><b>Necesidad:</b> por qué es indispensable para la finalidad de la obra.</li><li><b>Alcance técnico:</b> planos, especificaciones y metrados del cambio.</li><li><b>Costo:</b> presupuesto con análisis de precios coherentes con el expediente.</li><li><b>Efecto en plazo:</b> si impacta la ruta crítica.</li><li><b>Trazabilidad:</b> anotaciones en el cuaderno de obra, informes y comunicaciones.</li></ol><p>Quién aprueba, con qué informes previos y con qué límites de monto o porcentaje: verificar la norma vigente y el convenio. Esta lección no fija cifras.</p>' },
    { h: 'El orden correcto',
      html: '<table><tr><th>Paso</th><th>Qué ocurre</th></tr><tr><td>1</td><td>Se detecta la necesidad y se deja constancia en el cuaderno</td></tr><tr><td>2</td><td>Se prepara el sustento técnico y económico</td></tr><tr><td>3</td><td>La supervisión evalúa y emite su opinión</td></tr><tr><td>4</td><td>La instancia competente aprueba (o no)</td></tr><tr><td>5</td><td>Solo entonces se ejecuta y se valoriza</td></tr></table><p>Ejecutar antes de aprobar es el camino más rápido a que el gasto no se reconozca.</p>' },
    { h: 'Riesgo para el monto reconocido',
      html: '<p>En OxI el monto que respalda los certificados sale de lo invertido y reconocido conforme al marco aplicable. Por eso:</p><ul><li>Un adicional <b>no aprobado</b> puede quedar fuera de ese monto.</li><li>Un adicional <b>mal sustentado</b> puede ser observado, demorado o reducido.</li><li>Un deductivo mal calculado puede generar diferencias en la liquidación.</li><li>Los cambios acumulados sin control pueden desbordar lo previsto en el convenio.</li></ul><p>Si el cambio es grande o cambia la finalidad de la obra, consulta la norma vigente antes de proceder.</p>' },
    { h: 'Caso ficticio y apps hermanas',
      html: '<p>En Villa Esperanza aparece una tubería no inventariada en el trazado. La Empresa Andina S.A.A. anota el hallazgo, la supervisión lo constata, se prepara el sustento con planos y costos y solo tras la aprobación se ejecuta el desvío (ejemplo ilustrativo). Para armar y calcular el expediente del adicional o del deductivo, usa la app hermana Adicional y Deductivo; para revisar redacción y efectos jurídicos, Legal Obra PRO. Aquí solo se da el criterio.</p>' }
  ],
  keypoints: [
    'Adicional agrega trabajos no previstos; deductivo retira o reduce trabajos.',
    'Primero sustento y aprobación, después ejecución y valorización.',
    'Un buen sustento incluye causa, necesidad, alcance técnico, costo, efecto en plazo y trazabilidad.',
    'Quién aprueba y con qué límites se verifica en la norma vigente y el convenio.',
    'Lo no aprobado o mal sustentado pone en riesgo el monto reconocido y, con ello, los certificados.',
    'El cuaderno de obra es la columna del sustento.'
  ],
  flashcards: [
    { q: '¿Qué es un adicional?', a: 'Trabajos no previstos en el expediente técnico y necesarios para cumplir la finalidad de la obra.' },
    { q: '¿Qué es un deductivo?', a: 'La reducción o retiro de trabajos previstos que ya no se necesitan o se reemplazan.' },
    { q: '¿Cuál es el orden seguro?', a: 'Sustento, opinión de supervisión, aprobación competente y recién ejecución.' },
    { q: '¿Cuál es el riesgo principal en OxI?', a: 'Que lo no aprobado o mal sustentado quede fuera del monto reconocido para los certificados.' },
    { q: '¿Dónde se ven los límites de aprobación?', a: 'En la norma vigente (DS 038-2026-EF) y el convenio; no se asumen.' }
  ],
  quiz: [
    { q: 'Se encuentra una tubería no prevista. ¿Qué haces primero?', opts: ['Ejecutar el desvío y regularizar después', 'Anotar en el cuaderno, sustentar y esperar la aprobación antes de ejecutar', 'Ocultarla para no retrasar'], correct: 1, why: 'El orden es constancia, sustento, aprobación y luego ejecución.' },
    { q: 'Un adicional ejecutado sin aprobación puede:', opts: ['Reconocerse siempre', 'Quedar fuera del monto reconocido', 'Sustituir al expediente técnico'], correct: 1, why: 'Sin aprobación previa el reconocimiento está en riesgo.' },
    { q: 'Un sustento sólido incluye:', opts: ['Solo el costo', 'Solo la firma del residente', 'Causa, necesidad, alcance, costo, efecto en plazo y trazabilidad'], correct: 2, why: 'Cada elemento responde a una pregunta que la revisión hará.' },
    { q: 'Los porcentajes máximos de adicionales se conocen:', opts: ['Por memoria de otras obras', 'Verificando la norma vigente y el convenio', 'Están fijos en esta lección'], correct: 1, why: 'Esta lección no fija cifras; el marco cambió en 2026.' }
  ]
});
