Lesson.start({
  id: 'la-empresa-privada', area: 'Actores y roles', areaIcon: '👥', icon: '🏢',
  title: 'La empresa privada',
  subtitle: 'Una pone el dinero, otra puede construir: no siempre son la misma.',
  norma: 'La empresa financia y ejecuta (directamente o vía empresa ejecutora) y recibe certificados; verificar la norma vigente y el expediente técnico aprobado para requisitos y límites.',
  intro: '<p>La palabra «empresa» engaña: en OxI puede haber una <b>empresa financista</b> (la que adelanta el dinero y luego recibe certificados) y una <b>empresa ejecutora</b> (la que construye). A veces son la misma; a veces no. Entender la diferencia evita errores al leer un convenio y ayuda a la entidad a saber con quién habla. También conviene tener claro que <b>ninguna entidad puede asegurar que una empresa vaya a financiar</b>: es una decisión libre, basada en su propia capacidad y estrategia.</p>',
  sections: [
    { h: 'Financista y ejecutora',
      html: '<table><tr><th>Figura</th><th>Qué hace</th></tr><tr><td>Empresa financista</td><td>Financia la inversión y recibe los certificados (CIPRL o CIPGN), que puede usar contra su deuda tributaria o negociar, según la norma vigente.</td></tr><tr><td>Empresa ejecutora</td><td>Construye o ejecuta la intervención, sea la misma financista o una contratada por ella.</td></tr></table><p>Según SUNAT y MEF, la empresa privada financia y ejecuta (directamente o vía empresa ejecutora) y recibe los certificados. La entidad debe saber, en el convenio, quién asume cada rol.</p>' },
    { h: 'Qué necesita una empresa para participar',
      html: '<p>Sin fijar límites numéricos (que dependen del reglamento y del proceso; <b>verificar la norma vigente y el expediente técnico aprobado</b>), lo que suele pesar es:</p><ul><li><b>Capacidad tributaria</b>: los certificados se aplican contra deuda tributaria. Si la empresa paga poco impuesto, el certificado tarda más en usarse o pierde atractivo. Según reportes del reglamento vigente, el uso alcanza hasta el 80 % de la deuda tributaria aplicable; verificar en el texto.</li><li><b>Solvencia financiera</b>: debe poner el dinero por adelantado. Puede ser propio o de financiamiento, y el proceso puede pedir garantías cuyo monto y forma deben verificarse.</li><li><b>Capacidad técnica</b>: si ejecuta, necesita experiencia, o un socio que la tenga.</li><li><b>Cumplimiento formal</b>: estar al día con sus declaraciones. SUNAT menciona, por ejemplo, haber presentado la declaración anual del impuesto a la renta de tercera categoría del ejercicio anterior con anticipación.</li></ul>' },
    { h: 'El porqué del esquema',
      html: '<p>El certificado no es dinero: es un <b>documento valorado</b> aplicable contra deuda tributaria. La empresa adelanta recursos hoy y los recupera vía impuestos después, sin garantía de plazos ni montos fuera de lo que diga la norma y el convenio. Por eso una empresa seria calcula antes su carga tributaria, su flujo de caja y su riesgo.</p><p>Una entidad que entiende esa lógica prepara mejor su expediente: un proyecto bien formulado reduce el riesgo que la empresa tendría que asumir.</p>' },
    { h: 'Tabla de rol: qué hace y qué NO hace',
      html: '<table><tr><th>La empresa SÍ</th><th>La empresa NO</th></tr><tr><td>Financia y, según el caso, ejecuta la intervención</td><td>No define qué proyecto se prioriza: eso lo hace la entidad</td></tr><tr><td>Recibe certificados por lo invertido</td><td>No los emite: los emite el MEF</td></tr><tr><td>Aplica los certificados ante SUNAT o los negocia, según la norma</td><td>No convierte el certificado en efectivo por sí sola</td></tr><tr><td>Responde por lo que ejecuta ante la entidad</td><td>No se supervisa a sí misma cuando ejecuta: la supervisión es otra figura</td></tr></table>' },
    { h: 'Ejemplo ilustrativo',
      html: '<p>La Empresa Andina S.A.A. (ficticia) evalúa financiar el puesto de salud de la Municipalidad Distrital de Villa Esperanza. Su equipo tributario revisa cuánto impuesto proyecta pagar, su tesorería confirma que puede adelantar el dinero y su área técnica decide si ejecuta ella misma o contrata a una ejecutora. Si el cálculo no le cierra, no participa. Esto es un ejemplo ilustrativo, sin cifras reales.</p><p>Para preparar la propuesta puedes apoyarte en Postula PRO; para el análisis de costos, en Valoriza.</p>' }
  ],
  keypoints: [
    'Financista y ejecutora pueden ser la misma empresa o dos distintas.',
    'La empresa adelanta el dinero y recibe certificados, que no son efectivo.',
    'Necesita capacidad tributaria, solvencia, capacidad técnica y cumplimiento formal.',
    'Según reportes, el uso de certificados alcanza hasta el 80 % de la deuda tributaria aplicable; verificar en el texto.',
    'Nadie puede prometer que una empresa financiará: es una decisión libre.',
    'Garantías, límites y plazos: verificar la norma vigente y el expediente técnico aprobado.'
  ],
  flashcards: [
    { q: '¿Quién es la empresa financista?', a: 'La que adelanta el dinero de la inversión y recibe los certificados.' },
    { q: '¿Quién es la empresa ejecutora?', a: 'La que construye o ejecuta la intervención; puede ser la misma financista o una contratada.' },
    { q: '¿Por qué importa la capacidad tributaria?', a: 'Porque los certificados se aplican contra deuda tributaria.' },
    { q: '¿Quién emite los certificados?', a: 'El MEF, no la empresa ni la entidad.' },
    { q: '¿Se puede asegurar que una empresa financiará un proyecto?', a: 'No: depende de su propia evaluación y decisión.' }
  ],
  quiz: [
    { q: '¿Qué caracteriza a la empresa financista?', opts: ['Construye siempre la obra', 'Adelanta el dinero y recibe certificados', 'Emite el certificado'], correct: 1, why: 'La financista pone los recursos y recibe certificados; la construcción puede estar a cargo de una ejecutora.' },
    { q: 'La Empresa Andina S.A.A. (ficticia) paga muy poco impuesto. ¿Qué riesgo tiene?', opts: ['Que el certificado tarde en usarse o resulte poco atractivo', 'Que la entidad no firme el convenio', 'Que la Contraloría lo prohíba'], correct: 0, why: 'El certificado se aplica contra deuda tributaria; sin deuda suficiente, el uso se demora.' },
    { q: 'Un certificado CIPRL es:', opts: ['Dinero en efectivo', 'Un documento valorado aplicable contra deuda tributaria', 'Una carta fianza'], correct: 1, why: 'No es efectivo: es un documento valorado con reglas de uso.' },
    { q: '¿Quién decide qué proyecto se prioriza?', opts: ['La empresa', 'La entidad', 'SUNAT'], correct: 1, why: 'La priorización es una función de la entidad.' }
  ]
});
