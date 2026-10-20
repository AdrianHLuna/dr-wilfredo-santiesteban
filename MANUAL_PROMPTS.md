# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dr. Wilfredo Marcial Santiesteban Herrera — Cirugía General
**Ciudad:** Tuxtla Gutiérrez, Chiapas
**Especialidad:** Cirujano General

**Nota de discreción clínica:** este catálogo incluye varios padecimientos de alta sensibilidad visual — enfermedad hemorroidal, fisuras anales, fístulas y abscesos perianales, enfermedad pilonidal, úlceras de pie diabético e infecciones de heridas posoperatorias. Todos los prompts de estos temas están redactados para verse **clínicos y educativos, nunca gráficos ni explícitos**: primeros planos discretos de vendaje, exploración con guantes, diagramas anatómicos esquemáticos de corte transversal, o encuadres de paciente que nunca muestran desnudez, la región anal/genital, tejido necrótico, ni pus/sangre en primer plano abierto. Cada prompt representa visualmente el tema real que describe (nunca una escena genérica de "persona viendo una tablet" desconectada del padecimiento, síntoma o procedimiento específico — lección aplicada tras corrección directa del usuario en manuales anteriores).

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/...jpg`).

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud y sitios web de Cirugía General de alta gama.
Tono: Preciso, discreto y de autoridad clínica (Cirugía General), elegante y editorial — nunca explícito ni gráfico.
Estilo: Fotorrealismo y renders 3D de anatomía (abdominal, digestiva, de piel y tejidos blandos) para enfermedades y procedimientos; fotografía clínica discreta de alta gama para exploraciones y curaciones; fotografía de escenas cotidianas de paciente, con iluminación cálida y elegante, para síntomas.
Identidad visual OBLIGATORIA (viene de la paleta real de marca del doctor, estilo "Minimalista de Lujo"): tinta/ink casi negro (#212224), dorado cálido (#BCA488) como único acento, crema claro (#FAF8F5) como fondo dominante — ambientes luminosos y elegantes, nunca oscuros/carbon ni neón.
Restricciones: Cero desnudez, cero exposición de la región anal o genital, cero heridas abiertas explícitas, tejido necrótico, sangre abundante o contenido gráfico/desagradable — usar vendajes, guantes de exploración, diagramas anatómicos esquemáticos o encuadres discretos en su lugar. Prohibidos hologramas, neones, HUDs interactivos o elementos de ciencia ficción. Cero palabras, texto, marcas de agua, firmas o números.
Formato: JPG horizontal de aspecto 16:9 (--ar 16:9 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Clean, bright, warm editorial lighting — soft natural light or elegant studio light, never dark/moody.
- Color Palette: Ink Black (#212224), Warm Gold (#BCA488), Cream (#FAF8F5), Soft Taupe (#D9D2C7), natural skin tones.
- Composition: Centered, calm, editorial framing with generous negative space — elegant, never cluttered or clinical-cold.
- Suffixes: realistic medical CGI or high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
- Negative Prompt: hologram, sci-fi, futuristic, neon, glowing digital UI, hud, blueprints, user interface, text, words, letters, watermark, signature, nudity, explicit gore, open wound close-up, necrotic tissue, excessive blood, dark/carbon background.

Estas son instrucciones, no hagas imágenes todavía.
```

---

## 🩺 SECCIÓN 1: PROMPTS PARA ENFERMEDADES

### 1. Colelitiasis (`public/enfermedades/colelitiasis.jpg`)
```text
3D anatomical illustration of a gallbladder cross-section showing several smooth, solid round gallstones clustered inside its cavity, clean elegant medical textbook style.

Lighting: Soft warm studio lighting, clean highlight on the gallstones.
Color Palette: Gold (#BCA488) gallstones, Ink Black (#212224) outline details, Cream (#FAF8F5) background, muted organic tissue tones.
Composition: Centered cross-section of the gallbladder, macro framing, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore, dark background.
```

### 2. Colecistitis aguda (`public/enfermedades/colecistitis-aguda.jpg`)
```text
3D anatomical illustration of an inflamed, reddened and swollen gallbladder wall with a gallstone blocking its outlet duct, clean educational cross-section style conveying acute inflammation without graphic detail.

Lighting: Focused clean studio spotlighting on the inflamed segment.
Color Palette: Soft Taupe (#D9D2C7) and muted warm red inflammation tone, Ink Black (#212224) outline, Cream (#FAF8F5) background.
Composition: Centered longitudinal cross-section, macro clinical framing.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, excessive blood, gore.
```

### 3. Pólipos de la vesícula biliar (`public/enfermedades/polipos-de-la-vesicula-biliar.jpg`)
```text
3D anatomical illustration of the inner wall of a gallbladder showing two or three small smooth polyps protruding from the mucosal lining, clean educational textbook style, calm and non-threatening tone.

Lighting: Bright even studio lighting, soft highlight on the polyp surfaces.
Color Palette: Gold (#BCA488) polyp accents, Soft Taupe (#D9D2C7) tissue wall, Cream (#FAF8F5) background.
Composition: Centered interior view of the gallbladder wall, macro framing.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 4. Hernia inguinal (`public/enfermedades/hernia-inguinal.jpg`)
```text
3D anatomical cross-section illustration of the lower abdominal wall in the groin area showing a small loop of tissue protruding through a weak point in the muscle layer, clean clinical educational style, no skin surface shown.

