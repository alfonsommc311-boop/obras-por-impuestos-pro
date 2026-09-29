Lesson.start({
  id: 'cronograma-de-recupero', area: 'Recepción, liquidación y certificados', areaIcon: '🧾', icon: '📈',
  title: 'Cronograma de recupero', subtitle: 'Cómo proyectar el uso del certificado sin prometer plazos',
  norma: 'El recupero depende del monto del certificado y de la deuda tributaria aplicable de la empresa; tope reportado de hasta 80 % (verificar el texto vigente). Ningún plazo está garantizado. Verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Una empresa que financia una intervención necesita saber <b>cuándo</b> podría recuperar su inversión vía certificados. La respuesta honesta es: depende. Depende de cuándo se emita el certificado, de cuánto impuesto pague la empresa y de los topes de uso. Un <b>cronograma de recupero</b> es una proyección, no una promesa.</p><p>Aquí se explica cómo armarlo y se incluye un <b>ejemplo ilustrativo</b>. Los certificados no son dinero: se recuperan en la medida en que se aplican contra impuestos.</p>',
  sections: [
    { h: 'De qué depende el ritmo de recupero', html: '<ul><li><b>Monto del certificado</b> y momento de emisión (ver lección de emisión).</li><li><b>Carga tributaria anual</b> de la empresa: cuánto renta de tercera categoría, ITAN, IGV u otros tributos aplicables paga.</li><li><b>Tope de uso</b>: según reportes del reglamento vigente, hasta el 80 % de la deuda tributaria aplicable; verificar el texto.</li><li><b>Requisitos ante SUNAT</b>, como la DJ anual presentada con 10 días hábiles de anticipación.</li></ul><p>Cuanto más pequeña es la carga tributaria frente al certificado, más años tarda el uso.</p>' },
    { h: 'Método para proyectar', html: '<ol><li>Estima el monto del certificado (escenario prudente).</li><li>Proyecta la deuda tributaria aplicable por año, con un rango bajo, medio y alto.</li><li>Aplica el tope de uso a cada año.</li><li>Resta el uso al saldo y traslada el remanente al año siguiente.</li><li>Repite con escenarios de retraso en la emisión.</li></ol><p>Los certificados no usados pasan a ejercicios siguientes, y al usar el CIPRL el Tesoro reconoce la inflación acumulada de 12 meses (SUNAT). No cuentes esa inflación como certeza en tus cálculos: es una regla, no un rendimiento garantizado.</p>' },
    { h: 'Ejemplo ilustrativo', html: '<p><b>Ejemplo ilustrativo</b> (cifras inventadas): Empresa Andina S.A.A. financia una intervención para la Municipalidad Distrital de Villa Esperanza. Supongamos un certificado de S/ 10 millones y una deuda tributaria aplicable de S/ 4 millones por año. Con un tope de uso del 80 % (a verificar): uso anual máximo de S/ 3,2 millones.</p><table><tr><th>Año</th><th>Uso máximo</th><th>Saldo al cierre</th></tr><tr><td>1</td><td>S/ 3,2 M</td><td>S/ 6,8 M</td></tr><tr><td>2</td><td>S/ 3,2 M</td><td>S/ 3,6 M</td></tr><tr><td>3</td><td>S/ 3,2 M</td><td>S/ 0,4 M</td></tr><tr><td>4</td><td>S/ 0,4 M</td><td>S/ 0</td></tr></table><p>Lectura: en este ejemplo, cuatro años. Si la empresa paga menos impuesto, tardaría más. Es una ilustración, no una previsión.</p>' },
    { h: 'Riesgos que el cronograma debe reflejar', html: '<ul><li>Retrasos en recepción, liquidación o emisión.</li><li>Cambios en la carga tributaria (pérdidas, reorganizaciones).</li><li>Cambios normativos en topes, tributos o vigencia.</li><li>Incumplimientos formales ante SUNAT que bloqueen el uso.</li></ul><p>Sugerencia: presenta siempre tres escenarios y una nota que diga que <span class="hl">no hay plazo garantizado</span>.</p>' },
    { h: 'Buenas prácticas para decisores', html: '<p>Para empresas: involucra desde el inicio a tributación y finanzas. Para alcaldes y equipos de proyectos: entiendan que el interés de la empresa depende de esta proyección; la claridad y la rapidez en recepción y liquidación mejoran su viabilidad.</p><p><b>Verificar la norma vigente y el expediente técnico aprobado.</b> Esta lección no reemplaza asesoría tributaria, legal ni financiera. Para la etapa de postulación de empresas, la app hermana <b>Postula PRO</b> puede complementar.</p>' }
  ],
  keypoints: [
    'El cronograma de recupero es una proyección, no una promesa de plazo.',
    'Depende del monto del certificado, de su emisión, de la carga tributaria y del tope de uso.',
    'Según reportes del reglamento vigente, el tope llega hasta el 80 % de la deuda aplicable; verificar el texto.',
    'Lo no usado pasa a ejercicios siguientes, y el Tesoro reconoce la inflación acumulada de 12 meses al usar el CIPRL.',
    'Conviene proyectar tres escenarios y reflejar retrasos y cambios normativos.',
    'Los certificados no son dinero: se recuperan solo al aplicarlos contra impuestos.'
  ],
  flashcards: [
    { q: '¿Qué es un cronograma de recupero?', a: 'Una proyección del uso del certificado año a año, sin garantía de plazos.' },
    { q: '¿Qué variables lo determinan?', a: 'Monto y momento de emisión, carga tributaria, tope de uso y requisitos ante SUNAT.' },
    { q: 'En el ejemplo ilustrativo, ¿por qué hay cuatro años?', a: 'Porque el uso anual máximo (S/ 3,2 M) es menor que el certificado (S/ 10 M); el saldo pasa al año siguiente.' },
    { q: '¿Qué escenarios conviene presentar?', a: 'Bajo, medio y alto, incluyendo retrasos de emisión.' },
    { q: '¿Se puede prometer un plazo de recupero?', a: 'No. Depende de factores de la empresa y de la norma vigente.' }
  ],
  quiz: [
    { q: 'En el cronograma, el uso anual máximo se calcula...', opts: ['Con el tope de uso aplicado a la deuda tributaria del año', 'Dividiendo el certificado en partes iguales', 'Con el presupuesto de la entidad'], correct: 0, why: 'El uso depende de la deuda aplicable y del tope, no de la voluntad de las partes.' },
    { q: 'Si la empresa paga menos impuestos de lo proyectado, el recupero...', opts: ['Se acelera', 'Se demora', 'No cambia'], correct: 1, why: 'Hay menos deuda contra la cual aplicar el certificado.' },
    { q: 'Los certificados no usados en un año...', opts: ['Se extinguen', 'Se pagan en efectivo', 'Pueden pasar a ejercicios siguientes'], correct: 2, why: 'Así lo indica SUNAT; verificar la vigencia aplicable.' },
    { q: 'El ejemplo con S/ 10 millones y cuatro años es...', opts: ['Una previsión oficial', 'Un ejemplo ilustrativo con cifras inventadas', 'El plazo típico garantizado'], correct: 1, why: 'Solo ilustra el método; no promete plazos ni montos.' }
  ]
});
