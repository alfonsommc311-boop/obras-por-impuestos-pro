# Obras por Impuestos PRO — reglas del proyecto

App formativa Android de la familia "Experto/PRO" (Flutter WebView + TTS, offline). Lee `PLAN.md` antes de tocar nada.

## Identidad
- Nombre: **Obras por Impuestos PRO** · `com.alfonso.obrasporimpuestospro` · prefijo de storage `oxi` · carpeta prevista `D:\obras por impuestos pro`.
- Puerto **9053**. El plan decía 9051, pero `ports.md` ya lo asigna a GitHub PRO (9052 = Liderazgo de Equipos de Obra PRO). Reconfirmar antes de compilar.
- Colores: azul institucional (#1d4ed8 → #0f172a) con acento dorado (#f2b134). No repetir verde (Riqueza) ni dorado puro (Legal Obra).
- Clon estructural de MiroFish PRO (shell + motor de lecciones + herramientas).

## Reglas de contenido
- Normas **siempre por su nombre**, sin inventar número de artículo, numeral ni decreto; coletilla fija **«verificar la norma vigente y el expediente técnico aprobado»**. Solo se nombran con número las normas confirmadas en `_brief/INV-OXI.md`.
- Nunca prometer que una empresa financiará, ni plazos ni montos de recupero garantizados. Cifras solo si están en `_brief/INV-OXI.md` con año y fuente.
- Casos ficticios: Municipalidad Distrital de Villa Esperanza, Empresa Andina S.A.A. No usar nombres, montos ni CUI reales.
- No reemplaza asesoría legal, tributaria ni técnica (disclaimer en home y herramientas). Fecha de corte visible en el home.
- Enlazar (una frase) a las apps hermanas en lugar de duplicarlas: Legal Obra PRO, Invierte Experto, Licita PRO, Gestión Pública PRO, Postula PRO, Expediente Experto, Valoriza, Adicional y Deductivo.
- Ids de lección ASCII kebab-case. HTML permitido solo: p, b, ul/ol/li, table/tr/th/td, span.hl.

## Validación
`cd assets/web && node ../../scripts/validate_lessons.js` → debe dar `problemas=0 faltantes=0 huerfanos=0`.
Vista previa: `cd assets/web && python3 -m http.server 9053`.

## Pendiente en la PC del usuario
`flutter create` no hace falta (android/ está incluido); ícono (`make_icon.py`), `flutter build apk --release`, instalar por adb, fila en `ports.md` (9053), `apps_db.py construir && indexar`.
