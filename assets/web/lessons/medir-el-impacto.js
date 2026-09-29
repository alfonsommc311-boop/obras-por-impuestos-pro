Lesson.start({
  id: 'medir-el-impacto', area: 'Mantenimiento y sostenibilidad', areaIcon: '🌱', icon: '📉',
  title: 'Medir el impacto',
  subtitle: 'Una obra terminada no prueba nada: lo que prueba es que la brecha se cerró y la gente la usa.',
  norma: 'Medir la brecha cerrada y el uso real es la forma de rendir cuentas de una inversión (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Cuando se entrega una obra suele celebrarse el avance físico. Pero el objetivo de una inversión es <b>cerrar una brecha</b> de servicios: que más personas tengan agua, atención, educación o transitabilidad. Medir el impacto significa comprobar si eso pasó y si sigue pasando. Sin indicadores, ni la entidad ni el privado ni la ciudadanía saben si valió la pena, ni qué corregir.</p>',
  sections: [
    { h: 'Dos preguntas distintas',
      html: '<table><tr><th>Pregunta</th><th>Qué mide</th></tr><tr><td>¿Se cerró la brecha?</td><td>El cambio en la cobertura o calidad del servicio respecto de la situación inicial</td></tr><tr><td>¿Se usa realmente?</td><td>La utilización efectiva de la obra: usuarios atendidos, horas de servicio, continuidad</td></tr></table><p>Una obra puede existir y no cerrar la brecha (por ejemplo, un aula construida pero sin docentes). Ambas preguntas hacen falta.</p>' },
    { h: 'Indicadores útiles',
      html: '<p>Deben ser pocos, claros y medibles. Ejemplos según el sector:</p><ul><li><b>Agua y saneamiento</b>: hogares con servicio, horas de continuidad al día.</li><li><b>Salud</b>: atenciones realizadas, tiempo de espera.</li><li><b>Educación</b>: estudiantes matriculados que usan el local, condición de aulas.</li><li><b>Vías</b>: tiempo de viaje, transitabilidad durante el año.</li><li><b>Sostenibilidad</b>: mantenimientos programados frente a ejecutados.</li></ul><p>Ejemplo ilustrativo: en Villa Esperanza, una línea de base de 40 % de hogares con agua continua pasaría a una meta acordada en el expediente; los porcentajes reales dependen del proyecto.</p>' },
    { h: 'Línea de base, meta y seguimiento',
      html: '<ol><li><b>Línea de base</b>: medir cómo está el servicio antes de la obra.</li><li><b>Meta</b>: qué cambio se espera, según el expediente técnico aprobado.</li><li><b>Seguimiento</b>: medir con frecuencia definida, por ejemplo cada año.</li><li><b>Comparación</b>: contrastar el resultado con la línea de base y la meta.</li><li><b>Corrección</b>: decidir qué ajustar si no se logra.</li></ol><p>Sin línea de base solo se puede afirmar que algo se construyó, no que algo mejoró.</p>' },
    { h: 'Quién mide y cómo se comunica',
      html: '<p>Define de antemano <b>quién recoge el dato</b>, con qué fuente (registros del operador, encuestas, padrones) y <b>a quién se informa</b>. Los resultados deben compartirse con la entidad titular, el operador, la población y, si aplica, la empresa privada que participó. Transparentar los resultados, buenos o malos, genera confianza y permite mejorar. Para análisis de inversión pública consulta Invierte Experto y Gestión Pública PRO.</p><p>Las cifras de contexto nacionales (por ejemplo, adjudicaciones de un año) muestran volumen, no impacto: no sustituyen la medición de cada obra. Esta lección no reemplaza asesoría legal, tributaria ni técnica.</p>' }
  ],
  keypoints: [
    'El objetivo de una inversión es cerrar una brecha de servicios, no solo terminar la obra.',
    'Hay que medir dos cosas: brecha cerrada y uso real de la obra.',
    'Sin línea de base no se puede demostrar que el servicio mejoró.',
    'Los indicadores deben ser pocos, claros y medibles, según el sector.',
    'Se define de antemano quién mide, con qué fuente y a quién se informa.',
    'El volumen de proyectos adjudicados no equivale a impacto: cada obra se mide por sí misma.'
  ],
  flashcards: [
    { q: '¿Qué dos preguntas responde medir el impacto?', a: '¿Se cerró la brecha? y ¿se usa realmente la obra?' },
    { q: '¿Qué es la línea de base?', a: 'La medición del servicio antes de la obra, para poder comparar después.' },
    { q: 'Da un indicador de uso real en agua y saneamiento.', a: 'Hogares con servicio y horas de continuidad al día.' },
    { q: '¿Qué indicador mide la sostenibilidad?', a: 'Mantenimientos programados frente a ejecutados.' },
    { q: '¿Por qué un total de proyectos adjudicados no mide impacto?', a: 'Porque cuenta obras, no si cerraron la brecha ni si se usan.' }
  ],
  quiz: [
    { q: 'Se construyó un aula pero no hay docentes. ¿Qué ocurre?', opts: ['La brecha está cerrada', 'La obra existe pero no cierra la brecha ni tiene uso real', 'El impacto es el máximo'], correct: 1, why: 'Sin uso efectivo del servicio, la obra no cambia la situación de las personas.' },
    { q: '¿Para qué sirve la línea de base?', opts: ['Para decorar el informe', 'Para comparar el servicio antes y después', 'Para reemplazar el expediente técnico'], correct: 1, why: 'Sin punto de partida no se demuestra mejora.' },
    { q: '¿Cuál es un buen indicador de uso real de una posta?', opts: ['Número de fotos de la inauguración', 'Atenciones realizadas y tiempo de espera', 'Cantidad de discursos'], correct: 1, why: 'Refleja si el servicio se presta y a cuántas personas llega.' },
    { q: '¿Qué debe definirse antes de medir?', opts: ['Quién mide, con qué fuente y a quién se informa', 'Solo el color del informe', 'Nada; se decide al final'], correct: 0, why: 'Sin responsables ni fuentes, la medición no se sostiene en el tiempo.' }
  ]
});
