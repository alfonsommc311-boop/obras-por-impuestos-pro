Lesson.start({
  id: 'usar-el-certificado-contra-el-impuesto', area: 'Recepción, liquidación y certificados', areaIcon: '🧾', icon: '🧾',
  title: 'Usar el certificado contra el impuesto', subtitle: 'Cómo se aplica el CIPRL o el CIPGN a pagos a cuenta y regularización',
  norma: 'Orientación SUNAT sobre uso de CIPRL y CIPGN y reportes del DS 038-2026-EF: hasta 80 % de la deuda tributaria aplicable, con lista de tributos por confirmar. Verificar la norma vigente y el texto del reglamento.',
  intro: '<p>Tener el certificado es solo la mitad del camino: hay que <b>usarlo</b>. La empresa lo aplica contra su deuda tributaria ante SUNAT, mediante un procedimiento electrónico, y solo hasta un límite y en ciertos tributos.</p><p>Esta lección resume lo que reporta la orientación de SUNAT y los comentarios sobre el reglamento vigente. Los porcentajes y las listas se deben confirmar en el texto oficial antes de decidir.</p>',
  sections: [
    { h: 'Contra qué se puede usar', html: '<p>Según la orientación de SUNAT, el uso alcanza pagos a cuenta, regularización, deuda u otra obligación de:</p><ul><li>Impuesto a la renta de tercera categoría.</li><li>ITAN.</li><li>RER y MYPE tributario.</li><li>Impuesto especial a la minería.</li><li>IGV e ISC.</li></ul><p>Los reportes sobre el nuevo reglamento hablan de una <b>ampliación del universo de tributos</b>. La lista exacta y sus condiciones deben verificarse en el texto vigente.</p>' },
    { h: 'El límite de uso', html: '<p>Según reportes del reglamento vigente, el certificado se puede usar hasta el <span class="hl">80 % de la deuda tributaria aplicable</span>; verificar en el texto. El 20 % restante (u otro saldo que corresponda) se paga en la forma habitual.</p><p>Régimen anterior, solo histórico: el tope era el 50 % del impuesto a la renta del ejercicio anterior y los certificados tenían vigencia de 10 años desde la emisión. No lo apliques hoy; la vigencia actual se confirma en la norma.</p>' },
    { h: 'Requisito previo ante SUNAT', html: '<p>SUNAT indica como requisito haber presentado la <b>declaración jurada anual del impuesto a la renta de tercera categoría</b> del ejercicio anterior con al menos <b>10 días hábiles de anticipación</b> al uso. Es un dato de SUNAT que se debe verificar en su orientación vigente.</p><p>Consecuencia práctica: si la DJ anual se presenta tarde, el uso puede quedar bloqueado. Se recomienda que el área contable lleve este hito en su calendario.</p>' },
    { h: 'Qué pasa con lo que no se usa', html: '<p>Los certificados no usados en un año pueden usarse en <b>ejercicios siguientes</b>. Además, al usar el CIPRL el Tesoro Público reconoce la <b>inflación acumulada de 12 meses</b> (SUNAT).</p><p>Ojo: eso no convierte al certificado en un producto financiero con rendimiento garantizado. Solo reajusta su valor de aplicación conforme a la regla.</p>' },
    { h: 'Pasos y cuidados', html: '<ol><li>Confirmar el saldo de certificados y su vigencia.</li><li>Calcular la deuda aplicable y el tope de uso.</li><li>Verificar el cumplimiento de la DJ anual con la anticipación exigida.</li><li>Aplicar el certificado por el canal electrónico de SUNAT.</li><li>Conservar la constancia y conciliar contablemente.</li></ol><p>Recuerda: <b>los certificados no son dinero</b>. Coordina con tu asesor tributario; esta lección no reemplaza asesoría tributaria ni legal.</p>' }
  ],
  keypoints: [
    'El certificado se aplica contra deuda tributaria ante SUNAT mediante pago electrónico.',
    'Según reportes del reglamento vigente, el uso llega hasta el 80 % de la deuda aplicable; verificar en el texto.',
    'SUNAT lista renta de tercera categoría, ITAN, RER, MYPE tributario, minería, IGV e ISC; confirmar la lista vigente.',
    'Requisito SUNAT: DJ anual del ejercicio anterior presentada con 10 días hábiles de anticipación.',
    'Lo no usado pasa a ejercicios siguientes y el Tesoro reconoce la inflación acumulada de 12 meses al usar el CIPRL.',
    'El tope de 50 % y la vigencia de 10 años son régimen anterior, solo histórico.'
  ],
  flashcards: [
    { q: '¿Hasta qué porcentaje se usa el certificado según reportes del reglamento vigente?', a: 'Hasta el 80 % de la deuda tributaria aplicable; verificar en el texto.' },
    { q: '¿Qué DJ debe estar presentada y con qué anticipación?', a: 'La DJ anual de renta de tercera categoría del ejercicio anterior, con al menos 10 días hábiles de anticipación (dato SUNAT, verificar).' },
    { q: '¿Qué pasa con certificados no usados en el año?', a: 'Pueden usarse en ejercicios siguientes.' },
    { q: '¿Qué reconoce el Tesoro al usar el CIPRL?', a: 'La inflación acumulada de 12 meses.' },
    { q: '¿Cuál era el tope del régimen anterior?', a: '50 % del impuesto a la renta del ejercicio anterior; solo histórico.' }
  ],
  quiz: [
    { q: 'El uso del certificado ante SUNAT se hace...', opts: ['En efectivo en ventanilla', 'De forma electrónica', 'Solo por correo físico'], correct: 1, why: 'Según SUNAT, el pago con CIPRL y CIPGN es electrónico.' },
    { q: '¿Qué requisito de la DJ anual señala SUNAT?', opts: ['Presentarla con 10 días hábiles de anticipación', 'Presentarla después del uso', 'No hay ningún requisito'], correct: 0, why: 'Sin esa DJ presentada a tiempo, el uso puede bloquearse; verificar en SUNAT.' },
    { q: 'El tope de 50 % y la vigencia de 10 años corresponden a...', opts: ['El régimen vigente', 'El régimen anterior, solo histórico', 'Un requisito del ITAN'], correct: 1, why: 'Fueron reglas previas al DS 038-2026-EF.' },
    { q: 'Los certificados que no se usaron en un año...', opts: ['Se pierden', 'Se devuelven en dinero', 'Pueden usarse en ejercicios siguientes'], correct: 2, why: 'Así lo señala SUNAT; confirma la vigencia aplicable en la norma vigente.' }
  ]
});
