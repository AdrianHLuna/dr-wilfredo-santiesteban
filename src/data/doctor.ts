import type { DoctorProfile } from "@/types/schema";

// Datos reales del intake del doctor (2026-10-09). Campos marcados PENDIENTE
// no fueron confirmados — nunca se inventan (correo, folio COFEPRIS, ficha
// de Google Business Profile canónica, redes sociales: el doctor confirmó
// explícitamente que no tiene).
export const doctor: DoctorProfile = {
  name: "Wilfredo Marcial Santiesteban Herrera",
  title: "Dr.",
  specialty: "Cirugía General",
  specialistTitle: "Cirujano General",
  cedula: "13560946",
  cedulaInstitucion: "UCM Camagüey, Cuba",
  cedulaEspecialidad: "14317168",
  cedulaEspecialidadInstitucion: "UCM La Habana, Cuba",
  // Sin folio COFEPRIS confirmado — PENDIENTE, no se fabrica.
  phone: "+528186561102",
  whatsapp: "+528186561102",
  emergencyPhone: "+528186561102",
  // PENDIENTE: el doctor no proporcionó correo de contacto.
  email: "contacto@dr-wilfredo-santiesteban.com",
  address: "Calle 16 Poniente Sur #428, entre Av. 3 Sur Poniente y 4 Sur Poniente, Colonia Xamaipak, C.P. 29067",
  city: "Tuxtla Gutiérrez",
  state: "Chiapas",
  country: "México",
  // PENDIENTE: la ficha de Google está "por verificar" — se usa una búsqueda
  // funcional por dirección mientras tanto.
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Calle+16+Poniente+Sur+428+Colonia+Xamaipak+Tuxtla+Guti%C3%A9rrez+Chiapas",
  consultationPrice: 900,
  paymentMethods: ["Efectivo", "Transferencia", "Pagos móviles NFC (Apple Pay o Google Pay)"],
  insurances: ["No se aceptan seguros de gastos médicos mayores"],
  schedule:
    "Lunes a viernes de 10:00 a 13:00, sábados de 11:00 a 17:00, domingos con previa disponibilidad. Todas las consultas se realizan mediante cita previa; existe la posibilidad de consultas fuera del horario habitual sujetas a disponibilidad, y las urgencias quirúrgicas se atienden mediante contacto telefónico previo y valoración.",
  openingHours: ["Mo-Fr 10:00-13:00", "Sa 11:00-17:00"],
  acceptingNewPatients: true,
  // PENDIENTE: el doctor solicitó fotos reales, aún no entregadas.
  photo: "/doctor-placeholder.jpg",
  bio: "El Dr. Wilfredo Marcial Santiesteban Herrera es cirujano general con formación en Cuba y certificación vigente por el Consejo Mexicano de Cirugía General. Con más de 4 años de experiencia, ha atendido a más de 3,500 pacientes y realizado más de 400 procedimientos quirúrgicos en su consultorio de Tuxtla Gutiérrez, Chiapas. Su práctica abarca desde la patología de vesícula biliar y pared abdominal hasta la cirugía de piel, tejidos blandos, región anorrectal y pie diabético.",
  philosophy:
    "Cada procedimiento quirúrgico debe explicarse con claridad antes de realizarse, para que el paciente entienda su diagnóstico, las opciones de tratamiento y lo que puede esperar de su recuperación.",
  experience: [],
  stats: [
    { label: "Pacientes atendidos", value: "+3,500" },
    { label: "Cirugías realizadas", value: "+400" },
    { label: "Años de experiencia", value: "+4" },
  ],
  certifications: [
    {
      name: "Certificado por el Consejo Mexicano de Cirugía General",
      institution: "Consejo Mexicano de Cirugía General — Folio C24000624",
    },
    {
      name: "Miembro de la Asociación Mexicana de Cirugía General",
      institution: "Asociación Mexicana de Cirugía General",
    },
  ],
  education: [
    { degree: "Médico Cirujano (Licenciatura en Medicina)", institution: "Universidad de Ciencias Médicas de Camagüey, Cuba" },
    { degree: "Especialidad en Cirugía General", institution: "Universidad de Ciencias Médicas de La Habana, Cuba" },
  ],
  // Sin testimonios reales verificables todavía — no se fabrican.
  // PENDIENTE: el doctor confirmó que no tiene redes sociales ni ficha de
  // Google verificada todavía, así que sameAs queda vacío por ahora.
  sameAs: [],
};
