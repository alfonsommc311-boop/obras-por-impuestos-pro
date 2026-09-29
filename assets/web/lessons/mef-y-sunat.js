Lesson.start({
  id: 'mef-y-sunat', area: 'Actores y roles', areaIcon: '👥', icon: '💼',
  title: 'MEF y SUNAT',
  subtitle: 'Uno emite el certificado, la otra lo recibe contra la deuda: así se cierra el círculo.',
  norma: 'El MEF emite el CIPRL y el CIPGN; la SUNAT recibe su aplicación contra deuda tributaria con pago electrónico; verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>La empresa que financia una intervención recibe a cambio un certificado. Pero ese papel solo vale si alguien lo emite y alguien lo acepta. El primero es el <b>Ministerio de Economía y Finanzas (MEF)</b>; el segundo, la <b>SUNAT</b>. Entender este cierre te explica por qué OxI no es una donación ni un préstamo: es un mecanismo donde la inversión se compensa contra impuestos, con reglas y trámites propios.</p>',
  sections: [
    { h: 'El MEF: emite los certificados',
      html: '<p>El MEF emite el <b>CIPRL</b> (Certificado de Inversión Pública Regional y Local) y el <b>CIPGN</b> (Certificado de Inversión Pública Gobierno Nacional). Son documentos valorados por el monto que invierte la empresa. El CIPGN se rige por las reglas del CIPRL en lo aplicable.</p><p>Qué oficina interna del MEF cumple cada función (por ejemplo, la de inversión pública o la del Tesoro Público) no está confirmado en nuestras fuentes: <b>verificar la norma vigente y el expediente técnico aprobado</b>.</p><p>Según reportes del reglamento vigente, la emisión se flexibiliza y sigue el avance de la intervención; las reglas exactas deben leerse en el texto.</p>' },
    { h: 'La SUNAT: recibe la aplicación',
      html: '<p>La empresa aplica el certificado contra su deuda tributaria ante la SUNAT. El pago con CIPRL o CIPGN es <b>electrónico</b>. Según SUNAT, se pueden aplicar contra pagos a cuenta, regularización y otras obligaciones de tributos como el impuesto a la renta de tercera categoría y el IGV, entre otros; según reportes del reglamento vigente, hasta el 80 % de la deuda tributaria aplicable. <b>Verificar la lista y el porcentaje en el texto vigente.</b></p><p>Los certificados no usados en un año pueden usarse en ejercicios siguientes y, al usarlos, el Tesoro Público reconoce la inflación acumulada de 12 meses, según SUNAT.</p>' },
    { h: 'Tabla de roles: qué hace y qué NO hace',
      html: '<table><tr><th>Actor</th><th>Qué hace</th><th>Qué NO hace</th></tr><tr><td>MEF</td><td>Emite CIPRL y CIPGN</td><td>No prioriza el proyecto ni firma el convenio de la entidad</td></tr><tr><td>SUNAT</td><td>Recibe la aplicación del certificado contra deuda tributaria, con pago electrónico</td><td>No emite certificados ni evalúa la calidad técnica de la obra</td></tr><tr><td>Empresa</td><td>Solicita y aplica el certificado</td><td>No lo emite ni lo convierte en efectivo</td></tr></table>' },
    { h: 'Un error común: el certificado no es efectivo',
      html: '<p>Es un <b>documento valorado</b> que sirve para pagar impuestos. Si la empresa tiene poca deuda tributaria, tardará más en aprovecharlo. Por eso la lección de la empresa privada insiste en la capacidad tributaria.</p><p>Guías anteriores a marzo de 2026 hablaban de un tope basado en el impuesto a la renta del ejercicio anterior: ese es un régimen previo y no debe usarse como vigente.</p>' },
    { h: 'Ejemplo ilustrativo',
      html: '<p>Empresa Andina S.A.A. (ficticia) financió una intervención para la Municipalidad Distrital de Villa Esperanza. Cuando corresponde, el MEF emite el certificado por el monto reconocido. Luego la empresa lo aplica ante la SUNAT contra una deuda tributaria, con pago electrónico. La entidad no interviene en ese trámite tributario.</p><p>Para dudas tributarias concretas consulta a tu asesor tributario; esta lección no lo reemplaza.</p>' }
  ],
  keypoints: [
    'El MEF emite el CIPRL y el CIPGN.',
    'La SUNAT recibe la aplicación del certificado contra deuda tributaria; el pago es electrónico.',
    'Según reportes del reglamento vigente, hasta el 80 % de la deuda tributaria aplicable; verificar en el texto.',
    'El certificado es un documento valorado, no dinero.',
    'Los certificados no usados pueden usarse en ejercicios siguientes; se reconoce la inflación acumulada de 12 meses, según SUNAT.',
    'El régimen de tope del 50 % del impuesto a la renta previo es anterior y no debe presentarse como vigente.'
  ],
  flashcards: [
    { q: '¿Quién emite el CIPRL y el CIPGN?', a: 'El MEF.' },
    { q: '¿Ante quién se aplica el certificado?', a: 'Ante la SUNAT, contra deuda tributaria, con pago electrónico.' },
    { q: '¿Qué es el CIPGN?', a: 'El certificado de la modalidad del Gobierno Nacional, regido por las reglas del CIPRL en lo aplicable.' },
    { q: '¿Es dinero el certificado?', a: 'No, es un documento valorado aplicable contra deuda tributaria.' },
    { q: '¿Qué reconoce el Tesoro al usar el certificado, según SUNAT?', a: 'La inflación acumulada de 12 meses.' }
  ],
  quiz: [
    { q: '¿Quién emite el certificado?', opts: ['SUNAT', 'MEF', 'La municipalidad'], correct: 1, why: 'La emisión del CIPRL y del CIPGN corresponde al MEF.' },
    { q: '¿Ante quién aplica la empresa el certificado?', opts: ['Contraloría', 'ProInversión', 'SUNAT'], correct: 2, why: 'La SUNAT recibe la aplicación contra deuda tributaria.' },
    { q: 'El tope del 50 % del impuesto a la renta del ejercicio anterior es:', opts: ['El régimen vigente confirmado', 'Un régimen anterior que no debe presentarse como vigente', 'Un requisito de la Contraloría'], correct: 1, why: 'Según reportes, el marco vigente contempla hasta el 80 %; debe verificarse en el texto.' },
    { q: 'El trámite de aplicación del certificado se hace:', opts: ['De forma presencial obligatoria', 'De forma electrónica', 'Ante la entidad'], correct: 1, why: 'SUNAT indica que el pago con CIPRL y CIPGN es electrónico.' }
  ]
});
