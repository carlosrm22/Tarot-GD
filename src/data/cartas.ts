/**
 * @fileoverview Datos de las cartas del Tarot.
 */

export interface CartaCortesana {
  nombre: string;
  titulo: string;
  atributo?: string;
  descripcion: string;
  elemento: string;
  regencia: string;
  simbolo: string;
  complexion: string;
  genero: string;
}

export interface ArcanoMenor {
  nombre: string;
  titulo?: string;
  descripcion?: string;
  simbolismo?: string;
  atributo?: string;
  dominio?: string;
  significado?: string;
}

export const cortesanas: CartaCortesana[] = [
  {
    nombre: "Caballero de Bastos",
    titulo: "El Señor de la Llama y del Rayo",
    atributo: "El Rey de los Espíritus del Fuego",
    descripcion: "Un Guerrero alado cabalgando un caballo negro de crines y cola llameantes. Es activo, generoso, fiero, repentino e impetuoso. En mala dignidad es malicioso, cruel, intolerante y brutal.",
    elemento: "Fuego de Fuego",
    regencia: "Tercer Decanato de Escorpio y dos primeros de Sagitario",
    simbolo: "Rey de las Salamandras",
    complexion: "Muy rubio o pelirrojo",
    genero: "Hombre"
  },
  {
    nombre: "Reina de Bastos",
    titulo: "La Reina de los Tronos de las Llamas",
    atributo: "",
    descripcion: "Una Reina con corona sentada en un Trono, con firmes llamas debajo. Adaptabilidad, fuerza persistente aplicada a un objeto; amable y generosa si no tiene oposición. En mala dignidad es obstinada, vengativa, dominante, tiránica.",
    elemento: "Agua de Fuego",
    regencia: "Último Decanato de Piscis hasta el 20° de Aries",
    simbolo: "Reina de las Salamandras",
    complexion: "Muy rubio o pelirrojo",
    genero: "Mujer"
  },
  {
    nombre: "Rey de Bastos",
    titulo: "El Príncipe de la Carroza de Fuego",
    atributo: "",
    descripcion: "Una figura Real con una alada Corona dorada, sentado en una Carroza tirada por un león. Rápido, fuerte, impaciente, algo violento, pero justo y generoso. En mala dignidad se muestra cruel, intolerante y lleno de prejuicios.",
    elemento: "Aire de Fuego",
    regencia: "Último Decanato de Cáncer y dos primeros de Leo",
    simbolo: "Príncipe y Emperador de las Salamandras",
    complexion: "Muy rubio o pelirrojo",
    genero: "Hombre"
  },
  {
    nombre: "Sota de Bastos",
    titulo: "La Princesa de la Llama Brillante y la Rosa del Palacio de Fuego",
    atributo: "",
    descripcion: "Un mujer muy fuerte y bella con una ondeante cabellera dorado-pelirroja. Brillo, coraje, belleza, fuerza, entusiasmo, venganza. Mal dignificada es superficial, teatral, cruel, inestable, dominante.",
    elemento: "Tierra de Fuego",
    regencia: "Un cuadrante de la porción que rodea al Polo Norte",
    simbolo: "Princesa y Emperatriz de las Salamandras",
    complexion: "Muy rubio o pelirrojo",
    genero: "Mujer joven"
  },
  {
    nombre: "Caballero de Copas",
    titulo: "El Señor de las Olas y de las Aguas",
    atributo: "El Rey de los Ejércitos del Mar",
    descripcion: "Un bello y juvenil Guerrero alado cabalgando un caballo blanco. Agraciado, poético, venusino, indolente, pero entusiasta si es estimulado. En mala dignidad es sensual, perezoso y falso.",
    elemento: "Fuego de Agua",
    regencia: "20° de Acuario a 20° de Piscis",
    simbolo: "Rey de las Ondinas y Ninfas",
    complexion: "Moderadamente rubio",
    genero: "Hombre joven"
  },
  {
    nombre: "Reina de Copas",
    titulo: "La Reina de los Tronos de las Aguas",
    atributo: "",
    descripcion: "Una mujer rubia muy bella, sentada en un Trono, debajo del cual hay agua que fluye sobre cuya superficie se ven Lotos. Imaginativa, poética, amable, pero no es dada a tomarse muchas molestias por los demás.",
    elemento: "Agua de Agua",
    regencia: "20° de Géminis a 20° de Cáncer",
    simbolo: "Reina de las Ninfas y Ondinas",
    complexion: "Moderadamente rubio",
    genero: "Mujer"
  },
  {
    nombre: "Rey de Copas",
    titulo: "Príncipe de la Carroza de las Aguas",
    atributo: "",
    descripcion: "Una alada figura Real con una corona también alada sentado en una carroza tirada por un Águila. Sutil, violento, astuto y artístico. En mala dignidad es intensamente malvado o inmisericorde.",
    elemento: "Aire de Agua",
    regencia: "20° Libra a 20° Escorpio",
    simbolo: "Príncipe y Emperador de las Ninfas y Ondinas",
    complexion: "Moderadamente rubio",
    genero: "Hombre"
  },
  {
    nombre: "Sota de Copas",
    titulo: "La Princesa de las Aguas y Princesa del Loto",
    atributo: "",
    descripcion: "Una bella figura parecida a una Amazona. Dulzura, poesía, gentileza y amabilidad. En mala dignidad es egoísta y lujuriosa.",
    elemento: "Tierra de Agua",
    regencia: "Un cuadrante alrededor de Kéter",
    simbolo: "Princesa y Emperatriz de las Ninfas y Ondinas",
    complexion: "Moderadamente rubio",
    genero: "Mujer joven"
  }
];

