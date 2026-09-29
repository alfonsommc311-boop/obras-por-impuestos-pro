Lesson.start({
  id: 'idea-perfil-y-ficha', area: 'Invierte.pe aplicado a OxI', areaIcon: '🧬', icon: '💡',
  title: 'Idea, perfil y ficha técnica',
  subtitle: 'No todos los proyectos necesitan el mismo estudio: elegir bien el nivel evita meses perdidos.',
  norma: 'La fase de formulación y evaluación se define por tipología y monto de la inversión según la normativa de Invierte.pe; verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>En Invierte.pe, todo proyecto nace como <b>idea</b>, se estudia en la fase de <b>formulación y evaluación</b> y, si resulta rentable socialmente, recibe la viabilidad. El tipo de estudio que se pide (perfil, ficha técnica simplificada o estándar) <b>depende de la tipología y del monto</b> del proyecto. Elegir mal ese nivel es una de las fuentes más comunes de retrasos: se hace un estudio de más, o uno de menos que luego debe rehacerse.</p>',
  sections: [
    { h: 'De la idea al estudio',
      html: '<p>Todo empieza con una <b>idea de inversión</b>: un problema concreto y una población afectada. Se registra en el Banco de Inversiones, recibe su CUI y pasa a la <b>Unidad Formuladora</b>. Antes de escribir una sola página, conviene tener claro:</p><ul><li>¿Qué problema se resuelve y a cuántas personas afecta?</li><li>¿Qué servicio se brindará y quién lo va a sostener después?</li><li>¿Existe ya otro proyecto cercano que cumpla la misma función?</li></ul><p>Una idea bien definida se convierte en un estudio más corto y más creíble.</p>' },
    { h: 'Perfil o ficha: qué determina el nivel',
      html: '<p>El sistema no aplica un único formato. El nivel de estudio se decide según dos criterios:</p><table><tr><th>Criterio</th><th>Qué implica</th></tr><tr><td>Tipología</td><td>Si es un proyecto de inversión con características estándar o uno de mayor complejidad</td></tr><tr><td>Monto</td><td>A mayor monto o complejidad, mayor profundidad del estudio</td></tr></table><p>Existen niveles como la <b>ficha técnica simplificada</b>, la <b>ficha técnica estándar</b> y el <b>perfil</b>. Los umbrales de monto y las listas de tipologías los fija la normativa del sistema y se actualizan: <b>no los memorices de un manual antiguo</b>; verifica la norma vigente antes de decidir. Tampoco conviene inventar una regla propia del tipo «hasta tal cifra alcanza una ficha».</p>' },
    { h: 'Qué contiene un buen estudio',
      html: '<p>Más allá del formato, un estudio de calidad demuestra cuatro cosas:</p><ol><li><b>Diagnóstico</b>: el problema, la población y el territorio, con datos reales.</li><li><b>Brecha</b>: cuánto falta entre el servicio que existe y el que se necesita.</li><li><b>Alternativa elegida</b>: por qué esta solución y no otra.</li><li><b>Costos y sostenibilidad</b>: cuánto cuesta construir y quién pagará la operación y el mantenimiento.</li></ol><p>El financista lee esto para entender si la inversión tiene sentido, no solo si está firmada.</p>' },
    { h: 'Un ejemplo ilustrativo',
      html: '<p>La Municipalidad Distrital de Villa Esperanza necesita mejorar un local comunal usado como posta. El equipo consulta primero la normativa vigente para ver qué formato corresponde a su tipología y monto, en lugar de asumir que «una ficha basta». Eso evita que, a mitad de camino, la OPMI observe el estudio y se pierda tiempo. Es un caso ficticio con fines didácticos.</p>' },
    { h: 'Errores que cuestan tiempo',
      html: '<ul><li>Elegir el formato por costumbre y no por norma.</li><li>Copiar el estudio de otro proyecto sin adaptar el diagnóstico.</li><li>Subestimar los costos de operación y mantenimiento: es lo primero que pregunta quien evalúa la sostenibilidad.</li></ul><p>Si tu equipo quiere entrenar la formulación paso a paso, <b>Invierte Experto</b> desarrolla ese proceso; esta lección solo lo ubica dentro del recorrido de OxI. No reemplaza asesoría técnica ni legal.</p>' }
  ],
  keypoints: [
    'El proyecto nace como idea, se registra y recibe su CUI antes de formularse.',
    'El nivel de estudio (perfil o ficha) depende de la tipología y del monto.',
    'Los umbrales y las listas de tipologías los fija la norma vigente: se verifican, no se recuerdan.',
    'Un buen estudio demuestra diagnóstico, brecha, alternativa y sostenibilidad.',
    'Elegir mal el formato genera observaciones y retrabajo.',
    'Formular bien es la base de un expediente técnico coherente.'
  ],
  flashcards: [
    { q: '¿Qué determina si corresponde perfil o ficha técnica?', a: 'La tipología y el monto de la inversión, según la normativa vigente de Invierte.pe.' },
    { q: '¿Quién suele formular el estudio?', a: 'La Unidad Formuladora (UF).' },
    { q: '¿Qué debe explicar un buen estudio sobre el costo?', a: 'Cuánto cuesta construir y quién sostendrá la operación y el mantenimiento.' },
    { q: '¿Se pueden usar umbrales de monto de un manual antiguo?', a: 'No: hay que verificar la norma vigente.' }
  ],
  quiz: [
    { q: '¿Qué criterios definen el nivel de estudio de un proyecto?', opts: ['La tipología y el monto', 'El nombre del alcalde', 'La cantidad de empresas interesadas'], correct: 0, why: 'La normativa de Invierte.pe asocia el nivel al tipo de inversión y a su monto.' },
    { q: 'Tu equipo recuerda un umbral de monto de un manual de hace años. ¿Qué haces?', opts: ['Lo usas, es de confianza', 'Verificas la norma vigente antes de decidir', 'Eliges siempre el estudio más corto'], correct: 1, why: 'Los umbrales cambian; el manual antiguo puede describir reglas ya modificadas.' },
    { q: '¿Qué pregunta suele hacerse sobre sostenibilidad?', opts: ['Cuántos planos hay', 'Quién financiará la operación y el mantenimiento', 'Cuántos folios tiene el legajo'], correct: 1, why: 'Una obra sin sostenibilidad se deteriora; el evaluador lo mira desde el estudio.' },
    { q: 'Copiar el diagnóstico de otro proyecto sin adaptarlo:', opts: ['Ahorra tiempo sin riesgo', 'Debilita la credibilidad del estudio', 'Es requisito del sistema'], correct: 1, why: 'El diagnóstico debe reflejar la realidad concreta del territorio y la población.' }
  ]
});
