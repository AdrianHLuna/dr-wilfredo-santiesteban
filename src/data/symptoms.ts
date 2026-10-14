import type { Symptom } from "@/types/schema";

// Los 25 síntomas vienen íntegros del intake real del doctor (por
// instrucción explícita del usuario, sin recortar la lista).
export const symptoms: Symptom[] = [
  {
    id: "sy-dolor-abdominal-agudo",
    slug: "dolor-abdominal-agudo-o-persistente",
    name: "Dolor abdominal agudo o persistente",
    description:
      "El dolor abdominal agudo o persistente es una molestia en el abdomen que aparece de forma súbita e intensa, o que se mantiene por varios días sin mejorar. Puede tener múltiples causas, desde procesos digestivos leves hasta condiciones que requieren cirugía.",
    causes: ["Colecistitis aguda", "Apendicitis aguda", "Diverticulitis", "Obstrucción intestinal", "Procesos digestivos leves no quirúrgicos"],
    alarmSigns: [
      "Si el dolor abdominal es intenso, se acompaña de fiebre, rigidez del abdomen o imposibilidad de pasar gases o evacuar, acude a urgencias de inmediato.",
      "Si el dolor se acompaña de vómito persistente o coloración amarillenta de piel y ojos, acude a urgencias sin demora.",
    ],
    whyConsult:
      "El dolor abdominal agudo o persistente puede ser el primer signo de una condición que requiere cirugía, como apendicitis o colecistitis. Consultar oportunamente permite un diagnóstico preciso y evita complicaciones.",
    faqs: [
      {
        question: "¿Cuándo un dolor abdominal es urgente?",
        answer:
          "Es urgente cuando es muy intenso, aparece de forma súbita, se acompaña de fiebre, vómito persistente, o el abdomen se siente rígido al tacto. En estos casos debe acudirse a valoración médica de inmediato.",
      },
      {
        question: "¿El dolor abdominal persistente siempre es grave?",
        answer:
          "No siempre, pero el dolor que se mantiene por varios días sin mejorar debe evaluarse por un cirujano general para descartar causas que requieran tratamiento específico.",
      },
    ],
    relatedConditions: ["d-colecistitis-aguda", "d-apendicitis-aguda", "d-diverticulitis", "d-dolor-abdominal-quirurgico"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/dolor-abdominal-agudo-o-persistente.jpg",
    seo: {
      title: "Dolor Abdominal Agudo o Persistente | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa el dolor abdominal agudo.",
      keywords: ["dolor abdominal agudo", "dolor abdominal persistente", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-dolor-hipocondrio-derecho",
    slug: "dolor-debajo-de-las-costillas-derecho",
    name: "Dolor debajo de las costillas del lado derecho",
    colloquialNames: ["Dolor en el hipocondrio derecho"],
    description:
      "El dolor debajo de las costillas del lado derecho, en la zona donde se ubican el hígado y la vesícula biliar, es un síntoma frecuente de enfermedad de la vesícula biliar, especialmente cuando aparece después de comer.",
    causes: ["Colelitiasis", "Colecistitis aguda", "Pólipos de la vesícula biliar"],
    alarmSigns: [
      "Si el dolor se acompaña de fiebre, ictericia (color amarillo en piel y ojos) o dolor intenso que no cede, acude a urgencias de inmediato.",
    ],
    whyConsult:
      "El dolor debajo de las costillas derechas es un signo característico de enfermedad de la vesícula biliar. Un cirujano general puede confirmar el diagnóstico con estudios de imagen y definir el tratamiento adecuado.",
    faqs: [
      {
        question: "¿El dolor debajo de las costillas derechas siempre es de la vesícula?",
        answer:
          "Es la causa más frecuente, especialmente si aparece después de comidas grasosas, pero conviene una valoración médica para confirmar el origen exacto del dolor.",
      },
      {
        question: "¿Qué estudio confirma si el dolor es por cálculos biliares?",
        answer:
          "El ultrasonido abdominal es el estudio inicial más utilizado para identificar cálculos en la vesícula biliar y confirmar si son la causa del dolor.",
      },
    ],
    relatedConditions: ["d-colelitiasis", "d-colecistitis-aguda", "d-polipos-vesicula"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/dolor-debajo-de-las-costillas-derecho.jpg",
    seo: {
      title: "Dolor Debajo de las Costillas Derecho | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa el dolor en el costado derecho.",
      keywords: ["dolor costado derecho", "dolor hipocondrio derecho", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-dolor-posprandial-grasas",
    slug: "dolor-abdominal-despues-de-comer-grasas",
    name: "Dolor abdominal después de comer, especialmente alimentos grasosos",
    description:
      "El dolor abdominal que aparece después de comer, en particular tras alimentos grasosos, es un síntoma clásico asociado a la vesícula biliar, ya que la grasa estimula su contracción y puede desencadenar dolor cuando existen cálculos.",
    causes: ["Colelitiasis", "Vaciamiento vesicular alterado por cálculos biliares"],
    alarmSigns: [
      "Si el dolor tras comer se vuelve intenso, constante y se acompaña de fiebre, acude a urgencias de inmediato.",
    ],
    whyConsult:
      "El dolor recurrente después de comidas grasosas sugiere un problema de la vesícula biliar que puede confirmarse con un ultrasonido y tratarse de forma definitiva antes de que ocurra un episodio más grave.",
    faqs: [
      {
        question: "¿Por qué duele el abdomen después de comer grasas?",
        answer:
          "Los alimentos grasosos estimulan la contracción de la vesícula biliar. Si hay cálculos biliares, esta contracción puede provocar dolor en el abdomen superior derecho.",
      },
      {
        question: "¿Evitar grasas elimina el problema de fondo?",
        answer:
          "Puede reducir los episodios de dolor, pero no elimina los cálculos biliares existentes. El tratamiento definitivo cuando hay síntomas recurrentes es la evaluación quirúrgica.",
      },
    ],
    relatedConditions: ["d-colelitiasis"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/dolor-abdominal-despues-de-comer-grasas.jpg",
    seo: {
      title: "Dolor Abdominal al Comer Grasas | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa el dolor tras comidas grasosas.",
      keywords: ["dolor después de comer", "dolor por alimentos grasosos", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-dolor-fosa-iliaca-derecha",
    slug: "dolor-parte-inferior-derecha-del-abdomen",
    name: "Dolor en la parte inferior derecha del abdomen",
    description:
      "El dolor en la parte inferior derecha del abdomen es el síntoma más característico de la apendicitis aguda. Suele iniciar de forma difusa alrededor del ombligo y después concentrarse en esa zona específica.",
    causes: ["Apendicitis aguda"],
    alarmSigns: [
      "Si el dolor en la parte inferior derecha del abdomen es intenso, progresivo, y se acompaña de fiebre, náuseas o vómito, acude a urgencias de inmediato: puede tratarse de apendicitis.",
    ],
    whyConsult:
      "Este patrón de dolor es característico de la apendicitis aguda, una urgencia quirúrgica. Acudir de inmediato permite el diagnóstico y tratamiento oportuno antes de que el apéndice se perfore.",
    faqs: [
      {
        question: "¿El dolor en la parte inferior derecha siempre es apendicitis?",
        answer:
          "Es la causa más característica y frecuente, especialmente cuando el dolor inició alrededor del ombligo y luego se desplazó a esa zona, pero la valoración médica confirma el diagnóstico.",
      },
      {
        question: "¿Qué tan rápido debo actuar ante este dolor?",
        answer:
          "Debe actuarse con rapidez. La apendicitis es una urgencia quirúrgica y retrasar la atención aumenta el riesgo de que el apéndice se perfore.",
      },
    ],
    relatedConditions: ["d-apendicitis-aguda"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/dolor-parte-inferior-derecha-del-abdomen.jpg",
    seo: {
      title: "Dolor Parte Inferior Derecha del Abdomen | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa el dolor en fosa iliaca derecha.",
      keywords: ["dolor abdominal derecho", "apendicitis síntomas", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-nauseas-vomito",
    slug: "nauseas-y-vomitos-con-dolor-abdominal",
    name: "Náuseas y vómitos asociados a dolor abdominal",
    description:
      "Las náuseas y el vómito que acompañan al dolor abdominal son señales de que el sistema digestivo está respondiendo a un proceso de irritación o inflamación interna, y en conjunto con el dolor ayudan a orientar el diagnóstico.",
    causes: ["Colelitiasis", "Colecistitis aguda", "Apendicitis aguda", "Obstrucción intestinal"],
    alarmSigns: [
      "Si el vómito es persistente, no tolera líquidos, o se acompaña de distensión abdominal importante, acude a urgencias de inmediato.",
    ],
    whyConsult:
      "Las náuseas y el vómito junto con dolor abdominal pueden indicar una condición quirúrgica. Un cirujano general puede identificar la causa y evitar que la deshidratación o la condición de fondo se agraven.",
    faqs: [
      {
        question: "¿Cuándo las náuseas con dolor abdominal son urgentes?",
        answer:
          "Cuando el vómito es persistente, impide tolerar líquidos, o se acompaña de dolor intenso, fiebre o distensión abdominal, se debe acudir a valoración médica urgente.",
      },
      {
        question: "¿Las náuseas con dolor abdominal siempre indican cirugía?",
        answer:
          "No siempre, pero sí ameritan evaluación para descartar causas quirúrgicas como la apendicitis o la colecistitis, especialmente si los síntomas persisten o empeoran.",
      },
    ],
    relatedConditions: ["d-colelitiasis", "d-colecistitis-aguda", "d-apendicitis-aguda", "d-obstruccion-intestinal"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/nauseas-y-vomitos-con-dolor-abdominal.jpg",
    seo: {
      title: "Náuseas y Vómito con Dolor Abdominal | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa náuseas y vómito con dolor abdominal.",
      keywords: ["náuseas y vómito", "dolor abdominal con vómito", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-distension-abdominal",
    slug: "distension-o-inflamacion-abdominal",
    name: "Distensión o inflamación abdominal",
    description:
      "La distensión o inflamación abdominal es la sensación de hinchazón y aumento de volumen del abdomen. Puede deberse a causas digestivas leves o, cuando es marcada y se acompaña de otros síntomas, a una obstrucción intestinal.",
    causes: ["Obstrucción intestinal", "Acumulación de gases", "Estreñimiento prolongado"],
    alarmSigns: [
      "Si la distensión abdominal es marcada, se acompaña de vómito, dolor intenso o ausencia de evacuaciones y gases, acude a urgencias de inmediato.",
    ],
    whyConsult:
      "La distensión abdominal persistente o marcada puede ser señal de una obstrucción intestinal, que requiere atención médica oportuna para evitar complicaciones mayores.",
    faqs: [
      {
        question: "¿Cuándo la distensión abdominal es preocupante?",
        answer:
          "Cuando es marcada, aumenta progresivamente, o se acompaña de vómito, dolor intenso o ausencia de evacuaciones y gases, debe evaluarse de inmediato por un cirujano general.",
      },
      {
        question: "¿La distensión abdominal siempre indica obstrucción intestinal?",
        answer:
          "No siempre; puede deberse a causas más leves como gases o estreñimiento. Sin embargo, cuando se acompaña de otros síntomas de alarma, debe descartarse una obstrucción intestinal.",
      },
    ],
    relatedConditions: ["d-obstruccion-intestinal", "d-dolor-abdominal-quirurgico"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/distension-o-inflamacion-abdominal.jpg",
    seo: {
      title: "Distensión o Inflamación Abdominal | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa la distensión abdominal.",
      keywords: ["distensión abdominal", "inflamación abdominal", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-bolita-ingle",
    slug: "bolita-o-protuberancia-en-la-ingle",
    name: "Aparición de bolitas o protuberancias en la ingle",
    description:
      "La aparición de una bolita o protuberancia en la ingle, que puede crecer con el esfuerzo o la tos, es el signo característico de una hernia inguinal, una de las hernias más frecuentes en adultos.",
    causes: ["Hernia inguinal"],
    alarmSigns: [
      "Si la bolita en la ingle se vuelve dolorosa, roja, dura y no se puede reintroducir, acude a urgencias de inmediato: puede tratarse de una hernia estrangulada.",
    ],
    whyConsult:
      "Una bolita en la ingle que aparece o crece con el esfuerzo debe evaluarse por un cirujano general, ya que las hernias no se resuelven solas y pueden complicarse si no se corrigen a tiempo.",
    faqs: [
      {
        question: "¿Toda bolita en la ingle es una hernia?",
        answer:
          "Es la causa más frecuente, especialmente si aparece o crece con el esfuerzo físico, la tos o al estar de pie por tiempo prolongado. La valoración médica confirma el diagnóstico.",
      },
      {
        question: "¿Qué pasa si no atiendo una hernia inguinal a tiempo?",
        answer:
          "Puede crecer progresivamente y, en algunos casos, el contenido queda atrapado (encarcelamiento) y pierde circulación (estrangulación), lo que se vuelve una urgencia quirúrgica.",
      },
    ],
    relatedConditions: ["d-hernia-inguinal"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/bolita-o-protuberancia-en-la-ingle.jpg",
    seo: {
      title: "Bolita o Protuberancia en la Ingle | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa bultos en la ingle.",
      keywords: ["bolita en la ingle", "hernia inguinal síntomas", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-abultamiento-ombligo",
    slug: "abultamiento-en-el-ombligo",
    name: "Abultamiento en el ombligo o la pared abdominal",
    description:
      "El abultamiento en el ombligo o en otra parte de la pared abdominal es el signo principal de una hernia, generalmente umbilical, y se hace más evidente al contraer el abdomen, toser o hacer esfuerzo.",
    causes: ["Hernia umbilical"],
    alarmSigns: [
      "Si el abultamiento se vuelve doloroso, rojo, duro y no se puede reintroducir, acude a urgencias de inmediato: puede tratarse de una hernia estrangulada.",
    ],
    whyConsult:
      "Un abultamiento persistente en el ombligo debe evaluarse por un cirujano general, ya que las hernias umbilicales en adultos no se cierran solas y pueden complicarse si no se corrigen.",
    faqs: [
      {
        question: "¿El abultamiento en el ombligo siempre es una hernia?",
        answer:
          "Es la causa más frecuente en adultos, sobre todo si se hace más notorio con el esfuerzo. Un cirujano general puede confirmar el diagnóstico en la exploración física.",
      },
      {
        question: "¿Se puede usar una faja en vez de operar una hernia umbilical?",
        answer:
          "Una faja puede dar alivio temporal de la molestia, pero no corrige el defecto de la pared abdominal. La cirugía es el único tratamiento definitivo.",
      },
    ],
    relatedConditions: ["d-hernia-umbilical"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/abultamiento-en-el-ombligo.jpg",
    seo: {
      title: "Abultamiento en el Ombligo | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa el abultamiento umbilical.",
      keywords: ["abultamiento en el ombligo", "hernia umbilical síntomas", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-dolor-hernia",
    slug: "dolor-o-molestias-por-hernia",
    name: "Dolor o molestias asociados a una hernia",
    description:
      "El dolor o molestia asociado a una hernia es la sensación de tensión, ardor o dolor localizado sobre un abultamiento en la pared abdominal, que típicamente aumenta con el esfuerzo físico y mejora en reposo.",
    causes: ["Hernia inguinal", "Hernia umbilical", "Hernia epigástrica", "Hernia incisional"],
    alarmSigns: [
      "Si el dolor de la hernia se vuelve súbito, intenso y constante, y el abultamiento no se puede reintroducir, acude a urgencias de inmediato.",
    ],
    whyConsult:
      "El dolor asociado a una hernia indica que requiere valoración quirúrgica, ya que las hernias no mejoran por sí solas y el dolor tiende a progresar si no se corrige el defecto.",
    faqs: [
      {
        question: "¿Por qué duele más una hernia con el esfuerzo?",
        answer:
          "El esfuerzo físico aumenta la presión abdominal, lo que empuja más tejido a través del defecto de la pared y genera mayor tensión y dolor en la zona.",
      },
      {
        question: "¿El dolor de hernia se quita con analgésicos?",
        answer:
          "Los analgésicos pueden aliviar temporalmente la molestia, pero no corrigen el defecto de la pared abdominal. Solo la cirugía resuelve la causa de fondo.",
      },
    ],
    relatedConditions: ["d-hernia-inguinal", "d-hernia-umbilical", "d-hernia-epigastrica", "d-hernia-incisional"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/dolor-o-molestias-por-hernia.jpg",
    seo: {
      title: "Dolor o Molestias por Hernia | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa el dolor asociado a hernias.",
      keywords: ["dolor de hernia", "molestias por hernia", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-bolitas-bajo-piel",
    slug: "bolitas-debajo-de-la-piel",
    name: "Aparición de bolitas debajo de la piel",
    description:
      "La aparición de bolitas debajo de la piel es un hallazgo frecuente que puede corresponder a lipomas o quistes sebáceos, masas benignas de crecimiento lento que se sienten móviles al tacto.",
    causes: ["Lipomas", "Quistes sebáceos y epidérmicos"],
    alarmSigns: [
      "Si la bolita crece rápidamente, se vuelve dolorosa, dura y fija a planos profundos, acude a valoración médica pronta para su estudio.",
    ],
    whyConsult:
      "Aunque la mayoría de las bolitas bajo la piel son benignas, un cirujano general debe confirmar el diagnóstico y determinar si requieren extirpación, especialmente si crecen o generan molestia.",
    faqs: [
      {
        question: "¿Toda bolita bajo la piel es grasa?",
        answer:
          "No necesariamente; puede tratarse de un lipoma, un quiste sebáceo u otro tipo de masa. La exploración por un cirujano general ayuda a diferenciarlas y decidir el manejo adecuado.",
      },
      {
        question: "¿Es necesario quitar todas las bolitas de la piel?",
        answer:
          "No todas requieren extirpación inmediata, pero se recomienda hacerlo si crecen, duelen, se inflaman o generan preocupación estética o diagnóstica.",
      },
    ],
    relatedConditions: ["d-lipomas", "d-quistes-sebaceos"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/bolitas-debajo-de-la-piel.jpg",
    seo: {
      title: "Bolitas Debajo de la Piel | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa bolitas bajo la piel.",
      keywords: ["bolitas debajo de la piel", "lipomas", "quistes", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-crecimiento-masas",
    slug: "crecimiento-de-masas-o-tumoraciones",
    name: "Crecimiento de masas o tumoraciones superficiales",
    description:
      "El crecimiento progresivo de una masa o tumoración superficial, ya sea en la piel o el tejido subyacente, es una señal que siempre debe evaluarse para determinar su naturaleza y definir si requiere tratamiento quirúrgico.",
    causes: ["Lipomas", "Quistes sebáceos y epidérmicos", "Tumores de piel y tejidos blandos"],
    alarmSigns: [
      "Si una masa crece de forma rápida, es dura, dolorosa o cambia de color, acude a valoración médica pronta para su estudio.",
    ],
    whyConsult:
      "Cualquier masa que crece con el tiempo debe ser evaluada por un cirujano general para determinar si es benigna y, de ser necesario, planear su extirpación y estudio oportuno.",
    faqs: [
      {
        question: "¿Cuándo preocuparse por una masa que crece?",
        answer:
          "Cuando el crecimiento es notorio en poco tiempo, se vuelve dura, dolorosa, o cambia de color o forma, se recomienda valoración médica pronta para su estudio y, de ser necesario, su extirpación.",
      },
      {
        question: "¿Las masas superficiales que crecen son cáncer?",
        answer:
          "La mayoría son benignas, pero solo el estudio clínico y, en algunos casos, el análisis de laboratorio de la lesión extirpada permiten confirmarlo con certeza.",
      },
    ],
    relatedConditions: ["d-lipomas", "d-quistes-sebaceos", "d-tumores-piel"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/crecimiento-de-masas-o-tumoraciones.jpg",
    seo: {
      title: "Crecimiento de Masas o Tumoraciones | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa masas de crecimiento progresivo.",
      keywords: ["masa que crece", "tumoración superficial", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-enrojecimiento-pus-piel",
    slug: "enrojecimiento-dolor-o-pus-en-la-piel",
    name: "Enrojecimiento, dolor o salida de pus en la piel",
    description:
      "El enrojecimiento, dolor y salida de pus en una zona de la piel son signos de infección local, generalmente un absceso, que requiere drenaje quirúrgico para resolverse de forma completa.",
    causes: ["Abscesos de piel y tejidos blandos"],
    alarmSigns: [
      "Si el enrojecimiento se extiende rápidamente, se acompaña de fiebre, o aparece en el rostro o cerca de una articulación, acude a urgencias de inmediato.",
    ],
    whyConsult:
      "El enrojecimiento con dolor y salida de pus indica una infección activa que, en la mayoría de los casos, requiere drenaje quirúrgico. Un cirujano general puede resolverlo de forma oportuna y evitar que se extienda.",
    faqs: [
      {
        question: "¿Un absceso se cura solo con antibiótico?",
        answer:
          "Muchas veces no es suficiente: la mayoría de los abscesos requieren drenaje quirúrgico para eliminar el pus acumulado, además del manejo médico que el cirujano indique según el caso.",
      },
      {
        question: "¿Cuándo es urgente el enrojecimiento con pus en la piel?",
        answer:
          "Cuando se extiende rápidamente, se acompaña de fiebre, o aparece en zonas como el rostro o cerca de articulaciones, donde la infección puede complicarse con mayor facilidad.",
      },
    ],
    relatedConditions: ["d-abscesos-piel"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/enrojecimiento-dolor-o-pus-en-la-piel.jpg",
    seo: {
      title: "Enrojecimiento, Dolor o Pus en la Piel | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa infecciones de piel con pus.",
      keywords: ["absceso de piel", "pus en la piel", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-dolor-ardor-anal",
    slug: "dolor-ardor-o-molestias-anales",
    name: "Dolor, ardor o molestias anales",
    description:
      "El dolor, ardor o molestia en la región anal es un síntoma frecuente que puede originarse en hemorroides, fisuras anales u otras condiciones de esa zona, y suele intensificarse durante o después de evacuar.",
    causes: ["Enfermedad hemorroidal", "Fisuras anales"],
    alarmSigns: [
      "Si el dolor anal es muy intenso, se acompaña de fiebre o una masa dura y dolorosa que no mejora, acude a valoración médica pronta.",
    ],
    whyConsult:
      "El dolor o ardor anal persistente debe evaluarse por un cirujano general para identificar su causa exacta, ya que hemorroides y fisuras anales requieren manejos distintos.",
    faqs: [
      {
        question: "¿El dolor anal siempre es por hemorroides?",
        answer:
          "No siempre. También puede deberse a una fisura anal u otras causas. La exploración por un cirujano general permite diferenciar el origen exacto y dar el tratamiento adecuado.",
      },
      {
        question: "¿Qué puedo hacer mientras consigo una cita por dolor anal?",
        answer:
          "Mantener buena higiene local y evitar el estreñimiento ayuda a no empeorar la molestia, pero esto no sustituye la valoración médica para identificar la causa específica.",
      },
    ],
    relatedConditions: ["d-enfermedad-hemorroidal", "d-fisuras-anales"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/dolor-ardor-o-molestias-anales.jpg",
    seo: {
      title: "Dolor, Ardor o Molestias Anales | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa el dolor y ardor anal.",
      keywords: ["dolor anal", "ardor anal", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-sangrado-evacuacion",
    slug: "sangrado-durante-la-evacuacion",
    name: "Sangrado durante la evacuación",
    description:
      "El sangrado durante la evacuación es la presencia de sangre, generalmente roja brillante, al evacuar o al limpiarse. Es un síntoma frecuente asociado a hemorroides o fisuras anales, pero siempre debe evaluarse para confirmar su origen.",
    causes: ["Enfermedad hemorroidal", "Fisuras anales", "Patología quirúrgica del colon"],
    alarmSigns: [
      "Si el sangrado es abundante, se acompaña de mareo o debilidad importante, o la sangre es oscura y mezclada con la evacuación, acude a urgencias de inmediato.",
    ],
    whyConsult:
      "Aunque el sangrado al evacuar suele deberse a causas benignas como hemorroides o fisuras, siempre debe evaluarse para descartar otras causas en el colon, especialmente si es persistente o recurrente.",
    faqs: [
      {
        question: "¿El sangrado al evacuar siempre es por hemorroides?",
        answer:
          "Es la causa más frecuente, pero no la única. También puede deberse a una fisura anal o a una condición del colon, por lo que conviene una valoración médica, sobre todo si el sangrado es persistente.",
      },
      {
        question: "¿Cuándo el sangrado al evacuar es urgente?",
        answer:
          "Cuando es abundante, se acompaña de mareo, debilidad, o la sangre es de color oscuro mezclada con la evacuación, lo cual puede indicar un origen distinto que requiere atención inmediata.",
      },
    ],
    relatedConditions: ["d-enfermedad-hemorroidal", "d-fisuras-anales", "d-patologia-colon"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/sangrado-durante-la-evacuacion.jpg",
    seo: {
      title: "Sangrado Durante la Evacuación | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa el sangrado al evacuar.",
      keywords: ["sangrado al evacuar", "sangre en la evacuación", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-bultos-region-anal",
    slug: "bultos-en-la-region-anal",
    name: "Aparición de bultos en la región anal",
    description:
      "La aparición de bultos en la región anal puede corresponder a hemorroides externas, prolapso de tejido hemorroidal interno, o un absceso perianal, y su diferenciación requiere exploración por un cirujano general.",
    causes: ["Enfermedad hemorroidal", "Fístulas y abscesos perianales"],
    alarmSigns: [
      "Si el bulto es muy doloroso, caliente al tacto y se acompaña de fiebre, acude a valoración médica pronta: puede tratarse de un absceso perianal.",
    ],
    whyConsult:
      "Un bulto en la región anal debe evaluarse para diferenciar entre hemorroides y un absceso perianal, ya que el manejo de cada condición es distinto.",
    faqs: [
      {
        question: "¿Cómo diferenciar un bulto por hemorroides de un absceso?",
        answer:
          "Las hemorroides suelen ser menos dolorosas al tacto que un absceso, que típicamente es caliente, muy doloroso y puede acompañarse de fiebre. La exploración por un cirujano general confirma el diagnóstico.",
      },
      {
        question: "¿Un bulto anal siempre requiere cirugía?",
        answer:
          "Depende de la causa y el grado. Algunos casos de hemorroides se manejan sin cirugía, mientras que un absceso perianal casi siempre requiere drenaje quirúrgico.",
      },
    ],
    relatedConditions: ["d-enfermedad-hemorroidal", "d-fistulas-abscesos-perianales"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/bultos-en-la-region-anal.jpg",
    seo: {
      title: "Bultos en la Región Anal | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa bultos en la región anal.",
      keywords: ["bulto anal", "bulto en el ano", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-secrecion-cerca-ano",
    slug: "secrecion-o-pus-cerca-del-ano",
    name: "Secreción o salida de pus cerca del ano",
    description:
      "La secreción o salida de pus cerca del ano es un signo característico de una fístula o un absceso perianal activo, y suele acompañarse de irritación local y molestia constante.",
    causes: ["Fístulas y abscesos perianales"],
    alarmSigns: [
      "Si la secreción se acompaña de fiebre, dolor intenso o inflamación que se extiende, acude a valoración médica pronta.",
    ],
    whyConsult:
      "La secreción cerca del ano indica un proceso infeccioso activo que requiere valoración por un cirujano general para definir si se trata de un absceso o una fístula y el tratamiento correspondiente.",
    faqs: [
      {
        question: "¿Por qué sale secreción cerca del ano?",
        answer:
          "Generalmente indica la presencia de una fístula perianal, un trayecto anómalo de comunicación entre el conducto anal y la piel, que con frecuencia se origina de un absceso previo.",
      },
      {
        question: "¿La secreción perianal se quita con cremas?",
        answer:
          "No. Si el origen es una fístula o un absceso activo, se requiere tratamiento quirúrgico específico; las cremas no resuelven la causa de fondo.",
      },
    ],
    relatedConditions: ["d-fistulas-abscesos-perianales"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/secrecion-o-pus-cerca-del-ano.jpg",
    seo: {
      title: "Secreción o Pus Cerca del Ano | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa la secreción perianal.",
      keywords: ["secreción cerca del ano", "pus perianal", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-dolor-sacrococcigeo",
    slug: "dolor-e-inflamacion-sacrococcigea",
    name: "Dolor e inflamación en la región sacrococcígea",
    description:
      "El dolor e inflamación en la región sacrococcígea, en el pliegue entre los glúteos cerca del cóccix, es el síntoma característico de la enfermedad pilonidal, que suele presentarse en episodios recurrentes.",
    causes: ["Enfermedad pilonidal"],
    alarmSigns: [
      "Si el dolor se acompaña de salida de pus, fiebre o inflamación que crece rápidamente, acude a valoración médica pronta.",
    ],
    whyConsult:
      "El dolor recurrente en esta zona sugiere enfermedad pilonidal, que puede requerir drenaje en episodios agudos y tratamiento quirúrgico definitivo para evitar que reaparezca.",
    faqs: [
      {
        question: "¿Por qué duele la zona entre los glúteos cerca del cóccix?",
        answer:
          "Con frecuencia se debe a la enfermedad pilonidal, causada por vello que se introduce bajo la piel en esa zona y genera inflamación e infección recurrente.",
      },
      {
        question: "¿Este dolor se quita solo con el tiempo?",
        answer:
          "Puede mejorar temporalmente entre episodios, pero tiende a repetirse si no se trata la causa de fondo. El cirujano general puede indicar el tratamiento definitivo.",
      },
    ],
    relatedConditions: ["d-enfermedad-pilonidal"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/dolor-e-inflamacion-sacrococcigea.jpg",
    seo: {
      title: "Dolor e Inflamación Sacrococcígea | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa el dolor sacrococcígeo.",
      keywords: ["dolor sacrococcígeo", "quiste pilonidal síntomas", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-cambios-habito-intestinal",
    slug: "cambios-en-el-habito-intestinal",
    name: "Cambios persistentes en el hábito intestinal",
    description:
      "Los cambios persistentes en el hábito intestinal, como alternancia entre estreñimiento y diarrea o modificación en la frecuencia habitual de evacuar, pueden ser señal de enfermedad diverticular u otra condición del colon.",
    causes: ["Diverticulitis aguda y enfermedad diverticular", "Patología quirúrgica del colon"],
    alarmSigns: [
      "Si los cambios se acompañan de sangrado, pérdida de peso no explicada o dolor abdominal intenso, acude a valoración médica pronta.",
    ],
    whyConsult:
      "Los cambios persistentes en el hábito intestinal que duran más de unas semanas deben evaluarse por un cirujano general para identificar su causa, especialmente si se acompañan de otros síntomas.",
    faqs: [
      {
        question: "¿Qué se considera un cambio preocupante en el hábito intestinal?",
        answer:
          "Un cambio que persiste más de dos o tres semanas, como alternancia entre estreñimiento y diarrea, o una modificación notoria en la frecuencia habitual de evacuar, amerita evaluación médica.",
      },
      {
        question: "¿Estos cambios siempre indican enfermedad del colon?",
        answer:
          "No siempre, pero conviene descartarlo, especialmente en personas mayores de 50 años o con antecedentes familiares de enfermedad de colon.",
      },
    ],
    relatedConditions: ["d-diverticulitis", "d-patologia-colon"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/cambios-en-el-habito-intestinal.jpg",
    seo: {
      title: "Cambios en el Hábito Intestinal | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa cambios en el hábito intestinal.",
      keywords: ["cambios en el hábito intestinal", "estreñimiento y diarrea", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-estrenimiento-distension",
    slug: "estrenimiento-con-dolor-y-distension",
    name: "Estreñimiento acompañado de dolor y distensión abdominal",
    description:
      "El estreñimiento acompañado de dolor y distensión abdominal puede ser parte de un cuadro de enfermedad diverticular o, en casos más marcados, un signo de obstrucción intestinal que requiere evaluación oportuna.",
    causes: ["Diverticulitis aguda y enfermedad diverticular", "Obstrucción intestinal"],
    alarmSigns: [
      "Si el estreñimiento se acompaña de distensión marcada, vómito o ausencia total de gases, acude a urgencias de inmediato.",
    ],
    whyConsult:
      "El estreñimiento con dolor y distensión que no mejora con medidas habituales debe evaluarse por un cirujano general para descartar enfermedad diverticular u obstrucción intestinal.",
    faqs: [
      {
        question: "¿El estreñimiento con dolor siempre requiere cirugía?",
        answer:
          "No siempre. Muchos casos se resuelven con manejo médico. La evaluación quirúrgica se reserva para cuando hay signos de complicación u obstrucción intestinal.",
      },
      {
        question: "¿Cuándo el estreñimiento con distensión es una urgencia?",
        answer:
          "Cuando se acompaña de vómito, dolor intenso, o ausencia total de evacuaciones y gases, lo cual puede indicar una obstrucción intestinal que requiere atención inmediata.",
      },
    ],
    relatedConditions: ["d-diverticulitis", "d-obstruccion-intestinal"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/estrenimiento-con-dolor-y-distension.jpg",
    seo: {
      title: "Estreñimiento con Dolor y Distensión | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa el estreñimiento con dolor.",
      keywords: ["estreñimiento con dolor", "distensión abdominal", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-nodulos-cuello",
    slug: "nodulos-o-aumento-de-volumen-en-el-cuello",
    name: "Aparición de nódulos o aumento de volumen en el cuello",
    description:
      "La aparición de nódulos o el aumento de volumen en el cuello, en la zona de la glándula tiroides, es un hallazgo que debe evaluarse mediante ultrasonido para determinar su naturaleza y definir si requiere tratamiento.",
    causes: ["Nódulos tiroideos y bocio"],
    alarmSigns: [
      "Si el aumento de volumen en el cuello crece rápidamente o dificulta la respiración o la deglución, acude a valoración médica pronta.",
    ],
    whyConsult:
      "Un nódulo o aumento de volumen en el cuello debe evaluarse con estudios de imagen para descartar causas que requieran cirugía, aunque la mayoría de los casos son benignos.",
    faqs: [
      {
        question: "¿Un nódulo en el cuello siempre es de la tiroides?",
        answer:
          "La mayoría de los nódulos palpables en la parte anterior del cuello corresponden a la glándula tiroides, aunque la exploración y el ultrasonido confirman el origen exacto.",
      },
      {
        question: "¿Qué hacer si noto un bulto nuevo en el cuello?",
        answer:
          "Se recomienda acudir a valoración con un cirujano general, quien indicará un ultrasonido de tiroides para caracterizar el hallazgo y definir si requiere seguimiento o tratamiento.",
      },
    ],
    relatedConditions: ["d-nodulos-tiroideos"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/nodulos-o-aumento-de-volumen-en-el-cuello.jpg",
    seo: {
      title: "Nódulos o Volumen en el Cuello | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa nódulos en el cuello.",
      keywords: ["nódulo en el cuello", "aumento de volumen cuello", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-herida-quirurgica-complicada",
    slug: "dolor-inflamacion-o-secrecion-de-herida",
    name: "Dolor, inflamación o secreción de heridas quirúrgicas",
    description:
      "El dolor, la inflamación o la secreción de una herida quirúrgica son signos de que la cicatrización no está progresando de forma normal, con frecuencia relacionados con una infección local que requiere atención.",
    causes: ["Heridas quirúrgicas complicadas", "Infecciones de heridas y complicaciones posoperatorias"],
    alarmSigns: [
      "Si la herida presenta enrojecimiento que se extiende, fiebre, o secreción con mal olor, acude a valoración médica de inmediato.",
    ],
    whyConsult:
      "Una herida quirúrgica con dolor creciente, inflamación o secreción debe evaluarse pronto por el cirujano, ya que puede tratarse de una infección que requiere manejo específico.",
    faqs: [
      {
        question: "¿Es normal que una herida quirúrgica duela unos días?",
        answer:
          "Cierto grado de molestia es normal en los primeros días. Lo que no es normal es que el dolor aumente en lugar de disminuir, o que aparezca enrojecimiento extendido, secreción o fiebre.",
      },
      {
        question: "¿Qué debo hacer si mi herida quirúrgica tiene secreción?",
        answer:
          "Debes contactar al cirujano que realizó el procedimiento lo antes posible para que evalúe la herida y determine si requiere manejo adicional, como curaciones especializadas o drenaje.",
      },
    ],
    relatedConditions: ["d-heridas-complicadas", "d-infecciones-heridas"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/dolor-inflamacion-o-secrecion-de-herida.jpg",
    seo: {
      title: "Dolor o Secreción de Herida Quirúrgica | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa heridas quirúrgicas complicadas.",
      keywords: ["herida quirúrgica infectada", "secreción de herida", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-herida-no-cicatriza",
    slug: "heridas-que-no-cicatrizan",
    name: "Heridas que no cicatrizan adecuadamente",
    description:
      "Una herida que no cicatriza adecuadamente es aquella que se mantiene abierta, con bordes separados o tejido poco saludable, por más tiempo del esperado para su tipo y tamaño, y requiere manejo especializado.",
    causes: ["Heridas quirúrgicas complicadas", "Diabetes no controlada", "Mala circulación local"],
    alarmSigns: [
      "Si la herida se acompaña de mal olor, secreción abundante o fiebre, acude a valoración médica pronta.",
    ],
    whyConsult:
      "Una herida que no cicatriza en el tiempo esperado debe evaluarse para identificar la causa de fondo y recibir curaciones especializadas que favorezcan su cierre.",
    faqs: [
      {
        question: "¿Cuánto tiempo debe tardar en cicatrizar una herida?",
        answer:
          "Depende del tipo y tamaño de la herida, pero en general, si no muestra signos de mejoría en dos a tres semanas, debe evaluarse por un cirujano general para identificar la causa del retraso.",
      },
      {
        question: "¿La diabetes afecta la cicatrización de heridas?",
        answer:
          "Sí. La diabetes no controlada puede afectar la circulación y la respuesta del cuerpo a las heridas, retrasando significativamente su cicatrización, por lo que su control es parte esencial del tratamiento.",
      },
    ],
    relatedConditions: ["d-heridas-complicadas"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/heridas-que-no-cicatrizan.jpg",
    seo: {
      title: "Heridas que no Cicatrizan | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa heridas de cicatrización lenta.",
      keywords: ["herida que no cicatriza", "cicatrización lenta", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-ulceras-pie-diabetico",
    slug: "ulceras-o-lesiones-en-pies-diabeticos",
    name: "Úlceras o lesiones en los pies de pacientes diabéticos",
    description:
      "Las úlceras o lesiones en los pies de personas con diabetes son heridas que no cicatrizan con facilidad debido a la mala circulación y la pérdida de sensibilidad asociadas a la enfermedad, y requieren manejo especializado.",
    causes: ["Úlceras de pie diabético"],
    alarmSigns: [
      "Si la úlcera se acompaña de cambios de color en la piel, mal olor, secreción abundante o fiebre, acude a valoración médica de inmediato.",
    ],
    whyConsult:
      "Las lesiones en los pies de personas con diabetes deben evaluarse de forma temprana por un cirujano general, ya que un manejo oportuno reduce significativamente el riesgo de complicaciones graves.",
    faqs: [
      {
        question: "¿Por qué las heridas en los pies son más peligrosas en personas con diabetes?",
        answer:
          "La diabetes puede afectar la circulación y la sensibilidad de los pies, lo que retrasa la cicatrización y permite que una lesión pequeña progrese sin ser detectada a tiempo.",
      },
      {
        question: "¿Qué debo hacer si noto una herida en mi pie y tengo diabetes?",
        answer:
          "Debes acudir a valoración médica de inmediato, sin esperar a que mejore por sí sola, ya que la atención temprana es clave para evitar complicaciones como infecciones profundas.",
      },
    ],
    relatedConditions: ["d-pie-diabetico"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/ulceras-o-lesiones-en-pies-diabeticos.jpg",
    seo: {
      title: "Úlceras en Pies de Pacientes Diabéticos | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa úlceras de pie diabético.",
      keywords: ["úlceras pie diabético", "heridas en pies diabéticos", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-cambios-herida-pie-diabetico",
    slug: "cambios-de-color-o-mal-olor-en-herida-de-pie-diabetico",
    name: "Cambios de coloración, secreción o mal olor en heridas del pie diabético",
    description:
      "Los cambios de coloración, la secreción o el mal olor en una herida del pie de una persona con diabetes son señales de alarma que sugieren infección y requieren atención médica inmediata para evitar complicaciones graves.",
    causes: ["Úlceras de pie diabético infectadas"],
    alarmSigns: [
      "Si la herida presenta estos cambios, acude a urgencias de inmediato: en pie diabético, una infección puede progresar rápidamente y poner en riesgo el pie.",
    ],
    whyConsult:
      "Estos signos en una herida de pie diabético indican infección activa y requieren valoración urgente para evitar que la infección se extienda a estructuras profundas del pie.",
    faqs: [
      {
        question: "¿Qué significa que una herida de pie diabético cambie de color?",
        answer:
          "Puede indicar disminución de la circulación o progresión de una infección. Es un signo de alarma que requiere evaluación médica inmediata, especialmente en personas con diabetes.",
      },
      {
        question: "¿El mal olor en una herida siempre indica infección grave?",
        answer:
          "El mal olor sugiere la presencia de bacterias y, en el contexto de pie diabético, debe tomarse con seriedad y evaluarse de inmediato para evitar que la infección avance.",
      },
    ],
    relatedConditions: ["d-pie-diabetico"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/cambios-de-color-o-mal-olor-en-herida-de-pie-diabetico.jpg",
    seo: {
      title: "Cambios en Heridas de Pie Diabético | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa heridas de pie diabético con signos de infección.",
      keywords: ["herida de pie diabético infectada", "mal olor en herida", "cirujano general Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-ictericia",
    slug: "coloracion-amarillenta-de-piel-y-ojos",
    name: "Coloración amarillenta de piel y ojos",
    colloquialNames: ["Ictericia", "Piel amarilla"],
    description:
      "La coloración amarillenta de piel y ojos, conocida como ictericia, indica un problema en el flujo normal de la bilis o en el funcionamiento del hígado. En el contexto quirúrgico, con frecuencia se relaciona con obstrucción de la vía biliar.",
    causes: ["Obstrucción de la vía biliar", "Enfermedad avanzada de la vesícula o vías biliares"],
    alarmSigns: [
      "La coloración amarillenta de piel y ojos siempre debe evaluarse de forma urgente, especialmente si se acompaña de dolor abdominal, fiebre u orina oscura.",
    ],
    whyConsult:
      "La ictericia es un signo de alarma que indica un problema en el sistema biliar o hepático y requiere evaluación médica urgente para identificar su causa exacta y el tratamiento oportuno.",
    faqs: [
      {
        question: "¿La ictericia siempre es grave?",
        answer:
          "Siempre debe evaluarse con seriedad, ya que indica una alteración en el flujo de bilis o la función hepática. Un cirujano general, junto con los estudios adecuados, puede identificar la causa exacta.",
      },
      {
        question: "¿Qué estudios se hacen para investigar la ictericia?",
        answer:
          "Se suelen solicitar análisis de laboratorio de función hepática y estudios de imagen como el ultrasonido para identificar si existe obstrucción en la vía biliar y definir el tratamiento correspondiente.",
      },
    ],
    relatedConditions: ["d-dolor-abdominal-quirurgico"],
    lastReviewed: "2026-10-09",
    image: "/sintomas/coloracion-amarillenta-de-piel-y-ojos.jpg",
    seo: {
      title: "Coloración Amarillenta de Piel y Ojos | Dr. Santiesteban",
      description: "El Dr. Wilfredo Santiesteban, cirujano general en Tuxtla Gutiérrez, evalúa la ictericia.",
      keywords: ["ictericia", "piel amarilla", "cirujano general Tuxtla Gutiérrez"],
    },
  },
];