export const arcanosMenores: ArcanoMenor[] = [
  {
    nombre: "As de Bastos",
    titulo: "La Raíz de los Poderes del Fuego",
    descripcion: "Una blanca y radiante Mano angélica surgiendo de entre las Nubes y agarrando un pesado Bastón que tiene tres ramas. Simboliza Fuerza, fortaleza, ímpetu, vigor, energía.",
    simbolismo: "Diez llamas representan las Sefirot y veintidós llamitas responden a los senderos.",
    atributo: "Fuerza Natural",
    dominio: "Conecta Yetsirá con el Plano Material."
  },
  {
    nombre: "2 de Bastos",
    significado: "Influencia sobre alguien. Dominio."
  },
  {
    nombre: "3 de Bastos",
    significado: "Orgullo y arrogancia. A veces poder."
  },
  {
    nombre: "4 de Bastos",
    significado: "Completamiento. Culminan los arreglos."
  },
  {
    nombre: "5 de Bastos",
    significado: "Contienda. Lucha."
  },
  {
    nombre: "6 de Bastos",
    significado: "Ganancia y éxito."
  },
  {
    nombre: "7 de Bastos",
    significado: "Oposición. A veces coraje al enfrentarla."
  },
  {
    nombre: "8 de Bastos",
    significado: "Una apresurada comunicación, carta o mensaje. Rapidez."
  },
  {
    nombre: "9 de Bastos",
    significado: "Fuerza. Poder. Salud. Energía."
  },
  {
    nombre: "10 de Bastos",
    significado: "Crueldad y malicia hacia los demás. Fuerza opresiva. Venganza. Injusticia."
  },
  {
    nombre: "2 de Copas",
    significado: "Matrimonio. Amor. Placer. Cálida amistad."
  },
  {
    nombre: "3 de Copas",
    significado: "Plenitud. Hospitalidad, comida y bebida. Placer, regocijo, danza y nuevos vestidos."
  },
  {
    nombre: "4 de Copas",
    significado: "Se recibe placer y afecto de los demás, pero acompañado de algunas molestias."
  },
  {
    nombre: "5 de Copas",
    significado: "Decepción en el amor. Matrimonio roto, etc. Asperezas de los demás. Pérdida de amistad."
  },
  {
    nombre: "6 de Copas",
    significado: "Deseo, felicidad, éxito, disfrute."
  },
  {
    nombre: "7 de Copas",
    significado: "Mentira, engaño, promesas incumplidas, ilusión, decepción. Error, ligero éxito, pero sin la energía suficiente para retenerlo."
  },
  {
    nombre: "8 de Copas",
    significado: "Éxito abandonado, declinación del interés por algo. Aburrimiento."
  },
  {
    nombre: "9 de Copas",
    significado: "Éxito completo. Placer y felicidad. Deseo satisfecho."
  },
  {
    nombre: "10 de Copas",
    significado: "Asuntos definitivamente encaminados y estructurados de acuerdo con los propios deseos. Buena fortuna completa."
  },
  {
    nombre: "2 de Espadas",
    significado: "Disputa abandonada, y arreglada. Paz restaurada, pero cierta tensión en las relaciones."
  },
  {
    nombre: "3 de Espadas",
    significado: "Infelicidad, dolor, lágrimas."
  },
  {
    nombre: "4 de Espadas",
    significado: "Convalecencia, recuperación de la enfermedad, cambio para mejor."
  },
  {
    nombre: "5 de Espadas",
    significado: "Derrota, pérdida, malicia. Calumnia, difamación."
  },
  {
    nombre: "6 de Espadas",
    significado: "Labor, trabajo; viaje, probablemente por agua."
  },
  {
    nombre: "7 de Espadas",
    significado: "De carácter inestable, vacilación. Viaje, probablemente por tierra."
  },
  {
    nombre: "8 de Espadas",
    significado: "Estrecho o restringido. Insignificante. Una prisión."
  },
  {
    nombre: "9 de Espadas",
    significado: "Enfermedad. Sufrimiento. Malicia. Crueldad. Dolor."
  },
  {
    nombre: "10 de Espadas",
    significado: "Ruina. Muerte. Fracaso. Desastre."
  },
  {
    nombre: "2 de Pentáculos",
    significado: "Cambio agradable. Visita a amigos, etc."
  },
  {
    nombre: "3 de Pentáculos",
    significado: "Negocio, empleo pagado. Transacciones comerciales."
  },
  {
    nombre: "4 de Pentáculos",
    significado: "Ganancia de dinero y de influencia. Un presente."
  },
  {
    nombre: "5 de Pentáculos",
    significado: "Pérdida de profesión. Pérdida de dinero. Ansiedad monetaria."
  },
  {
    nombre: "6 de Pentáculos",
    significado: "Éxito en cosas materiales; prosperidad en los negocios."
  },
  {
    nombre: "7 de Pentáculos",
    significado: "Especulaciones sin beneficios, empleos; también trabajo honorario emprendido por amor al arte, sin deseo de lucro."
  },
  {
    nombre: "8 de Pentáculos",
    significado: "Habilidad, prudencia, también artimañas y astucia."
  },
  {
    nombre: "9 de Pentáculos",
    significado: "Herencia. Mucho incremento de dinero."
  },
  {
    nombre: "10 de Pentáculos",
    significado: "Bienes y riquezas."
  }
];