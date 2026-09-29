Lesson.start({
  id: 'liquidacion-de-obra', area: 'Recepción, liquidación y certificados', areaIcon: '🧾', icon: '🧮',
  title: 'Liquidación de obra', subtitle: 'Cerrar las cuentas: cuánto costó realmente y si todo cuadra',
  norma: 'Liquidación técnica y financiera del contrato tras la recepción; plazos, contenido y aprobación según el reglamento vigente (DS 038-2026-EF) y el convenio: verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Después de recibir la intervención toca cerrar las cuentas: la <b>liquidación</b>. Es el balance final del contrato, técnico y financiero. Allí se compara lo ejecutado con lo previsto, se acreditan los costos y se deja el expediente listo para auditoría y para sustentar el certificado.</p><p>Una liquidación ordenada acelera el cierre; una desordenada suele convertirse en el cuello de botella más largo de todo el proceso. Aquí se explica en términos generales; el procedimiento exacto se verifica en la norma vigente y el convenio.</p>',
  sections: [
    { h: '¿Qué es la liquidación?', html: '<p>Es el documento y el procedimiento que <b>consolida</b> lo ocurrido en el contrato: qué se construyó, cuánto se valorizó, qué se pagó, qué ajustes hubo y cuál es el saldo final. Tiene dos caras:</p><ul><li><b>Técnica:</b> la obra ejecutada coincide con planos, modificaciones aprobadas y metrados finales.</li><li><b>Financiera:</b> los costos acreditados, con comprobantes, valorizaciones y reajustes que corresponden.</li></ul>' },
    { h: 'Qué contiene un expediente de liquidación', html: '<table><tr><th>Componente</th><th>Para qué sirve</th></tr><tr><td>Acta de recepción</td><td>Prueba de conformidad de la entidad</td></tr><tr><td>Valorizaciones y comprobantes</td><td>Sustentan el costo ejecutado</td></tr><tr><td>Planos post construcción y memoria</td><td>Documentan lo realmente construido</td></tr><tr><td>Adicionales y deductivos aprobados</td><td>Explican variaciones frente al presupuesto</td></tr><tr><td>Informe del supervisor</td><td>Da conformidad técnica y de costos</td></tr></table><p>Si hubo modificaciones al presupuesto, la app hermana <b>Adicional y Deductivo</b> trata ese tema; aquí solo importa que estén aprobadas y documentadas.</p>' },
    { h: 'Quién prepara, quién revisa, quién aprueba', html: '<p>En términos generales, la empresa ejecutora o financiadora presenta la liquidación; el supervisor y la entidad la revisan y, si está conforme, la entidad la aprueba. Si hay observaciones, se devuelven para corregir.</p><p>Los <b>plazos</b> para presentar, revisar y aprobar, y quién firma, los fija la norma vigente y el convenio: <b>verificar la norma vigente y el expediente técnico aprobado</b>. Un plazo vencido puede tener consecuencias, por eso conviene llevar un calendario de cierre desde el día de la recepción.</p>' },
    { h: 'Por qué la liquidación importa para el certificado', html: '<p>El certificado se emite por el <b>monto invertido reconocido</b>. Ese monto debe estar sustentado y coincidir con los costos aceptados por la entidad. Una liquidación con diferencias entre lo pagado, lo valorizado y lo aprobado genera observaciones y retrasa el trámite ante el MEF.</p><p>Recuerda: <span class="hl">el certificado no es dinero, es un documento valorado</span>; su valor depende de que el sustento esté limpio.</p>' },
    { h: 'Buenas prácticas de cierre', html: '<ol><li>Arma el expediente de liquidación durante la ejecución, no al final.</li><li>Concilia mensualmente valorizaciones, pagos y comprobantes.</li><li>Guarda cuaderno de obra, pruebas y actas en orden cronológico.</li><li>Define un responsable único del cierre por parte de la entidad y de la empresa.</li></ol><p>Esta lección no reemplaza asesoría legal, contable ni técnica.</p>' }
  ],
  keypoints: [
    'La liquidación es el balance técnico y financiero final del contrato, posterior a la recepción.',
    'Debe conciliar lo ejecutado, lo valorizado, lo pagado y lo aprobado.',
    'Plazos, contenido y aprobación se verifican en la norma vigente, el convenio y el expediente técnico aprobado.',
    'Un expediente incompleto o con diferencias retrasa el trámite del certificado.',
    'El certificado se apoya en el monto invertido sustentado; no es dinero.',
    'Conviene armar el expediente durante la ejecución y no dejarlo para el final.'
  ],
  flashcards: [
    { q: '¿Qué es la liquidación de obra?', a: 'El balance técnico y financiero final del contrato, que consolida lo ejecutado, lo pagado y el saldo.' },
    { q: '¿Cuáles son sus dos caras?', a: 'La técnica (lo construido coincide con lo aprobado) y la financiera (costos acreditados con sustento).' },
    { q: '¿Por qué influye en el certificado?', a: 'Porque el certificado se emite por el monto invertido reconocido, que debe estar sustentado.' },
    { q: '¿Dónde se verifican los plazos de liquidación?', a: 'En la norma vigente, el convenio y el expediente técnico aprobado.' },
    { q: '¿Qué práctica evita cuellos de botella?', a: 'Armar y conciliar el expediente durante la ejecución.' }
  ],
  quiz: [
    { q: '¿Qué consolida la liquidación?', opts: ['Solo el estado de la obra', 'Lo ejecutado, valorizado, pagado y el saldo final', 'Únicamente el plan de mantenimiento'], correct: 1, why: 'Es un balance integral, técnico y financiero.' },
    { q: 'Una liquidación con diferencias entre lo pagado y lo aprobado suele...', opts: ['Acelerar el certificado', 'No afectar nada', 'Generar observaciones y retrasar el trámite'], correct: 2, why: 'El certificado exige un monto sustentado y coincidente.' },
    { q: '¿Dónde se confirman los plazos exactos de presentación y aprobación?', opts: ['En la norma vigente y el convenio', 'En cualquier guía anterior a marzo de 2026', 'No existen plazos'], correct: 0, why: 'Las guías previas describen el régimen derogado; se verifica el texto vigente.' },
    { q: '¿Cuándo conviene empezar a armar el expediente de liquidación?', opts: ['Después de recibir la obra', 'Durante la ejecución', 'Solo si hay una auditoría'], correct: 1, why: 'Conciliar mes a mes evita retrasos al final.' }
  ]
});
