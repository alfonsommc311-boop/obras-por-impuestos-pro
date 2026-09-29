# Guía de redacción de lecciones — Obras por Impuestos PRO

Lee TAMBIÉN: `_brief/INV-OXI.md` (hechos verificados), `CLAUDE.md` (reglas) y `assets/web/assets/catalog.js` (tu área). Una lección modelo del mismo motor: `/home/user/alfonsommc311-boop/mirofish-pro-/assets/web/lessons/que-es-mirofish.js` (solo para ver el FORMATO; no copies su tema).

## Formato exacto (un archivo `assets/web/lessons/<id>.js` por lección, UNA llamada `Lesson.start({...})`)
```
Lesson.start({
  id: '<id>', area: '<AREA EXACTA DEL CATÁLOGO>', areaIcon: '<ICONO DEL ÁREA EXACTO>', icon: '<icon de la lección>',
  title: '<Título>', subtitle: '<frase que engancha>', norma: '<referencia o principio clave en una frase>',
  intro: '<HTML 3-5 frases: qué y por qué>',
  sections: [ { h: '<Subtítulo>', html: '<HTML>' }, ... (4 a 6) ],
  keypoints: [ '<5-6 frases memorizables>' ],
  flashcards: [ { q:'...', a:'...' }, ... (4-5) ],
  quiz: [ { q:'...', opts:['..','..','..'], correct:<idx 0-based>, why:'...' }, ... (3-4) ]
});
```
`id`, `area`, `areaIcon` y `title` deben coincidir con el catálogo. El campo `norma` va siempre lleno (si no hay norma, el principio clave).

## Reglas de HTML/JS
- HTML permitido SOLO: `<p> <b> <ul><li> <ol><li> <table><tr><th><td> <span class="hl">`. Nada de script/style/clases inventadas.
- Cadenas JS con comilla simple; atributos HTML con comilla doble. Escapa apóstrofes como `\'`. SIN comillas tipográficas curvas (usa « » angulares si necesitas citar). Sin markdown ni texto fuera del objeto. El archivo empieza con `Lesson.start({` y termina con `});`.
- Varía el orden de las opciones del quiz (que `correct` no sea siempre el mismo índice).

## Rigor (innegociable)
- Español didáctico, para alcaldes, gerentes municipales, equipos de proyectos (UF/UEI/OPMI) y empresas privadas. Explica SIEMPRE el porqué, no solo el dato.
- Normas SOLO por su nombre. Con número únicamente las que figuran en `INV-OXI.md`: Ley 29230, DL 1534, Ley 32460, DS 038-2026-EF (reglamento vigente desde el 14/03/2026, derogó al DS 210-2022-EF y al DS 011-2024-EF), Ley 27506 (canon). NUNCA inventes números de artículo, numeral, decreto ni resolución.
- Todo lo que `INV-OXI.md` marca NO CONFIRMADO se describe en términos generales y con «verificar la norma vigente y el expediente técnico aprobado». No des como definitivos: porcentajes de tope de certificados (di «según reportes del reglamento vigente, hasta el 80 % de la deuda tributaria aplicable; verificar en el texto»), plazos exactos, montos de fianzas, límites de capacidad. Cada lección técnica incluye esa coletilla al menos una vez (en una sección o en `norma`).
- NUNCA prometas que una empresa financiará, ni plazos ni montos de recupero garantizados. Cifras de contexto (p. ej. récord 2025: 501 proyectos, S/ 5 180 millones) solo con año y fuente (ProInversión/MEF), y solo si aportan.
- Casos ficticios: Municipalidad Distrital de Villa Esperanza, Empresa Andina S.A.A. Sin nombres, montos ni CUI reales. Ejemplos numéricos: márcalos «ejemplo ilustrativo».
- No reemplaza asesoría legal, tributaria ni técnica. Enlaza en UNA frase a las apps hermanas cuando aplique (Legal Obra PRO, Invierte Experto, Licita PRO, Gestión Pública PRO, Postula PRO, Expediente Experto, Valoriza, Adicional y Deductivo); no dupliques su contenido.
- Guías/FAQ anteriores a marzo de 2026 describen el régimen derogado: no las presentes como vigentes.

## Cierre
Devuelve SOLO la lista de archivos creados. Antes de terminar, valida tus archivos: `cd /home/user/obras-por-impuestos-pro/assets/web && node ../../scripts/validate_lessons.js 2>&1 | grep -E "<tus ids>"` (los ids faltantes de otras áreas aparecerán como FALTA: ignóralos; corrige cualquier WARN/RUNTIME de tus archivos).
