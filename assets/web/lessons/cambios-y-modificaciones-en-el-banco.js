Lesson.start({
  id: 'cambios-y-modificaciones-en-el-banco', area: 'Invierte.pe aplicado a OxI', areaIcon: '🧬', icon: '🔧',
  title: 'Cambios y modificaciones en el Banco',
  subtitle: 'Modificar en obra sin registrar es acumular un problema que aparecerá en el peor momento.',
  norma: 'Todo cambio relevante durante la ejecución debe registrarse o sustentarse conforme a la normativa de Invierte.pe; verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Ningún proyecto de infraestructura llega intacto al final. Aparecen suelos distintos, interferencias, ajustes de diseño. El problema no es que haya cambios: es que <b>los cambios no queden registrados ni sustentados</b>. En el sistema Invierte.pe, las modificaciones durante la ejecución tienen su propio tratamiento, y en Obras por Impuestos importan doblemente, porque el financista, la entidad y el control ven el mismo proyecto y necesitan que coincidan.</p>',
  sections: [
    { h: 'Por qué los cambios deben quedar en el Banco',
      html: '<p>El Banco de Inversiones es la fuente que refleja lo que la inversión realmente es. Si el alcance real se aleja del registrado, aparecen tres riesgos:</p><ul><li><b>Incoherencia</b>: el proyecto ejecutado no es el proyecto viable.</li><li><b>Observaciones</b> de control por diferencias entre lo registrado y lo construido.</li><li><b>Fricción con el financista</b>, que descubre tarde que lo ofrecido no es lo que se hace.</li></ul>' },
    { h: 'Qué tipo de cambios exigen atención',
      html: '<table><tr><th>Tipo de cambio</th><th>Señal de alerta</th></tr><tr><td>Alcance o metas físicas</td><td>Se construye más, menos o distinto de lo viable</td></tr><tr><td>Localización o terreno</td><td>Se desplaza el área de intervención</td></tr><tr><td>Costo</td><td>El presupuesto se aleja de lo registrado</td></tr><tr><td>Plazo</td><td>Se extiende el cronograma de ejecución</td></tr><tr><td>Modalidad</td><td>Cambia la forma de ejecución</td></tr></table><p>Cuál de ellos obliga a registrar un formato, a sustentar ante el órgano competente o a reevaluar el proyecto <b>depende de la norma vigente</b>: no asumas una regla por analogía. Verifica la norma y el expediente técnico aprobado.</p>' },
    { h: 'Registrar, sustentar o reevaluar',
      html: '<p>En términos generales, ante un cambio conviene preguntarse en orden:</p><ol><li>¿Altera el alcance o la finalidad del proyecto? Si sí, probablemente exige reevaluar.</li><li>¿Es un ajuste menor dentro de lo viable? Puede bastar registrarlo y documentarlo.</li><li>¿Cambia el costo o el plazo? Debe sustentarse técnicamente.</li></ol><p>La clasificación final la determina la normativa aplicable y quien tiene la competencia. Si dudas, consulta antes de ejecutar el cambio, no después.</p>' },
    { h: 'La disciplina que evita problemas',
      html: '<ul><li>Documenta cada decisión de campo: cuaderno de obra, informe técnico, fotos.</li><li>Sustenta con estudios: un cambio por suelos se apoya en un estudio, no en una opinión.</li><li>Comunica pronto a la empresa y a la supervisión: los cambios inesperados generan desconfianza.</li><li>Mantén el Banco alineado con el expediente vigente.</li></ul><p>Ejemplo ilustrativo: en la obra de la Municipalidad Distrital de Villa Esperanza, el estudio de suelos complementario obliga a reforzar una cimentación. El equipo registra el cambio, lo sustenta con el informe y avisa a la empresa antes de ejecutar. Caso ficticio.</p>' },
    { h: 'Adicionales, deductivos y otras apps',
      html: '<p>Los cambios de costo por adicionales o deductivos tienen su propio tratamiento contractual; la app hermana <b>Adicional y Deductivo</b> los desarrolla. Aquí solo interesa el lado del sistema de inversión: que el proyecto registrado siga siendo el proyecto real. Esta lección no reemplaza asesoría legal, tributaria ni técnica.</p>' }
  ],
  keypoints: [
    'Los cambios no son el problema: lo son los cambios no registrados ni sustentados.',
    'El Banco debe reflejar el alcance real del proyecto.',
    'Alcance, localización, costo, plazo y modalidad son las señales de alerta.',
    'Si el cambio altera la finalidad del proyecto, puede exigir reevaluar.',
    'La regla exacta para registrar, sustentar o reevaluar se verifica en la norma vigente.',
    'Se consulta antes de ejecutar el cambio, no después.'
  ],
  flashcards: [
    { q: '¿Por qué registrar un cambio en el Banco?', a: 'Para que lo registrado coincida con lo ejecutado y evitar observaciones y desconfianza.' },
    { q: '¿Qué tipos de cambio suelen exigir atención?', a: 'Alcance, localización, costo, plazo y modalidad.' },
    { q: '¿Cuándo consultar sobre un cambio?', a: 'Antes de ejecutarlo.' },
    { q: '¿Qué respalda un cambio de cimentación por suelos?', a: 'Un estudio técnico, no una opinión.' },
    { q: '¿Dónde se ve el tratamiento contractual de adicionales y deductivos?', a: 'En la app hermana Adicional y Deductivo.' }
  ],
  quiz: [
    { q: 'En campo aparece un suelo distinto al del estudio. ¿Qué haces primero?', opts: ['Cambiar el diseño y avisar al terminar', 'Documentar con un estudio y consultar el tratamiento antes de ejecutar', 'Ignorarlo para no retrasar'], correct: 1, why: 'Sustentar y consultar antes evita observaciones y conflictos posteriores.' },
    { q: 'Si un cambio altera la finalidad del proyecto viable, lo más probable es que:', opts: ['Solo requiera una nota interna', 'Exija reevaluar según la norma', 'No afecte al Banco'], correct: 1, why: 'Un cambio sustancial puede hacer que lo viable ya no sea lo que se ejecuta.' },
    { q: '¿Quién define finalmente si un cambio se registra, se sustenta o se reevalúa?', opts: ['La empresa, por costumbre', 'La normativa aplicable y el órgano competente', 'El proveedor de materiales'], correct: 1, why: 'La clasificación depende de la norma vigente y de la competencia del órgano.' }
  ]
});
