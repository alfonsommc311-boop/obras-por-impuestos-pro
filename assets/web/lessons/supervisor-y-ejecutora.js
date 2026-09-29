Lesson.start({
  id: 'supervisor-y-ejecutora', area: 'Actores y roles', areaIcon: '👥', icon: '👷',
  title: 'Supervisor y empresa ejecutora',
  subtitle: 'Quien construye no debe ser quien vigila su propio trabajo.',
  norma: 'Principio de independencia entre quien ejecuta y quien supervisa; requisitos, contratación y responsabilidades exactas: verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>En una intervención hay dos figuras que se confunden con facilidad: la <b>empresa ejecutora</b>, que construye, y el <b>supervisor</b>, que verifica que lo construido cumpla el expediente. Ambas existen en el esquema de OxI. Los requisitos, la forma de contratarlas y sus responsabilidades detalladas deben leerse en el reglamento y el convenio: aquí te damos el principio que sostiene todo, la <b>independencia</b>.</p>',
  sections: [
    { h: 'Por qué deben ser independientes',
      html: '<p>Si el que construye también controla su propia calidad, el control pierde sentido: nadie quiere reportar sus propios errores. La independencia protege a la entidad, que recibirá el activo, y al Estado, que compensa la inversión con impuestos.</p><ul><li>El ejecutor busca terminar y cobrar.</li><li>El supervisor busca que se cumpla el expediente, la calidad y los plazos.</li><li>La entidad recibe el resultado y responde ante la ciudadanía.</li></ul>' },
    { h: 'Tabla de responsabilidades',
      html: '<table><tr><th>Actor</th><th>Qué hace</th><th>Qué NO hace</th></tr><tr><td>Empresa ejecutora</td><td>Ejecuta según el expediente técnico aprobado; responde por calidad, plazos y seguridad de su trabajo</td><td>No se supervisa a sí misma ni cambia el expediente por su cuenta</td></tr><tr><td>Supervisor</td><td>Verifica avance, calidad y cumplimiento del expediente; informa a la entidad</td><td>No construye ni asume los riesgos constructivos del ejecutor</td></tr><tr><td>Entidad</td><td>Recibe, decide y firma; coordina con ambos</td><td>No debe delegar en el ejecutor la verificación de su propia obra</td></tr><tr><td>Empresa financista</td><td>Financia y recibe certificados</td><td>No sustituye al supervisor</td></tr></table><p>Los requisitos del supervisor, su forma de contratación y el detalle de responsabilidades: <b>verificar la norma vigente y el expediente técnico aprobado</b>.</p>' },
    { h: 'Cambios al expediente: no por cuenta propia',
      html: '<p>Si en obra aparecen imprevistos, la solución no es que el ejecutor decida solo ni que el supervisor lo apruebe informalmente. Los cambios, adicionales o deductivos siguen el procedimiento que la norma y el convenio establezcan, con sustento técnico documentado. Para el detalle, apóyate en la app Adicional y Deductivo.</p>' },
    { h: 'Buenas prácticas de coordinación',
      html: '<ol><li>Deja claro por escrito quién comunica qué a quién.</li><li>Usa un cuaderno o registro de obra al día, con anotaciones firmadas.</li><li>Programa reuniones periódicas con la UEI de la entidad.</li><li>Guarda las actas y las conformidades: servirán ante cualquier revisión posterior.</li></ol>' },
    { h: 'Ejemplo ilustrativo',
      html: '<p>En el puesto de salud de la Municipalidad Distrital de Villa Esperanza (ficticia), la empresa ejecutora avanza la losa y el supervisor detecta que el acero no corresponde a lo especificado. Lo anota, informa a la UEI y exige corregirlo antes de continuar. Si el mismo equipo hiciera ambas cosas, ese hallazgo probablemente no se reportaría.</p><p>Para la gestión de obra y liderazgo de equipos, revisa Gestión Pública PRO y Legal Obra PRO; esta lección no reemplaza asesoría técnica.</p>' }
  ],
  keypoints: [
    'La ejecutora construye; el supervisor verifica: son funciones distintas.',
    'La independencia protege a la entidad y al Estado.',
    'El ejecutor no debe supervisarse a sí mismo.',
    'Los cambios al expediente siguen el procedimiento de la norma y el convenio, con sustento.',
    'Los requisitos y responsabilidades exactas: verificar la norma vigente y el expediente técnico aprobado.',
    'Documenta todo: cuaderno de obra, actas y conformidades.'
  ],
  flashcards: [
    { q: '¿Qué hace la empresa ejecutora?', a: 'Ejecuta la intervención según el expediente técnico aprobado.' },
    { q: '¿Qué hace el supervisor?', a: 'Verifica avance, calidad y cumplimiento del expediente, e informa a la entidad.' },
    { q: '¿Por qué deben ser independientes?', a: 'Porque quien construye no puede controlar objetivamente su propio trabajo.' },
    { q: '¿Puede el ejecutor cambiar el expediente por su cuenta?', a: 'No; los cambios siguen el procedimiento de la norma y el convenio.' },
    { q: '¿Está confirmado el detalle de requisitos del supervisor?', a: 'No: verificar la norma vigente y el expediente técnico aprobado.' }
  ],
  quiz: [
    { q: 'En Villa Esperanza (ficticia), el supervisor detecta un material distinto al especificado. ¿Qué debe hacer?', opts: ['Callar para no retrasar', 'Anotarlo, informar a la entidad y exigir corrección', 'Cambiar el expediente él mismo'], correct: 1, why: 'Su función es verificar y reportar; no modificar el expediente por su cuenta.' },
    { q: '¿Por qué no deben ser la misma parte el ejecutor y el supervisor?', opts: ['Por costumbre', 'Porque se pierde independencia del control', 'Porque lo pide SUNAT'], correct: 1, why: 'La independencia es lo que da valor a la supervisión.' },
    { q: '¿Quién sigue siendo quien recibe y decide?', opts: ['La entidad', 'El ejecutor', 'El supervisor'], correct: 0, why: 'La entidad es la titular de la inversión.' },
    { q: 'Los requisitos exactos de contratación del supervisor:', opts: ['Están en esta lección como definitivos', 'Se verifican en la norma vigente y el expediente aprobado', 'No existen'], correct: 1, why: 'No están confirmados en nuestras fuentes.' }
  ]
});
