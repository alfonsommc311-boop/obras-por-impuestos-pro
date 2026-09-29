# Obras por Impuestos PRO

App formativa Android (Flutter WebView + TTS, offline) para alcaldes, gerentes municipales, equipos de proyectos (UF/UEI/OPMI) y empresas: del proyecto priorizado a la empresa que lo financia, hasta usar el certificado.
Puerto 9053 · `com.alfonso.obrasporimpuestospro` · prefijo de storage `oxi`. 14 áreas, 88 lecciones, 8 herramientas.

- `PLAN.md` / `CLAUDE.md`: plan y reglas del proyecto.
- `_brief/`: investigación normativa (`INV-OXI.md`, con lo NO CONFIRMADO marcado) y guía de redacción. No se empaqueta.
- `assets/web/`: la app (home, visor de lección, motor, catálogo, lecciones, herramientas).
- `lib/main.dart`, `pubspec.yaml`, `android/`: shell Flutter.
- Validar: `cd assets/web && node ../../scripts/validate_lessons.js` → `problemas=0 faltantes=0 huerfanos=0`.
- Vista previa: `cd assets/web && python3 -m http.server 9053`.

Pendiente en tu PC: `flutter pub get`, `dart run flutter_launcher_icons`, `flutter build apk --release`, instalar por adb, fila en `ports.md` (9053) y cierre en `apps_db.py`.
Antes de publicar: contrastar con el texto oficial del DS 038-2026-EF los puntos marcados NO CONFIRMADO en `_brief/INV-OXI.md` (tope de uso de certificados, vigencia, cesión, garantías, etapas de la iniciativa privada).
