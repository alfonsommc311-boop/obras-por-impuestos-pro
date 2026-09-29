Lesson.start({
  id: 'cual-modalidad-conviene', area: 'Las dos modalidades', areaIcon: '🔀', icon: '🎯',
  title: 'Cuál modalidad conviene',
  subtitle: 'Un árbol de decisión con cuatro preguntas: capacidad, madurez, tamaño e interés del mercado.',
  norma: 'Elegir la modalidad según capacidad institucional, madurez del expediente, tamaño e interés del mercado (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>No hay una modalidad «mejor» en abstracto: hay la que <b>encaja con tu situación</b>. Elegir mal cuesta tiempo, dinero y credibilidad. Esta lección te da un árbol de decisión sencillo con cuatro preguntas. Sirve como guía de conversación para el alcalde, la gerencia y el equipo de proyectos, y para la empresa que evalúa por dónde entrar. No es una fórmula: el resultado siempre debe contrastarse con la norma vigente.</p>',
  sections: [
    { h: 'Las tres rutas que comparas',
      html: '<ul><li><b>Iniciativa de la entidad:</b> el proyecto sale de la cartera priorizada; la empresa participa en la selección.</li><li><b>Iniciativa privada cofinanciada (IPC):</b> la empresa propone y la entidad aporta recursos.</li><li><b>Iniciativa privada autofinanciada (IPA):</b> la empresa propone y financia sin aporte público.</li></ul><p>En las dos privadas, la propuesta debe coincidir con una prioridad de la autoridad. Etapas y plazos exactos: NO CONFIRMADOS bajo el DS 038-2026-EF.</p>' },
    { h: 'Pregunta 1: capacidad institucional',
      html: '<p>¿Tu entidad tiene equipo para conducir un proceso, sostener un expediente y supervisar? Si tiene una unidad formuladora, una oficina de proyectos y experiencia en contratar, la iniciativa de la entidad es natural. Si es pequeña y con poco personal, puede apoyarse en la asistencia técnica por encargo de ProInversión, o evaluar una propuesta privada.</p><p>Por qué: la iniciativa de la entidad exige que ella lleve el timón; una propuesta privada traslada parte del trabajo técnico, pero no la decisión.</p>' },
    { h: 'Preguntas 2, 3 y 4 en una tabla',
      html: '<table><tr><th>Pregunta</th><th>Si la respuesta es...</th><th>Tiende a convenir</th></tr><tr><td>Madurez del expediente</td><td>Proyecto viable, ya en cartera</td><td>Iniciativa de la entidad</td></tr><tr><td>Madurez del expediente</td><td>Solo idea o perfil, sin priorizar</td><td>Primero madurar; luego evaluar propuesta privada alineada</td></tr><tr><td>Tamaño</td><td>Intervención chica y estándar</td><td>Iniciativa de la entidad (más simple de repetir)</td></tr><tr><td>Tamaño</td><td>Intervención grande, con aporte público difícil</td><td>IPA, si el interés existe; o IPC si la entidad puede aportar</td></tr><tr><td>Interés del mercado</td><td>Empresas ya preguntan por el proyecto</td><td>Iniciativa de la entidad con proyecto listo, o propuesta privada</td></tr><tr><td>Interés del mercado</td><td>Nadie manifiesta interés</td><td>Revisar el proyecto antes de elegir modalidad</td></tr></table>' },
    { h: 'Cómo usar el árbol en orden',
      html: '<ol><li>¿El proyecto es viable y está en tu cartera? Si sí, empieza por la iniciativa de la entidad.</li><li>¿La entidad puede comprometer recursos? Si sí, la IPC es posible; si no, la IPA.</li><li>¿Coincide con una prioridad de la autoridad? Sin eso, ninguna propuesta privada avanza.</li><li>¿Hay interés real de empresas? Confírmalo antes de invertir tiempo.</li></ol><p>El árbol no reemplaza la revisión legal: verificar la norma vigente y el expediente técnico aprobado.</p>' },
    { h: 'Ejemplo ilustrativo y advertencias',
      html: '<p>La Municipalidad Distrital de Villa Esperanza (ficticia) tiene un proyecto de agua ya viable pero con poco presupuesto propio. La Empresa Andina S.A.A. (ficticia) muestra interés. Con el árbol: expediente maduro y en cartera apunta a la iniciativa de la entidad; si Andina prefiere proponer algo distinto, tendría que coincidir con una prioridad de la autoridad. Ejemplo ilustrativo: no anticipa ningún resultado.</p><ul><li>Ninguna modalidad garantiza financista ni recupero.</li><li>Las guías anteriores a marzo de 2026 describen un régimen derogado.</li></ul><p>Para el expediente, Expediente Experto; para la gestión de la cartera, Gestión Pública PRO.</p>' }
  ],
  keypoints: [
    'No hay una modalidad mejor en abstracto: se elige según la situación.',
    'Cuatro preguntas ordenan la decisión: capacidad institucional, madurez del expediente, tamaño e interés del mercado.',
    'Con expediente viable y en cartera, la iniciativa de la entidad suele ser el punto de partida natural.',
    'Si la entidad no puede aportar recursos, la IPC pierde sentido y se evalúa la IPA.',
    'Toda propuesta privada debe coincidir con una prioridad de la autoridad.',
    'El árbol orienta, no decide: verificar la norma vigente y el expediente técnico aprobado.'
  ],
  flashcards: [
    { q: '¿Cuáles son las cuatro preguntas del árbol?', a: 'Capacidad institucional, madurez del expediente, tamaño e interés del mercado.' },
    { q: 'Proyecto viable y en cartera: ¿por dónde empezar?', a: 'Por la iniciativa de la entidad.' },
    { q: '¿Cuándo tiene sentido la IPC?', a: 'Cuando la entidad puede aportar recursos públicos.' },
    { q: '¿Qué condición vale para toda propuesta privada?', a: 'Coincidir con una prioridad de la autoridad.' },
    { q: '¿Qué hacer si nadie muestra interés?', a: 'Revisar el proyecto antes de elegir modalidad.' }
  ],
  quiz: [
    { q: 'Tu proyecto solo es una idea sin priorizar. ¿Qué conviene primero?', opts: ['Madurar el proyecto y priorizarlo', 'Elegir IPA de inmediato', 'Esperar a que una empresa lo pida'], correct: 0, why: 'Sin madurez ni prioridad, ninguna modalidad avanza con solidez.' },
    { q: 'La entidad no puede aportar recursos y el mercado muestra interés. ¿Qué se evalúa?', opts: ['Iniciativa privada autofinanciada', 'Iniciativa privada cofinanciada', 'Ninguna, es imposible'], correct: 0, why: 'La IPC requiere aporte público; si no existe, la IPA es la opción a evaluar, verificando la norma.' },
    { q: '¿Qué hace el árbol de decisión?', opts: ['Sustituye la revisión legal', 'Orienta la conversación, sin sustituir la norma', 'Garantiza financista'], correct: 1, why: 'Es una guía; la decisión final se contrasta con la norma vigente y el expediente.' },
    { q: 'Una entidad pequeña, sin equipo, puede apoyarse en:', opts: ['La asistencia técnica por encargo de ProInversión', 'Saltarse el Informe Previo', 'Delegar la decisión a la empresa'], correct: 0, why: 'La entidad puede solicitar asistencia técnica por encargo; la decisión sigue siendo suya.' }
  ]
});
