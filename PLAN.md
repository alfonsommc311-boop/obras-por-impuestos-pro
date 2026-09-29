# PLAN — "Obras por Impuestos PRO" (app formativa, familia Experto/PRO)

## 1. Propósito
Aplicativo Android sin internet para que **alcaldes, gerentes municipales, equipos de proyectos (UF/UEI/OPMI) y
empresas privadas** entiendan y ejecuten el mecanismo de Obras por Impuestos (OxI): cómo priorizar un
proyecto, conseguir un financista, llegar a la adjudicación, ejecutar, recibir la obra y recuperar el
crédito fiscal. Meta práctica: **que un municipio pase de "tengo una idea" a "tengo una empresa financiando mi obra"**.

## 2. Identidad (según el patrón de tu skill `app-formativa-flutter`)
| Campo | Valor |
|---|---|
| Nombre visible | Obras por Impuestos PRO |
| applicationId | `com.alfonso.obrasporimpuestospro` |
| Carpeta | `D:\obras por impuestos pro` |
| Puerto InAppLocalhostServer | **9051** (siguiente libre tras 9050 MiroFish PRO; reconfirmar en `ports.md` antes de clonar) |
| Prefijo Store | `oxi-` |
| Clonar de | **Legal Obra PRO (8997)** o **Metrados PRO** (traen el patrón de herramientas) + motor con `steps`/`materials`/`errors`/`formulas` de Comunica/Riqueza PRO |
| Ícono | Apretón de manos (municipio + empresa) o edificio municipal con moneda/sello; degradado **azul institucional → dorado** (no repetir colores usados: verde Riqueza, dorado Legal Obra → usar azul #1d4ed8→#0f172a con acento dorado) |
| Ejecución previa | `python apps_db.py planear "obras por impuestos"` (huecos ya cubiertos: Invierte Experto, Legal Obra PRO, Licita PRO, Gestión Pública PRO, Postula PRO, Expediente Experto) |

## 3. Catálogo (14 áreas / ~85 lecciones)
1. **Qué es OxI y por qué le conviene al alcalde** — mecanismo en 1 página, quién gana qué, casos de éxito, mitos.
2. **Marco normativo** — Ley 29230 y su Reglamento vigente, normas de Invierte.pe, ProInversión, MEF, SUNAT, Contraloría (siempre por nombre; sin inventar artículos).
3. **Actores y roles** — entidad pública (GR/GL), empresa privada, ProInversión, MEF/DGPMI, SUNAT, Contraloría, supervisor, EPS/sectores.
4. **Dos modalidades** — iniciativa de la entidad vs. iniciativa privada (cofinanciada/autofinanciada): cuándo usar cada una.
5. **Cartera priorizada** — cómo un proyecto entra al listado priorizado, criterios de brecha, sectores típicos (agua, salud, educación, vías, seguridad).
6. **Invierte.pe aplicado a OxI** — CUI, idea, perfil/ficha, expediente técnico, viabilidad, formatos.
7. **Atraer al financista** — qué mira una empresa (tributos, capacidad de pago de impuesto a la renta, riesgo, plazos), ficha comercial del proyecto, ruedas de inversionistas.
8. **Convenio e inversión** — convenio de inversión, capacidad presupuestal, garantías, cartas fianza, fideicomiso.
9. **Proceso de selección** — bases, factores, comité, empresa ejecutora y supervisora, impugnaciones.
10. **Ejecución de obra** — expediente técnico, adicionales/deductivos, valorizaciones, cuaderno de obra, SSOMA, plazos (enlaza a tus apps Legal Obra, Valoriza, Adicional y Deductivo).
11. **Supervisión y control** — supervisor, control concurrente de Contraloría, hitos, informes.
12. **Recepción, liquidación y CIPRL/CIPGN** — certificados de inversión pública, monto, oportunidad de emisión, uso contra el impuesto a la renta, cesión.
13. **Mantenimiento y sostenibilidad** — operación posterior, transferencia, riesgos de obra abandonada.
14. **El alcalde impulsor (integradora)** — ruta 90 días, 5 casos resueltos, errores que matan un proyecto OxI, decálogo, examen final.

## 4. Herramientas (patrón Legal Obra / Comunica: páginas .html + `assets/tools.js`)
- `diagnostico.html` — **¿Está mi proyecto listo para OxI?** Test de ~28 preguntas en 7 dimensiones (idea/CUI, expediente, brecha/priorización, capacidad institucional, atractivo para financista, riesgos, sostenibilidad) → semáforo + plan de 3 acciones enlazadas a lecciones.
- `ficha.html` — **Ficha de proyecto para inversionistas** (rellenable → portapapeles/exportar).
- `ruta.html` — **Ruta paso a paso** de la entidad con casillas y fecha por hito (Store).
- `checklist.html` — verificadores con ítems críticos (expediente listo, convenio, garantías, recepción).
- `escritos.html` — plantillas: carta de invitación a empresas, expresión de interés, oficio a ProInversión, acta de hito, conformidad, etc.
- `calculadoras.html` — capacidad de financiamiento de una empresa vs. costo de la obra, cronograma de recupero del certificado, costo financiero/supervisión.
- `casos.html` — banco de casos (proyecto real → qué se hizo → qué falló).

## 5. Fuentes y rigor (reglas de la casa)
- Normas **siempre por nombre**, sin inventar número de artículo/numeral; coletilla fija **"verificar la norma vigente y el expediente técnico aprobado"**.
- No prometer que una empresa financiará, ni plazos ni montos de recuperación garantizados.
- Fuentes a extraer en `_fuentes/` (no se empaquetan): Ley 29230 y Reglamento vigentes, guías/portal de ProInversión, cartera y casos publicados por ProInversión, normativa Invierte.pe, directivas MEF/SUNAT sobre certificados. Buscar en la web y contrastar antes de generar lecciones.
- Referencia cruzada con tus apps ya hechas (Legal Obra, Invierte, Licita, Expediente, Valoriza) para no duplicar y enlazar.

## 6. Fases de trabajo
| Fase | Entregable | Cómo |
|---|---|---|
| 0 | Investigación normativa y de casos → `_fuentes/*.txt` + `REGLAS-AGENTE.md` | Búsqueda web + lectura de PDFs oficiales |
| 1 | Clon del shell con `clone_app.ps1`, puerto 9051, Impeller OFF verificado | Script del skill |
| 2 | `catalog.js` (14 áreas/~85 lecciones), textos del home | Manual |
| 3 | Lecciones por subagentes en paralelo (1 por área, tandas de 4–5, background) | Plantilla `agent-prompt-template.md` |
| 4 | Herramientas + datos (`banco.js`, `casos.js`, `reto.js`) | Reescribir las de Legal Obra/Comunica |
| 5 | `validate_lessons.js` → `problemas=0` + revisión de citas normativas | Validador + auditoría |
| 6 | Ícono propio, `flutter build apk --release`, instalar por adb | Skill |
| 7 | Cierre: fila en `ports.md`, `apps_db.py construir && indexar`, APK a Escritorio/Descargas | Skill |

## 7. Riesgos
- **Normativa cambiante** (reglamento y directivas se actualizan): fecha de corte visible en el home + coletilla.
- Contenido legal/tributario: no reemplaza asesoría; disclaimer en home y herramientas.
- Ruta de carpeta ASCII (ya lo es) para evitar el fallo de build.

## 8. Extensión futura (opcional)
Versión "panel para el alcalde" en 1 página (PDF/PPT) y módulo de seguimiento de la cartera del municipio.
