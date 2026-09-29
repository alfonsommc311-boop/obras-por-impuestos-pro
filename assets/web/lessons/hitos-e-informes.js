Lesson.start({
  id: 'hitos-e-informes', area: 'Supervisión y control', areaIcon: '🔍', icon: '📍',
  title: 'Hitos e informes', subtitle: 'Si un hito no se puede verificar, no sirve para decidir nada.',
  norma: 'Los hitos y su vínculo con el reconocimiento del avance se definen en el expediente técnico y el convenio; reglas exactas de emisión de certificados: verificar la norma vigente (DS 038-2026-EF) y el expediente técnico aprobado.',
  intro: '<p>Un <span class="hl">hito</span> es un punto del avance que se puede comprobar y que sirve como referencia: para medir progreso, coordinar entre entidad y empresa, y sustentar decisiones. Los informes son el registro de esa comprobación.</p><p>Un hito mal definido («obra al 50 %») genera discusiones; uno bien definido («estructura de cimentación concluida y aprobada en pruebas») las evita.</p>',
  sections: [
    { h: 'Qué es un hito verificable', html: '<p>Es un resultado <b>observable y medible</b> del que dos personas independientes llegarían a la misma conclusión. Se caracteriza por:</p><ul><li>Descripción clara de qué debe estar terminado.</li><li>Criterio de aceptación (pruebas, mediciones, planos de replanteo).</li><li>Evidencia asociada (fotos fechadas, protocolos, ensayos).</li><li>Responsable de verificarlo.</li></ul>' },
    { h: 'Cómo definirlos bien', html: '<p>Parte del expediente técnico aprobado y del cronograma. Divide la obra en tramos que correspondan a partidas o entregables reales, evitando porcentajes vagos. Ubica hitos donde un error sea costoso de corregir después (cimentación, estructura, instalaciones ocultas, pruebas finales).</p><p>La relación de los hitos con el reconocimiento del avance y con la emisión de certificados se rige por la norma y el convenio; según reportes, el reglamento vigente flexibiliza la emisión conforme al avance, pero las reglas exactas hay que verificarlas en el texto. Ver también la lección de valorizaciones.</p>' },
    { h: 'Qué contiene cada informe', html: '<p>Un informe por hito o periodo debería incluir, como mínimo de buena práctica:</p><ol><li>Identificación de la intervención y periodo cubierto.</li><li>Avance programado frente al real, con la medición.</li><li>Calidad: ensayos, pruebas y observaciones.</li><li>Incidencias del cuaderno de obra y su estado.</li><li>Riesgos detectados y recomendaciones.</li><li>Conclusión: hito cumplido, cumplido con observaciones o no cumplido.</li><li>Anexos: registro fotográfico y protocolos.</li></ol>' },
    { h: 'Errores frecuentes', html: '<ul><li>Hitos definidos como porcentaje sin criterio de aceptación.</li><li>Informes sin evidencia o sin fecha.</li><li>Cambios de alcance no reflejados en los hitos.</li><li>Observaciones sin seguimiento hasta cerrarlas.</li></ul><p>Cuando el hito requiera modificaciones, consulta la lección de adicionales y la app hermana <b>Adicional y Deductivo</b>.</p>' },
    { h: 'Ejemplo ilustrativo', html: '<p>Villa Esperanza y Empresa Andina S.A.A. (caso ficticio) definen como hito «losa del segundo nivel vaciada, curada y con ensayos de resistencia conformes». El supervisor emite el informe con los resultados de laboratorio y fotos fechadas. Como el criterio estaba escrito desde el inicio, nadie discute si el hito se cumplió.</p>' }
  ],
  keypoints: [
    'Un hito verificable es observable, medible y tiene criterio de aceptación.',
    'Los porcentajes vagos sin criterio generan discusiones.',
    'Se ubican hitos donde corregir después sería costoso.',
    'Cada informe compara lo programado con lo real, con evidencia fechada.',
    'La conclusión del informe debe ser explícita: cumplido, con observaciones o no cumplido.',
    'Las reglas de emisión de certificados por avance: verificar la norma vigente y el expediente técnico aprobado.'
  ],
  flashcards: [
    { q: '¿Qué es un hito verificable?', a: 'Un resultado observable y medible, con criterio de aceptación y evidencia.' },
    { q: '¿Por qué evitar «obra al 50 %» como hito?', a: 'Porque no tiene criterio de aceptación y admite interpretaciones distintas.' },
    { q: '¿Qué evidencia acompaña a un informe?', a: 'Mediciones, ensayos, protocolos y registro fotográfico fechado.' },
    { q: '¿Dónde poner los hitos?', a: 'En puntos donde un error sea caro de corregir después.' },
    { q: '¿Qué debe concluir un informe de hito?', a: 'Si el hito está cumplido, cumplido con observaciones o no cumplido.' }
  ],
  quiz: [
    { q: 'Un hito bien definido es:', opts: ['Obra al 70 %', 'Cimentación concluida con pruebas conformes', 'Lo que el ejecutor considere terminado'], correct: 1, why: 'Tiene resultado concreto y criterio de aceptación comprobable.' },
    { q: 'Un informe de hito debe incluir:', opts: ['Solo la conclusión', 'Programado frente a real, calidad, incidencias, riesgos y anexos', 'Únicamente fotos'], correct: 1, why: 'La comparación y la evidencia permiten decidir y defender la decisión.' },
    { q: 'Si una observación queda abierta:', opts: ['Se olvida al siguiente hito', 'Se le da seguimiento hasta cerrarla', 'Se borra del informe'], correct: 1, why: 'Las observaciones sin seguimiento se acumulan y se convierten en controversias.' }
  ]
});
