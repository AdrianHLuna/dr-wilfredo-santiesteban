import type { MedicalCondition } from "@/types/schema";

// Las 24 enfermedades vienen íntegras del intake real del doctor (por
// instrucción explícita del usuario, sin recortar la lista a pesar de
// exceder el mínimo de 10 de AGENTS.md §3).
export const diseases: MedicalCondition[] = [
  {
    id: "d-colelitiasis",
    slug: "colelitiasis",
    name: "Colelitiasis",
    technicalName: "Litiasis vesicular",
    colloquialNames: ["Piedras en la vesícula", "Cálculos biliares"],
    description:
      "La colelitiasis, conocida popularmente como piedras en la vesícula, es la formación de cálculos sólidos dentro de la vesícula biliar. Puede no causar síntomas durante años, pero cuando un cálculo obstruye la salida de bilis provoca dolor característico, generalmente después de comidas grasosas.",
    symptoms: [
      "Dolor debajo de las costillas del lado derecho",
      "Dolor abdominal después de comidas grasosas",
      "Náuseas y sensación de pesadez tras comer",
    ],
    causes: [
      "Desequilibrio en la composición química de la bilis",
      "Vaciamiento incompleto de la vesícula biliar",
      "Predisposición genética",
    ],
    riskFactors: [
      "Sexo femenino",
      "Obesidad",
      "Pérdida de peso rápida",
      "Dietas altas en grasa",
      "Antecedente familiar de cálculos biliares",
    ],
    complications: [
      "Colecistitis aguda por obstrucción prolongada",
      "Migración del cálculo a la vía biliar",
      "Inflamación del páncreas",
    ],
    treatments: [
      "Colecistectomía laparoscópica (extirpación quirúrgica de la vesícula)",
      "Vigilancia clínica en cálculos pequeños sin síntomas",
    ],
    faqs: [
      {
        question: "¿Qué son las piedras en la vesícula?",
        answer:
          "Son cálculos sólidos que se forman dentro de la vesícula biliar a partir de componentes de la bilis. Muchas personas las tienen sin saberlo, pero cuando obstruyen la salida de bilis provocan dolor intenso, generalmente tras comidas grasosas.",
      },
      {
        question: "¿La colelitiasis siempre requiere cirugía?",
        answer:
          "No siempre. Si los cálculos no causan síntomas, puede optarse por vigilancia. Cuando provocan dolor recurrente o complicaciones, la colecistectomía laparoscópica es el tratamiento definitivo y evita episodios futuros.",
      },
      {
        question: "¿Se puede vivir sin vesícula biliar?",
        answer:
          "Sí. La vesícula almacena bilis, pero el hígado sigue produciéndola normalmente. La mayoría de las personas hacen vida normal después de la extirpación, con ajustes dietéticos menores en las primeras semanas.",
      },
    ],
    relatedServices: ["s-colecistectomia-laparoscopica"],
    relatedSymptoms: ["sy-dolor-hipocondrio-derecho", "sy-dolor-posprandial-grasas", "sy-nauseas-vomito"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/colelitiasis.jpg",
    seo: {
      title: "Colelitiasis (Piedras en la Vesícula) | Dr. Santiesteban",
      description:
        "Diagnóstico y tratamiento de colelitiasis con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["colelitiasis", "piedras en la vesícula", "cirujano general Tuxtla Gutiérrez", "cálculos biliares"],
    },
  },
  {
    id: "d-colecistitis-aguda",
    slug: "colecistitis-aguda",
    name: "Colecistitis aguda",
    technicalName: "Colecistitis aguda litiásica",
    colloquialNames: ["Vesícula inflamada"],
    description:
      "La colecistitis aguda es la inflamación súbita de la vesícula biliar, casi siempre causada por un cálculo que bloquea su salida. Provoca dolor intenso y constante en el abdomen superior derecho, a menudo acompañado de fiebre, y requiere atención médica oportuna.",
    symptoms: ["Dolor intenso y constante en el costado derecho", "Fiebre", "Náuseas y vómito"],
    causes: [
      "Obstrucción del conducto cístico por un cálculo biliar",
      "Infección bacteriana secundaria de la vesícula inflamada",
    ],
    riskFactors: ["Colelitiasis previa", "Obesidad", "Sexo femenino", "Ayuno prolongado"],
    complications: [
      "Perforación de la vesícula biliar",
      "Formación de abscesos",
      "Infección generalizada (sepsis) si no se trata a tiempo",
    ],
    treatments: ["Colecistectomía laparoscópica de urgencia o programada según el caso"],
    faqs: [
      {
        question: "¿Qué diferencia hay entre colelitiasis y colecistitis aguda?",
        answer:
          "La colelitiasis es la presencia de cálculos en la vesícula, que puede no dar síntomas. La colecistitis aguda es la inflamación activa de la vesícula, generalmente causada por esos mismos cálculos, y produce dolor intenso, fiebre y requiere atención médica inmediata.",
      },
      {
        question: "¿La colecistitis aguda es una urgencia?",
        answer:
          "Sí. Si el dolor abdominal derecho se acompaña de fiebre, debe evaluarse de forma urgente, ya que la vesícula inflamada puede complicarse con infección o perforación si no se trata oportunamente.",
      },
      {
        question: "¿Cómo se trata la colecistitis aguda?",
        answer:
          "El tratamiento definitivo es la extirpación quirúrgica de la vesícula (colecistectomía), idealmente laparoscópica. El momento de la cirugía depende de la gravedad del cuadro y lo determina el cirujano tras la valoración inicial.",
      },
    ],
    relatedServices: ["s-colecistectomia-laparoscopica"],
    relatedSymptoms: ["sy-dolor-hipocondrio-derecho", "sy-nauseas-vomito", "sy-dolor-abdominal-agudo"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/colecistitis-aguda.jpg",
    seo: {
      title: "Colecistitis Aguda en Tuxtla Gutiérrez | Dr. Santiesteban",
      description:
        "Atención de colecistitis aguda (vesícula inflamada) con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["colecistitis aguda", "vesícula inflamada", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-polipos-vesicula",
    slug: "polipos-de-la-vesicula-biliar",
    name: "Pólipos de la vesícula biliar",
    colloquialNames: ["Pólipos en la vesícula"],
    description:
      "Los pólipos de la vesícula biliar son pequeñas protuberancias que crecen en la pared interna de la vesícula. La mayoría son benignos y se detectan de forma incidental en un ultrasonido, pero algunos requieren seguimiento o extirpación según su tamaño y características.",
    symptoms: ["Generalmente no causan síntomas", "Ocasionalmente dolor debajo de las costillas del lado derecho"],
    causes: ["Depósitos de colesterol en la pared vesicular", "Crecimiento de tejido benigno en la mucosa vesicular"],
    riskFactors: ["Edad mayor a 50 años", "Colelitiasis asociada", "Inflamación crónica de la vesícula"],
    complications: ["Crecimiento progresivo del pólipo", "En casos poco frecuentes, transformación maligna"],
    treatments: [
      "Vigilancia con ultrasonido periódico en pólipos pequeños",
      "Colecistectomía laparoscópica en pólipos grandes o con características de riesgo",
    ],
    faqs: [
      {
        question: "¿Los pólipos de la vesícula son peligrosos?",
        answer:
          "La gran mayoría son benignos y no requieren tratamiento más que seguimiento periódico con ultrasonido. Solo los pólipos de mayor tamaño o con ciertas características requieren extirpación quirúrgica preventiva.",
      },
      {
        question: "¿Cómo se detectan los pólipos vesiculares?",
        answer:
          "Se detectan casi siempre de forma incidental en un ultrasonido abdominal realizado por otro motivo, ya que rara vez producen síntomas propios.",
      },
      {
        question: "¿Cuándo se opera un pólipo de la vesícula?",
        answer:
          "Se recomienda cirugía cuando el pólipo mide más de 1 centímetro, crece con el tiempo, se asocia a cálculos biliares, o presenta características sugestivas de riesgo en el ultrasonido. Un cirujano general debe evaluar cada caso.",
      },
    ],
    relatedServices: ["s-colecistectomia-laparoscopica"],
    relatedSymptoms: ["sy-dolor-hipocondrio-derecho"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/polipos-de-la-vesicula-biliar.jpg",
    seo: {
      title: "Pólipos de la Vesícula Biliar | Dr. Santiesteban",
      description: "Evaluación de pólipos vesiculares con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["pólipos de la vesícula", "pólipos vesiculares", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-hernia-inguinal",
    slug: "hernia-inguinal",
    name: "Hernia inguinal",
    description:
      "La hernia inguinal es la protrusión de tejido abdominal a través de un punto débil de la pared muscular en la región de la ingle. Es una de las hernias más frecuentes, especialmente en hombres, y se manifiesta como una bolita o abultamiento que puede crecer con el esfuerzo.",
    symptoms: ["Bolita o abultamiento en la ingle", "Dolor o molestia que aumenta con el esfuerzo"],
    causes: ["Debilidad congénita o adquirida de la pared abdominal inguinal", "Aumento sostenido de la presión abdominal"],
    riskFactors: ["Sexo masculino", "Esfuerzo físico repetitivo", "Tos crónica", "Estreñimiento crónico", "Cirugías previas en la zona"],
    complications: ["Encarcelamiento del contenido herniario", "Estrangulación con compromiso de la circulación del tejido atrapado"],
    treatments: ["Plastía de hernia inguinal (reparación quirúrgica con o sin malla de refuerzo)"],
    faqs: [
      {
        question: "¿La hernia inguinal se puede curar sin cirugía?",
        answer:
          "No. Una hernia inguinal no se cierra por sí sola ni con ejercicios o fajas. La única forma de corregirla de manera definitiva es mediante cirugía (plastía inguinal).",
      },
      {
        question: "¿Qué pasa si no opero una hernia inguinal?",
        answer:
          "Puede crecer progresivamente y, en algunos casos, el contenido que protruye queda atrapado (encarcelamiento) y pierde circulación (estrangulación), lo que se vuelve una urgencia quirúrgica.",
      },
      {
        question: "¿La cirugía de hernia inguinal requiere malla?",
        answer:
          "En la mayoría de los casos en adultos se utiliza una malla de refuerzo para reducir el riesgo de que la hernia reaparezca. El cirujano decide la técnica más adecuada según el tamaño y las características de cada hernia.",
      },
    ],
    relatedServices: ["s-plastia-hernia-inguinal"],
    relatedSymptoms: ["sy-bolita-ingle", "sy-dolor-hernia"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/hernia-inguinal.jpg",
    seo: {
      title: "Hernia Inguinal en Tuxtla Gutiérrez | Dr. Santiesteban",
      description: "Diagnóstico y cirugía de hernia inguinal con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["hernia inguinal", "plastía inguinal", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-hernia-umbilical",
    slug: "hernia-umbilical",
    name: "Hernia umbilical",
    description:
      "La hernia umbilical es la protrusión de tejido abdominal a través del anillo umbilical, el punto donde el cordón umbilical se unía a la pared abdominal. En adultos suele relacionarse con el aumento de presión abdominal por obesidad o embarazos previos.",
    symptoms: ["Abultamiento visible en el ombligo", "Dolor o molestia que aumenta con el esfuerzo"],
    causes: ["Debilidad del anillo umbilical", "Aumento sostenido de la presión abdominal"],
    riskFactors: ["Obesidad", "Embarazos múltiples", "Cirugías abdominales previas", "Líquido abdominal aumentado (ascitis)"],
    complications: ["Encarcelamiento del contenido herniario", "Estrangulación del tejido atrapado"],
    treatments: ["Plastía de hernia umbilical (reparación quirúrgica con o sin malla)"],
    faqs: [
      {
        question: "¿La hernia umbilical en adultos se cierra sola?",
        answer:
          "No. A diferencia de algunos casos en bebés, en adultos la hernia umbilical no se cierra espontáneamente y requiere reparación quirúrgica para evitar que crezca o se complique.",
      },
      {
        question: "¿Es grave tener una hernia umbilical?",
        answer:
          "No es grave si se trata a tiempo, pero puede complicarse si el contenido herniario queda atrapado (encarcelamiento) y pierde circulación, lo que requiere cirugía de urgencia.",
      },
      {
        question: "¿Cuánto dura la recuperación de una plastía umbilical?",
        answer:
          "La mayoría de los pacientes retoman actividades cotidianas en una a dos semanas, evitando esfuerzo físico intenso durante el primer mes según la indicación del cirujano.",
      },
    ],
    relatedServices: ["s-plastia-hernia-umbilical"],
    relatedSymptoms: ["sy-abultamiento-ombligo", "sy-dolor-hernia"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/hernia-umbilical.jpg",
    seo: {
      title: "Hernia Umbilical en Tuxtla Gutiérrez | Dr. Santiesteban",
      description: "Diagnóstico y cirugía de hernia umbilical con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["hernia umbilical", "plastía umbilical", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-hernia-epigastrica",
    slug: "hernia-epigastrica",
    name: "Hernia epigástrica",
    description:
      "La hernia epigástrica es la protrusión de tejido graso a través de un defecto en la línea media del abdomen, entre el esternón y el ombligo. Suele presentarse como un pequeño abultamiento doloroso que se hace más evidente al contraer el abdomen.",
    symptoms: ["Pequeño abultamiento en la línea media del abdomen superior", "Dolor localizado que aumenta con el esfuerzo"],
    causes: ["Debilidad congénita de la línea alba (línea media del abdomen)"],
    riskFactors: ["Esfuerzo físico repetitivo", "Obesidad", "Embarazo"],
    complications: ["Encarcelamiento del tejido graso protruido", "Crecimiento progresivo del defecto"],
    treatments: ["Plastía de hernia epigástrica (reparación quirúrgica del defecto)"],
    faqs: [
      {
        question: "¿Qué es una hernia epigástrica?",
        answer:
          "Es la protrusión de tejido graso a través de un punto débil en la línea media del abdomen, entre el esternón y el ombligo. Suele sentirse como un pequeño bulto doloroso al palparlo o al contraer el abdomen.",
      },
      {
        question: "¿Una hernia epigástrica pequeña necesita cirugía?",
        answer:
          "Si causa dolor o molestia, se recomienda corregirla quirúrgicamente, ya que estos defectos no se cierran solos y pueden crecer con el tiempo. El cirujano general evalúa el tamaño y los síntomas para definir el momento adecuado.",
      },
      {
        question: "¿Cómo se diferencia una hernia epigástrica de una umbilical?",
        answer:
          "La hernia epigástrica aparece entre el esternón y el ombligo, mientras que la umbilical ocurre exactamente en el ombligo. Ambas son defectos de la línea media, pero en ubicaciones distintas.",
      },
    ],
    relatedServices: ["s-plastia-hernia-epigastrica"],
    relatedSymptoms: ["sy-dolor-hernia"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/hernia-epigastrica.jpg",
    seo: {
      title: "Hernia Epigástrica en Tuxtla Gutiérrez | Dr. Santiesteban",
      description: "Diagnóstico y cirugía de hernia epigástrica con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["hernia epigástrica", "plastía epigástrica", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-hernia-incisional",
    slug: "hernia-incisional-y-eventraciones",
    name: "Hernia incisional y eventraciones",
    colloquialNames: ["Hernia de cicatriz", "Eventración"],
    description:
      "La hernia incisional, o eventración, es la protrusión de tejido abdominal a través de una cicatriz de cirugía previa que no cicatrizó con suficiente fuerza. Puede aparecer meses o años después de la cirugía original y tiende a crecer progresivamente con el tiempo.",
    symptoms: ["Abultamiento sobre una cicatriz quirúrgica previa", "Dolor o molestia que aumenta con el esfuerzo"],
    causes: [
      "Cicatrización deficiente de una cirugía abdominal previa",
      "Infección de la herida quirúrgica original",
      "Aumento de presión abdominal tras la cirugía",
    ],
    riskFactors: ["Cirugía abdominal previa", "Obesidad", "Infección de herida previa", "Tabaquismo", "Diabetes no controlada"],
    complications: ["Encarcelamiento del contenido herniario", "Crecimiento progresivo con pérdida de dominio abdominal"],
    treatments: ["Plastía de hernia incisional (reparación quirúrgica, generalmente con malla de refuerzo)"],
    faqs: [
      {
        question: "¿Por qué aparece una hernia en una cicatriz de cirugía anterior?",
        answer:
          "Ocurre cuando los tejidos de la pared abdominal no cicatrizan con suficiente fuerza tras una cirugía previa, dejando un punto débil por el que el tejido interno puede protruir con el tiempo, a veces años después.",
      },
      {
        question: "¿Toda hernia incisional necesita malla para repararse?",
        answer:
          "En la mayoría de los casos sí, ya que el uso de malla reduce significativamente el riesgo de que la hernia vuelva a aparecer en comparación con la sutura simple del defecto.",
      },
      {
        question: "¿Se puede prevenir una hernia incisional?",
        answer:
          "El riesgo se reduce controlando factores como el peso corporal, el tabaquismo y la diabetes antes de una cirugía abdominal, y siguiendo las indicaciones de cuidado de la herida durante la recuperación.",
      },
    ],
    relatedServices: ["s-plastia-hernia-incisional"],
    relatedSymptoms: ["sy-dolor-hernia"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/hernia-incisional-y-eventraciones.jpg",
    seo: {
      title: "Hernia Incisional y Eventraciones | Dr. Santiesteban",
      description: "Diagnóstico y cirugía de hernia incisional con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["hernia incisional", "eventración", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-apendicitis-aguda",
    slug: "apendicitis-aguda",
    name: "Apendicitis aguda",
    description:
      "La apendicitis aguda es la inflamación súbita del apéndice, una pequeña estructura adherida al intestino grueso. Es una de las urgencias quirúrgicas abdominales más frecuentes y requiere cirugía oportuna para evitar que el apéndice se perfore.",
    symptoms: ["Dolor en la parte inferior derecha del abdomen", "Náuseas y vómito", "Fiebre"],
    causes: ["Obstrucción de la luz del apéndice, con frecuencia por tejido linfático inflamado o materia fecal endurecida"],
    riskFactors: ["Edad entre 10 y 30 años, aunque puede ocurrir a cualquier edad"],
    complications: ["Perforación del apéndice", "Peritonitis (infección generalizada del abdomen)", "Formación de abscesos"],
    treatments: ["Apendicectomía (extirpación quirúrgica del apéndice, generalmente por laparoscopia)"],
    faqs: [
      {
        question: "¿Cómo saber si el dolor abdominal es apendicitis?",
        answer:
          "La apendicitis suele iniciar con dolor alrededor del ombligo que después se localiza en la parte inferior derecha del abdomen, acompañado de náuseas, vómito y en ocasiones fiebre. Ante estos síntomas se debe acudir a valoración médica de inmediato.",
      },
      {
        question: "¿La apendicitis siempre requiere cirugía de urgencia?",
        answer:
          "Sí, en la gran mayoría de los casos. Retrasar la cirugía aumenta el riesgo de que el apéndice se perfore, lo que puede causar una infección grave generalizada en el abdomen (peritonitis).",
      },
      {
        question: "¿Cuánto tiempo de recuperación tiene una apendicectomía?",
        answer:
          "Cuando se realiza por laparoscopia sin complicaciones, la recuperación suele ser de una a dos semanas para actividades cotidianas, con indicación de evitar esfuerzo físico intenso durante ese periodo.",
      },
    ],
    relatedServices: ["s-apendicectomia"],
    relatedSymptoms: ["sy-dolor-fosa-iliaca-derecha", "sy-nauseas-vomito", "sy-dolor-abdominal-agudo"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/apendicitis-aguda.jpg",
    seo: {
      title: "Apendicitis Aguda en Tuxtla Gutiérrez | Dr. Santiesteban",
      description: "Cirugía de apendicitis aguda con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["apendicitis aguda", "apendicectomía", "cirujano general Tuxtla Gutiérrez", "urgencia quirúrgica"],
    },
  },
  {
    id: "d-lipomas",
    slug: "lipomas",
    name: "Lipomas",
    colloquialNames: ["Bolitas de grasa"],
    description:
      "Los lipomas son tumoraciones benignas de tejido graso que crecen lentamente debajo de la piel. Se sienten como bolitas blandas y móviles, no suelen causar dolor, y son una de las masas de piel y tejidos blandos más frecuentes.",
    symptoms: ["Bolita blanda y móvil debajo de la piel", "Crecimiento lento y generalmente indoloro"],
    causes: ["Crecimiento benigno de células grasas (adipocitos) bajo la piel"],
    riskFactors: ["Antecedente familiar de lipomas", "Edad media y adulta"],
    complications: ["Crecimiento progresivo con molestia local", "Compresión de estructuras cercanas si crece considerablemente"],
    treatments: ["Exéresis quirúrgica del lipoma (extirpación ambulatoria)"],
    faqs: [
      {
        question: "¿Un lipoma es cáncer?",
        answer:
          "No. Los lipomas son tumoraciones benignas de tejido graso. Sin embargo, cualquier masa nueva o que cambia de tamaño debe ser evaluada por un cirujano para confirmar el diagnóstico antes de decidir si requiere extirpación.",
      },
      {
        question: "¿Es necesario quitar un lipoma?",
        answer:
          "No siempre. Si no causa molestia ni crece, puede vigilarse. Se recomienda extirparlo si duele, crece de forma notoria, o genera inquietud estética o diagnóstica para el paciente.",
      },
      {
        question: "¿La extirpación de un lipoma deja cicatriz grande?",
        answer:
          "La incisión suele ser pequeña y proporcional al tamaño del lipoma. Es un procedimiento ambulatorio con anestesia local y recuperación rápida en la mayoría de los casos.",
      },
    ],
    relatedServices: ["s-exeresis-lipomas"],
    relatedSymptoms: ["sy-bolitas-bajo-piel", "sy-crecimiento-masas"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/lipomas.jpg",
    seo: {
      title: "Lipomas (Bolitas de Grasa) | Dr. Santiesteban",
      description: "Evaluación y extirpación de lipomas con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["lipomas", "bolitas de grasa", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-quistes-sebaceos",
    slug: "quistes-sebaceos-y-epidermicos",
    name: "Quistes sebáceos y epidérmicos",
    colloquialNames: ["Quistes en la piel"],
    description:
      "Los quistes sebáceos y epidérmicos son bolsas benignas llenas de material sebáceo o queratina que se forman debajo de la piel, generalmente por obstrucción de un folículo o glándula. Son frecuentes en cara, cuello, espalda y cuero cabelludo.",
    symptoms: ["Bolita redonda debajo de la piel", "Ocasionalmente enrojecimiento o dolor si se inflama"],
    causes: ["Obstrucción de un folículo piloso o glándula sebácea", "Acumulación de queratina bajo la piel"],
    riskFactors: ["Antecedente de acné", "Piel grasa", "Traumatismo local previo"],
    complications: ["Infección del quiste", "Crecimiento progresivo", "Ruptura con inflamación local"],
    treatments: ["Exéresis quirúrgica completa del quiste, incluyendo su cápsula"],
    faqs: [
      {
        question: "¿Los quistes sebáceos se pueden reventar en casa?",
        answer:
          "No se recomienda. Manipular un quiste puede causar infección o que se forme de nuevo si no se retira la cápsula completa. La extirpación quirúrgica es la forma correcta de eliminarlo de manera definitiva.",
      },
      {
        question: "¿Por qué reaparece un quiste después de drenarlo?",
        answer:
          "Si solo se drena el contenido sin retirar la cápsula del quiste, es muy probable que vuelva a llenarse y reaparecer. La extirpación quirúrgica completa evita esta recurrencia.",
      },
      {
        question: "¿Cuándo se debe operar un quiste sebáceo?",
        answer:
          "Se recomienda cuando crece, se inflama, se infecta repetidamente, o genera molestia estética. Un quiste infectado requiere valoración más pronta por el riesgo de formación de absceso.",
      },
    ],
    relatedServices: ["s-exeresis-quistes"],
    relatedSymptoms: ["sy-bolitas-bajo-piel", "sy-crecimiento-masas"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/quistes-sebaceos-y-epidermicos.jpg",
    seo: {
      title: "Quistes Sebáceos y Epidérmicos | Dr. Santiesteban",
      description: "Extirpación de quistes sebáceos y epidérmicos con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["quistes sebáceos", "quistes epidérmicos", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-abscesos-piel",
    slug: "abscesos-de-piel-y-tejidos-blandos",
    name: "Abscesos de piel y tejidos blandos",
    colloquialNames: ["Nacido", "Grano infectado grande"],
    description:
      "Un absceso de piel y tejidos blandos es una acumulación de pus causada por una infección localizada, que forma una zona enrojecida, caliente y dolorosa. Requiere drenaje quirúrgico para resolverse adecuadamente, ya que rara vez cede por sí solo.",
    symptoms: ["Enrojecimiento, calor y dolor en una zona de la piel", "Salida de pus de forma espontánea en casos avanzados", "Fiebre en algunos casos"],
    causes: ["Infección bacteriana localizada de la piel y el tejido subcutáneo"],
    riskFactors: ["Diabetes no controlada", "Higiene deficiente de una herida previa", "Sistema inmunológico debilitado"],
    complications: ["Extensión de la infección a tejidos vecinos (celulitis)", "Infección generalizada si no se trata a tiempo"],
    treatments: ["Drenaje quirúrgico del absceso"],
    faqs: [
      {
        question: "¿Un absceso se puede tratar sin cirugía?",
        answer:
          "La mayoría de los abscesos requieren drenaje quirúrgico para resolverse por completo, ya que el pus acumulado no se elimina solo. El drenaje oportuno acelera la recuperación y evita que la infección se extienda.",
      },
      {
        question: "¿El drenaje de un absceso es doloroso?",
        answer:
          "El procedimiento se realiza con anestesia local para minimizar la molestia. Después del drenaje, el alivio del dolor suele ser notorio de forma casi inmediata al liberarse la presión acumulada.",
      },
      {
        question: "¿Cuándo debo acudir urgentemente por un absceso?",
        answer:
          "Si el absceso se acompaña de fiebre, crece rápidamente o aparece en el rostro o cerca de articulaciones, conviene acudir de inmediato, ya que la infección puede extenderse con más facilidad en esas zonas.",
      },
    ],
    relatedServices: ["s-drenaje-abscesos-piel"],
    relatedSymptoms: ["sy-enrojecimiento-pus-piel"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/abscesos-de-piel-y-tejidos-blandos.jpg",
    seo: {
      title: "Abscesos de Piel y Tejidos Blandos | Dr. Santiesteban",
      description: "Drenaje quirúrgico de abscesos con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["absceso de piel", "drenaje de absceso", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-enfermedad-hemorroidal",
    slug: "enfermedad-hemorroidal",
    name: "Enfermedad hemorroidal",
    colloquialNames: ["Hemorroides", "Almorranas"],
    description:
      "La enfermedad hemorroidal es la inflamación y dilatación de los vasos sanguíneos de la región anal. Es extremadamente frecuente y puede causar sangrado, dolor o prolapso de tejido, con distintos grados de severidad que determinan el tratamiento adecuado.",
    symptoms: ["Sangrado durante la evacuación", "Dolor o ardor anal", "Bulto que protruye en la región anal"],
    causes: ["Aumento sostenido de la presión en las venas de la región anal"],
    riskFactors: ["Estreñimiento crónico", "Esfuerzo prolongado al evacuar", "Embarazo", "Sedentarismo", "Dieta baja en fibra"],
    complications: ["Trombosis hemorroidal (coágulo doloroso)", "Sangrado persistente", "Prolapso permanente del tejido hemorroidal"],
    treatments: [
      "Medidas higiénico-dietéticas en grados leves",
      "Procedimientos ambulatorios para grados intermedios",
      "Hemorroidectomía quirúrgica en grados avanzados",
    ],
    faqs: [
      {
        question: "¿Las hemorroides siempre necesitan cirugía?",
        answer:
          "No. Los grados leves suelen mejorar con cambios en la dieta y hábitos intestinales. La cirugía (hemorroidectomía) se reserva para los grados más avanzados o cuando otros tratamientos no han sido suficientes.",
      },
      {
        question: "¿El sangrado al evacuar siempre es por hemorroides?",
        answer:
          "Es la causa más frecuente, pero no la única. El sangrado durante la evacuación también puede deberse a fisuras anales u otras condiciones del colon, por lo que siempre conviene una valoración para identificar la causa exacta.",
      },
      {
        question: "¿Cómo se clasifican las hemorroides?",
        answer:
          "Se clasifican en grados del I al IV según su tamaño y si protruyen o no fuera del ano. Esta clasificación, determinada en la consulta, es la que guía si el tratamiento será médico, ambulatorio o quirúrgico.",
      },
    ],
    relatedServices: ["s-hemorroidectomia"],
    relatedSymptoms: ["sy-dolor-ardor-anal", "sy-sangrado-evacuacion", "sy-bultos-region-anal"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/enfermedad-hemorroidal.jpg",
    seo: {
      title: "Enfermedad Hemorroidal en Tuxtla Gutiérrez",
      description: "Tratamiento de hemorroides con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["hemorroides", "enfermedad hemorroidal", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-fisuras-anales",
    slug: "fisuras-anales",
    name: "Fisuras anales",
    description:
      "Una fisura anal es un pequeño desgarro en el revestimiento del conducto anal, que causa dolor intenso y sangrado, especialmente durante y después de evacuar. Es una causa frecuente de dolor anal agudo y suele relacionarse con el paso de heces duras.",
    symptoms: ["Dolor intenso tipo ardor al evacuar", "Sangrado rojo brillante al limpiarse", "Espasmo del esfínter anal"],
    causes: ["Paso de heces duras o voluminosas", "Diarrea prolongada", "Traumatismo local del conducto anal"],
    riskFactors: ["Estreñimiento crónico", "Parto vaginal", "Enfermedad inflamatoria intestinal"],
    complications: ["Cronificación de la fisura", "Espasmo persistente del esfínter que perpetúa el dolor"],
    treatments: [
      "Medidas para ablandar las evacuaciones en fisuras agudas",
      "Tratamiento quirúrgico en fisuras crónicas que no responden a manejo inicial",
    ],
    faqs: [
      {
        question: "¿Por qué duele tanto una fisura anal?",
        answer:
          "El conducto anal tiene gran sensibilidad y el desgarro expone terminaciones nerviosas, además de provocar un espasmo reflejo del esfínter que intensifica el dolor, especialmente durante y después de evacuar.",
      },
      {
        question: "¿Las fisuras anales se curan solas?",
        answer:
          "Las fisuras agudas pueden mejorar con medidas para ablandar las evacuaciones y cuidado local. Si se vuelven crónicas o no mejoran, puede requerirse un procedimiento quirúrgico para romper el ciclo de espasmo y dolor.",
      },
      {
        question: "¿Cómo se diferencia una fisura anal de hemorroides?",
        answer:
          "La fisura anal produce dolor intenso tipo ardor principalmente al evacuar, mientras que las hemorroides suelen causar sangrado y sensación de bulto con menos dolor agudo. Un cirujano puede diferenciarlas en la exploración.",
      },
    ],
    relatedServices: ["s-tratamiento-fisura-anal"],
    relatedSymptoms: ["sy-dolor-ardor-anal", "sy-sangrado-evacuacion"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/fisuras-anales.jpg",
    seo: {
      title: "Fisuras Anales en Tuxtla Gutiérrez | Dr. Santiesteban",
      description: "Tratamiento de fisuras anales con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["fisuras anales", "dolor anal", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-fistulas-abscesos-perianales",
    slug: "fistulas-y-abscesos-perianales",
    name: "Fístulas y abscesos perianales",
    description:
      "Los abscesos perianales son colecciones de pus junto al ano que, si no se tratan adecuadamente, pueden dejar un trayecto anómalo llamado fístula entre el conducto anal y la piel. Ambos requieren manejo quirúrgico específico.",
    symptoms: ["Dolor e inflamación cerca del ano", "Secreción o salida de pus cerca del ano", "Bulto doloroso en la región anal"],
    causes: ["Infección de glándulas pequeñas dentro del conducto anal"],
    riskFactors: ["Enfermedad inflamatoria intestinal", "Diabetes no controlada", "Absceso perianal previo mal drenado"],
    complications: ["Formación de una fístula crónica", "Infección recurrente", "Daño al esfínter anal si no se maneja adecuadamente"],
    treatments: ["Drenaje quirúrgico del absceso", "Tratamiento quirúrgico de la fístula una vez definido su trayecto"],
    faqs: [
      {
        question: "¿Qué relación hay entre un absceso y una fístula perianal?",
        answer:
          "Un absceso perianal no tratado o drenado de forma incompleta puede dejar un trayecto anómalo de comunicación entre el conducto anal y la piel, que se conoce como fístula y requiere un tratamiento quirúrgico distinto.",
      },
      {
        question: "¿Una fístula perianal se puede tratar sin cirugía?",
        answer:
          "No. Las fístulas perianales no cierran por sí solas y requieren un procedimiento quirúrgico específico para eliminar el trayecto, cuidando siempre la función del esfínter anal.",
      },
      {
        question: "¿Es urgente un absceso perianal?",
        answer:
          "Sí, el dolor y la inflamación suelen progresar con rapidez. Se recomienda valoración pronta para drenar el absceso y reducir el riesgo de que se forme una fístula o de que la infección se extienda.",
      },
    ],
    relatedServices: ["s-tratamiento-fistulas-perianales"],
    relatedSymptoms: ["sy-secrecion-cerca-ano", "sy-bultos-region-anal"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/fistulas-y-abscesos-perianales.jpg",
    seo: {
      title: "Fístulas y Abscesos Perianales | Dr. Santiesteban",
      description: "Tratamiento de fístulas y abscesos perianales con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["fístula perianal", "absceso perianal", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-enfermedad-pilonidal",
    slug: "enfermedad-pilonidal",
    name: "Enfermedad pilonidal",
    colloquialNames: ["Quiste pilonidal", "Absceso sacrococcígeo"],
    description:
      "La enfermedad pilonidal es una infección crónica que se forma en el pliegue entre los glúteos, cerca del cóccix, generalmente relacionada con pelo que se introduce bajo la piel. Provoca dolor e inflamación recurrente en la región sacrococcígea.",
    symptoms: ["Dolor e inflamación en la región sacrococcígea", "Secreción o salida de pus en episodios de absceso"],
    causes: ["Penetración de vello bajo la piel en el pliegue interglúteo", "Infección local recurrente de folículos pilosos"],
    riskFactors: ["Vello abundante en la región", "Sedentarismo prolongado", "Sudoración excesiva", "Fricción repetida de la zona"],
    complications: ["Formación de abscesos recurrentes", "Cronificación con trayectos fistulosos múltiples"],
    treatments: ["Drenaje del absceso en episodios agudos", "Cirugía definitiva del trayecto pilonidal para evitar recurrencias"],
    faqs: [
      {
        question: "¿Qué causa la enfermedad pilonidal?",
        answer:
          "Se produce cuando vello suelto se introduce bajo la piel en el pliegue entre los glúteos, generando una reacción inflamatoria e infecciones recurrentes en esa zona.",
      },
      {
        question: "¿El quiste pilonidal reaparece después de drenarlo?",
        answer:
          "Si solo se drena el absceso sin tratar el trayecto de fondo, es frecuente que reaparezca. La cirugía definitiva busca eliminar el trayecto completo para reducir el riesgo de recurrencia.",
      },
      {
        question: "¿Se puede prevenir la enfermedad pilonidal?",
        answer:
          "Mantener la zona limpia y seca, y controlar el vello local, puede ayudar a reducir el riesgo de nuevos episodios, aunque la recomendación específica depende de cada caso y debe darla el cirujano.",
      },
    ],
    relatedServices: ["s-cirugia-quiste-pilonidal"],
    relatedSymptoms: ["sy-dolor-sacrococcigeo"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/enfermedad-pilonidal.jpg",
    seo: {
      title: "Enfermedad Pilonidal en Tuxtla Gutiérrez | Dr. Santiesteban",
      description: "Tratamiento de quiste pilonidal con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["enfermedad pilonidal", "quiste pilonidal", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-diverticulitis",
    slug: "diverticulitis-y-enfermedad-diverticular",
    name: "Diverticulitis aguda y enfermedad diverticular",
    description:
      "La enfermedad diverticular es la formación de pequeñas bolsas (divertículos) en la pared del colon. Cuando una de estas bolsas se inflama o infecta, se produce diverticulitis aguda, que causa dolor abdominal y cambios en el hábito intestinal.",
    symptoms: ["Dolor abdominal, frecuentemente del lado izquierdo", "Cambios en el hábito intestinal", "Estreñimiento o distensión abdominal"],
    causes: ["Inflamación o infección de uno o varios divertículos del colon"],
    riskFactors: ["Dieta baja en fibra", "Edad mayor a 50 años", "Sedentarismo", "Obesidad"],
    complications: ["Formación de abscesos", "Perforación del colon", "Obstrucción intestinal", "Formación de fístulas"],
    treatments: [
      "Manejo médico en episodios leves",
      "Cirugía de colon en casos recurrentes o complicados",
    ],
    faqs: [
      {
        question: "¿Tener divertículos en el colon es grave?",
        answer:
          "Tener divertículos (enfermedad diverticular) no siempre causa problemas. Se vuelve relevante cuando se inflaman o infectan (diverticulitis aguda), lo que sí requiere atención médica y, en ocasiones, manejo quirúrgico.",
      },
      {
        question: "¿La diverticulitis siempre requiere cirugía?",
        answer:
          "No siempre. Muchos episodios leves se resuelven con manejo médico. La cirugía se considera en episodios recurrentes, complicados con abscesos o perforación, o cuando hay riesgo de obstrucción.",
      },
      {
        question: "¿Qué cambios en la dieta ayudan con la enfermedad diverticular?",
        answer:
          "Una dieta rica en fibra ayuda a regular el tránsito intestinal y puede reducir el riesgo de nuevos episodios, aunque las recomendaciones específicas deben darse de forma individualizada según cada caso.",
      },
    ],
    relatedServices: ["s-manejo-diverticulitis"],
    relatedSymptoms: ["sy-dolor-abdominal-agudo", "sy-cambios-habito-intestinal", "sy-estrenimiento-distension"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/diverticulitis-y-enfermedad-diverticular.jpg",
    seo: {
      title: "Diverticulitis y Enfermedad Diverticular | Dr. Santiesteban",
      description: "Diagnóstico y tratamiento de diverticulitis con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["diverticulitis", "enfermedad diverticular", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-obstruccion-intestinal",
    slug: "obstruccion-intestinal",
    name: "Obstrucción intestinal",
    description:
      "La obstrucción intestinal es el bloqueo total o parcial del paso del contenido intestinal, lo que impide la digestión normal. Es una urgencia quirúrgica frecuente que provoca distensión abdominal importante, náuseas, vómito y detención del tránsito intestinal.",
    symptoms: ["Distensión abdominal marcada", "Náuseas y vómito", "Ausencia de evacuaciones o gases"],
    causes: ["Adherencias de cirugías abdominales previas", "Hernias complicadas", "Tumores que obstruyen el intestino", "Vólvulo intestinal"],
    riskFactors: ["Cirugías abdominales previas", "Hernias no tratadas", "Antecedente de enfermedad inflamatoria intestinal"],
    complications: ["Isquemia (falta de circulación) del segmento intestinal afectado", "Perforación intestinal", "Infección generalizada"],
    treatments: ["Manejo inicial con descompresión intestinal", "Cirugía de obstrucción intestinal cuando no resuelve con manejo médico o hay signos de alarma"],
    faqs: [
      {
        question: "¿La obstrucción intestinal es una urgencia?",
        answer:
          "Sí. La distensión abdominal importante acompañada de vómito y ausencia de evacuaciones o gases requiere evaluación médica urgente, ya que puede comprometer la circulación del intestino si no se resuelve a tiempo.",
      },
      {
        question: "¿Toda obstrucción intestinal requiere cirugía?",
        answer:
          "No todas. Algunos casos, especialmente los causados por adherencias, pueden resolverse con manejo médico inicial. Si no mejora o hay signos de complicación, la cirugía se vuelve necesaria.",
      },
      {
        question: "¿Qué causa con más frecuencia la obstrucción intestinal en adultos?",
        answer:
          "En personas con cirugías abdominales previas, las adherencias (bandas de tejido cicatricial) son la causa más común. También pueden causarla hernias complicadas o, con menor frecuencia, tumores.",
      },
    ],
    relatedServices: ["s-cirugia-obstruccion-intestinal"],
    relatedSymptoms: ["sy-distension-abdominal", "sy-nauseas-vomito", "sy-estrenimiento-distension"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/obstruccion-intestinal.jpg",
    seo: {
      title: "Obstrucción Intestinal en Tuxtla Gutiérrez",
      description: "Atención de obstrucción intestinal con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["obstrucción intestinal", "urgencia quirúrgica", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-nodulos-tiroideos",
    slug: "nodulos-tiroideos-y-bocio",
    name: "Nódulos tiroideos y bocio",
    description:
      "Los nódulos tiroideos son crecimientos anormales dentro de la glándula tiroides, y el bocio es el aumento generalizado de su tamaño. La mayoría de los nódulos son benignos, pero requieren estudio para descartar causas que ameriten cirugía.",
    symptoms: ["Aumento de volumen visible o palpable en el cuello", "Sensación de presión en el cuello en bocios grandes"],
    causes: ["Crecimiento benigno de tejido tiroideo", "Deficiencia de yodo (en el caso del bocio)", "Procesos autoinmunes de la tiroides"],
    riskFactors: ["Sexo femenino", "Antecedente familiar de enfermedad tiroidea", "Exposición previa a radiación en cuello"],
    complications: ["Compresión de estructuras del cuello en bocios grandes", "En un grupo reducido de casos, malignidad del nódulo"],
    treatments: ["Vigilancia con estudios de imagen en nódulos de bajo riesgo", "Cirugía de tiroides (tiroidectomía parcial o total) en nódulos con características de riesgo o bocios sintomáticos"],
    faqs: [
      {
        question: "¿Un nódulo tiroideo es cáncer?",
        answer:
          "La mayoría de los nódulos tiroideos son benignos. Sin embargo, todo nódulo debe estudiarse con ultrasonido y, en algunos casos, biopsia, para descartar características de riesgo antes de decidir el tratamiento.",
      },
      {
        question: "¿Todo bocio necesita cirugía?",
        answer:
          "No. Muchos bocios se vigilan sin necesidad de cirugía. Se considera la cirugía cuando el bocio causa síntomas de compresión en el cuello, crece de forma importante, o existen nódulos con características sospechosas.",
      },
      {
        question: "¿Qué pasa después de una tiroidectomía?",
        answer:
          "Dependiendo de si la extirpación fue parcial o total, puede requerirse seguimiento hormonal. El cirujano explica el manejo específico y las revisiones necesarias después del procedimiento.",
      },
    ],
    relatedServices: ["s-cirugia-nodulos-tiroideos"],
    relatedSymptoms: ["sy-nodulos-cuello"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/nodulos-tiroideos-y-bocio.jpg",
    seo: {
      title: "Nódulos Tiroideos y Bocio | Dr. Santiesteban",
      description: "Evaluación y cirugía de nódulos tiroideos con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["nódulos tiroideos", "bocio", "cirujano general Tuxtla Gutiérrez", "tiroidectomía"],
    },
  },
  {
    id: "d-tumores-piel",
    slug: "tumores-de-piel-y-tejidos-blandos",
    name: "Tumores de piel y tejidos blandos",
    description:
      "Los tumores de piel y tejidos blandos son crecimientos anormales que pueden originarse en la piel, el tejido graso, muscular o fibroso. La mayoría son benignos, pero toda masa de crecimiento progresivo debe evaluarse para definir su naturaleza y tratamiento.",
    symptoms: ["Crecimiento de una masa o tumoración superficial", "Cambio de tamaño, forma o color de una lesión de piel"],
    causes: ["Proliferación anormal de células de la piel o tejidos blandos subyacentes"],
    riskFactors: ["Exposición solar prolongada sin protección", "Antecedente familiar de tumores de piel", "Lesiones de piel previas no tratadas"],
    complications: ["Crecimiento progresivo con afectación de tejidos vecinos", "En un grupo reducido de casos, comportamiento maligno"],
    treatments: ["Exéresis quirúrgica de la lesión con estudio de la pieza extraída"],
    faqs: [
      {
        question: "¿Toda masa en la piel debe quitarse?",
        answer:
          "No todas, pero toda masa de crecimiento progresivo, cambio de color o forma, o que genera molestia, debe evaluarse por un cirujano para determinar si requiere extirpación y estudio.",
      },
      {
        question: "¿Cómo se sabe si un tumor de piel es benigno o maligno?",
        answer:
          "La valoración clínica orienta el diagnóstico inicial, pero la confirmación definitiva se obtiene mediante el estudio de la lesión extirpada en laboratorio, lo que permite definir si requiere algún tratamiento adicional.",
      },
      {
        question: "¿La cirugía de un tumor de piel deja cicatriz?",
        answer:
          "Toda cirugía deja una cicatriz proporcional al tamaño de la lesión extirpada. El cirujano planea la incisión buscando el mejor resultado estético posible según la ubicación y características de cada caso.",
      },
    ],
    relatedServices: ["s-exeresis-tumores-piel"],
    relatedSymptoms: ["sy-crecimiento-masas"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/tumores-de-piel-y-tejidos-blandos.jpg",
    seo: {
      title: "Tumores de Piel y Tejidos Blandos | Dr. Santiesteban",
      description: "Evaluación y extirpación de tumores de piel con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["tumores de piel", "tumores de tejidos blandos", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-patologia-colon",
    slug: "patologia-quirurgica-del-colon",
    name: "Patología quirúrgica del colon",
    description:
      "La patología quirúrgica del colon agrupa distintas enfermedades del intestino grueso que pueden requerir manejo quirúrgico, incluyendo cambios persistentes en el hábito intestinal y sangrado digestivo que ameritan estudio especializado.",
    symptoms: ["Cambios persistentes en el hábito intestinal", "Sangrado durante la evacuación", "Dolor abdominal asociado al tránsito intestinal"],
    causes: ["Diversas condiciones del colon que afectan su estructura o funcionamiento, identificadas mediante estudio especializado"],
    riskFactors: ["Edad mayor a 50 años", "Antecedente familiar de enfermedad de colon", "Dieta baja en fibra"],
    complications: ["Progresión de la enfermedad de base sin tratamiento oportuno", "Sangrado digestivo persistente"],
    treatments: ["Estudio endoscópico y de imagen para definir el diagnóstico exacto", "Cirugía de colon cuando el diagnóstico lo requiere"],
    faqs: [
      {
        question: "¿Cuándo deben estudiarse los cambios en el hábito intestinal?",
        answer:
          "Cuando los cambios persisten más de unas semanas, se acompañan de sangrado, pérdida de peso no explicada o dolor abdominal, conviene una evaluación con un cirujano general para definir la causa.",
      },
      {
        question: "¿El sangrado al evacuar siempre requiere estudio del colon?",
        answer:
          "Es recomendable evaluarlo, especialmente si es persistente o recurrente, ya que aunque la causa más frecuente son las hemorroides, también puede originarse en el colon y requerir estudios específicos.",
      },
      {
        question: "¿Qué estudios se usan para evaluar el colon?",
        answer:
          "Según el caso, el cirujano puede solicitar una colonoscopia u otros estudios de imagen para identificar la causa exacta de los síntomas antes de definir si se requiere tratamiento médico o quirúrgico.",
      },
    ],
    relatedServices: ["s-cirugia-colon"],
    relatedSymptoms: ["sy-cambios-habito-intestinal", "sy-sangrado-evacuacion"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/patologia-quirurgica-del-colon.jpg",
    seo: {
      title: "Patología Quirúrgica del Colon | Dr. Santiesteban",
      description: "Evaluación de patología de colon con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["patología del colon", "cirugía de colon", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-heridas-complicadas",
    slug: "heridas-quirurgicas-complicadas",
    name: "Heridas quirúrgicas complicadas",
    description:
      "Las heridas quirúrgicas complicadas son aquellas que no cicatrizan de forma normal tras una cirugía, presentando dolor persistente, inflamación o apertura de los bordes. Requieren manejo especializado para favorecer una cicatrización adecuada.",
    symptoms: ["Dolor, inflamación o secreción de una herida quirúrgica", "Heridas que no cicatrizan adecuadamente"],
    causes: ["Infección de la herida quirúrgica", "Mala circulación local", "Tensión excesiva sobre los bordes de la herida", "Enfermedades que afectan la cicatrización, como la diabetes"],
    riskFactors: ["Diabetes no controlada", "Obesidad", "Tabaquismo", "Desnutrición", "Infección posoperatoria"],
    complications: ["Dehiscencia (apertura) de la herida", "Infección profunda", "Cicatrización prolongada con mayor riesgo de hernia incisional"],
    treatments: ["Curaciones especializadas periódicas", "Manejo quirúrgico del tejido no viable cuando es necesario", "Cierre diferido de la herida una vez controlada la causa"],
    faqs: [
      {
        question: "¿Por qué una herida quirúrgica no cicatriza bien?",
        answer:
          "Puede deberse a infección, mala circulación local, tensión excesiva sobre los bordes, o enfermedades de base como la diabetes que afectan la cicatrización. Un cirujano debe evaluar la causa específica para dar el manejo adecuado.",
      },
      {
        question: "¿Qué se hace con una herida quirúrgica que no cierra?",
        answer:
          "El manejo incluye curaciones especializadas periódicas, control de la causa de fondo (como una infección o la glucosa en diabéticos), y en algunos casos un procedimiento quirúrgico adicional para favorecer el cierre.",
      },
      {
        question: "¿Cuándo debo preocuparme por una herida quirúrgica?",
        answer:
          "Si presenta dolor creciente, enrojecimiento que se extiende, secreción con mal olor, fiebre, o los bordes se separan, debe evaluarse pronto por un cirujano para evitar complicaciones mayores.",
      },
    ],
    relatedServices: ["s-manejo-heridas-complicadas"],
    relatedSymptoms: ["sy-herida-quirurgica-complicada", "sy-herida-no-cicatriza"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/heridas-quirurgicas-complicadas.jpg",
    seo: {
      title: "Heridas Quirúrgicas Complicadas | Dr. Santiesteban",
      description: "Manejo de heridas quirúrgicas complicadas con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["heridas quirúrgicas complicadas", "herida que no cicatriza", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-infecciones-heridas",
    slug: "infecciones-de-heridas-y-complicaciones-posoperatorias",
    name: "Infecciones de heridas y complicaciones posoperatorias",
    description:
      "Las infecciones de heridas y otras complicaciones posoperatorias pueden presentarse después de cualquier procedimiento quirúrgico. Su identificación y manejo oportuno son clave para evitar que una complicación local se vuelva más grave.",
    symptoms: ["Dolor, inflamación o secreción de una herida quirúrgica", "Fiebre en el posoperatorio"],
    causes: ["Contaminación bacteriana de la herida durante o después de la cirugía"],
    riskFactors: ["Diabetes no controlada", "Obesidad", "Cirugías prolongadas", "Higiene deficiente de la herida en el posoperatorio"],
    complications: ["Extensión de la infección a planos profundos", "Dehiscencia de la herida", "Infección generalizada en casos no tratados"],
    treatments: ["Curaciones y manejo local de la infección", "Drenaje quirúrgico si se forma una colección de pus"],
    faqs: [
      {
        question: "¿Cómo saber si una herida quirúrgica está infectada?",
        answer:
          "Los signos incluyen enrojecimiento que se extiende, calor local, dolor que aumenta en lugar de disminuir, secreción con mal olor y, en ocasiones, fiebre. Ante estos signos se debe acudir con el cirujano que realizó el procedimiento.",
      },
      {
        question: "¿Toda infección de herida requiere nueva cirugía?",
        answer:
          "No siempre. Muchas infecciones superficiales se controlan con curaciones especializadas. Si se forma una colección de pus profunda, puede requerirse un drenaje quirúrgico adicional.",
      },
      {
        question: "¿Cómo se previene una infección posoperatoria?",
        answer:
          "Siguiendo las indicaciones de cuidado de la herida, manteniendo controladas enfermedades de base como la diabetes, y acudiendo a las revisiones posoperatorias programadas para detectar signos tempranos de complicación.",
      },
    ],
    relatedServices: ["s-manejo-heridas-complicadas"],
    relatedSymptoms: ["sy-herida-quirurgica-complicada"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/infecciones-de-heridas-y-complicaciones-posoperatorias.jpg",
    seo: {
      title: "Infecciones de Heridas Posoperatorias | Dr. Santiesteban",
      description: "Manejo de infecciones posoperatorias con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["infección de herida quirúrgica", "complicaciones posoperatorias", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-pie-diabetico",
    slug: "ulceras-de-pie-diabetico",
    name: "Úlceras de pie diabético",
    description:
      "Las úlceras de pie diabético son lesiones abiertas que se forman en los pies de personas con diabetes, generalmente por la combinación de mala circulación y pérdida de sensibilidad. Requieren valoración, curaciones especializadas y, en algunos casos, manejo quirúrgico para evitar complicaciones mayores.",
    symptoms: ["Úlceras o lesiones en los pies", "Cambios de coloración, secreción o mal olor en heridas del pie", "Disminución de la sensibilidad en los pies"],
    causes: ["Mala circulación sanguínea asociada a la diabetes", "Pérdida de sensibilidad (neuropatía diabética) que retrasa la detección de lesiones"],
    riskFactors: ["Diabetes de larga evolución", "Control inadecuado de la glucosa", "Antecedente de úlceras previas", "Deformidades del pie"],
    complications: ["Infección profunda del pie", "Compromiso óseo (osteomielitis)", "Riesgo de amputación en casos avanzados no tratados"],
    treatments: ["Curaciones especializadas periódicas", "Desbridamiento quirúrgico del tejido no viable", "Manejo multidisciplinario junto con el control metabólico de la diabetes"],
    faqs: [
      {
        question: "¿Por qué las personas con diabetes desarrollan úlceras en los pies?",
        answer:
          "La diabetes de larga evolución puede dañar la circulación y los nervios de los pies, lo que reduce la sensibilidad y la capacidad de cicatrización. Una lesión pequeña puede pasar desapercibida y convertirse en una úlcera si no se detecta a tiempo.",
      },
      {
        question: "¿Toda úlcera de pie diabético requiere cirugía?",
        answer:
          "No todas. Muchas se manejan con curaciones especializadas y control estricto de la glucosa. El desbridamiento quirúrgico se requiere cuando hay tejido no viable o signos de infección profunda.",
      },
      {
        question: "¿Cómo se previenen las úlceras de pie diabético?",
        answer:
          "La revisión diaria de los pies, el control adecuado de la glucosa, el uso de calzado apropiado y la atención inmediata ante cualquier lesión, por pequeña que parezca, son medidas clave para prevenir su aparición.",
      },
    ],
    relatedServices: ["s-manejo-pie-diabetico"],
    relatedSymptoms: ["sy-ulceras-pie-diabetico", "sy-cambios-herida-pie-diabetico"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/ulceras-de-pie-diabetico.jpg",
    seo: {
      title: "Úlceras de Pie Diabético | Dr. Santiesteban",
      description: "Manejo de pie diabético con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["pie diabético", "úlceras de pie diabético", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-dolor-abdominal-quirurgico",
    slug: "dolor-abdominal-de-probable-origen-quirurgico",
    name: "Dolor abdominal de probable origen quirúrgico",
    description:
      "El dolor abdominal de probable origen quirúrgico agrupa cuadros de dolor abdominal que, por sus características, requieren valoración por un cirujano general para descartar una causa que necesite tratamiento quirúrgico, en lugar de solo manejo médico general.",
    symptoms: ["Dolor abdominal agudo o persistente", "Distensión abdominal", "Coloración amarillenta de piel y ojos en algunos casos"],
    causes: ["Múltiples causas quirúrgicas abdominales posibles, que se identifican mediante valoración clínica y estudios dirigidos"],
    riskFactors: ["Cirugías abdominales previas", "Enfermedad de vesícula biliar o vía biliar conocida", "Antecedente de hernias no tratadas"],
    complications: ["Retraso diagnóstico de una causa quirúrgica que requiere tratamiento oportuno"],
    treatments: ["Valoración clínica integral con estudios de laboratorio e imagen", "Tratamiento dirigido a la causa específica una vez identificada"],
    faqs: [
      {
        question: "¿Cuándo un dolor abdominal debe evaluarlo un cirujano?",
        answer:
          "Cuando el dolor es intenso, persistente, se acompaña de fiebre, vómito, distensión abdominal, o coloración amarillenta de piel y ojos, conviene una valoración por un cirujano general para descartar una causa que requiera tratamiento quirúrgico.",
      },
      {
        question: "¿Todo dolor abdominal requiere cirugía?",
        answer:
          "No. Muchas causas de dolor abdominal se resuelven con manejo médico. La valoración quirúrgica sirve precisamente para identificar si el origen del dolor requiere o no un procedimiento quirúrgico.",
      },
      {
        question: "¿Qué estudios se usan para evaluar el dolor abdominal?",
        answer:
          "Según el caso, el cirujano puede solicitar análisis de laboratorio, ultrasonido, tomografía u otros estudios de imagen para identificar la causa exacta del dolor antes de definir el tratamiento.",
      },
    ],
    relatedSymptoms: ["sy-dolor-abdominal-agudo", "sy-distension-abdominal", "sy-ictericia"],
    lastReviewed: "2026-10-09",
    image: "/enfermedades/dolor-abdominal-de-probable-origen-quirurgico.jpg",
    seo: {
      title: "Dolor Abdominal de Origen Quirúrgico | Dr. Santiesteban",
      description: "Valoración de dolor abdominal con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["dolor abdominal", "valoración quirúrgica", "cirujano general Tuxtla Gutiérrez"],
    },
  },
];
