import type { MedicalService } from "@/types/schema";

// El doctor no proporcionó lista de servicios ("preguntarle al cliente, no
// anoto"). Se completaron los 20 procedimientos reales de Cirugía General
// que corresponden directamente a sus 24 enfermedades, priorizando su
// especialidad declarada — no se fabricó ningún dato específico del doctor
// (precios, duración exacta), solo contenido clínico estándar de la
// especialidad (AGENTS.md §3).
export const services: MedicalService[] = [
  {
    id: "s-colecistectomia-laparoscopica",
    slug: "colecistectomia-laparoscopica",
    name: "Colecistectomía laparoscópica",
    description: "Extirpación quirúrgica de la vesícula biliar mediante cirugía de mínima invasión.",
    longDescription:
      "La colecistectomía laparoscópica es la extirpación de la vesícula biliar a través de pequeñas incisiones en el abdomen, utilizando una cámara y instrumentos especializados. Es el tratamiento definitivo para la colelitiasis, la colecistitis aguda y los pólipos vesiculares que requieren cirugía, con una recuperación considerablemente más rápida que la cirugía abierta.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general",
    duration: "45 a 90 minutos",
    recoveryTime: "Reincorporación a actividades normales en 1 a 2 semanas",
    isPainful: true,
    benefits: [
      "Incisiones pequeñas con mejor recuperación estética",
      "Recuperación más rápida que la cirugía abierta",
      "Resuelve de forma definitiva la enfermedad de la vesícula biliar",
    ],
    postOpRecommendations: [
      "Dieta progresiva baja en grasas durante los primeros días",
      "Evitar esfuerzo físico intenso durante dos semanas",
      "Acudir a la revisión postoperatoria programada",
    ],
    technicalSpecs: { Tipo: "Cirugía laparoscópica", Duración: "45 a 90 minutos", Doloroso: "Sí, con manejo del dolor postoperatorio" },
    faqs: [
      {
        question: "¿La colecistectomía laparoscópica deja cicatrices grandes?",
        answer:
          "No. Se realiza a través de pequeñas incisiones de pocos milímetros, lo que deja cicatrices mínimas en comparación con la cirugía abierta tradicional.",
      },
      {
        question: "¿Cuánto tiempo de hospitalización requiere?",
        answer:
          "En la mayoría de los casos sin complicaciones, la estancia hospitalaria es de 24 horas o incluso puede realizarse de forma ambulatoria, según la valoración del cirujano.",
      },
    ],
    relatedConditions: ["d-colelitiasis", "d-colecistitis-aguda", "d-polipos-vesicula"],
    lastReviewed: "2026-10-09",
    image: "/servicios/colecistectomia-laparoscopica.jpg",
    seo: {
      title: "Colecistectomía Laparoscópica | Dr. Santiesteban",
      description: "Cirugía de vesícula biliar laparoscópica con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["colecistectomía laparoscópica", "cirugía de vesícula", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-plastia-hernia-inguinal",
    slug: "plastia-de-hernia-inguinal",
    name: "Plastía de hernia inguinal",
    description: "Reparación quirúrgica de la hernia inguinal para restaurar la integridad de la pared abdominal.",
    longDescription:
      "La plastía de hernia inguinal es la reparación quirúrgica del defecto de la pared abdominal en la región de la ingle, generalmente reforzada con una malla para reducir el riesgo de recurrencia. Puede realizarse por técnica abierta o laparoscópica, según las características de cada hernia.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general, según el caso",
    duration: "45 a 60 minutos",
    recoveryTime: "Reincorporación a actividades normales en 2 a 3 semanas",
    isPainful: true,
    benefits: ["Corrige de forma definitiva el defecto de la pared abdominal", "Reduce el riesgo de complicaciones por encarcelamiento o estrangulación"],
    postOpRecommendations: ["Evitar esfuerzo físico intenso durante las primeras semanas", "Acudir a la revisión postoperatoria programada"],
    technicalSpecs: { Tipo: "Cirugía hospitalaria", Duración: "45 a 60 minutos", Doloroso: "Sí, con manejo del dolor postoperatorio" },
    faqs: [
      {
        question: "¿Se usa malla en toda plastía inguinal?",
        answer:
          "En la mayoría de los casos en adultos sí, ya que reduce significativamente el riesgo de que la hernia reaparezca. El cirujano decide la técnica según el tamaño y las características de la hernia.",
      },
      {
        question: "¿Cuándo puedo volver a hacer ejercicio después de esta cirugía?",
        answer:
          "Generalmente se recomienda esperar de 3 a 4 semanas antes de retomar ejercicio intenso, siempre siguiendo la indicación específica del cirujano según la evolución de cada paciente.",
      },
    ],
    relatedConditions: ["d-hernia-inguinal"],
    lastReviewed: "2026-10-09",
    image: "/servicios/plastia-de-hernia-inguinal.jpg",
    seo: {
      title: "Plastía de Hernia Inguinal | Dr. Santiesteban",
      description: "Cirugía de hernia inguinal con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["plastía inguinal", "cirugía de hernia inguinal", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-plastia-hernia-umbilical",
    slug: "plastia-de-hernia-umbilical",
    name: "Plastía de hernia umbilical",
    description: "Reparación quirúrgica de la hernia umbilical para restaurar la integridad de la pared abdominal.",
    longDescription:
      "La plastía de hernia umbilical es la reparación quirúrgica del defecto en el anillo umbilical, cerrando el defecto directamente o reforzándolo con una malla según su tamaño. Es un procedimiento con buenos resultados y recuperación relativamente rápida.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general, según el caso",
    duration: "30 a 60 minutos",
    recoveryTime: "Reincorporación a actividades normales en 1 a 2 semanas",
    isPainful: true,
    benefits: ["Corrige de forma definitiva el defecto umbilical", "Previene complicaciones por encarcelamiento"],
    postOpRecommendations: ["Evitar esfuerzo físico intenso durante las primeras semanas", "Acudir a la revisión postoperatoria programada"],
    technicalSpecs: { Tipo: "Cirugía hospitalaria", Duración: "30 a 60 minutos", Doloroso: "Sí, con manejo del dolor postoperatorio" },
    faqs: [
      {
        question: "¿La plastía umbilical cambia la apariencia del ombligo?",
        answer:
          "El cirujano procura preservar la apariencia natural del ombligo durante la reparación. El resultado estético final depende del tamaño del defecto original y la técnica utilizada.",
      },
      {
        question: "¿Esta cirugía requiere hospitalización?",
        answer:
          "En la mayoría de los casos es un procedimiento ambulatorio o de estancia muy corta, dependiendo del tamaño de la hernia y la valoración del cirujano.",
      },
    ],
    relatedConditions: ["d-hernia-umbilical"],
    lastReviewed: "2026-10-09",
    image: "/servicios/plastia-de-hernia-umbilical.jpg",
    seo: {
      title: "Plastía de Hernia Umbilical | Dr. Santiesteban",
      description: "Cirugía de hernia umbilical con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["plastía umbilical", "cirugía de hernia umbilical", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-plastia-hernia-epigastrica",
    slug: "plastia-de-hernia-epigastrica",
    name: "Plastía de hernia epigástrica",
    description: "Reparación quirúrgica de la hernia epigástrica para corregir el defecto en la línea media del abdomen.",
    longDescription:
      "La plastía de hernia epigástrica corrige el defecto de la línea media del abdomen entre el esternón y el ombligo, cerrando el punto débil por el que protruye el tejido graso. Es un procedimiento relativamente breve con buena recuperación.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general, según el caso",
    duration: "30 a 45 minutos",
    recoveryTime: "Reincorporación a actividades normales en 1 a 2 semanas",
    isPainful: true,
    benefits: ["Corrige de forma definitiva el defecto de la línea media", "Elimina el dolor asociado a la hernia"],
    postOpRecommendations: ["Evitar esfuerzo físico intenso durante las primeras semanas", "Acudir a la revisión postoperatoria programada"],
    technicalSpecs: { Tipo: "Cirugía hospitalaria", Duración: "30 a 45 minutos", Doloroso: "Sí, con manejo del dolor postoperatorio" },
    faqs: [
      {
        question: "¿La plastía epigástrica es una cirugía mayor?",
        answer:
          "Es un procedimiento relativamente breve y de baja complejidad en la mayoría de los casos, aunque como toda cirugía requiere valoración preoperatoria y seguimiento postoperatorio.",
      },
      {
        question: "¿Puede reaparecer la hernia después de operada?",
        answer:
          "El riesgo de recurrencia es bajo cuando la reparación se realiza correctamente, especialmente si se siguen las indicaciones de reposo relativo durante la recuperación inicial.",
      },
    ],
    relatedConditions: ["d-hernia-epigastrica"],
    lastReviewed: "2026-10-09",
    image: "/servicios/plastia-de-hernia-epigastrica.jpg",
    seo: {
      title: "Plastía de Hernia Epigástrica | Dr. Santiesteban",
      description: "Cirugía de hernia epigástrica con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["plastía epigástrica", "cirugía de hernia epigástrica", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-plastia-hernia-incisional",
    slug: "plastia-de-hernia-incisional",
    name: "Plastía de hernia incisional",
    description: "Reparación quirúrgica de la hernia incisional (eventración) sobre una cicatriz de cirugía previa.",
    longDescription:
      "La plastía de hernia incisional repara el defecto de la pared abdominal que se forma sobre una cicatriz de cirugía previa, generalmente utilizando una malla de refuerzo para disminuir el riesgo de que vuelva a aparecer. La técnica se elige según el tamaño y la ubicación del defecto.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general",
    duration: "60 a 120 minutos",
    recoveryTime: "Reincorporación a actividades normales en 3 a 4 semanas",
    isPainful: true,
    benefits: ["Corrige el defecto de la pared abdominal de cirugías previas", "Reduce el riesgo de crecimiento progresivo de la hernia"],
    postOpRecommendations: ["Reposo relativo durante las primeras semanas", "Uso de faja abdominal según indicación del cirujano", "Acudir a la revisión postoperatoria programada"],
    technicalSpecs: { Tipo: "Cirugía hospitalaria", Duración: "60 a 120 minutos", Doloroso: "Sí, con manejo del dolor postoperatorio" },
    faqs: [
      {
        question: "¿Por qué la plastía incisional suele ser más compleja que otras hernias?",
        answer:
          "Porque el tejido sobre una cicatriz previa suele tener menor calidad, y el defecto puede ser más grande, lo que requiere una planeación quirúrgica más detallada y, con frecuencia, el uso de malla.",
      },
      {
        question: "¿Cuánto tiempo debo esperar para volver a trabajar?",
        answer:
          "Depende del tipo de actividad laboral y del tamaño de la hernia reparada; el cirujano indica el tiempo específico según cada caso, generalmente entre 3 y 4 semanas para actividades sin esfuerzo físico intenso.",
      },
    ],
    relatedConditions: ["d-hernia-incisional"],
    lastReviewed: "2026-10-09",
    image: "/servicios/plastia-de-hernia-incisional.jpg",
    seo: {
      title: "Plastía de Hernia Incisional | Dr. Santiesteban",
      description: "Cirugía de hernia incisional y eventración con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["plastía de hernia incisional", "cirugía de eventración", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-apendicectomia",
    slug: "apendicectomia",
    name: "Apendicectomía",
    description: "Extirpación quirúrgica del apéndice inflamado, generalmente por laparoscopia.",
    longDescription:
      "La apendicectomía es la extirpación quirúrgica del apéndice, el tratamiento definitivo de la apendicitis aguda. Se realiza preferentemente por laparoscopia, lo que permite una recuperación más rápida en comparación con la técnica abierta tradicional.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general",
    duration: "30 a 60 minutos",
    recoveryTime: "Reincorporación a actividades normales en 1 a 2 semanas",
    isPainful: true,
    benefits: ["Resuelve la urgencia de forma definitiva", "La técnica laparoscópica favorece una recuperación más rápida"],
    postOpRecommendations: ["Evitar esfuerzo físico intenso durante dos semanas", "Acudir a la revisión postoperatoria programada"],
    technicalSpecs: { Tipo: "Cirugía de urgencia", Duración: "30 a 60 minutos", Doloroso: "Sí, con manejo del dolor postoperatorio" },
    faqs: [
      {
        question: "¿La apendicectomía siempre es de urgencia?",
        answer:
          "Sí, en la gran mayoría de los casos se realiza como procedimiento de urgencia una vez confirmado el diagnóstico de apendicitis aguda, para evitar que el apéndice se perfore.",
      },
      {
        question: "¿Vivir sin apéndice tiene consecuencias?",
        answer:
          "No. El apéndice no cumple una función esencial conocida en el adulto, y la mayoría de las personas llevan una vida completamente normal después de la apendicectomía.",
      },
    ],
    relatedConditions: ["d-apendicitis-aguda"],
    lastReviewed: "2026-10-09",
    image: "/servicios/apendicectomia.jpg",
    seo: {
      title: "Apendicectomía en Tuxtla Gutiérrez | Dr. Santiesteban",
      description: "Cirugía de apendicitis con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["apendicectomía", "cirugía de apendicitis", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-exeresis-lipomas",
    slug: "exeresis-de-lipomas",
    name: "Exéresis de lipomas",
    description: "Extirpación quirúrgica ambulatoria de lipomas (bolitas de grasa) bajo la piel.",
    longDescription:
      "La exéresis de lipomas es la extirpación quirúrgica completa de estas tumoraciones benignas de tejido graso, realizada de forma ambulatoria con anestesia local. El tejido extraído puede enviarse a estudio de laboratorio para confirmar el diagnóstico.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia local",
    duration: "20 a 40 minutos",
    recoveryTime: "Reincorporación a actividades normales en pocos días",
    isPainful: false,
    benefits: ["Elimina la tumoración de forma definitiva", "Procedimiento ambulatorio con anestesia local", "Permite confirmar el diagnóstico mediante estudio de laboratorio"],
    postOpRecommendations: ["Mantener la herida limpia y seca según indicación", "Evitar esfuerzo físico en la zona operada durante unos días"],
    technicalSpecs: { Tipo: "Cirugía ambulatoria", Duración: "20 a 40 minutos", Doloroso: "No" },
    faqs: [
      {
        question: "¿La extirpación de un lipoma duele?",
        answer:
          "El procedimiento se realiza con anestesia local, por lo que no debería ser doloroso durante la cirugía. Puede haber molestia leve en los días posteriores, manejable con las indicaciones del cirujano.",
      },
      {
        question: "¿El lipoma puede volver a aparecer después de extirparlo?",
        answer:
          "Cuando se extirpa completamente, incluyendo su cápsula, el riesgo de que reaparezca en el mismo sitio es bajo. Puede aparecer uno nuevo en otra zona, ya que es una condición independiente.",
      },
    ],
    relatedConditions: ["d-lipomas"],
    lastReviewed: "2026-10-09",
    image: "/servicios/exeresis-de-lipomas.jpg",
    seo: {
      title: "Exéresis de Lipomas | Dr. Santiesteban",
      description: "Extirpación de lipomas con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["exéresis de lipoma", "quitar bolita de grasa", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-exeresis-quistes",
    slug: "exeresis-de-quistes",
    name: "Exéresis de quistes sebáceos y epidérmicos",
    description: "Extirpación quirúrgica ambulatoria de quistes sebáceos o epidérmicos, incluyendo su cápsula.",
    longDescription:
      "La exéresis de quistes sebáceos y epidérmicos consiste en la extirpación completa del quiste junto con su cápsula, lo que evita que vuelva a formarse en el mismo sitio. Se realiza de forma ambulatoria con anestesia local.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia local",
    duration: "20 a 40 minutos",
    recoveryTime: "Reincorporación a actividades normales en pocos días",
    isPainful: false,
    benefits: ["Elimina el quiste de forma definitiva al retirar la cápsula completa", "Procedimiento ambulatorio con anestesia local"],
    postOpRecommendations: ["Mantener la herida limpia y seca según indicación", "Acudir a revisión si hay signos de infección"],
    technicalSpecs: { Tipo: "Cirugía ambulatoria", Duración: "20 a 40 minutos", Doloroso: "No" },
    faqs: [
      {
        question: "¿Por qué es importante retirar la cápsula completa del quiste?",
        answer:
          "Si queda tejido de la cápsula, el quiste puede volver a llenarse y reaparecer. Por eso la extirpación quirúrgica completa es la forma más efectiva de evitar que recurra.",
      },
      {
        question: "¿Se puede operar un quiste inflamado o infectado?",
        answer:
          "Si el quiste está inflamado o infectado, en ocasiones se requiere primero controlar la infección o drenarlo, y realizar la extirpación definitiva de la cápsula en un segundo tiempo, según indique el cirujano.",
      },
    ],
    relatedConditions: ["d-quistes-sebaceos"],
    lastReviewed: "2026-10-09",
    image: "/servicios/exeresis-de-quistes.jpg",
    seo: {
      title: "Exéresis de Quistes Sebáceos | Dr. Santiesteban",
      description: "Extirpación de quistes sebáceos y epidérmicos con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["exéresis de quiste", "quitar quiste sebáceo", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-drenaje-abscesos-piel",
    slug: "drenaje-de-abscesos-de-piel",
    name: "Drenaje de abscesos de piel y tejidos blandos",
    description: "Procedimiento quirúrgico para evacuar la colección de pus de un absceso de piel o tejidos blandos.",
    longDescription:
      "El drenaje de abscesos de piel y tejidos blandos es un procedimiento que libera la colección de pus acumulada por una infección localizada, aliviando el dolor y la presión, y permitiendo que el tejido sane adecuadamente con las curaciones posteriores indicadas.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia local",
    duration: "15 a 30 minutos",
    recoveryTime: "Mejoría notoria en pocos días con curaciones indicadas",
    isPainful: false,
    benefits: ["Alivio rápido del dolor al liberar la presión acumulada", "Procedimiento ambulatorio y resolutivo"],
    postOpRecommendations: ["Curaciones periódicas según indicación del cirujano", "Vigilar signos de que la infección se extienda"],
    technicalSpecs: { Tipo: "Procedimiento ambulatorio", Duración: "15 a 30 minutos", Doloroso: "No" },
    faqs: [
      {
        question: "¿El drenaje de un absceso cura la infección por completo?",
        answer:
          "El drenaje elimina la colección de pus, que es la parte principal del problema. En algunos casos el cirujano complementa el manejo con curaciones periódicas hasta la resolución completa.",
      },
      {
        question: "¿Necesito antibiótico además del drenaje?",
        answer:
          "Depende de la extensión y características del absceso; el cirujano determina si es necesario manejo adicional según cada caso en la valoración clínica.",
      },
    ],
    relatedConditions: ["d-abscesos-piel"],
    lastReviewed: "2026-10-09",
    image: "/servicios/drenaje-de-abscesos-de-piel.jpg",
    seo: {
      title: "Drenaje de Abscesos de Piel | Dr. Santiesteban",
      description: "Drenaje quirúrgico de abscesos con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["drenaje de absceso", "absceso de piel tratamiento", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-hemorroidectomia",
    slug: "hemorroidectomia",
    name: "Hemorroidectomía",
    description: "Extirpación quirúrgica de hemorroides en casos de enfermedad hemorroidal avanzada.",
    longDescription:
      "La hemorroidectomía es la extirpación quirúrgica del tejido hemorroidal en casos de enfermedad hemorroidal avanzada que no responde a medidas conservadoras ni a procedimientos ambulatorios. Es un tratamiento resolutivo para los grados más severos.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general, según el caso",
    duration: "30 a 60 minutos",
    recoveryTime: "Reincorporación a actividades normales en 2 a 3 semanas",
    isPainful: true,
    benefits: ["Tratamiento definitivo para enfermedad hemorroidal avanzada", "Reduce de forma significativa el sangrado y el prolapso"],
    postOpRecommendations: ["Baños de asiento según indicación del cirujano", "Dieta rica en fibra para facilitar la evacuación", "Acudir a la revisión postoperatoria programada"],
    technicalSpecs: { Tipo: "Cirugía hospitalaria", Duración: "30 a 60 minutos", Doloroso: "Sí, con manejo del dolor postoperatorio" },
    faqs: [
      {
        question: "¿La hemorroidectomía es dolorosa en la recuperación?",
        answer:
          "Puede haber molestia en la región anal durante la recuperación inicial, manejable con las indicaciones del cirujano, incluyendo baños de asiento y medidas para facilitar la evacuación sin esfuerzo.",
      },
      {
        question: "¿Siempre se necesita cirugía para las hemorroides?",
        answer:
          "No. La hemorroidectomía se reserva para los grados más avanzados o cuando otros tratamientos no han sido suficientes; los grados leves suelen manejarse con otras medidas.",
      },
    ],
    relatedConditions: ["d-enfermedad-hemorroidal"],
    lastReviewed: "2026-10-09",
    image: "/servicios/hemorroidectomia.jpg",
    seo: {
      title: "Hemorroidectomía en Tuxtla Gutiérrez | Dr. Santiesteban",
      description: "Cirugía de hemorroides con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["hemorroidectomía", "cirugía de hemorroides", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-tratamiento-fisura-anal",
    slug: "tratamiento-de-fisura-anal",
    name: "Tratamiento quirúrgico de fisura anal",
    description: "Procedimiento quirúrgico para fisuras anales crónicas que no responden a manejo inicial.",
    longDescription:
      "El tratamiento quirúrgico de la fisura anal se indica cuando la fisura se vuelve crónica y no responde a medidas conservadoras. El procedimiento busca romper el ciclo de espasmo del esfínter que perpetúa el dolor y permitir la cicatrización definitiva.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o local, según el caso",
    duration: "20 a 40 minutos",
    recoveryTime: "Reincorporación a actividades normales en 1 a 2 semanas",
    isPainful: true,
    benefits: ["Rompe el ciclo de dolor y espasmo de la fisura crónica", "Favorece la cicatrización definitiva"],
    postOpRecommendations: ["Dieta rica en fibra para facilitar la evacuación", "Baños de asiento según indicación del cirujano"],
    technicalSpecs: { Tipo: "Cirugía hospitalaria", Duración: "20 a 40 minutos", Doloroso: "Sí, con manejo del dolor postoperatorio" },
    faqs: [
      {
        question: "¿Toda fisura anal necesita cirugía?",
        answer:
          "No. Las fisuras agudas suelen mejorar con medidas para ablandar las evacuaciones. La cirugía se reserva para fisuras crónicas que no responden al manejo inicial.",
      },
      {
        question: "¿Esta cirugía afecta el control de esfínteres?",
        answer:
          "El procedimiento se planea cuidando la función del esfínter anal. El cirujano explica los detalles específicos de la técnica y el pronóstico funcional antes del procedimiento.",
      },
    ],
    relatedConditions: ["d-fisuras-anales"],
    lastReviewed: "2026-10-09",
    image: "/servicios/tratamiento-de-fisura-anal.jpg",
    seo: {
      title: "Tratamiento de Fisura Anal | Dr. Santiesteban",
      description: "Cirugía de fisura anal con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["cirugía de fisura anal", "tratamiento fisura anal", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-tratamiento-fistulas-perianales",
    slug: "tratamiento-de-fistulas-perianales",
    name: "Tratamiento quirúrgico de fístulas y abscesos perianales",
    description: "Drenaje de abscesos perianales y tratamiento quirúrgico definitivo de fístulas.",
    longDescription:
      "El tratamiento quirúrgico de fístulas y abscesos perianales incluye el drenaje del absceso en la fase aguda y, posteriormente, el tratamiento definitivo del trayecto fistuloso, cuidando siempre la preservación de la función del esfínter anal.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general, según el caso",
    duration: "30 a 60 minutos",
    recoveryTime: "Reincorporación a actividades normales en 2 a 3 semanas",
    isPainful: true,
    benefits: ["Resuelve la infección activa del absceso", "Elimina el trayecto fistuloso de forma definitiva"],
    postOpRecommendations: ["Curaciones periódicas según indicación del cirujano", "Baños de asiento según indicación"],
    technicalSpecs: { Tipo: "Cirugía hospitalaria", Duración: "30 a 60 minutos", Doloroso: "Sí, con manejo del dolor postoperatorio" },
    faqs: [
      {
        question: "¿Se trata todo en una sola cirugía?",
        answer:
          "En ocasiones el absceso se drena primero y el tratamiento definitivo de la fístula se realiza en un segundo tiempo, una vez controlada la infección aguda, según la complejidad de cada caso.",
      },
      {
        question: "¿Esta cirugía afecta el control de esfínteres?",
        answer:
          "El cirujano planea la técnica cuidando preservar la función del esfínter anal, explicando el pronóstico específico según la ubicación y complejidad del trayecto fistuloso.",
      },
    ],
    relatedConditions: ["d-fistulas-abscesos-perianales"],
    lastReviewed: "2026-10-09",
    image: "/servicios/tratamiento-de-fistulas-perianales.jpg",
    seo: {
      title: "Tratamiento de Fístulas Perianales | Dr. Santiesteban",
      description: "Cirugía de fístulas y abscesos perianales con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["cirugía de fístula perianal", "absceso perianal tratamiento", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-cirugia-quiste-pilonidal",
    slug: "cirugia-de-quiste-pilonidal",
    name: "Cirugía de quiste pilonidal",
    description: "Tratamiento quirúrgico definitivo de la enfermedad pilonidal para eliminar el trayecto y prevenir recurrencias.",
    longDescription:
      "La cirugía de quiste pilonidal consiste en la extirpación completa del trayecto y tejido afectado en la región sacrococcígea. Puede requerir drenaje inicial en episodios agudos de absceso, seguido del tratamiento quirúrgico definitivo para reducir el riesgo de recurrencia.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general, según el caso",
    duration: "30 a 60 minutos",
    recoveryTime: "Reincorporación a actividades normales en 2 a 4 semanas",
    isPainful: true,
    benefits: ["Elimina el trayecto pilonidal de forma definitiva", "Reduce significativamente el riesgo de episodios recurrentes"],
    postOpRecommendations: ["Mantener la zona limpia y seca durante la recuperación", "Evitar sedestación prolongada según indicación del cirujano"],
    technicalSpecs: { Tipo: "Cirugía hospitalaria", Duración: "30 a 60 minutos", Doloroso: "Sí, con manejo del dolor postoperatorio" },
    faqs: [
      {
        question: "¿La cirugía de quiste pilonidal garantiza que no vuelva a aparecer?",
        answer:
          "Reduce de forma importante el riesgo de recurrencia en comparación con solo drenar los episodios agudos, aunque ningún procedimiento elimina el riesgo por completo. El cuidado posterior de la zona también ayuda a prevenir nuevos episodios.",
      },
      {
        question: "¿Cuánto tiempo debo evitar sentarme después de esta cirugía?",
        answer:
          "El cirujano indica el tiempo específico según la técnica utilizada y la evolución de la herida, generalmente con recomendaciones para evitar presión directa sobre la zona operada durante la cicatrización inicial.",
      },
    ],
    relatedConditions: ["d-enfermedad-pilonidal"],
    lastReviewed: "2026-10-09",
    image: "/servicios/cirugia-de-quiste-pilonidal.jpg",
    seo: {
      title: "Cirugía de Quiste Pilonidal | Dr. Santiesteban",
      description: "Tratamiento quirúrgico de enfermedad pilonidal con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["cirugía de quiste pilonidal", "enfermedad pilonidal tratamiento", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-manejo-diverticulitis",
    slug: "manejo-quirurgico-de-diverticulitis",
    name: "Manejo quirúrgico de diverticulitis",
    description: "Tratamiento quirúrgico de la diverticulitis aguda complicada o recurrente del colon.",
    longDescription:
      "El manejo quirúrgico de la diverticulitis se indica en episodios recurrentes, complicados con abscesos, perforación u obstrucción, cuando el manejo médico no es suficiente para resolver el cuadro de forma definitiva.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general",
    duration: "Variable según la extensión del segmento afectado",
    recoveryTime: "Reincorporación gradual a actividades normales en 4 a 6 semanas",
    isPainful: true,
    benefits: ["Resuelve episodios complicados o recurrentes de diverticulitis", "Previene complicaciones futuras como perforación u obstrucción"],
    postOpRecommendations: ["Dieta progresiva según indicación del cirujano", "Acudir a las revisiones postoperatorias programadas"],
    technicalSpecs: { Tipo: "Cirugía hospitalaria", Duración: "Variable según el caso", Doloroso: "Sí, con manejo del dolor postoperatorio" },
    faqs: [
      {
        question: "¿Cuándo se opera la diverticulitis en lugar de tratarla con manejo médico?",
        answer:
          "Se considera la cirugía cuando los episodios son recurrentes, se complican con abscesos o perforación, o cuando el manejo médico inicial no logra controlar el cuadro.",
      },
      {
        question: "¿Esta cirugía implica usar una bolsa (colostomía)?",
        answer:
          "Depende de la gravedad y el contexto de cada caso. En procedimientos programados suele evitarse, pero en cuadros complicados de urgencia puede ser necesaria de forma temporal; el cirujano explica el plan específico antes de operar.",
      },
    ],
    relatedConditions: ["d-diverticulitis"],
    lastReviewed: "2026-10-09",
    image: "/servicios/manejo-quirurgico-de-diverticulitis.jpg",
    seo: {
      title: "Manejo Quirúrgico de Diverticulitis | Dr. Santiesteban",
      description: "Cirugía de diverticulitis con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["cirugía de diverticulitis", "manejo quirúrgico diverticulitis", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-cirugia-obstruccion-intestinal",
    slug: "cirugia-de-obstruccion-intestinal",
    name: "Cirugía de obstrucción intestinal",
    description: "Tratamiento quirúrgico de urgencia para liberar una obstrucción intestinal que no resuelve con manejo médico.",
    longDescription:
      "La cirugía de obstrucción intestinal se realiza cuando el bloqueo del tránsito intestinal no se resuelve con manejo médico inicial o existen signos de que el segmento intestinal afectado está perdiendo circulación, lo que convierte el caso en una urgencia quirúrgica.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general",
    duration: "Variable según la causa y extensión",
    recoveryTime: "Reincorporación gradual a actividades normales en 4 a 6 semanas",
    isPainful: true,
    benefits: ["Resuelve la obstrucción de forma definitiva", "Previene complicaciones graves como la isquemia intestinal"],
    postOpRecommendations: ["Dieta progresiva según indicación del cirujano", "Acudir a las revisiones postoperatorias programadas"],
    technicalSpecs: { Tipo: "Cirugía de urgencia", Duración: "Variable según el caso", Doloroso: "Sí, con manejo del dolor postoperatorio" },
    faqs: [
      {
        question: "¿Toda obstrucción intestinal se opera?",
        answer:
          "No todas; algunas, especialmente las causadas por adherencias, pueden resolverse con manejo médico inicial. La cirugía se reserva para los casos que no mejoran o presentan signos de complicación.",
      },
      {
        question: "¿Cuánto tiempo de hospitalización requiere esta cirugía?",
        answer:
          "Varía según la causa y la extensión del segmento afectado; el cirujano informa el tiempo estimado una vez identificada la causa específica de la obstrucción.",
      },
    ],
    relatedConditions: ["d-obstruccion-intestinal"],
    lastReviewed: "2026-10-09",
    image: "/servicios/cirugia-de-obstruccion-intestinal.jpg",
    seo: {
      title: "Cirugía de Obstrucción Intestinal | Dr. Santiesteban",
      description: "Atención quirúrgica de obstrucción intestinal con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["cirugía de obstrucción intestinal", "urgencia quirúrgica", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-cirugia-nodulos-tiroideos",
    slug: "cirugia-de-nodulos-tiroideos",
    name: "Cirugía de nódulos tiroideos y bocio",
    description: "Extirpación quirúrgica parcial o total de la glándula tiroides para nódulos de riesgo o bocio sintomático.",
    longDescription:
      "La cirugía de nódulos tiroideos y bocio consiste en la extirpación parcial o total de la glándula tiroides, indicada cuando existen nódulos con características de riesgo, bocios grandes que comprimen estructuras del cuello, o cuando se requiere confirmación diagnóstica definitiva.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general",
    duration: "60 a 120 minutos",
    recoveryTime: "Reincorporación a actividades normales en 2 a 3 semanas",
    isPainful: true,
    benefits: ["Resuelve bocios sintomáticos que comprimen el cuello", "Permite el estudio definitivo de nódulos con características de riesgo"],
    postOpRecommendations: ["Seguimiento de la función hormonal según el tipo de extirpación realizada", "Acudir a las revisiones postoperatorias programadas"],
    technicalSpecs: { Tipo: "Cirugía hospitalaria", Duración: "60 a 120 minutos", Doloroso: "Sí, con manejo del dolor postoperatorio" },
    faqs: [
      {
        question: "¿Necesitaré tomar hormona tiroidea después de la cirugía?",
        answer:
          "Depende de si la extirpación fue parcial o total. En la extirpación total siempre se requiere reemplazo hormonal; en la parcial depende de la función del tejido tiroideo restante, y se evalúa con estudios de laboratorio después de la cirugía.",
      },
      {
        question: "¿Esta cirugía deja una cicatriz visible?",
        answer:
          "La incisión se realiza en el cuello y, aunque inicialmente es visible, suele volverse menos notoria con el tiempo. El cirujano explica los cuidados para favorecer una buena cicatrización estética.",
      },
    ],
    relatedConditions: ["d-nodulos-tiroideos"],
    lastReviewed: "2026-10-09",
    image: "/servicios/cirugia-de-nodulos-tiroideos.jpg",
    seo: {
      title: "Cirugía de Nódulos Tiroideos y Bocio | Dr. Santiesteban",
      description: "Tiroidectomía con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["cirugía de tiroides", "tiroidectomía", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-exeresis-tumores-piel",
    slug: "exeresis-de-tumores-de-piel",
    name: "Exéresis de tumores de piel y tejidos blandos",
    description: "Extirpación quirúrgica de tumoraciones de piel y tejidos blandos, con estudio de laboratorio de la pieza extraída.",
    longDescription:
      "La exéresis de tumores de piel y tejidos blandos consiste en la extirpación completa de la lesión, procurando márgenes de tejido sano adecuados, seguida del envío de la pieza a estudio de laboratorio para confirmar su naturaleza benigna o definir pasos adicionales si fuera necesario.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia local",
    duration: "20 a 60 minutos según el tamaño y ubicación",
    recoveryTime: "Reincorporación a actividades normales en pocos días",
    isPainful: false,
    benefits: ["Extirpa la lesión de forma completa", "Permite confirmar el diagnóstico mediante estudio de laboratorio"],
    postOpRecommendations: ["Mantener la herida limpia y seca según indicación", "Acudir a la revisión con el resultado del estudio de la pieza"],
    technicalSpecs: { Tipo: "Cirugía ambulatoria", Duración: "20 a 60 minutos", Doloroso: "No" },
    faqs: [
      {
        question: "¿Toda lesión extirpada se envía a estudio?",
        answer:
          "Es práctica recomendada enviar el tejido extirpado a estudio de laboratorio (patología) para confirmar el diagnóstico, especialmente en lesiones nuevas o de características poco claras.",
      },
      {
        question: "¿Cuánto tiempo tarda el resultado del estudio de laboratorio?",
        answer:
          "El tiempo varía según el laboratorio, generalmente entre una y dos semanas. El cirujano programa una revisión para comunicar el resultado y definir si se requiere algún seguimiento adicional.",
      },
    ],
    relatedConditions: ["d-tumores-piel"],
    lastReviewed: "2026-10-09",
    image: "/servicios/exeresis-de-tumores-de-piel.jpg",
    seo: {
      title: "Exéresis de Tumores de Piel | Dr. Santiesteban",
      description: "Extirpación de tumores de piel y tejidos blandos con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["exéresis de tumor de piel", "cirugía de tejidos blandos", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-cirugia-colon",
    slug: "cirugia-de-colon",
    name: "Cirugía de colon",
    description: "Tratamiento quirúrgico de diversas condiciones del colon que requieren manejo especializado.",
    longDescription:
      "La cirugía de colon agrupa los procedimientos indicados para tratar condiciones específicas del intestino grueso identificadas mediante estudio especializado, con el objetivo de resolver la patología de fondo y restaurar el funcionamiento normal del tránsito intestinal.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general",
    duration: "Variable según el procedimiento específico",
    recoveryTime: "Reincorporación gradual a actividades normales en 4 a 6 semanas",
    isPainful: true,
    benefits: ["Trata de forma definitiva la condición específica del colon", "Permite el estudio detallado del tejido afectado"],
    postOpRecommendations: ["Dieta progresiva según indicación del cirujano", "Acudir a las revisiones postoperatorias programadas"],
    technicalSpecs: { Tipo: "Cirugía hospitalaria", Duración: "Variable según el caso", Doloroso: "Sí, con manejo del dolor postoperatorio" },
    faqs: [
      {
        question: "¿Qué estudios se necesitan antes de una cirugía de colon?",
        answer:
          "Generalmente se requiere una colonoscopia u otros estudios de imagen previos para definir con precisión el diagnóstico y planear el procedimiento quirúrgico más adecuado para cada caso.",
      },
      {
        question: "¿Toda cirugía de colon requiere una bolsa externa?",
        answer:
          "No en todos los casos. Depende de la condición tratada y de si es un procedimiento programado o de urgencia. El cirujano explica el plan específico y sus alternativas antes de la cirugía.",
      },
    ],
    relatedConditions: ["d-patologia-colon"],
    lastReviewed: "2026-10-09",
    image: "/servicios/cirugia-de-colon.jpg",
    seo: {
      title: "Cirugía de Colon en Tuxtla Gutiérrez | Dr. Santiesteban",
      description: "Patología quirúrgica de colon con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["cirugía de colon", "patología de colon", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-manejo-heridas-complicadas",
    slug: "manejo-de-heridas-quirurgicas-complicadas",
    name: "Manejo de heridas quirúrgicas complicadas",
    description: "Curaciones especializadas y manejo quirúrgico de heridas que no cicatrizan adecuadamente o se infectan.",
    longDescription:
      "El manejo de heridas quirúrgicas complicadas incluye curaciones especializadas periódicas, desbridamiento del tejido no viable cuando es necesario, y control de la causa de fondo que impide la cicatrización normal, como infecciones o enfermedades que afectan la circulación.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia local cuando se requiere desbridamiento",
    duration: "Variable según el número de sesiones de curación necesarias",
    recoveryTime: "Variable según la complejidad de la herida",
    isPainful: false,
    benefits: ["Favorece la cicatrización adecuada de heridas complicadas", "Identifica y controla la causa de fondo del retraso en la cicatrización"],
    postOpRecommendations: ["Acudir a las curaciones programadas", "Seguir las indicaciones específicas de cuidado de la herida en casa"],
    technicalSpecs: { Tipo: "Manejo ambulatorio especializado", Duración: "Variable según el caso", Doloroso: "No" },
    faqs: [
      {
        question: "¿Con qué frecuencia se hacen las curaciones de una herida complicada?",
        answer:
          "La frecuencia depende de las características específicas de la herida y se define de forma individualizada por el cirujano, pudiendo variar de curaciones diarias a espaciadas por varios días.",
      },
      {
        question: "¿Toda herida complicada requiere una nueva cirugía?",
        answer:
          "No siempre. Muchas heridas mejoran con curaciones especializadas y control de la causa de fondo. El desbridamiento quirúrgico se reserva para cuando hay tejido no viable que impide la cicatrización.",
      },
    ],
    relatedConditions: ["d-heridas-complicadas", "d-infecciones-heridas"],
    lastReviewed: "2026-10-09",
    image: "/servicios/manejo-de-heridas-quirurgicas-complicadas.jpg",
    seo: {
      title: "Manejo de Heridas Complicadas | Dr. Santiesteban",
      description: "Curación especializada de heridas complicadas con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["manejo de heridas complicadas", "curación de heridas", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-manejo-pie-diabetico",
    slug: "manejo-de-pie-diabetico",
    name: "Valoración, curaciones y manejo quirúrgico de pie diabético",
    description: "Evaluación integral, curaciones especializadas y manejo quirúrgico de úlceras de pie diabético.",
    longDescription:
      "El manejo de pie diabético incluye la valoración integral de la lesión, curaciones especializadas periódicas y, cuando es necesario, desbridamiento quirúrgico del tejido no viable, siempre en coordinación con el control metabólico de la diabetes para favorecer la cicatrización.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia local cuando se requiere desbridamiento",
    duration: "Variable según el número de sesiones necesarias",
    recoveryTime: "Variable según la extensión y gravedad de la lesión",
    isPainful: false,
    benefits: ["Reduce el riesgo de complicaciones graves como la amputación", "Favorece la cicatrización mediante manejo especializado continuo"],
    postOpRecommendations: ["Acudir a las curaciones programadas", "Mantener control estricto de la glucosa", "Revisión diaria de los pies en casa"],
    technicalSpecs: { Tipo: "Manejo ambulatorio especializado", Duración: "Variable según el caso", Doloroso: "No" },
    faqs: [
      {
        question: "¿El manejo de pie diabético evita la amputación?",
        answer:
          "La atención temprana y el manejo especializado continuo reducen de forma importante el riesgo de complicaciones graves, incluyendo la necesidad de amputación, especialmente cuando se combina con buen control de la glucosa.",
      },
      {
        question: "¿Qué tan seguido debo acudir a revisión si tengo una úlcera de pie diabético?",
        answer:
          "La frecuencia depende de la gravedad de la lesión; el cirujano establece un calendario de curaciones y revisiones adaptado a cada caso para vigilar la evolución de cerca.",
      },
    ],
    relatedConditions: ["d-pie-diabetico"],
    lastReviewed: "2026-10-09",
    image: "/servicios/manejo-de-pie-diabetico.jpg",
    seo: {
      title: "Manejo de Pie Diabético | Dr. Santiesteban",
      description: "Curaciones y manejo quirúrgico de pie diabético con el Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez.",
      keywords: ["manejo de pie diabético", "curación de pie diabético", "cirujano general Tuxtla Gutiérrez"],
    },
  },
];
