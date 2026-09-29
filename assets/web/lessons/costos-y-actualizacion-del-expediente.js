Lesson.start({
  id: 'costos-y-actualizacion-del-expediente', area: 'Invierte.pe aplicado a OxI', areaIcon: '🧬', icon: '💲',
  title: 'Costos y actualización del expediente',
  subtitle: 'Un presupuesto con precios viejos espanta al financista: el tiempo también es un costo.',
  norma: 'Los precios de un expediente reflejan una fecha; conviene verificar la norma vigente y el expediente técnico aprobado antes de asumir que el monto sigue siendo válido.',
  intro: '<p>Un expediente técnico es una foto de precios en una fecha determinada. Si el proyecto espera meses o años hasta encontrar financista, esa foto envejece: los materiales, la mano de obra y los equipos cambian. Una empresa que abre un expediente y ve <b>precios de hace dos años</b> concluye una de dos cosas: que el presupuesto es insuficiente o que el equipo no cuida su proyecto. Ninguna ayuda. Esta lección explica por qué ocurre y cómo evitarlo.</p>',
  sections: [
    { h: 'Por qué los precios envejecen',
      html: '<p>Un presupuesto se compone de partidas con precios unitarios: insumos, mano de obra, equipos, gastos generales, utilidad. Todos esos componentes varían con el tiempo. Entre la fecha del presupuesto y la fecha de ejecución se acumula una diferencia que puede ser relevante.</p><ul><li>Si el presupuesto queda corto, la empresa asume el riesgo de un desfase o pide reajustes.</li><li>Si el desfase es grande, el proyecto puede volverse inviable comercialmente.</li></ul>' },
    { h: 'Señales de que tu expediente está desactualizado',
      html: '<table><tr><th>Señal</th><th>Por qué preocupa</th></tr><tr><td>Fecha de precios muy anterior</td><td>Los costos reales pueden ser distintos</td></tr><tr><td>Partidas descontinuadas o cambiadas</td><td>El expediente no refleja lo que hoy se construye</td></tr><tr><td>Normas técnicas superadas</td><td>Puede requerir ajustes de diseño</td></tr><tr><td>Estudios antiguos</td><td>El terreno o el entorno pueden haber variado</td></tr></table><p>Ninguna de estas señales, por sí sola, invalida un expediente, pero todas obligan a revisar y a decidir con criterio técnico.</p>' },
    { h: 'Qué implica actualizar',
      html: '<p>Actualizar no es rehacer todo. Suele implicar:</p><ol><li>Revisar los precios base de insumos, mano de obra y equipos.</li><li>Verificar que las partidas y especificaciones sigan vigentes.</li><li>Recalcular el presupuesto y el cronograma con los nuevos valores.</li><li>Evaluar si el nuevo monto altera lo registrado en el Banco y si requiere sustento o registro (ver la lección de cambios).</li></ol><p>El procedimiento formal y los requisitos concretos dependen de la normativa vigente y del contrato o convenio: verificar la norma y el expediente técnico aprobado. Tampoco se debe asumir un porcentaje fijo de variación: cada caso debe calcularse.</p>' },
    { h: 'Actualizar para que el proyecto sea comparable',
      html: '<p>Un expediente actualizado comunica dos cosas: que el proyecto está <b>vivo</b> y que su presupuesto es <b>realista</b>. Ejemplo ilustrativo: la Municipalidad Distrital de Villa Esperanza tiene un expediente con precios de hace tiempo. Antes de presentarlo a Empresa Andina S.A.A., el equipo actualiza los precios base y adjunta el sustento. La empresa puede así comparar el proyecto con otros sin descontar mentalmente un desfase. Caso ficticio.</p>' },
    { h: 'Buenas prácticas y apps hermanas',
      html: '<ul><li>Registrar en el expediente la fecha de precios de forma visible.</li><li>Definir cada cuánto tiempo se revisa un expediente que espera financista.</li><li>Separar el costo de la obra del costo de supervisión y otros gastos según corresponda.</li><li>Guardar los sustentos de cada actualización.</li></ul><p>Para revisar un expediente con lupa técnica, usa <b>Expediente Experto</b>; para valorizaciones de obra en curso, consulta <b>Valoriza</b>. Esta lección no reemplaza asesoría legal, tributaria ni técnica.</p>' }
  ],
  keypoints: [
    'Un expediente refleja precios de una fecha concreta.',
    'Con el tiempo el presupuesto se desfasa y el financista lo nota.',
    'Actualizar no es rehacer: es revisar precios, partidas, normas y estudios.',
    'La fecha de precios debe ser visible en el expediente.',
    'Un cambio de monto puede exigir registro o sustento en el Banco.',
    'No existe un porcentaje fijo de desfase: cada caso se calcula.'
  ],
  flashcards: [
    { q: '¿Qué es un expediente técnico en términos de precios?', a: 'Una foto de costos en una fecha determinada.' },
    { q: '¿Qué señales indican un expediente desactualizado?', a: 'Fecha de precios antigua, partidas o normas superadas y estudios viejos.' },
    { q: '¿Actualizar es rehacer todo el expediente?', a: 'No: es revisar y recalcular lo que cambió.' },
    { q: '¿Qué otro registro puede verse afectado por un nuevo monto?', a: 'El Banco de Inversiones, por posible registro o sustento.' }
  ],
  quiz: [
    { q: 'Un expediente tiene precios de hace mucho tiempo. La reacción esperable del financista es:', opts: ['Asumir que todo está bien', 'Dudar de la suficiencia del presupuesto', 'Ofrecer más certificados'], correct: 1, why: 'Los precios envejecen; un presupuesto viejo genera desconfianza sobre el costo real.' },
    { q: '¿Cuál es una buena práctica?', opts: ['Ocultar la fecha de precios', 'Mostrar la fecha de precios y revisar periódicamente', 'Aplicar siempre un porcentaje fijo de aumento'], correct: 1, why: 'La transparencia permite comparar; el porcentaje fijo no refleja cada caso.' },
    { q: 'Actualizar el expediente significa:', opts: ['Hacer todo desde cero', 'Revisar precios, partidas, normas y estudios, y recalcular', 'Solo cambiar la carátula'], correct: 1, why: 'La actualización es selectiva: se revisa lo que envejeció.' }
  ]
});