Lighting: Clean bright studio lighting with a focused highlight on the protrusion.
Color Palette: Ink Black (#212224) muscle layer outlines, Gold (#BCA488) accent on the protruding tissue, Cream (#FAF8F5) background.
Composition: Centered cross-section of the abdominal wall layers at the groin.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, nudity, blood, gore.
```

### 5. Hernia umbilical (`public/enfermedades/hernia-umbilical.jpg`)
```text
3D anatomical cross-section illustration of the abdominal wall at the navel showing a small bulge of tissue protruding through the umbilical ring, clean clinical educational style, no skin surface shown.

Lighting: Clean bright studio lighting with a focused highlight on the umbilical ring.
Color Palette: Ink Black (#212224) wall outlines, Gold (#BCA488) accent on the protrusion, Cream (#FAF8F5) background.
Composition: Centered cross-section at the umbilical area.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, nudity, blood, gore.
```

### 6. Hernia epigástrica (`public/enfermedades/hernia-epigastrica.jpg`)
```text
3D anatomical cross-section illustration of the abdominal midline between the sternum and navel showing a small protrusion of fatty tissue through the linea alba, clean clinical educational style.

Lighting: Clean bright studio lighting, soft highlight on the protruding fat tissue.
Color Palette: Soft Taupe (#D9D2C7) fat tissue, Ink Black (#212224) muscle outlines, Cream (#FAF8F5) background.
Composition: Centered cross-section of the upper abdominal midline.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, nudity, blood, gore.
```

### 7. Hernia incisional y eventraciones (`public/enfermedades/hernia-incisional-y-eventraciones.jpg`)
```text
3D anatomical cross-section illustration of an abdominal wall with a healed surgical scar line that has weakened, showing tissue bulging through the old incision, clean clinical educational style.

Lighting: Clean bright studio lighting, focused highlight on the weakened scar segment.
Color Palette: Ink Black (#212224) scar line and wall outline, Gold (#BCA488) accent on the protrusion, Cream (#FAF8F5) background.
Composition: Centered cross-section along the scar line.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, nudity, blood, gore, open wound.
```

### 8. Apendicitis aguda (`public/enfermedades/apendicitis-aguda.jpg`)
```text
3D anatomical illustration of the lower right abdomen showing an inflamed, swollen appendix attached to the large intestine, clean urgent but non-graphic clinical textbook style.

Lighting: Focused clinical spotlighting on the inflamed appendix.
Color Palette: Soft muted warm red inflammation tone, Ink Black (#212224) intestine outline, Cream (#FAF8F5) background.
Composition: Centered anatomical view of the appendix and adjacent intestine.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, excessive blood, gore.
```

### 9. Lipomas (`public/enfermedades/lipomas.jpg`)
```text
Discreet clinical photograph of a gloved hand gently palpating a small, soft, round lump beneath the skin of a patient's upper arm, calm consultation-room setting, skin fully covered elsewhere.

Lighting: Bright clean warm clinical lighting.
Color Palette: Ink Black (#212224) glove, Cream (#FAF8F5) linens, natural skin tone.
Composition: Medium close-up on the hand and arm, no face visible.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI look, blood, gore, nudity.
```

### 10. Quistes sebáceos y epidérmicos (`public/enfermedades/quistes-sebaceos-y-epidermicos.jpg`)
```text
Discreet clinical photograph of a gloved hand examining a small, smooth, round bump beneath the skin on the back of a patient's neck, calm consultation-room setting, fully non-graphic.

Lighting: Bright clean warm clinical lighting.
Color Palette: Ink Black (#212224) glove, Gold (#BCA488) subtle accent in the room, natural skin tone.
Composition: Medium close-up on the hand and neck area, no face visible.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI look, blood, gore, nudity.
```

### 11. Abscesos de piel y tejidos blandos (`public/enfermedades/abscesos-de-piel-y-tejidos-blandos.jpg`)
```text
Discreet clinical photograph of a gloved hand gently pressing around a visibly reddened, slightly swollen area of skin on a patient's forearm to assess it, calm clinical exam setting, no open wound visible.

Lighting: Bright clean clinical lighting.
Color Palette: Ink Black (#212224) glove, soft muted warm red skin tone accent, Cream (#FAF8F5) surroundings.
Composition: Medium close-up on the hand and forearm, no face visible.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, open wound, pus, necrotic tissue, blood, gore.
```

### 12. Enfermedad hemorroidal (`public/enfermedades/enfermedad-hemorroidal.jpg`)
```text
3D anatomical cross-section illustration of the lower rectum showing dilated, swollen blood vessels (hemorrhoidal cushions) along the anal canal wall, clean sterile educational textbook diagram style, entirely schematic.

Lighting: Bright even clinical studio lighting.
Color Palette: Gold (#BCA488) and soft muted warm red vessel tones, Ink Black (#212224) outline, Cream (#FAF8F5) background.
Composition: Centered schematic cross-section of the anal canal, macro diagram framing.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, nudity, blood, gore, explicit anatomy, graphic content.
```

### 13. Fisuras anales (`public/enfermedades/fisuras-anales.jpg`)
```text
3D anatomical cross-section illustration of the anal canal lining showing a small, thin tear in the mucosal tissue, clean sterile educational textbook diagram style, entirely schematic and non-graphic.

Lighting: Bright even clinical studio lighting, focused highlight on the tear.
Color Palette: Soft Taupe (#D9D2C7) tissue tone, Ink Black (#212224) outline, Cream (#FAF8F5) background.
Composition: Centered schematic cross-section, macro diagram framing.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, nudity, blood, gore, explicit anatomy, graphic content.
```

### 14. Fístulas y abscesos perianales (`public/enfermedades/fistulas-y-abscesos-perianales.jpg`)
```text
3D anatomical schematic illustration of a small abnormal tunnel-like tract running between the anal canal and the skin surface nearby, clean sterile educational diagram style, entirely non-graphic.

Lighting: Bright even clinical studio lighting, focused highlight along the tract.
Color Palette: Ink Black (#212224) tract outline, Gold (#BCA488) accent, Cream (#FAF8F5) background.
Composition: Centered schematic cross-section, macro diagram framing.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, nudity, blood, pus, gore, explicit anatomy, graphic content.
```

### 15. Enfermedad pilonidal (`public/enfermedades/enfermedad-pilonidal.jpg`)
```text
3D anatomical schematic illustration of the skin fold above the tailbone showing a small inflamed tract beneath the surface, clean sterile educational diagram style, entirely non-graphic, no exposed skin region shown directly.

Lighting: Bright even clinical studio lighting, focused highlight on the inflamed tract.
Color Palette: Soft muted warm red inflammation tone, Ink Black (#212224) outline, Cream (#FAF8F5) background.
Composition: Centered schematic cross-section, macro diagram framing.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, nudity, blood, pus, gore, explicit anatomy, graphic content.
```

### 16. Diverticulitis aguda y enfermedad diverticular (`public/enfermedades/diverticulitis-y-enfermedad-diverticular.jpg`)
```text
3D anatomical illustration of a segment of the colon wall showing several small pouch-like outward bulges (diverticula), with one appearing inflamed, clean educational textbook cross-section style.

Lighting: Bright clean studio lighting, focused highlight on the inflamed diverticulum.
Color Palette: Gold (#BCA488) and soft muted warm red tones, Ink Black (#212224) colon outline, Cream (#FAF8F5) background.
Composition: Centered longitudinal view of the colon segment, macro framing.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 17. Obstrucción intestinal (`public/enfermedades/obstruccion-intestinal.jpg`)
```text
3D anatomical illustration of a segment of the small intestine fully distended and blocked by a band of scar tissue (adhesion) compressing it from outside, clean urgent but non-graphic clinical textbook style.

Lighting: Dramatic but clean focused clinical spotlighting to convey urgency.
Color Palette: Ink Black (#212224) adhesion band, Soft Taupe (#D9D2C7) distended intestine, Cream (#FAF8F5) background.
Composition: Centered longitudinal view of the obstructed intestinal segment.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, excessive blood, gore.
```

### 18. Nódulos tiroideos y bocio (`public/enfermedades/nodulos-tiroideos-y-bocio.jpg`)
```text
3D anatomical illustration of the thyroid gland in the neck showing one visible smooth rounded nodule within the gland tissue, clean educational textbook style, neck silhouette shown schematically.

Lighting: Bright clean studio lighting, soft highlight on the nodule.
Color Palette: Gold (#BCA488) nodule accent, Ink Black (#212224) gland outline, Cream (#FAF8F5) background.
Composition: Centered anatomical view of the thyroid gland and neck silhouette.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore, visible face.
```

### 19. Tumores de piel y tejidos blandos (`public/enfermedades/tumores-de-piel-y-tejidos-blandos.jpg`)
```text
Discreet clinical photograph of a gloved hand carefully examining a small raised lesion on a patient's shoulder with a measuring instrument, calm consultation-room setting, fully non-graphic.

Lighting: Bright clean warm clinical lighting.
Color Palette: Ink Black (#212224) glove, Gold (#BCA488) instrument accent, natural skin tone.
Composition: Medium close-up on the hand, instrument and shoulder, no face visible.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, blood, gore, nudity, graphic content.
```

### 20. Patología quirúrgica del colon (`public/enfermedades/patologia-quirurgica-del-colon.jpg`)
```text
3D anatomical illustration of a full healthy colon with one highlighted segment showing a subtle abnormal change in the wall lining, clean educational textbook overview style.

Lighting: Bright even studio lighting, soft highlight on the affected segment.
Color Palette: Gold (#BCA488) highlighted segment, Ink Black (#212224) colon outline, Cream (#FAF8F5) background.
Composition: Centered full anatomical overview of the colon.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 21. Heridas quirúrgicas complicadas (`public/enfermedades/heridas-quirurgicas-complicadas.jpg`)
```text
Discreet clinical photograph of a healthcare provider's gloved hands carefully inspecting the edge of a clean, fully closed and bandaged surgical incision on a patient's abdomen, calm follow-up visit setting, no open wound visible.

Lighting: Bright clean clinical lighting.
Color Palette: Ink Black (#212224) gloves, Cream (#FAF8F5) bandage and linens, Gold (#BCA488) subtle accent.
Composition: Medium close-up on the hands and bandaged area, fully non-graphic.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, open wound, necrotic tissue, blood, gore, nudity.
```

### 22. Infecciones de heridas y complicaciones posoperatorias (`public/enfermedades/infecciones-de-heridas-y-complicaciones-posoperatorias.jpg`)
```text
Discreet clinical photograph of a healthcare provider's gloved hands changing a sterile dressing over a bandaged area during a follow-up consultation, organized wound-care tray visible nearby, calm professional tone, no open wound visible.

Lighting: Bright clean clinical lighting.
Color Palette: Ink Black (#212224) gloves, Gold (#BCA488) tray accents, Cream (#FAF8F5) dressing and surfaces.
Composition: Medium close-up on the hands and dressing change, fully non-graphic.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, open wound, necrotic tissue, blood, gore, nudity.
```

### 23. Úlceras de pie diabético (`public/enfermedades/ulceras-de-pie-diabetico.jpg`)
```text
Discreet clinical photograph of a healthcare provider's gloved hands gently and carefully inspecting a patient's foot resting on a clean cloth, checking the skin with a soft focus on a small neatly bandaged area, calm consultation-room setting, no open wound visible.

Lighting: Bright clean clinical lighting.
Color Palette: Ink Black (#212224) gloves, Cream (#FAF8F5) cloth and bandage, Gold (#BCA488) subtle accent.
Composition: Medium close-up on the hands and foot, fully non-graphic.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, open wound close-up, necrotic tissue, blood, gore, nudity.
```

### 24. Dolor abdominal de probable origen quirúrgico (`public/enfermedades/dolor-abdominal-de-probable-origen-quirurgico.jpg`)
```text
Photorealistic photo of a person sitting on an exam table, both hands pressed gently against their lower abdomen with a pained, concerned expression, calm clinical consultation room in the background, elegant warm lighting.

Lighting: Bright warm clinical daylight.
Color Palette: Ink Black (#212224) clothing, Gold (#BCA488) subtle room accent, Cream (#FAF8F5) walls and linens.
Composition: Medium shot centered on the seated person and their hands on the abdomen, face partially visible but not the focus.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore, nudity.
```

---

## 🏥 SECCIÓN 2: PROMPTS PARA SERVICIOS Y PROCEDIMIENTOS

### 1. Colecistectomía laparoscópica (`public/servicios/colecistectomia-laparoscopica.jpg`)
```text
Clinical photorealistic photograph of a surgical team performing minimally invasive laparoscopic surgery in a modern operating room, laparoscopic tower and monitor displaying an internal camera view, sterile blue drapes, focused overhead surgical light.

Lighting: Bright focused operating theater lighting with monitor glow.
Color Palette: Ink Black (#212224) surgical drapes, Gold (#BCA488) monitor and equipment accents, Cream (#FAF8F5) ambient tones.
Composition: Wide clinical shot of the surgical team and laparoscopic equipment, surgical field fully and appropriately draped.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, text, watermark, blood, gore, explicit incision detail.
```

### 2. Plastía de hernia inguinal (`public/servicios/plastia-de-hernia-inguinal.jpg`)
```text
3D medical rendering of a surgical mesh being placed to reinforce the lower abdominal wall at the groin area, sterile schematic illustration of the repair technique, clean educational style.

Lighting: Clean studio spotlighting with soft gold reflections.
Color Palette: Gold (#BCA488) mesh material, Ink Black (#212224) tissue outline, Cream (#FAF8F5) background.
Composition: Centered anatomical cross-section showing the mesh placement.
Suffixes: realistic medical CGI, 8k render, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: text, watermark, signature, blood, gore, nudity.
```

### 3. Plastía de hernia umbilical (`public/servicios/plastia-de-hernia-umbilical.jpg`)
```text
3D medical rendering of a surgical mesh reinforcing the abdominal wall at the navel area, sterile schematic illustration of the repair technique, clean educational style.

Lighting: Clean studio spotlighting with soft gold reflections.
Color Palette: Gold (#BCA488) mesh material, Ink Black (#212224) tissue outline, Cream (#FAF8F5) background.
Composition: Centered anatomical cross-section at the umbilical area.
Suffixes: realistic medical CGI, 8k render, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: text, watermark, signature, blood, gore, nudity.
```

### 4. Plastía de hernia epigástrica (`public/servicios/plastia-de-hernia-epigastrica.jpg`)
```text
3D medical rendering of a small surgical mesh reinforcing the abdominal midline between the sternum and navel, sterile schematic illustration of the repair technique, clean educational style.

Lighting: Clean studio spotlighting with soft gold reflections.
Color Palette: Gold (#BCA488) mesh material, Ink Black (#212224) tissue outline, Cream (#FAF8F5) background.
Composition: Centered anatomical cross-section of the upper abdominal midline.
Suffixes: realistic medical CGI, 8k render, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: text, watermark, signature, blood, gore, nudity.
```

### 5. Plastía de hernia incisional (`public/servicios/plastia-de-hernia-incisional.jpg`)
```text
3D medical rendering of a larger surgical mesh reinforcing the abdominal wall along a previous scar line, sterile schematic illustration of the repair technique, clean educational style.

Lighting: Clean studio spotlighting with soft gold reflections.
Color Palette: Gold (#BCA488) mesh material, Ink Black (#212224) scar line and tissue outline, Cream (#FAF8F5) background.
Composition: Centered anatomical cross-section along the scar line.
Suffixes: realistic medical CGI, 8k render, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: text, watermark, signature, blood, gore, nudity, open wound.
```

### 6. Apendicectomía (`public/servicios/apendicectomia.jpg`)
```text
Clinical photorealistic photograph of a surgical team performing laparoscopic surgery in a modern operating room, monitor displaying an internal camera view of the lower abdomen, sterile blue drapes, focused overhead surgical light.

Lighting: Bright focused operating theater lighting with monitor glow.
Color Palette: Ink Black (#212224) surgical drapes, Gold (#BCA488) monitor and equipment accents, Cream (#FAF8F5) ambient tones.
Composition: Wide clinical shot of the surgical team and laparoscopic equipment.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, text, watermark, blood, gore, explicit incision detail.
```

### 7. Exéresis de lipomas (`public/servicios/exeresis-de-lipomas.jpg`)
```text
Discreet clinical photograph of a gloved hand holding a small sterile surgical tray with suture material, preparing for a minor outpatient excision procedure on a patient's arm, calm clean clinic setting.

Lighting: Bright clean clinical lighting.
Color Palette: Ink Black (#212224) gloves, Gold (#BCA488) tray accents, Cream (#FAF8F5) surroundings.
Composition: Medium close-up on the hand, tray and arm, no face visible.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, text, watermark, blood, gore, open wound, nudity.
```

### 8. Exéresis de quistes sebáceos y epidérmicos (`public/servicios/exeresis-de-quistes.jpg`)
```text
Discreet clinical photograph of a gloved hand preparing sterile surgical instruments on a clean tray for a minor outpatient excision procedure, calm clinic setting, patient's shoulder visible in soft focus.

Lighting: Bright clean clinical lighting.
Color Palette: Ink Black (#212224) gloves, Gold (#BCA488) instrument accents, Cream (#FAF8F5) surroundings.
Composition: Medium close-up on the hand and instrument tray, no face visible.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, text, watermark, blood, gore, open wound, nudity.
```

### 9. Drenaje de abscesos de piel y tejidos blandos (`public/servicios/drenaje-de-abscesos-de-piel.jpg`)
```text
Discreet clinical photograph of a gloved hand applying a fresh sterile dressing to a small treated area on a patient's arm after a minor procedure, calm clean clinic setting, no open wound visible.

Lighting: Bright clean clinical lighting.
Color Palette: Ink Black (#212224) gloves, Cream (#FAF8F5) dressing, Gold (#BCA488) subtle accent.
Composition: Medium close-up on the hand and dressing application, fully non-graphic.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, text, watermark, open wound, pus, necrotic tissue, blood, gore.
```

### 10. Hemorroidectomía (`public/servicios/hemorroidectomia.jpg`)
```text
Clinical photorealistic photograph of a surgical team preparing for a minor outpatient procedure in a modern operating room, sterile instrument tray and drapes visible, focused overhead surgical light, entirely non-graphic framing.

Lighting: Bright focused operating theater lighting.
Color Palette: Ink Black (#212224) surgical drapes, Gold (#BCA488) instrument tray accents, Cream (#FAF8F5) ambient tones.
Composition: Wide clinical shot of the surgical team and instrument tray, no surgical site detail shown.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, text, watermark, blood, gore, nudity, explicit anatomy, graphic content.
```

### 11. Tratamiento quirúrgico de fisura anal (`public/servicios/tratamiento-de-fisura-anal.jpg`)
```text
Clinical photorealistic photograph of a surgical team preparing sterile instruments for a minor outpatient procedure in a modern operating room, focused overhead surgical light, entirely non-graphic framing.

Lighting: Bright focused operating theater lighting.
Color Palette: Ink Black (#212224) surgical drapes, Gold (#BCA488) instrument tray accents, Cream (#FAF8F5) ambient tones.
Composition: Wide clinical shot of the surgical team and instrument tray, no surgical site detail shown.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, text, watermark, blood, gore, nudity, explicit anatomy, graphic content.
```

### 12. Tratamiento quirúrgico de fístulas y abscesos perianales (`public/servicios/tratamiento-de-fistulas-perianales.jpg`)
```text
Clinical photorealistic photograph of a surgical team preparing sterile instruments and drapes for a minor outpatient procedure in a modern operating room, focused overhead surgical light, entirely non-graphic framing.

Lighting: Bright focused operating theater lighting.
Color Palette: Ink Black (#212224) surgical drapes, Gold (#BCA488) instrument tray accents, Cream (#FAF8F5) ambient tones.
Composition: Wide clinical shot of the surgical team and instrument tray, no surgical site detail shown.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, text, watermark, blood, pus, gore, nudity, explicit anatomy, graphic content.
```

### 13. Cirugía de quiste pilonidal (`public/servicios/cirugia-de-quiste-pilonidal.jpg`)
```text
Clinical photorealistic photograph of a surgical team preparing sterile instruments and drapes for a minor outpatient procedure in a modern operating room, focused overhead surgical light, entirely non-graphic framing.

Lighting: Bright focused operating theater lighting.
Color Palette: Ink Black (#212224) surgical drapes, Gold (#BCA488) instrument tray accents, Cream (#FAF8F5) ambient tones.
Composition: Wide clinical shot of the surgical team and instrument tray, no surgical site detail shown.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, text, watermark, blood, pus, gore, nudity, explicit anatomy, graphic content.
```

### 14. Manejo quirúrgico de diverticulitis (`public/servicios/manejo-quirurgico-de-diverticulitis.jpg`)
```text
Clinical photorealistic photograph of a surgical team performing laparoscopic colon surgery in a modern operating room, monitor displaying an internal camera view, sterile blue drapes, focused overhead surgical light.

Lighting: Bright focused operating theater lighting with monitor glow.
Color Palette: Ink Black (#212224) surgical drapes, Gold (#BCA488) monitor and equipment accents, Cream (#FAF8F5) ambient tones.
Composition: Wide clinical shot of the surgical team and laparoscopic equipment.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, text, watermark, blood, gore, explicit incision detail.
```

### 15. Cirugía de obstrucción intestinal (`public/servicios/cirugia-de-obstruccion-intestinal.jpg`)
```text
Clinical photorealistic photograph of a surgical team in a modern operating room during an abdominal procedure, sterile blue drapes covering all but the surgical field, focused overhead surgical light, urgent but non-explicit tone.

Lighting: Bright focused operating theater lighting.
Color Palette: Ink Black (#212224) surgical drapes, Gold (#BCA488) equipment accents, Cream (#FAF8F5) ambient tones.
Composition: Wide clinical shot of the surgical team and equipment, surgical field appropriately draped.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, text, watermark, blood, gore, explicit incision detail.
```

### 16. Cirugía de nódulos tiroideos y bocio (`public/servicios/cirugia-de-nodulos-tiroideos.jpg`)
```text
Clinical photorealistic photograph of a surgical team in a modern operating room preparing for a neck procedure, sterile blue drapes, focused overhead surgical light, entirely non-explicit framing.

Lighting: Bright focused operating theater lighting.
Color Palette: Ink Black (#212224) surgical drapes, Gold (#BCA488) equipment accents, Cream (#FAF8F5) ambient tones.
Composition: Wide clinical shot of the surgical team and equipment, no surgical site detail shown.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, text, watermark, blood, gore, explicit incision detail.
```

### 17. Exéresis de tumores de piel y tejidos blandos (`public/servicios/exeresis-de-tumores-de-piel.jpg`)
```text
Discreet clinical photograph of a gloved hand preparing sterile surgical instruments on a clean tray for a minor outpatient excision procedure, calm clinic setting, patient's shoulder visible in soft focus.

Lighting: Bright clean clinical lighting.
Color Palette: Ink Black (#212224) gloves, Gold (#BCA488) instrument accents, Cream (#FAF8F5) surroundings.
Composition: Medium close-up on the hand and instrument tray, no face visible.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, text, watermark, blood, gore, open wound, nudity.
```

### 18. Cirugía de colon (`public/servicios/cirugia-de-colon.jpg`)
```text
Clinical photorealistic photograph of a surgical team performing laparoscopic colon surgery in a modern operating room, monitor displaying an internal camera view, sterile blue drapes, focused overhead surgical light.

Lighting: Bright focused operating theater lighting with monitor glow.
Color Palette: Ink Black (#212224) surgical drapes, Gold (#BCA488) monitor and equipment accents, Cream (#FAF8F5) ambient tones.
Composition: Wide clinical shot of the surgical team and laparoscopic equipment.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, text, watermark, blood, gore, explicit incision detail.
```

### 19. Manejo de heridas quirúrgicas complicadas (`public/servicios/manejo-de-heridas-quirurgicas-complicadas.jpg`)
```text
Discreet clinical photograph of a healthcare provider's gloved hands carefully applying a clean specialized wound dressing on a patient's abdomen, organized wound-care tray with sterile supplies visible nearby, calm professional setting.

Lighting: Bright clean clinical exam room lighting.
Color Palette: Ink Black (#212224) gloves, Gold (#BCA488) tray accents, Cream (#FAF8F5) dressing and surfaces.
Composition: Medium close-up on the hands and dressing, fully non-graphic.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, text, watermark, open wound close-up, necrotic tissue, blood, gore.
```

### 20. Valoración, curaciones y manejo quirúrgico de pie diabético (`public/servicios/manejo-de-pie-diabetico.jpg`)
```text
Discreet clinical photograph of a healthcare provider's gloved hands gently examining a patient's foot resting on a clean cloth on an exam table, organized wound-care supplies visible nearby, calm professional setting, no open wound visible.

Lighting: Bright clean clinical exam room lighting.
Color Palette: Ink Black (#212224) gloves, Cream (#FAF8F5) cloth and supplies, Gold (#BCA488) subtle accent.
Composition: Medium close-up on the hands and foot, fully non-graphic.
Suffixes: high-fidelity clinical photography, depth of field, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, text, watermark, open wound close-up, necrotic tissue, blood, gore.
```

---

## 🩹 SECCIÓN 3: PROMPTS PARA SÍNTOMAS

### 1. Dolor abdominal agudo o persistente (`public/sintomas/dolor-abdominal-agudo-o-persistente.jpg`)
```text
Photorealistic photo of a person sitting on the edge of a bed, both hands pressed firmly against their abdomen, leaning forward with a pained expression, calm warm home setting at daytime.

Lighting: Warm natural daylight from a nearby window.
Color Palette: Ink Black (#212224) clothing, Gold (#BCA488) room accent, Cream (#FAF8F5) bedding tones.
Composition: Medium shot centered on the seated person and hands on the abdomen.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore, nudity.
```

### 2. Dolor debajo de las costillas del lado derecho (`public/sintomas/dolor-debajo-de-las-costillas-derecho.jpg`)
```text
Photorealistic photo of a person standing in a kitchen, one hand pressed against the right side of their upper abdomen just below the ribs, mild discomfort expression, warm home setting.

Lighting: Warm natural indoor daylight.
Color Palette: Ink Black (#212224) clothing, Gold (#BCA488) kitchen accents, Cream (#FAF8F5) surroundings.
Composition: Medium shot focused on the hand and torso position, face partially visible.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore.
```

### 3. Dolor abdominal después de comer, especialmente alimentos grasosos (`public/sintomas/dolor-abdominal-despues-de-comer-grasas.jpg`)
```text
Photorealistic photo of a person seated at a dining table, pushing their plate slightly aside and resting a hand on their upper abdomen with a discomforted expression shortly after a meal, warm elegant dining setting.

Lighting: Warm soft indoor dining lighting.
Color Palette: Ink Black (#212224) tableware, Gold (#BCA488) table accents, Cream (#FAF8F5) linens.
Composition: Medium shot centered on the seated person at the table, hand on abdomen visible.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore.
```

### 4. Dolor en la parte inferior derecha del abdomen (`public/sintomas/dolor-parte-inferior-derecha-del-abdomen.jpg`)
```text
Photorealistic photo of a person lying on a sofa, both hands pressed against the lower right side of their abdomen, knees slightly bent, visibly uncomfortable expression, calm home setting.

Lighting: Soft warm indoor lamp lighting.
Color Palette: Ink Black (#212224) clothing, Gold (#BCA488) cushion accent, Cream (#FAF8F5) sofa tones.
Composition: Medium shot of the reclined person with hands on the lower abdomen.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore.
```

### 5. Náuseas y vómitos asociados a dolor abdominal (`public/sintomas/nauseas-y-vomitos-con-dolor-abdominal.jpg`)
```text
Photorealistic photo of a person sitting on the edge of a bed at night, one hand on their stomach and the other covering their mouth, visibly nauseated expression, a glass of water on the nightstand, calm bedroom setting.

Lighting: Soft warm night lamp lighting.
Color Palette: Ink Black (#212224) bed linens, Gold (#BCA488) nightstand accent, Cream (#FAF8F5) room tones.
Composition: Medium shot centered on the seated person.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore, vomit visible.
```

### 6. Distensión o inflamación abdominal (`public/sintomas/distension-o-inflamacion-abdominal.jpg`)
```text
Photorealistic photo of a person standing sideways in front of a mirror at home, one hand resting on their visibly distended abdomen with a concerned expression, calm bedroom setting.

Lighting: Soft natural indoor daylight.
Color Palette: Ink Black (#212224) clothing, Gold (#BCA488) mirror frame accent, Cream (#FAF8F5) room tones.
Composition: Medium shot of the person in profile with hand on the abdomen.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore, nudity.
```

### 7. Aparición de bolitas o protuberancias en la ingle (`public/sintomas/bolita-o-protuberancia-en-la-ingle.jpg`)
```text
Photorealistic photo of a person sitting on the edge of a bed, one hand resting on the side of their hip with a thoughtful, slightly concerned expression, fully clothed, calm home setting, no exposed groin area shown.

Lighting: Soft warm natural indoor lighting.
Color Palette: Ink Black (#212224) clothing, Gold (#BCA488) room accent, Cream (#FAF8F5) bedding tones.
Composition: Medium shot centered on the seated person, hand resting near the hip, fully clothed.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, gore.
```

### 8. Abultamiento en el ombligo o la pared abdominal (`public/sintomas/abultamiento-en-el-ombligo.jpg`)
```text
Photorealistic photo of a person standing in front of a mirror, one hand gently resting over their midsection through their shirt with a curious, concerned expression, calm bedroom setting, fully clothed.

Lighting: Soft natural indoor daylight.
Color Palette: Ink Black (#212224) clothing, Gold (#BCA488) mirror frame accent, Cream (#FAF8F5) room tones.
Composition: Medium shot of the person facing the mirror, hand on midsection.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, gore.
```

### 9. Dolor o molestias asociados a una hernia (`public/sintomas/dolor-o-molestias-por-hernia.jpg`)
```text
Photorealistic photo of a person pausing while lifting a light box at home, one hand instinctively moving to their lower abdomen with a wincing expression, calm indoor setting.

Lighting: Warm natural indoor daylight.
Color Palette: Ink Black (#212224) clothing, Gold (#BCA488) box accent, Cream (#FAF8F5) room tones.
Composition: Medium shot of the person paused mid-motion, hand on abdomen.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore.
```

### 10. Aparición de bolitas debajo de la piel (`public/sintomas/bolitas-debajo-de-la-piel.jpg`)
```text
Photorealistic photo of a person sitting calmly at home, gently pressing two fingers against their own forearm feeling for a small lump beneath the skin, curious attentive expression, warm indoor setting.

Lighting: Soft warm natural indoor lighting.
Color Palette: Ink Black (#212224) clothing, Gold (#BCA488) room accent, Cream (#FAF8F5) surroundings.
Composition: Medium close-up on the hand and forearm, face softly visible.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore, nudity.
```

### 11. Crecimiento de masas o tumoraciones superficiales (`public/sintomas/crecimiento-de-masas-o-tumoraciones.jpg`)
```text
Photorealistic photo of a person looking at their own shoulder in a mirror, gently touching a small raised area on their skin with a thoughtful expression, calm bedroom setting.

Lighting: Soft natural indoor daylight.
Color Palette: Ink Black (#212224) clothing, Gold (#BCA488) mirror frame accent, Cream (#FAF8F5) room tones.
Composition: Medium shot of the person in front of the mirror, hand on shoulder.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore, nudity.
```

### 12. Enrojecimiento, dolor o salida de pus en la piel (`public/sintomas/enrojecimiento-dolor-o-pus-en-la-piel.jpg`)
```text
Photorealistic photo of a person sitting at home gently pressing a clean soft cloth against a visibly reddened area on their forearm, mildly uncomfortable expression, calm indoor setting, no pus or open wound visible.

Lighting: Soft warm natural indoor lighting.
Color Palette: Ink Black (#212224) clothing, soft muted warm red skin tone accent, Cream (#FAF8F5) cloth.
Composition: Medium close-up on the hand, cloth and forearm.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, pus, open wound, blood, gore.
```

### 13. Dolor, ardor o molestias anales (`public/sintomas/dolor-ardor-o-molestias-anales.jpg`)
```text
Photorealistic photo of a person sitting carefully on the edge of a chair, shifting their weight with a visibly uncomfortable expression, fully clothed, calm home setting, no exposed body area shown.

Lighting: Soft warm natural indoor lighting.
Color Palette: Ink Black (#212224) clothing, Gold (#BCA488) chair accent, Cream (#FAF8F5) room tones.
Composition: Medium shot of the person seated carefully, fully clothed, upper body in frame.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, gore, explicit anatomy.
```

### 14. Sangrado durante la evacuación (`public/sintomas/sangrado-durante-la-evacuacion.jpg`)
```text
Photorealistic photo of a person standing in a clean elegant bathroom, looking at a tissue in their hand with a concerned expression, fully clothed, calm discreet home setting.

Lighting: Soft bright bathroom lighting.
Color Palette: Ink Black (#212224) fixtures, Gold (#BCA488) accent details, Cream (#FAF8F5) tile tones.
Composition: Medium shot of the person standing, looking at the tissue, fully clothed.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, blood visible, nudity, gore, explicit anatomy.
```

### 15. Aparición de bultos en la región anal (`public/sintomas/bultos-en-la-region-anal.jpg`)
```text
Photorealistic photo of a person sitting carefully on a cushioned chair at home, slightly shifting position with a subtle discomfort expression, fully clothed, calm discreet setting.

Lighting: Soft warm natural indoor lighting.
Color Palette: Ink Black (#212224) clothing, Gold (#BCA488) cushion accent, Cream (#FAF8F5) room tones.
Composition: Medium shot of the person seated carefully, fully clothed.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, gore, explicit anatomy.
```

### 16. Secreción o salida de pus cerca del ano (`public/sintomas/secrecion-o-pus-cerca-del-ano.jpg`)
```text
Photorealistic photo of a person standing in a clean elegant bathroom, holding a small clean cloth with a concerned, discreet expression, fully clothed, calm home setting.

Lighting: Soft bright bathroom lighting.
Color Palette: Ink Black (#212224) fixtures, Gold (#BCA488) accent details, Cream (#FAF8F5) tile tones.
Composition: Medium shot of the person standing, holding the cloth, fully clothed.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, pus visible, nudity, gore, explicit anatomy.
```

### 17. Dolor e inflamación en la región sacrococcígea (`public/sintomas/dolor-e-inflamacion-sacrococcigea.jpg`)
```text
Photorealistic photo of a person sitting at a desk, shifting uncomfortably and reaching one hand slightly behind their lower back with a strained expression, fully clothed, calm office setting.

Lighting: Soft natural office daylight.
Color Palette: Ink Black (#212224) clothing, Gold (#BCA488) desk accent, Cream (#FAF8F5) room tones.
Composition: Medium shot of the person seated at the desk, hand reaching toward the lower back.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, gore.
```

### 18. Cambios persistentes en el hábito intestinal (`public/sintomas/cambios-en-el-habito-intestinal.jpg`)
```text
Photorealistic photo of a person sitting at a kitchen table writing a short note in a small notebook, thoughtful calm expression, warm elegant home setting suggesting tracking a health change over time.

Lighting: Warm soft indoor daylight.
Color Palette: Ink Black (#212224) notebook, Gold (#BCA488) pen and table accents, Cream (#FAF8F5) room tones.
Composition: Medium shot of the person writing at the table.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text visible on notebook, watermark, signature, CGI, gore.
```

### 19. Estreñimiento acompañado de dolor y distensión abdominal (`public/sintomas/estrenimiento-con-dolor-y-distension.jpg`)
```text
Photorealistic photo of a person sitting on a sofa with one hand pressed gently against their visibly distended abdomen, mildly pained expression, calm home setting.

Lighting: Soft warm indoor lamp lighting.
Color Palette: Ink Black (#212224) clothing, Gold (#BCA488) cushion accent, Cream (#FAF8F5) sofa tones.
Composition: Medium shot of the seated person, hand on the abdomen.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore, nudity.
```

### 20. Aparición de nódulos o aumento de volumen en el cuello (`public/sintomas/nodulos-o-aumento-de-volumen-en-el-cuello.jpg`)
```text
Photorealistic photo of a person standing in front of a mirror, gently touching the side of their own neck with a thoughtful, slightly concerned expression, calm bedroom setting.

Lighting: Soft natural indoor daylight.
Color Palette: Ink Black (#212224) clothing, Gold (#BCA488) mirror frame accent, Cream (#FAF8F5) room tones.
Composition: Medium shot of the person in front of the mirror, hand on neck.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore.
```

### 21. Dolor, inflamación o secreción de heridas quirúrgicas (`public/sintomas/dolor-inflamacion-o-secrecion-de-herida.jpg`)
```text
Photorealistic photo of a person at home carefully looking at a neatly bandaged area on their own forearm with a concerned expression, calm bathroom or bedroom setting, bandage fully intact, no open wound visible.

Lighting: Soft bright indoor lighting.
Color Palette: Ink Black (#212224) clothing, Cream (#FAF8F5) bandage, Gold (#BCA488) subtle accent.
Composition: Medium close-up on the person examining their bandaged forearm.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, open wound, necrotic tissue, blood, gore.
```

### 22. Heridas que no cicatrizan adecuadamente (`public/sintomas/heridas-que-no-cicatrizan.jpg`)
```text
Photorealistic photo of a person at home gently examining a neatly bandaged area on their own leg under good light, patient and slightly worried expression, calm setting, bandage fully intact, no open wound visible.

Lighting: Soft bright natural indoor lighting.
Color Palette: Ink Black (#212224) clothing, Cream (#FAF8F5) bandage, Gold (#BCA488) subtle accent.
Composition: Medium close-up on the person examining the bandaged leg.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, open wound, necrotic tissue, blood, gore.
```

### 23. Úlceras o lesiones en los pies de pacientes diabéticos (`public/sintomas/ulceras-o-lesiones-en-pies-diabeticos.jpg`)
```text
Photorealistic photo of a person sitting on the edge of a bed, carefully lifting their own foot slightly to inspect it with a concerned expression, calm bedroom setting, foot resting on a clean cloth, no open wound visible.

Lighting: Soft warm indoor lighting.
Color Palette: Ink Black (#212224) clothing, Cream (#FAF8F5) cloth, Gold (#BCA488) subtle accent.
Composition: Medium shot of the person inspecting their own foot.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, open wound close-up, necrotic tissue, blood, gore.
```

### 24. Cambios de coloración, secreción o mal olor en heridas del pie diabético (`public/sintomas/cambios-de-color-o-mal-olor-en-herida-de-pie-diabetico.jpg`)
```text
Photorealistic photo of a person sitting at home carefully unwrapping the edge of a bandage on their own foot to check it, cautious attentive expression, calm bedroom setting, fresh clean dressing still mostly covering the area, no open wound visible.

Lighting: Soft warm indoor lighting.
Color Palette: Ink Black (#212224) clothing, Cream (#FAF8F5) bandage, Gold (#BCA488) subtle accent.
Composition: Medium close-up on the person's hands and foot while checking the dressing.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, open wound, necrotic tissue, blood, gore, pus visible.
```

### 25. Coloración amarillenta de piel y ojos (`public/sintomas/coloracion-amarillenta-de-piel-y-ojos.jpg`)
```text
Photorealistic photo of a person looking at their own reflection in a mirror under good light, examining their face and eyes closely with a concerned expression, calm bathroom setting.

Lighting: Bright even natural bathroom lighting.
Color Palette: Ink Black (#212224) mirror frame, Gold (#BCA488) fixture accents, Cream (#FAF8F5) tile tones, subtle warm skin tone shift.
Composition: Medium close-up of the person facing the mirror, face visible but tasteful.
Suffixes: realistic clinical photography, high-fidelity textures, 8k, soft editorial grade --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore, exaggerated yellow coloring, nudity.
```
