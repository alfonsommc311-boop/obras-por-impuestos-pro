Lesson.start({
  id: 'valorizaciones-en-oxi', area: 'Ejecución de obra', areaIcon: '🏗️', icon: '💰',
  title: 'Valorizaciones en OxI',
  subtitle: 'Medir lo ejecutado con rigor es lo que convierte el avance en respaldo del monto reconocido.',
  norma: 'Principio: se valoriza lo realmente ejecutado y verificado; la emisión de certificados conforme a avance se flexibiliza según reportes del reglamento vigente (DS 038-2026-EF), pero reglas exactas: verificar el texto y el convenio.',
  intro: '<p>Una <b>valorización</b> es la medición periódica, en dinero, de lo ejecutado en la obra durante un período, aplicando los metrados y precios del expediente técnico aprobado. En Obras por Impuestos la valorización importa doblemente: es la base para saber cuánto se ha avanzado y, según el marco aplicable, se relaciona con la oportunidad y el monto de los certificados (CIPRL o CIPGN) a emitir. Una valorización mal sustentada retrasa todo lo que viene después.</p>',
  sections: [
    { h: 'Qué mide una valorización',
      html: '<p>Mide <b>partidas ejecutadas</b> en un período, con su metrado real multiplicado por el precio aprobado. No mide intención, materiales acopiados sin uso ni promesas.</p><ul><li>Se parte del presupuesto y el cronograma del expediente técnico aprobado.</li><li>El residente propone; la supervisión revisa y valida.</li><li>Lo que no se puede verificar en campo no se valoriza.</li></ul>' },
    { h: 'Flujo típico y qué revisa la supervisión',
      html: '<ol><li>El residente metra lo ejecutado en el período.</li><li>Adjunta sustentos: planillas de metrados, fotografías, ensayos y pruebas, entradas del cuaderno de obra.</li><li>La supervisión verifica en campo, compara con lo anotado y con la calidad exigida.</li><li>Se formula la valorización, con posibles observaciones o correcciones.</li><li>Se aprueba y sigue el trámite que fije el convenio.</li></ol><p>Los plazos de revisión y aprobación no se asumen: verificar la norma vigente y el convenio.</p>' },
    { h: 'Valorización y certificados por avance',
      html: '<p>Según reportes sobre el nuevo reglamento (DS 038-2026-EF, vigente desde el 14/03/2026), la emisión de certificados se <b>flexibiliza conforme al avance</b> de la obra. Eso ayuda a la empresa privada porque el reconocimiento puede acompañar mejor la ejecución. Pero atención:</p><ul><li>Las reglas exactas (hitos, porcentajes, qué gastos se reconocen, supervisión y costo financiero) <b>no están confirmadas</b> aquí: verificar en el texto del reglamento y en el convenio.</li><li>Cuanto mejor sustentada esté la valorización, menos riesgo de observaciones que demoren el reconocimiento.</li><li>Los certificados no son dinero: son documentos aplicables contra deuda tributaria, con las condiciones y topes que fije la norma (según reportes, hasta el 80 % de la deuda tributaria aplicable; verificar en el texto).</li></ul>' },
    { h: 'Errores que retrasan una valorización',
      html: '<table><tr><th>Error</th><th>Consecuencia</th></tr><tr><td>Metrados sin sustento de campo</td><td>Observación y devolución</td></tr><tr><td>Partidas fuera del expediente sin adicional aprobado</td><td>No se reconocen</td></tr><tr><td>Calidad sin ensayos</td><td>Se suspende la aprobación de la partida</td></tr><tr><td>Cuaderno de obra desordenado</td><td>Sin respaldo cronológico</td></tr><tr><td>Mezclar períodos</td><td>Confusión en el avance real</td></tr></table>' },
    { h: 'Ejemplo ilustrativo',
      html: '<p>En Villa Esperanza, la Empresa Andina S.A.A. presentó su valorización de mayo con planillas de metrados, fotos fechadas y los ensayos de compactación. La supervisión notó que una partida figuraba como ejecutada al 100 % pero el cuaderno registraba un tramo pendiente. Se corrigió antes de aprobar y la valorización avanzó sin observaciones posteriores (ejemplo ilustrativo, sin cifras reales). Para calcular y sustentar valorizaciones con detalle, existe la app hermana Valoriza; esta lección solo da el marco.</p>' }
  ],
  keypoints: [
    'Una valorización mide en dinero lo realmente ejecutado y verificable en un período, con metrados y precios del expediente aprobado.',
    'El residente propone y la supervisión verifica en campo.',
    'Según reportes del reglamento vigente, la emisión de certificados se flexibiliza conforme al avance; las reglas exactas hay que verificarlas en el texto y en el convenio.',
    'Según reportes, el uso de certificados alcanza hasta el 80 % de la deuda tributaria aplicable; verificar en el texto.',
    'Sin adicional aprobado, lo ejecutado fuera del expediente puede no reconocerse.',
    'Una valorización bien sustentada reduce el riesgo de demoras en el reconocimiento.'
  ],
  flashcards: [
    { q: '¿Qué es una valorización?', a: 'La medición periódica en dinero de lo ejecutado, con metrados reales y precios del expediente técnico aprobado.' },
    { q: '¿Qué revisa la supervisión?', a: 'Que lo declarado exista en campo, cumpla la calidad exigida y coincida con lo anotado en el cuaderno.' },
    { q: '¿Cómo se relaciona con los certificados?', a: 'Según reportes del reglamento vigente, la emisión se flexibiliza conforme al avance; reglas exactas por verificar en el texto y el convenio.' },
    { q: '¿Se valoriza material acopiado sin usar?', a: 'No como avance de obra salvo que la norma y el convenio lo permitan expresamente: verificar.' },
    { q: '¿Qué app ayuda a calcular valorizaciones?', a: 'Valoriza, la app hermana; esta lección solo da el marco de OxI.' }
  ],
  quiz: [
    { q: 'Una partida ejecutada fuera del expediente y sin adicional aprobado:', opts: ['Se valoriza igual', 'Tiene riesgo de no reconocerse', 'Se reconoce automáticamente por avance'], correct: 1, why: 'Sin aprobación previa, el monto reconocido queda en riesgo.' },
    { q: 'La emisión de certificados conforme al avance, según reportes del reglamento vigente:', opts: ['Es una regla ya confirmada en todos sus detalles en esta lección', 'Se flexibiliza, pero las reglas exactas se verifican en el texto y el convenio', 'Ya no existe'], correct: 1, why: 'Los reportes indican flexibilización; los detalles requieren lectura del texto oficial.' },
    { q: 'Una valorización se sustenta mejor con:', opts: ['Metrados, fotos, ensayos y anotaciones del cuaderno', 'Solo la firma del residente', 'La confianza entre las partes'], correct: 0, why: 'Cada dato debe poder verificarse en campo y en los registros.' },
    { q: 'Los certificados de OxI son:', opts: ['Dinero en efectivo', 'Documentos aplicables contra deuda tributaria bajo condiciones', 'Bonos de libre circulación sin restricciones'], correct: 1, why: 'No son efectivo: se aplican contra deuda tributaria según la norma.' }
  ]
});
