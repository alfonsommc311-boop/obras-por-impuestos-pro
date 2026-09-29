Lesson.start({
  id: 'cesion-y-negociacion-del-certificado', area: 'Recepción, liquidación y certificados', areaIcon: '🧾', icon: '🔁',
  title: 'Cesión y negociación del certificado', subtitle: 'La pregunta que todos hacen: ¿puedo transferirlo? Aquí, qué está confirmado y qué verificar',
  norma: 'Negociabilidad y cesión del CIPRL/CIPGN: NO CONFIRMADO bajo el DS 038-2026-EF; verificar la norma vigente y el expediente técnico aprobado antes de asumir que se puede transferir.',
  intro: '<p>Muchas empresas se preguntan si pueden <b>transferir</b> el certificado a otra empresa (cederlo o negociarlo) en lugar de usarlo ellas mismas. Sería útil si su carga tributaria es menor que el monto del certificado. Pero esta es una zona donde el detalle importa mucho y donde hoy <b>no hay confirmación</b> en nuestras fuentes.</p><p>Esta lección explica el concepto, lo que se sabe del régimen anterior y qué debes verificar antes de contar con esta posibilidad.</p>',
  sections: [
    { h: 'Qué significan cesión y negociación', html: '<p><b>Ceder</b> es transferir el derecho a usar el certificado a un tercero, con los requisitos que la norma exija. <b>Negociar</b> es pactar esa transferencia con condiciones económicas (por ejemplo, un precio). Ambas dependen de que la norma lo permita y de cómo se formalice ante el MEF y SUNAT.</p><p>Una cosa es la posibilidad legal y otra el mercado real: aunque se pueda transferir, encontrar comprador y precio es un asunto comercial sin garantías.</p>' },
    { h: 'Lo que se sabe del régimen anterior', html: '<p>Según las fuentes revisadas, bajo el DS 011-2024-EF se eliminó la prohibición de negociar cuando la empresa privada era también la ejecutora, es decir, los certificados eran negociables en todos los casos. Ese decreto fue <b>derogado</b> por el DS 038-2026-EF.</p><p>Por lo tanto, <span class="hl">no se puede afirmar que esa regla siga igual</span>: si se mantiene es NO CONFIRMADO.</p>' },
    { h: 'Qué NO está confirmado hoy', html: '<table><tr><th>Punto</th><th>Estado</th></tr><tr><td>Si los certificados son negociables bajo el reglamento vigente</td><td>NO CONFIRMADO</td></tr><tr><td>Mecánica y requisitos de la cesión</td><td>NO CONFIRMADO</td></tr><tr><td>Efectos tributarios para cedente y cesionario</td><td>NO CONFIRMADO</td></tr><tr><td>Restricciones (por ejemplo, según quién sea el ejecutor)</td><td>NO CONFIRMADO</td></tr></table><p>Mientras no se lea el texto oficial, cualquier promesa de que «se puede vender el certificado» debe tratarse con cautela.</p>' },
    { h: 'Qué verificar antes de contar con una cesión', html: '<ol><li>Leer el texto del reglamento vigente (DS 038-2026-EF) sobre transferencia de certificados.</li><li>Revisar el convenio y las bases: pueden agregar condiciones.</li><li>Consultar la orientación de SUNAT sobre el uso por un tercero y sus requisitos (por ejemplo, el cumplimiento de la DJ anual del que lo usa).</li><li>Pedir opinión a un asesor tributario y legal sobre efectos y riesgos.</li></ol><p><b>Verificar la norma vigente y el expediente técnico aprobado.</b></p>' },
    { h: 'Cómo planificar sin depender de la cesión', html: '<p>Una empresa prudente proyecta su recupero con el <b>escenario base de uso propio</b> (según su carga tributaria), y trata la cesión como una opción adicional, no como el plan principal. Así, si la cesión no se puede o no conviene, el proyecto no se rompe.</p><p>Recuerda: los certificados no son dinero, y su transferencia, si existe, no convierte el certificado en efectivo garantizado. Esta lección no reemplaza asesoría legal ni tributaria.</p>' }
  ],
  keypoints: [
    'Ceder o negociar es transferir a un tercero el derecho a usar el certificado, si la norma lo permite.',
    'Bajo el DS 011-2024-EF se reportaba negociabilidad amplia, pero ese decreto fue derogado.',
    'Si la negociabilidad se mantiene bajo el DS 038-2026-EF es NO CONFIRMADO.',
    'La mecánica y los requisitos de cesión son NO CONFIRMADOS: verificar el texto.',
    'Aunque se pueda transferir, hallar comprador y precio es un asunto comercial sin garantías.',
    'Planifica el recupero con uso propio como escenario base.'
  ],
  flashcards: [
    { q: '¿Qué es ceder un certificado?', a: 'Transferir a un tercero el derecho a usarlo, con los requisitos que exija la norma.' },
    { q: '¿Qué se reportó bajo el DS 011-2024-EF?', a: 'Que los certificados eran negociables en todos los casos; ese decreto fue derogado.' },
    { q: '¿Hoy se puede afirmar que son negociables?', a: 'No de forma definitiva: es NO CONFIRMADO hasta leer el DS 038-2026-EF.' },
    { q: '¿Qué escenario base conviene usar?', a: 'El uso propio del certificado según la carga tributaria de la empresa.' },
    { q: '¿Qué verificar además de la norma?', a: 'El convenio, las bases y la orientación de SUNAT.' }
  ],
  quiz: [
    { q: '¿Por qué no se puede afirmar hoy que los certificados son negociables?', opts: ['Porque nunca lo fueron', 'Porque el decreto que lo reportaba fue derogado y falta confirmar el vigente', 'Porque solo el CIPGN lo permite'], correct: 1, why: 'El DS 011-2024-EF fue derogado por el DS 038-2026-EF; la regla vigente debe verificarse.' },
    { q: 'Frente a una oferta de «compramos tu certificado», lo prudente es...', opts: ['Aceptar de inmediato', 'Verificar la norma vigente, el convenio y asesorarse', 'Ignorar la norma'], correct: 1, why: 'Sin confirmación normativa y tributaria, se corre riesgo.' },
    { q: 'La cesión, aun si es legal, garantiza...', opts: ['Un precio fijo', 'Convertir el certificado en efectivo', 'Nada: el mercado y el precio no están garantizados'], correct: 2, why: 'Los certificados no son dinero y su transferencia es un asunto comercial.' },
    { q: 'Como escenario base de recupero conviene...', opts: ['Usarlo la propia empresa', 'Depender de la venta', 'Esperar la devolución en efectivo'], correct: 0, why: 'El uso propio es lo más predecible; la cesión es opcional.' }
  ]
});
