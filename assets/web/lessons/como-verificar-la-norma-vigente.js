Lesson.start({
  id: 'como-verificar-la-norma-vigente', area: 'Marco normativo', areaIcon: '📜', icon: '🔎',
  title: 'Cómo verificar la norma vigente',
  subtitle: 'Cuatro pasos para no decidir con una norma derogada.',
  norma: 'Método de verificación en cuatro pasos; toda cita de esta app se acompaña de «verificar la norma vigente y el expediente técnico aprobado».',
  intro: '<p>El marco de OxI cambió de forma importante en menos de seis meses: la Ley 32460 (octubre de 2025) y el DS 038-2026-EF (marzo de 2026). Cuando una norma se mueve, la lección más útil no es memorizar un texto, sino aprender a <b>comprobar qué rige hoy</b>. Esta app cita las normas por su nombre y sin inventar artículos justamente por eso: el texto oficial es la única fuente que decide. Aquí tienes un método corto y repetible.</p>',
  sections: [
    { h: 'Paso 1: portal de normativa del MEF',
      html: '<p>Empieza por el portal oficial de normativa de Obras por Impuestos del MEF. Ahí se publican la Ley 29230, sus modificatorias, el reglamento y, cuando existe, el texto ordenado. Busca la norma por su nombre y anota número y fecha de publicación.</p><p>Objetivo: confirmar qué texto es el vigente y si hubo modificatorias posteriores al DS 038-2026-EF, dato que en esta app figura como NO CONFIRMADO.</p>' },
    { h: 'Paso 2: El Peruano',
      html: '<p>El diario oficial El Peruano publica las normas legales. Sirve para comprobar la <b>fecha exacta de publicación y de entrada en vigencia</b>, y para detectar normas nuevas que modifiquen o deroguen a otras. Compara siempre la fecha de la guía que estés leyendo con la de la última norma publicada.</p>' },
    { h: 'Paso 3: ProInversión',
      html: '<p>ProInversión publica guías, preguntas frecuentes, comunicados y cifras. Es muy útil para entender la práctica, pero es una fuente <b>operativa</b>, no la norma. Además, parte de ese material puede estar redactado para el régimen anterior. Regla: si es anterior a marzo de 2026, contrástalo con el DS 038-2026-EF antes de usarlo.</p>' },
    { h: 'Paso 4: asesor legal',
      html: '<p>Con la norma y la práctica identificadas, confirma con un asesor legal la aplicación a tu caso: qué modalidad, qué etapas, qué garantías, qué certificados. Esta app no reemplaza asesoría legal, tributaria ni técnica.</p><p>Para revisar riesgos contractuales, apóyate en Legal Obra PRO; para trámites de postulación, en Postula PRO.</p>' },
    { h: 'La coletilla fija y cómo usarla',
      html: '<table><tr><th>Paso</th><th>Fuente</th><th>Qué confirma</th></tr><tr><td>1</td><td>Portal MEF de normativa</td><td>Texto vigente y modificatorias</td></tr><tr><td>2</td><td>El Peruano</td><td>Fechas de publicación y vigencia</td></tr><tr><td>3</td><td>ProInversión</td><td>Práctica y guías, con fecha de corte</td></tr><tr><td>4</td><td>Asesor legal</td><td>Aplicación a tu caso</td></tr></table><p>La coletilla que acompaña toda cita de esta app es: <b>verificar la norma vigente y el expediente técnico aprobado</b>. La norma dice qué se puede hacer; el expediente técnico aprobado dice qué se hará en tu proyecto. Ejemplo ilustrativo: la Municipalidad Distrital de Villa Esperanza guarda, junto a cada decisión, la fecha en que verificó la norma.</p>' }
  ],
  keypoints: [
    'El marco de OxI cambió en 2025 y 2026: comprobar qué rige hoy es una tarea permanente.',
    'Método de cuatro pasos: portal MEF, El Peruano, ProInversión y asesor legal.',
    'ProInversión aporta práctica y guías; no sustituye al texto de la norma.',
    'Toda guía anterior a marzo de 2026 debe contrastarse con el DS 038-2026-EF.',
    'Coletilla fija: verificar la norma vigente y el expediente técnico aprobado.',
    'Registrar la fecha de verificación junto a cada decisión deja rastro y protege al equipo.'
  ],
  flashcards: [
    { q: '¿Cuáles son los cuatro pasos para verificar una norma?', a: 'Portal MEF de normativa, El Peruano, ProInversión y asesor legal.' },
    { q: '¿Para qué sirve El Peruano en la verificación?', a: 'Para confirmar fechas de publicación y vigencia y detectar normas nuevas.' },
    { q: '¿Qué tipo de fuente es ProInversión?', a: 'Operativa (guías, FAQ, cifras); no reemplaza el texto de la norma.' },
    { q: '¿Cuál es la coletilla fija de esta app?', a: 'Verificar la norma vigente y el expediente técnico aprobado.' },
    { q: '¿Cómo tratar una guía de 2023?', a: 'Como posible régimen derogado: contrastarla con el DS 038-2026-EF.' }
  ],
  quiz: [
    { q: '¿Qué fuente decide qué norma rige hoy?', opts: ['Una guía de un blog', 'El texto oficial de la norma en portal MEF y El Peruano', 'Un comentario de red social'], correct: 1, why: 'Solo el texto oficial define la norma vigente; lo demás es apoyo.' },
    { q: 'Encuentras una FAQ de ProInversión con fecha de 2024. ¿Qué haces?', opts: ['La aplicas tal cual', 'La contrastas con el DS 038-2026-EF', 'La descartas sin leerla'], correct: 1, why: 'Puede describir el régimen derogado, pero sigue siendo útil como pista de práctica.' },
    { q: 'La frase «expediente técnico aprobado» en la coletilla recuerda que:', opts: ['La norma decide el detalle de tu proyecto', 'El detalle del proyecto lo fija el expediente aprobado', 'No importa el expediente'], correct: 1, why: 'La norma marca el marco; el expediente aprobado concreta lo que se ejecuta.' },
    { q: '¿Cuál es el último paso del método?', opts: ['Confirmar con un asesor legal', 'Publicar la norma', 'Esperar un año'], correct: 0, why: 'El asesor legal confirma la aplicación a tu caso concreto.' }
  ]
});
