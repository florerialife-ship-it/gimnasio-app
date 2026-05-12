import type { Exercise } from '../types';

export const exercises: Exercise[] = [
  {
    id: 'lagartija',
    name: 'Lagartija',
    category: 'pecho',
    muscles: ['Pecho', 'Tríceps'],
    secondaryMuscles: ['Hombro anterior', 'Abdomen'],
    equipment: ['peso_corporal'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Colócate boca abajo con las manos separadas al ancho de los hombros.',
      'Mantén el cuerpo recto de pies a cabeza.',
      'Baja el pecho hacia el suelo doblando los codos a 45°.',
      'Empuja hacia arriba hasta estirar los brazos.',
      'Exhala al subir, inhala al bajar.'
    ],
    commonErrors: [
      'Codos muy abiertos (estrés en hombros).',
      'Cadera hundida o elevada.',
      'No bajar lo suficiente.',
      'Contener la respiración.'
    ],
    easyVariant: 'Lagartija inclinada (manos en banco o pared).',
    hardVariant: 'Lagartija con pies elevados o con peso en espalda.',
    usageRecommendation: 'Ejercicio base de empuje. Ideal para calentamiento o bloque principal.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=como+hacer+lagartijas+correctamente+tecnica"
  },
  {
    id: 'lagartija_inclinada',
    name: 'Lagartija inclinada',
    category: 'pecho',
    muscles: ['Pecho inferior', 'Tríceps'],
    secondaryMuscles: ['Hombro anterior', 'Abdomen'],
    equipment: ['banco', 'peso_corporal'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Coloca las manos en un banco o superficie elevada.',
      'Retrocede los pies hasta quedar en diagonal.',
      'Baja el pecho hacia el borde del banco.',
      'Empuja hacia arriba hasta estirar los brazos.'
    ],
    commonErrors: [
      'Codos muy abiertos.',
      'Cadera hundida.',
      'Aguantar la respiración.'
    ],
    easyVariant: 'Usar una pared o superficie más alta.',
    hardVariant: 'Bajar la altura del banco progresivamente.',
    usageRecommendation: 'Progresión hacia lagartija en suelo. Ideal para principiantes.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=lagartijas+inclinadas+tecnica+correcta+principiantes"
  },
  {
    id: 'sentadilla_libre',
    name: 'Sentadilla libre',
    category: 'piernas',
    muscles: ['Cuádriceps', 'Glúteos'],
    secondaryMuscles: ['Isquiotibiales', 'Abdomen', 'Espalda baja'],
    equipment: ['peso_corporal'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Pies separados al ancho de hombros, puntas ligeramente hacia afuera.',
      'Espalda recta, pecho arriba, mirada al frente.',
      'Flexiona rodillas y cadera como para sentarte.',
      'Baja hasta que los muslos estén paralelos al suelo (o hasta donde mantengas buena forma).',
      'Empuja desde los talones para subir.'
    ],
    commonErrors: [
      'Rodillas que colapsan hacia adentro.',
      'Talones que se levantan.',
      'Espalda que se redondea.',
      'Bajar a medias.'
    ],
    easyVariant: 'Sentadilla a cajón o banco (tocar y subir).',
    hardVariant: 'Sentadilla goblet con mancuerna.',
    usageRecommendation: 'Movimiento fundamental de tren inferior. Presente en todas las fases.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=como+hacer+sentadillas+correctamente+tecnica"
  },
  {
    id: 'sentadilla_goblet',
    name: 'Sentadilla goblet con mancuerna',
    category: 'piernas',
    muscles: ['Cuádriceps', 'Glúteos'],
    secondaryMuscles: ['Isquiotibiales', 'Abdomen', 'Espalda baja'],
    equipment: ['mancuernas'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Sostén una mancuerna vertical contra el pecho con ambas manos.',
      'Pies al ancho de hombros, puntas ligeramente afuera.',
      'Baja en sentadilla manteniendo la mancuerna pegada al pecho.',
      'Codos pasan entre las rodillas al bajar.',
      'Sube empujando desde los talones.'
    ],
    commonErrors: [
      'Inclinar el torso hacia adelante.',
      'Rodillas que colapsan.',
      'Peso muy alejado del cuerpo.'
    ],
    easyVariant: 'Usar mancuerna más ligera.',
    hardVariant: 'Aumentar peso o bajar más profundo.',
    usageRecommendation: 'Excelente para aprender sentadilla con carga. Ideal fase 1 y 2.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=sentadilla+goblet+con+mancuerna+tecnica"
  },
  {
    id: 'peso_muerto_rumano_mancuernas',
    name: 'Peso muerto rumano con mancuernas',
    category: 'piernas',
    muscles: ['Isquiotibiales', 'Glúteos'],
    secondaryMuscles: ['Espalda baja', 'Antebrazos'],
    equipment: ['mancuernas'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'De pie, mancuernas frente a los muslos.',
      'Rodillas ligeramente flexionadas.',
      'Empuja la cadera hacia atrás, baja las mancuernas cerca de las piernas.',
      'Mantén la espalda recta en todo momento.',
      'Baja hasta sentir estiramiento en isquiotibiales.',
      'Vuelve a subir apretando glúteos.'
    ],
    commonErrors: [
      'Redondear la espalda.',
      'Flexionar demasiado las rodillas.',
      'Bajar las mancuernas lejos del cuerpo.',
      'Hiperextender la espalda al subir.'
    ],
    easyVariant: 'Peso muerto sin peso (buenos días).',
    hardVariant: 'Peso muerto con barra o a una pierna.',
    usageRecommendation: 'Clave para cadena posterior. Cuidar la técnica antes de subir peso.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=peso+muerto+rumano+con+mancuernas+tecnica"
  },
  {
    id: 'peso_muerto_barra_ligera',
    name: 'Peso muerto con barra ligera',
    category: 'espalda',
    muscles: ['Espalda baja', 'Glúteos', 'Isquiotibiales'],
    secondaryMuscles: ['Trapecio', 'Antebrazos', 'Abdomen'],
    equipment: ['barra_olimpica'],
    level: 'intermedio',
    type: 'fuerza',
    instructions: [
      'Barra en el suelo, pies bajo la barra al ancho de cadera.',
      'Agarre al ancho de hombros.',
      'Pecho arriba, espalda recta, cadera baja.',
      'Tira de la barra manteniéndola cerca del cuerpo.',
      'Extiende cadera y rodillas al mismo tiempo.',
      'Baja la barra de forma controlada.'
    ],
    commonErrors: [
      'Redondear la espalda (MUY PELIGROSO).',
      'Tirar solo con la espalda.',
      'Barra lejos del cuerpo.',
      'Subir cadera antes que el torso.'
    ],
    easyVariant: 'Peso muerto rumano con mancuernas.',
    hardVariant: 'Aumentar peso progresivamente.',
    usageRecommendation: 'Requiere buena técnica. Introducir en fase 2 con peso ligero.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=peso+muerto+con+barra+tecnica+correcta+principiantes"
  },
  {
    id: 'remo_mancuerna',
    name: 'Remo con mancuerna',
    category: 'espalda',
    muscles: ['Dorsal', 'Romboides'],
    secondaryMuscles: ['Bíceps', 'Antebrazos'],
    equipment: ['mancuernas', 'banco'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Apoya una rodilla y mano en el banco.',
      'Espalda paralela al suelo.',
      'Con la otra mano, tira de la mancuerna hacia la cadera.',
      'Aprieta la escápula al final del movimiento.',
      'Baja controlado.'
    ],
    commonErrors: [
      'Girar el torso al subir.',
      'Usar solo el bíceps.',
      'Encorvar la espalda.',
      'Movimiento brusco.'
    ],
    easyVariant: 'Remo con banda elástica o mancuerna más ligera.',
    hardVariant: 'Remo con barra o mayor peso.',
    usageRecommendation: 'Ejercicio fundamental de jalón horizontal. Presente en todas las fases.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=remo+con+mancuerna+a+una+mano+tecnica"
  },
  {
    id: 'remo_barra',
    name: 'Remo con barra',
    category: 'espalda',
    muscles: ['Dorsal', 'Romboides', 'Trapecio'],
    secondaryMuscles: ['Bíceps', 'Antebrazos', 'Espalda baja'],
    equipment: ['barra_olimpica'],
    level: 'intermedio',
    type: 'fuerza',
    instructions: [
      'De pie, torso inclinado 45°, espalda recta.',
      'Barra con agarre prono al ancho de hombros.',
      'Tira de la barra hacia el abdomen inferior.',
      'Aprieta escápulas al final.',
      'Baja controlado.'
    ],
    commonErrors: [
      'Redondear la espalda.',
      'Usar impulso excesivo.',
      'No apretar escápulas.',
      'Tirar hacia el pecho en vez del abdomen.'
    ],
    easyVariant: 'Remo con mancuernas a una mano.',
    hardVariant: 'Aumentar peso o variar agarre.',
    usageRecommendation: 'Buen complemento de remo con mancuerna. Fase 2+.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=remo+con+barra+tecnica+correcta"
  },
  {
    id: 'press_pecho_mancuernas',
    name: 'Press de pecho con mancuernas',
    category: 'pecho',
    muscles: ['Pecho', 'Tríceps'],
    secondaryMuscles: ['Hombro anterior'],
    equipment: ['mancuernas', 'banco'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Acostado boca arriba en banco plano.',
      'Mancuernas a la altura del pecho, codos a 45°.',
      'Empuja las mancuernas hacia arriba sin bloquear codos.',
      'Baja controlado hasta sentir estiramiento en pecho.'
    ],
    commonErrors: [
      'Codos muy abiertos (90°).',
      'Arquear excesivamente la espalda.',
      'Golpear las mancuernas al subir.',
      'No controlar la bajada.'
    ],
    easyVariant: 'Press con mancuernas más ligeras.',
    hardVariant: 'Aumentar peso o hacer press declinado.',
    usageRecommendation: 'Ejercicio principal de empuje horizontal. Fase 1+.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=press+de+pecho+con+mancuernas+tecnica"
  },
  {
    id: 'press_militar_mancuernas',
    name: 'Press militar con mancuernas',
    category: 'hombros',
    muscles: ['Hombros (deltoides anterior y medio)'],
    secondaryMuscles: ['Tríceps', 'Trapecio'],
    equipment: ['mancuernas'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Sentado en banco con respaldo, mancuernas a la altura de hombros.',
      'Palmas hacia adelante.',
      'Empuja las mancuernas hacia arriba hasta casi estirar codos.',
      'Baja controlado.'
    ],
    commonErrors: [
      'Arquear excesivamente la espalda.',
      'Empujar con las piernas.',
      'No controlar la bajada.',
      'Codos muy adelantados.'
    ],
    easyVariant: 'Press con mancuernas más ligeras o de pie para involucrar menos peso.',
    hardVariant: 'Press Arnold o press de pie con barra.',
    usageRecommendation: 'Ejercicio principal de empuje vertical. Fase 1+.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=press+militar+con+mancuernas+tecnica+correcta"
  },
  {
    id: 'curl_biceps',
    name: 'Curl de bíceps',
    category: 'brazos',
    muscles: ['Bíceps'],
    secondaryMuscles: ['Antebrazos'],
    equipment: ['mancuernas'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'De pie, mancuernas a los lados con palmas hacia adelante.',
      'Codos pegados al cuerpo.',
      'Flexiona los codos llevando mancuernas a los hombros.',
      'Aprieta el bíceps arriba.',
      'Baja controlado.'
    ],
    commonErrors: [
      'Usar impulso del cuerpo.',
      'Mover los codos.',
      'No bajar completamente.',
      'Usar demasiado peso.'
    ],
    easyVariant: 'Curl alternado o con peso más ligero.',
    hardVariant: 'Curl martillo o curl concentrado.',
    usageRecommendation: 'Ejercicio de aislamiento. Complemento en todas las fases.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=curl+de+biceps+con+mancuernas+tecnica+correcta"
  },
  {
    id: 'extension_triceps_cuerda',
    name: 'Extensión de tríceps con cuerda',
    category: 'brazos',
    muscles: ['Tríceps'],
    secondaryMuscles: ['Antebrazos'],
    equipment: ['cuerda_triceps'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Sujeta la cuerda o accesorio con ambas manos.',
      'Puedes anclarla en alto (simulando polea) o hacer extensión sobre la cabeza.',
      'Extiende los codos llevando las manos hacia abajo.',
      'Aprieta los tríceps al final.',
      'Vuelve controlado.'
    ],
    commonErrors: [
      'Abrir los codos.',
      'Usar impulso del torso.',
      'No extender completamente.',
      'Movimiento brusco.'
    ],
    easyVariant: 'Extensión con mancuerna ligera a una mano.',
    hardVariant: 'Fondos en banco o más tensión en la cuerda.',
    usageRecommendation: 'Usar cuando quieras aislar tríceps. Complemento.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=extension+de+triceps+con+cuerda+tecnica"
  },
  {
    id: 'fondos_asistidos_banco',
    name: 'Fondos asistidos en banco',
    category: 'brazos',
    muscles: ['Tríceps'],
    secondaryMuscles: ['Pecho', 'Hombro anterior'],
    equipment: ['banco', 'peso_corporal'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Manos en el borde del banco, dedos hacia adelante.',
      'Pies en el suelo con rodillas flexionadas (asistido).',
      'Baja el cuerpo doblando los codos hacia atrás.',
      'No bajes más de 90° en codos.',
      'Empuja hacia arriba.'
    ],
    commonErrors: [
      'Codos hacia afuera.',
      'Bajar demasiado (estrés en hombros).',
      'Separar los glúteos del banco.',
      'Encorvar los hombros.'
    ],
    easyVariant: 'Más flexión de rodillas (más asistencia).',
    hardVariant: 'Piernas estiradas o pies en otro banco.',
    usageRecommendation: 'Excelente para tríceps sin equipo especial. Todas las fases.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=fondos+de+triceps+en+banco+tecnica+correcta"
  },
  {
    id: 'plancha',
    name: 'Plancha',
    category: 'abdomen',
    muscles: ['Abdomen', 'Oblicuos'],
    secondaryMuscles: ['Hombros', 'Espalda baja', 'Glúteos'],
    equipment: ['alfombra', 'peso_corporal'],
    level: 'principiante',
    type: 'abdomen',
    instructions: [
      'Antebrazos en el suelo, codos bajo los hombros.',
      'Cuerpo en línea recta de pies a cabeza.',
      'Contrae el abdomen y glúteos.',
      'Mantén la posición sin hundir la cadera.',
      'Respira de forma controlada.'
    ],
    commonErrors: [
      'Cadera hundida.',
      'Cadera elevada.',
      'Contener la respiración.',
      'Cabeza hacia abajo o muy arriba.'
    ],
    easyVariant: 'Plancha de rodillas.',
    hardVariant: 'Plancha con elevación de pierna o plancha lateral.',
    usageRecommendation: 'Ejercicio fundamental de core. Presente en calentamiento y complementario.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=como+hacer+plancha+abdominal+correctamente"
  },
  {
    id: 'plancha_lateral',
    name: 'Plancha lateral',
    category: 'abdomen',
    muscles: ['Oblicuos', 'Abdomen'],
    secondaryMuscles: ['Hombro', 'Glúteo medio'],
    equipment: ['alfombra', 'peso_corporal'],
    level: 'principiante',
    type: 'abdomen',
    instructions: [
      'De lado, antebrazo en el suelo, codo bajo el hombro.',
      'Cadera elevada, cuerpo en línea.',
      'Mantén la posición.',
      'Repite del otro lado.'
    ],
    commonErrors: [
      'Cadera hundida.',
      'Cabeza girada hacia abajo.',
      'No alinear el cuerpo.'
    ],
    easyVariant: 'Apoyar la rodilla inferior.',
    hardVariant: 'Elevar la pierna superior.',
    usageRecommendation: 'Trabaja oblicuos. Complemento en todas las fases.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=plancha+lateral+tecnica+correcta+abdomen"
  },
  {
    id: 'crunch_abdominal',
    name: 'Crunch abdominal',
    category: 'abdomen',
    muscles: ['Abdomen (recto abdominal)'],
    secondaryMuscles: ['Oblicuos'],
    equipment: ['alfombra', 'peso_corporal'],
    level: 'principiante',
    type: 'abdomen',
    instructions: [
      'Boca arriba, rodillas flexionadas, pies en el suelo.',
      'Manos detrás de la cabeza sin tirar del cuello.',
      'Eleva los hombros del suelo contrayendo el abdomen.',
      'Baja controlado sin apoyar completamente la cabeza.'
    ],
    commonErrors: [
      'Tirar del cuello.',
      'Usar impulso.',
      'No contraer el abdomen.',
      'Hacer el movimiento muy rápido.'
    ],
    easyVariant: 'Manos cruzadas sobre el pecho.',
    hardVariant: 'Piernas elevadas a 90° o crunch con peso.',
    usageRecommendation: 'Ejercicio clásico de abdomen. Complemento.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=crunch+abdominal+tecnica+correcta"
  },
  {
    id: 'elevacion_piernas',
    name: 'Elevación de piernas',
    category: 'abdomen',
    muscles: ['Abdomen inferior'],
    secondaryMuscles: ['Flexores de cadera'],
    equipment: ['alfombra', 'peso_corporal'],
    level: 'intermedio',
    type: 'abdomen',
    instructions: [
      'Boca arriba, piernas estiradas.',
      'Manos debajo de los glúteos o a los lados.',
      'Eleva las piernas rectas hasta unos 45-60°.',
      'Baja controlado sin tocar el suelo.'
    ],
    commonErrors: [
      'Balancear las piernas.',
      'Despegar la espalda baja.',
      'Doblar las rodillas.',
      'Bajar muy rápido.'
    ],
    easyVariant: 'Rodillas flexionadas (crunch inverso).',
    hardVariant: 'Piernas rectas hasta casi vertical.',
    usageRecommendation: 'Trabaja abdomen inferior. Complemento en fases 2+.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=elevacion+de+piernas+abdomen+tecnica"
  },
  {
    id: 'puente_gluteo',
    name: 'Puente de glúteo',
    category: 'piernas',
    muscles: ['Glúteos'],
    secondaryMuscles: ['Isquiotibiales', 'Espalda baja'],
    equipment: ['alfombra', 'peso_corporal'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Boca arriba, rodillas flexionadas, pies apoyados.',
      'Brazos a los lados.',
      'Eleva la cadera apretando los glúteos.',
      'Mantén arriba 1-2 segundos.',
      'Baja controlado.'
    ],
    commonErrors: [
      'Hiperextender la espalda.',
      'No apretar glúteos.',
      'Subir con impulso.',
      'Pies muy lejos del cuerpo.'
    ],
    easyVariant: 'Mantener menos tiempo arriba.',
    hardVariant: 'Puente a una pierna o con peso en la cadera.',
    usageRecommendation: 'Activación de glúteos. Ideal para calentamiento y complementario.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=puente+de+gluteo+tecnica+correcta"
  },
  {
    id: 'hip_thrust_banco',
    name: 'Hip thrust en banco',
    category: 'piernas',
    muscles: ['Glúteos'],
    secondaryMuscles: ['Isquiotibiales'],
    equipment: ['banco', 'mancuernas'],
    level: 'intermedio',
    type: 'fuerza',
    instructions: [
      'Espalda alta apoyada en borde del banco.',
      'Pies en el suelo, rodillas flexionadas 90°.',
      'Mancuerna sobre la cadera (opcional).',
      'Empuja la cadera hacia arriba apretando glúteos.',
      'Baja controlado.'
    ],
    commonErrors: [
      'Hiperextender la espalda.',
      'No apoyar bien la espalda en el banco.',
      'Pies muy adelantados.',
      'Movimiento brusco.'
    ],
    easyVariant: 'Sin peso, solo peso corporal.',
    hardVariant: 'Aumentar peso o hacer a una pierna.',
    usageRecommendation: 'Excelente para glúteos. Fase 2+.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=hip+thrust+en+banco+tecnica+correcta"
  },
  {
    id: 'desplantes',
    name: 'Desplantes',
    category: 'piernas',
    muscles: ['Cuádriceps', 'Glúteos'],
    secondaryMuscles: ['Isquiotibiales', 'Pantorrillas'],
    equipment: ['peso_corporal'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'De pie, manos en la cadera.',
      'Da un paso largo hacia adelante.',
      'Baja la rodilla trasera casi al suelo.',
      'Rodilla delantera no debe pasar la punta del pie.',
      'Empuja con la pierna delantera para volver.',
      'Alterna piernas.'
    ],
    commonErrors: [
      'Rodilla delantera que pasa la punta del pie.',
      'Torso inclinado hacia adelante.',
      'Paso muy corto.',
      'Perder el equilibrio.'
    ],
    easyVariant: 'Desplantes sin desplazamiento (estáticos).',
    hardVariant: 'Desplantes con mancuernas o caminando.',
    usageRecommendation: 'Ejercicio fundamental de pierna unilateral. Todas las fases.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=como+hacer+desplantes+zancadas+correctamente"
  },
  {
    id: 'step_ups_banco',
    name: 'Step-ups en banco',
    category: 'piernas',
    muscles: ['Cuádriceps', 'Glúteos'],
    secondaryMuscles: ['Isquiotibiales', 'Pantorrillas'],
    equipment: ['banco'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Frente al banco, un pie apoyado en él.',
      'Empuja con el pie apoyado para subir.',
      'El otro pie solo toca el banco sin impulsarse.',
      'Baja controlado.',
      'Alterna piernas.'
    ],
    commonErrors: [
      'Impulsarse con la pierna de abajo.',
      'Inclinar el torso.',
      'Bajar de golpe.',
      'Usar un banco muy alto.'
    ],
    easyVariant: 'Usar superficie más baja.',
    hardVariant: 'Step-ups con mancuernas.',
    usageRecommendation: 'Excelente ejercicio unilateral. Todas las fases.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=step+ups+en+banco+tecnica+correcta"
  },
  {
    id: 'dominada_asistida',
    name: 'Dominada asistida / progresión',
    category: 'espalda',
    muscles: ['Dorsal', 'Bíceps'],
    secondaryMuscles: ['Antebrazos', 'Abdomen'],
    equipment: ['barra_dominadas'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Agarre prono en barra, manos al ancho de hombros.',
      'Cuélgate con brazos estirados.',
      'Si no puedes subir: salta y haz la fase excéntrica (negativa) bajando lento.',
      'O usa banda elástica para asistencia.',
      'O haz isométrico (mantenerse arriba).'
    ],
    commonErrors: [
      'Usar solo brazos sin activar dorsales.',
      'Balancearse.',
      'No bajar completamente.',
      'Encorvar los hombros.'
    ],
    easyVariant: 'Colgado pasivo o negativas.',
    hardVariant: 'Dominada completa sin asistencia.',
    usageRecommendation: 'Progresión gradual. No forzar si no hay base. Fase 2+.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=dominadas+asistidas+progresion+principiantes"
  },
  {
    id: 'colgado_barra',
    name: 'Colgado en barra',
    category: 'espalda',
    muscles: ['Antebrazos', 'Dorsal'],
    secondaryMuscles: ['Hombros', 'Abdomen'],
    equipment: ['barra_dominadas'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Agarre prono en barra.',
      'Cuélgate con brazos estirados.',
      'Mantén los hombros activados (no colgar muerto).',
      'Aguanta la posición el tiempo indicado.'
    ],
    commonErrors: [
      'Colgar sin activar hombros (riesgo de lesión).',
      'Contener la respiración.',
      'Agarrar muy fuerte.'
    ],
    easyVariant: 'Colgar con pies en el suelo parcialmente.',
    hardVariant: 'Aumentar tiempo o hacer balanceos controlados.',
    usageRecommendation: 'Preparación para dominadas. Fase 1+.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=colgado+en+barra+tecnica+activacion+escapular"
  },
  {
    id: 'saltar_cuerda',
    name: 'Saltar cuerda',
    category: 'cuerpo_completo',
    muscles: ['Pantorrillas', 'Hombros'],
    secondaryMuscles: ['Abdomen', 'Antebrazos'],
    equipment: ['cuerda_saltar'],
    level: 'principiante',
    type: 'cardio',
    instructions: [
      'Cuerda detrás de los talones.',
      'Manos a la altura de la cadera.',
      'Gira la cuerda con las muñecas, no con los brazos.',
      'Salta apenas lo necesario para pasar la cuerda.',
      'Aterriza suave con las puntas de los pies.'
    ],
    commonErrors: [
      'Saltar muy alto.',
      'Girar con los brazos en vez de muñecas.',
      'Aterrizar con los talones.',
      'Cuerda muy larga o muy corta.'
    ],
    easyVariant: 'Saltar sin cuerda imitando el movimiento.',
    hardVariant: 'Doble salto o intervalos de velocidad.',
    usageRecommendation: 'Excelente para calentamiento y cardio. Fase 1+.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=como+saltar+cuerda+correctamente+principiantes"
  },
  {
    id: 'trampolin_suave',
    name: 'Trampolín suave',
    category: 'cuerpo_completo',
    muscles: ['Piernas', 'Abdomen'],
    secondaryMuscles: ['Glúteos', 'Pantorrillas'],
    equipment: ['trampolin'],
    level: 'principiante',
    type: 'cardio',
    instructions: [
      'Sube al trampolín con ambos pies.',
      'Realiza saltos suaves sin despegar mucho.',
      'Mantén el abdomen contraído.',
      'Respira de forma rítmica.',
      'Puedes alternar pies o hacer trote suave.'
    ],
    commonErrors: [
      'Saltar muy alto.',
      'No controlar la postura.',
      'Mirar hacia abajo constantemente.',
      'Rigidez en las piernas.'
    ],
    easyVariant: 'Marcha suave en el trampolín.',
    hardVariant: 'Saltos con rodillas al pecho suaves.',
    usageRecommendation: 'Cardio de bajo impacto. Ideal cuando hay molestias articulares.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=ejercicios+en+trampolin+principiantes+casa"
  },
  {
    id: 'mountain_climbers',
    name: 'Mountain climbers',
    category: 'cuerpo_completo',
    muscles: ['Abdomen', 'Flexores de cadera'],
    secondaryMuscles: ['Hombros', 'Piernas'],
    equipment: ['alfombra', 'peso_corporal'],
    level: 'intermedio',
    type: 'cardio',
    instructions: [
      'Posición de plancha con brazos estirados.',
      'Alterna llevando las rodillas al pecho rápidamente.',
      'Mantén la espalda recta.',
      'Respira de forma controlada.'
    ],
    commonErrors: [
      'Cadera muy elevada.',
      'Rebotar en los hombros.',
      'Movimiento lento y sin control.',
      'Contener la respiración.'
    ],
    easyVariant: 'Ritmo más lento, como marcha en plancha.',
    hardVariant: 'Aumentar velocidad o hacer en suelo deslizante.',
    usageRecommendation: 'Cardio + core. Ideal para bloque complementario.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=mountain+climbers+tecnica+correcta"
  },
  {
    id: 'bird_dog',
    name: 'Bird dog',
    category: 'abdomen',
    muscles: ['Espalda baja', 'Abdomen'],
    secondaryMuscles: ['Glúteos', 'Hombros'],
    equipment: ['alfombra', 'peso_corporal'],
    level: 'principiante',
    type: 'movilidad',
    instructions: [
      'Cuatro puntos: manos bajo hombros, rodillas bajo cadera.',
      'Extiende brazo derecho y pierna izquierda al mismo tiempo.',
      'Mantén la espalda estable sin girar.',
      'Aguanta 2 segundos y vuelve.',
      'Alterna lados.'
    ],
    commonErrors: [
      'Girar la cadera.',
      'Perder el equilibrio.',
      'Movimiento brusco.',
      'Extender demasiado y arquear la espalda.'
    ],
    easyVariant: 'Extender solo pierna o solo brazo.',
    hardVariant: 'Mantener más tiempo o añadir repeticiones.',
    usageRecommendation: 'Estabilidad de core. Calentamiento y recuperación.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=ejercicio+bird+dog+tecnica+correcta"
  },
  {
    id: 'dead_bug',
    name: 'Dead bug',
    category: 'abdomen',
    muscles: ['Abdomen profundo'],
    secondaryMuscles: ['Flexores de cadera'],
    equipment: ['alfombra', 'peso_corporal'],
    level: 'principiante',
    type: 'abdomen',
    instructions: [
      'Boca arriba, brazos extendidos hacia el techo.',
      'Piernas elevadas con rodillas a 90°.',
      'Extiende brazo derecho y pierna izquierda lentamente.',
      'No despegues la espalda baja del suelo.',
      'Vuelve al centro y alterna.'
    ],
    commonErrors: [
      'Despegar la espalda baja.',
      'Movimiento muy rápido.',
      'Contener la respiración.',
      'No controlar el abdomen.'
    ],
    easyVariant: 'Mover solo piernas o solo brazos.',
    hardVariant: 'Sostener mancuerna ligera en las manos.',
    usageRecommendation: 'Ejercicio seguro de core. Calentamiento y rehabilitación.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=ejercicio+dead+bug+tecnica+correcta+abdomen"
  },
  {
    id: 'superman',
    name: 'Superman',
    category: 'espalda',
    muscles: ['Espalda baja', 'Glúteos'],
    secondaryMuscles: ['Hombros posteriores'],
    equipment: ['alfombra', 'peso_corporal'],
    level: 'principiante',
    type: 'movilidad',
    instructions: [
      'Boca abajo, brazos extendidos hacia adelante.',
      'Eleva brazos y piernas a la vez unos centímetros.',
      'Aprieta glúteos y espalda.',
      'Mantén 2 segundos.',
      'Baja controlado.'
    ],
    commonErrors: [
      'Elevar demasiado (hiperextensión).',
      'Movimiento brusco.',
      'Contener la respiración.',
      'Cuello hacia atrás.'
    ],
    easyVariant: 'Elevar solo brazos o solo piernas.',
    hardVariant: 'Mantener más tiempo o añadir repeticiones.',
    usageRecommendation: 'Fortalecimiento de espalda baja. Complementario.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=ejercicio+superman+espalda+tecnica+correcta"
  },
  {
    id: 'movilidad_hombros',
    name: 'Movilidad de hombros',
    category: 'hombros',
    muscles: ['Hombros', 'Manguito rotador'],
    secondaryMuscles: ['Trapecio'],
    equipment: ['peso_corporal'],
    level: 'principiante',
    type: 'movilidad',
    instructions: [
      'De pie o sentado.',
      'Realiza círculos con los brazos extendidos: adelante y atrás.',
      'Movimientos controlados, no bruscos.',
      '10 repeticiones en cada dirección.',
      'También: brazos en cruz, rotaciones de hombros.'
    ],
    commonErrors: [
      'Movimientos muy rápidos.',
      'Tensar el cuello.',
      'No hacer rango completo.',
      'Contener la respiración.'
    ],
    easyVariant: 'Círculos más pequeños.',
    hardVariant: 'Círculos más grandes o con mancuernas muy ligeras.',
    usageRecommendation: 'Calentamiento obligatorio antes de ejercicios de empuje.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=ejercicios+movilidad+de+hombros+calentamiento"
  },
  {
    id: 'movilidad_cadera',
    name: 'Movilidad de cadera',
    category: 'piernas',
    muscles: ['Cadera', 'Glúteos'],
    secondaryMuscles: ['Espalda baja'],
    equipment: ['alfombra', 'peso_corporal'],
    level: 'principiante',
    type: 'movilidad',
    instructions: [
      'De pie o en el suelo.',
      'Rotaciones de cadera: círculos amplios en ambas direcciones.',
      'Balanceo de pierna adelante-atrás.',
      'Apertura de cadera (como sentadilla profunda sujetándose).'
    ],
    commonErrors: [
      'Movimientos bruscos.',
      'No estabilizar el tronco.',
      'Forzar más del rango cómodo.',
      'No respirar.'
    ],
    easyVariant: 'Movimientos más pequeños.',
    hardVariant: 'Mayor rango o añadir banda elástica.',
    usageRecommendation: 'Calentamiento antes de ejercicios de pierna.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=ejercicios+movilidad+de+cadera+calentamiento"
  },
  {
    id: 'movilidad_tobillos',
    name: 'Movilidad de tobillos',
    category: 'piernas',
    muscles: ['Tobillos', 'Pantorrillas'],
    secondaryMuscles: [],
    equipment: ['peso_corporal'],
    level: 'principiante',
    type: 'movilidad',
    instructions: [
      'De pie, apoya la punta del pie en el suelo.',
      'Gira el tobillo en círculos en ambas direcciones.',
      'Flexión y extensión de tobillo.',
      'Apoya el pie contra la pared para estirar el gemelo.'
    ],
    commonErrors: [
      'No hacer rango completo.',
      'Olvidar calentar tobillos.',
      'Movimiento solo en una dirección.'
    ],
    easyVariant: 'Sentado, moviendo el pie en el aire.',
    hardVariant: 'Movilidad con banda elástica.',
    usageRecommendation: 'Parte del calentamiento, especialmente antes de saltar cuerda.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=ejercicios+movilidad+de+tobillos+calentamiento"
  },
  {
    id: 'estiramiento_pecho',
    name: 'Estiramiento de pecho',
    category: 'pecho',
    muscles: ['Pecho', 'Hombro anterior'],
    secondaryMuscles: [],
    equipment: ['peso_corporal'],
    level: 'principiante',
    type: 'movilidad',
    instructions: [
      'De pie junto a una pared o marco de puerta.',
      'Apoya el antebrazo en la pared a 90°.',
      'Gira suavemente el torso hacia el lado contrario.',
      'Sentirás estiramiento en el pecho.',
      'Mantén 20-30 segundos por lado.'
    ],
    commonErrors: [
      'Forzar demasiado.',
      'Girar bruscamente.',
      'No mantener la posición.',
      'Hombro encogido.'
    ],
    easyVariant: 'Manos detrás de la espalda, estirar brazos.',
    hardVariant: 'Mayor rotación o bajar el brazo.',
    usageRecommendation: 'Enfriamiento después de ejercicios de empuje.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=estiramiento+de+pecho+tecnica+correcta"
  },
  {
    id: 'estiramiento_espalda',
    name: 'Estiramiento de espalda',
    category: 'espalda',
    muscles: ['Espalda', 'Dorsal'],
    secondaryMuscles: [],
    equipment: ['alfombra', 'peso_corporal'],
    level: 'principiante',
    type: 'movilidad',
    instructions: [
      'En cuatro puntos, siéntate sobre los talones.',
      'Extiende los brazos hacia adelante.',
      'Baja el pecho hacia el suelo.',
      'Mantén 20-30 segundos (postura del niño).'
    ],
    commonErrors: [
      'No respirar profundamente.',
      'Tensar el cuello.',
      'Forzar la posición.'
    ],
    easyVariant: 'Menos estiramiento.',
    hardVariant: 'Estiramiento de gato-vaca dinámico.',
    usageRecommendation: 'Enfriamiento. Alivia tensión en espalda.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=estiramiento+de+espalda+postura+del+nino"
  },
  {
    id: 'respiracion_diafragmatica',
    name: 'Respiración diafragmática',
    category: 'abdomen',
    muscles: ['Diafragma'],
    secondaryMuscles: ['Abdomen'],
    equipment: ['alfombra', 'peso_corporal'],
    level: 'principiante',
    type: 'movilidad',
    instructions: [
      'Boca arriba, una mano en el pecho y otra en el abdomen.',
      'Inhala lento por la nariz (4 segundos), sintiendo expandir el abdomen.',
      'Exhala lento por la boca (6 segundos), contrayendo el abdomen.',
      'Repite 5-10 ciclos.'
    ],
    commonErrors: [
      'Respirar solo con el pecho.',
      'Hacerlo muy rápido.',
      'Forzar la exhalación.',
      'Tensar el cuello.'
    ],
    easyVariant: 'Respiración normal consciente.',
    hardVariant: 'Añadir apnea suave entre fases.',
    usageRecommendation: 'Inicio de calentamiento y final de enfriamiento.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=respiracion+diafragmatica+tecnica+correcta"
  },
  {
    id: 'buenos_dias',
    name: 'Buenos días sin peso',
    category: 'piernas',
    muscles: ['Isquiotibiales', 'Glúteos'],
    secondaryMuscles: ['Espalda baja'],
    equipment: ['peso_corporal'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'De pie, manos detrás de la cabeza (sin empujar el cuello).',
      'Rodillas ligeramente flexionadas.',
      'Empuja la cadera hacia atrás, inclinando el torso.',
      'Espalda recta, pecho arriba.',
      'Baja hasta sentir estiramiento en isquiotibiales.',
      'Vuelve apretando glúteos.'
    ],
    commonErrors: [
      'Redondear la espalda.',
      'Flexionar mucho las rodillas.',
      'Bajar la cabeza.',
      'Movimiento brusco.'
    ],
    easyVariant: 'Manos en los muslos para guiar el movimiento.',
    hardVariant: 'Buenos días con mancuerna ligera en el pecho.',
    usageRecommendation: 'Preparación para peso muerto. Fase 0 y 1.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=ejercicio+buenos+dias+sin+peso+tecnica"
  },
  {
    id: 'elevaciones_laterales',
    name: 'Elevaciones laterales',
    category: 'hombros',
    muscles: ['Deltoides medio'],
    secondaryMuscles: ['Trapecio'],
    equipment: ['mancuernas'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'De pie, mancuernas a los lados.',
      'Ligera flexión de codos.',
      'Eleva los brazos hacia los lados hasta altura de hombros.',
      'No uses impulso del torso.',
      'Baja controlado.'
    ],
    commonErrors: [
      'Usar impulso o balanceo.',
      'Elevar por encima de los hombros.',
      'Encoger los hombros.',
      'Usar demasiado peso.'
    ],
    easyVariant: 'Peso más ligero o hacer sentado.',
    hardVariant: 'Elevaciones con pausa arriba o más peso.',
    usageRecommendation: 'Aislamiento de hombro medio. Complemento en todas las fases.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=elevaciones+laterales+con+mancuernas+tecnica+correcta"
  },
  {
    id: 'pajaros_mancuernas',
    name: 'Pájaros con mancuernas',
    category: 'hombros',
    muscles: ['Deltoides posterior'],
    secondaryMuscles: ['Romboides', 'Trapecio medio'],
    equipment: ['mancuernas'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Inclinado hacia adelante con espalda recta.',
      'Mancuernas colgando bajo el pecho.',
      'Abre los brazos hacia los lados como alas.',
      'Aprieta las escápulas.',
      'Baja controlado.'
    ],
    commonErrors: [
      'Redondear la espalda.',
      'Usar impulso.',
      'Encoger los hombros.',
      'Peso excesivo.'
    ],
    easyVariant: 'Peso muy ligero o hacer sentado inclinado.',
    hardVariant: 'Mayor peso o pausa arriba.',
    usageRecommendation: 'Equilibrio de hombro (parte posterior). Complemento.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=pajaros+con+mancuernas+tecnica+correcta+deltoides+posterior"
  },
  {
    id: 'farmer_walk',
    name: 'Farmer walk con mancuernas',
    category: 'cuerpo_completo',
    muscles: ['Antebrazos', 'Trapecio'],
    secondaryMuscles: ['Abdomen', 'Piernas'],
    equipment: ['mancuernas'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'De pie, una mancuerna en cada mano.',
      'Espalda recta, hombros atrás.',
      'Camina lentamente manteniendo la postura.',
      'Recorre la distancia o tiempo indicado.'
    ],
    commonErrors: [
      'Encorvar los hombros.',
      'Inclinar el torso.',
      'Caminar muy rápido.',
      'Usar un peso desbalanceado.'
    ],
    easyVariant: 'Peso más ligero o una sola mancuerna.',
    hardVariant: 'Más peso o mayor distancia.',
    usageRecommendation: 'Agarre y postura. Complemento en fase 2+.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=farmer+walk+con+mancuernas+tecnica"
  },
  {
    id: 'remo_invertido',
    name: 'Remo invertido (si es posible)',
    category: 'espalda',
    muscles: ['Dorsal', 'Romboides'],
    secondaryMuscles: ['Bíceps', 'Antebrazos'],
    equipment: ['barra_dominadas'],
    level: 'intermedio',
    type: 'fuerza',
    instructions: [
      'Coloca la barra a altura de cadera (en rack o similar).',
      'Cuélgate debajo de la barra con cuerpo recto.',
      'Tira del pecho hacia la barra.',
      'Aprieta escápulas.',
      'Baja controlado.'
    ],
    commonErrors: [
      'Cadera hundida.',
      'No llegar con el pecho a la barra.',
      'Usar solo brazos.',
      'Movimiento incompleto.'
    ],
    easyVariant: 'Barra más alta (menos inclinación).',
    hardVariant: 'Barra más baja o pies elevados.',
    usageRecommendation: 'Alternativa a dominadas para jalón horizontal. Fase 2+.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=remo+invertido+en+barra+tecnica+correcta"
  },
  {
    id: 'jumping_jacks',
    name: 'Jumping jacks suaves',
    category: 'cuerpo_completo',
    muscles: ['Piernas', 'Hombros'],
    secondaryMuscles: ['Abdomen'],
    equipment: ['peso_corporal'],
    level: 'principiante',
    type: 'cardio',
    instructions: [
      'De pie, brazos a los lados.',
      'Salta abriendo piernas y elevando brazos.',
      'Vuelve a la posición inicial.',
      'Movimiento fluido y controlado.',
      'Aterriza suave.'
    ],
    commonErrors: [
      'Aterrizar muy fuerte.',
      'Brazos rígidos.',
      'Salto muy alto.',
      'Ritmo irregular.'
    ],
    easyVariant: 'Step jacks (sin salto, paso lateral).',
    hardVariant: 'Mayor velocidad o añadir sentadilla.',
    usageRecommendation: 'Calentamiento cardiovascular. Fase 0+.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=jumping+jacks+tecnica+correcta+principiantes"
  },
  {
    id: 'circulos_brazos',
    name: 'Círculos de brazos',
    category: 'hombros',
    muscles: ['Hombros', 'Manguito rotador'],
    secondaryMuscles: [],
    equipment: ['peso_corporal'],
    level: 'principiante',
    type: 'movilidad',
    instructions: [
      'De pie, brazos extendidos en cruz.',
      'Haz círculos pequeños hacia adelante (10-15 rep).',
      'Luego círculos hacia atrás (10-15 rep).',
      'Aumenta el tamaño de los círculos progresivamente.'
    ],
    commonErrors: [
      'Encoger los hombros.',
      'Movimientos bruscos.',
      'No hacer ambas direcciones.',
      'Tensar el cuello.'
    ],
    easyVariant: 'Círculos más pequeños.',
    hardVariant: 'Círculos más grandes o con mancuernas muy ligeras.',
    usageRecommendation: 'Calentamiento de hombros obligatorio.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=circulos+de+brazos+calentamiento+tecnica"
  },
  {
    id: 'sentadilla_pared',
    name: 'Sentadilla isométrica en pared',
    category: 'piernas',
    muscles: ['Cuádriceps', 'Glúteos'],
    secondaryMuscles: [],
    equipment: ['peso_corporal'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Espalda contra la pared.',
      'Desciende hasta que las rodillas estén a 90°.',
      'Como sentado en una silla invisible.',
      'Mantén la posición el tiempo indicado.',
      'Respira de forma controlada.'
    ],
    commonErrors: [
      'Rodillas que pasan las puntas de los pies.',
      'Cadera muy alta.',
      'Contener la respiración.',
      'Espalda despegada de la pared.'
    ],
    easyVariant: 'Menos tiempo o menor ángulo.',
    hardVariant: 'Más tiempo o con mancuerna en el regazo.',
    usageRecommendation: 'Variante de sentadilla de bajo impacto. Fase 0.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=sentadilla+isometrica+en+pared+tecnica"
  },
  {
    id: 'remo_banda',
    name: 'Remo con banda o cuerda',
    category: 'espalda',
    muscles: ['Dorsal', 'Romboides'],
    secondaryMuscles: ['Bíceps'],
    equipment: ['cuerda_triceps'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Sujeta la cuerda o banda anclada a un punto fijo.',
      'Siéntate o ponte de pie con espalda recta.',
      'Tira de la cuerda hacia el abdomen.',
      'Aprieta las escápulas.',
      'Controla la vuelta.'
    ],
    commonErrors: [
      'Usar solo brazos.',
      'Balancear el torso.',
      'No apretar escápulas.',
      'Encorvar la espalda.'
    ],
    easyVariant: 'Menos tensión en la cuerda.',
    hardVariant: 'Más tensión o mayor rango.',
    usageRecommendation: 'Alternativa a remo con mancuerna. Versátil.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=remo+con+banda+elastica+tecnica+correcta"
  },
  {
    id: 'curl_martillo',
    name: 'Curl martillo',
    category: 'brazos',
    muscles: ['Bíceps', 'Braquial'],
    secondaryMuscles: ['Antebrazos'],
    equipment: ['mancuernas'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'De pie, mancuernas a los lados con palmas hacia el cuerpo.',
      'Codos pegados al torso.',
      'Flexiona llevando las mancuernas a los hombros.',
      'Las palmas miran hacia adentro todo el movimiento.',
      'Baja controlado.'
    ],
    commonErrors: [
      'Usar impulso.',
      'Mover los codos.',
      'Girar las muñecas.',
      'Peso excesivo.'
    ],
    easyVariant: 'Peso más ligero.',
    hardVariant: 'Pausa en la contracción o más peso.',
    usageRecommendation: 'Variante de curl que trabaja más el braquial. Complemento.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=curl+martillo+con+mancuernas+tecnica"
  },
  {
    id: 'abdominales_bicicleta',
    name: 'Abdominales bicicleta',
    category: 'abdomen',
    muscles: ['Abdomen', 'Oblicuos'],
    secondaryMuscles: ['Flexores de cadera'],
    equipment: ['alfombra', 'peso_corporal'],
    level: 'intermedio',
    type: 'abdomen',
    instructions: [
      'Boca arriba, manos detrás de la cabeza.',
      'Piernas elevadas, rodillas a 90°.',
      'Lleva codo derecho a rodilla izquierda mientras extiendes la pierna derecha.',
      'Alterna lados como pedaleando.',
      'Movimiento controlado, no rápido.'
    ],
    commonErrors: [
      'Tirar del cuello.',
      'Movimiento muy rápido.',
      'No extender las piernas.',
      'Despegar la espalda baja.'
    ],
    easyVariant: 'Ritmo más lento, menor rango.',
    hardVariant: 'Mayor rango y control.',
    usageRecommendation: 'Trabaja todo el abdomen. Complemento en fase 2+.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=abdominales+bicicleta+tecnica+correcta"
  },
  {
    id: 'zancada_atras',
    name: 'Zancada hacia atrás',
    category: 'piernas',
    muscles: ['Glúteos', 'Isquiotibiales'],
    secondaryMuscles: ['Cuádriceps'],
    equipment: ['peso_corporal'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'De pie, pies juntos.',
      'Da un paso hacia atrás con una pierna.',
      'Baja la rodilla trasera casi al suelo.',
      'Rodilla delantera alineada con el tobillo.',
      'Empuja con la pierna delantera para volver.',
      'Alterna piernas.'
    ],
    commonErrors: [
      'Inclinarse hacia adelante.',
      'Paso muy corto.',
      'Rodilla delantera que pasa la punta del pie.',
      'Movimiento desequilibrado.'
    ],
    easyVariant: 'Apoyarse ligeramente en una pared.',
    hardVariant: 'Añadir mancuernas.',
    usageRecommendation: 'Variante de desplantes con más énfasis en glúteos.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=zancada+hacia+atras+tecnica+correcta"
  },
  {
    id: 'press_suelo_mancuernas',
    name: 'Press de suelo con mancuernas',
    category: 'pecho',
    muscles: ['Pecho', 'Tríceps'],
    secondaryMuscles: ['Hombro anterior'],
    equipment: ['mancuernas', 'alfombra'],
    level: 'principiante',
    type: 'fuerza',
    instructions: [
      'Boca arriba en el suelo, rodillas flexionadas.',
      'Mancuernas a la altura del pecho.',
      'Empuja hacia arriba hasta estirar los brazos.',
      'Baja hasta que los codos toquen el suelo.',
      'Esto limita el rango y protege los hombros.'
    ],
    commonErrors: [
      'Codos muy abiertos.',
      'Golpear el suelo con los codos.',
      'Arquear excesivamente la espalda.',
      'No controlar la bajada.'
    ],
    easyVariant: 'Peso más ligero.',
    hardVariant: 'Press en banco (mayor rango).',
    usageRecommendation: 'Alternativa más segura al press en banco. Fase 0 y 1.',
    videoSearchUrl: "https://www.youtube.com/results?search_query=press+de+suelo+con+mancuernas+tecnica"
  }
];

export const getExercisesById = (ids: string[]): Exercise[] =>
  exercises.filter(e => ids.includes(e.id));

export const getExerciseById = (id: string): Exercise | undefined =>
  exercises.find(e => e.id === id);
