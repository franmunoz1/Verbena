import { db, Product, Service } from 'astro:db';

// https://astro.build/db/seed



export default async function seed() {
	await db.insert(Product).values([
		{
			id: '1',
			name_es: 'HYALU7 BIOSERUM',
			name_en: 'HYALU7 BIOSERUM',
			price: 100,
			summary_es: 'Serum relleno de arrugas y efecto volumen tridimensional.',
			summary_en: 'Wrinkle-filling serum with a three-dimensional volume effect.',
			description_es: 'Serum relleno de arrugas y efecto volumen tridimensional. Actúa en simultáneo en distintos niveles cutáneos. Logra un film protector de 24 horas en la epidermis y un efecto de relleno hídrico en dermis para minimizar las arrugas desde el interior.',
			description_en: 'Wrinkle-filling serum with a three-dimensional volume effect. It acts simultaneously at different skin levels, creating a 24-hour protective film on the epidermis and a hydric filling effect in the dermis to minimize wrinkles from within.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/Hyalu7.jpeg',
			alt: 'HYALU7',
			category: 'Serum'
		},
		{
			id: '2',
			name_es: 'CONTROL BROSSAGE',
			name_en: 'CONTROL BROSSAGE',
			price: 200,
			summary_es: 'Higieniza la piel eliminando los residuos grasos, sin dejar la piel tirante o reseca.',
			summary_en: 'Cleanses the skin by removing greasy residues without leaving it tight or dry.',
			description_es: 'Higieniza la piel eliminando los residuos grasos, sin dejar la piel tirante o reseca. Su espuma es refrescante, suavizante y de grata acción limpiadora.',
			description_en: 'Cleanses the skin by removing greasy residues without leaving it tight or dry. Its foam is refreshing, softening, and provides a pleasant cleansing effect.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/ControlBrossage.jpeg',
			alt: 'Control Brossage',
			category: 'Serum'
		},
		{
			id: '3',
			name_es: 'CONTROL BIO DETOX',
			name_en: 'CONTROL BIO DETOX',
			price: 150,
			summary_es: 'Serum equilibrante para piel grasa.',
			summary_en: 'Balancing serum for oily skin.',
			description_es: 'Fluido ideado para mejorar los desbalances del microbioma cutáneo, con efecto detox y regulador. Refuerza la función protectora de la piel y aporta suavidad, frescura y luz interior. Ideal para tratar poros muy visibles.',
			description_en: 'Fluid designed to improve skin microbiome imbalances, with detox and regulatory effects. Strengthens the skins protective function and provides softness, freshness, and an inner glow.Ideal for treating highly visible pores.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/ControlBioDetox.jpeg',
			alt: 'Control Bio Detox',
			category: 'Serum'
		},
		{
			id: '4',
			name_es: 'CONTROL FLUID',
			name_en: 'CONTROL FLUID',
			price: 180,
			summary_es: 'Fluido humectante para pieles grasas.',
			summary_en: 'Moisturizing fluid for oily skin.',
			description_es: 'Ideal para pieles oleosas y zonas deshidratadas, ya que regula la grasitud como la tirantez de la deshidratación. Ideal para climas húmedos y cálidos, porque humecta la piel sin aportar untuosidad.',
			description_en: 'Ideal for oily skin and dehydrated areas, as it regulates both oiliness and dehydration tightness. Perfect for humid and warm climates, as it moisturizes without adding greasiness.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/ControlBrossage.jpeg',
			alt: 'Control Fluid',
			category: 'Limpiadores'
		},
		{
			id: '5',
			name_es: 'ECLAIR LUMIBLEND',
			name_en: 'ECLAIR LUMIBLEND',
			price: 220,
			summary_es: 'Serum despigmentante para tratar manchas de diferentes orígenes.',
			summary_en: 'Depigmenting serum to treat spots of different origins.',
			description_es: 'Ideal para todo tipo de pieles oscurecidas, gruesas y opacas. Disminuye la intensidad de la mancha progresivamente con una fórmula libre de riesgos de irritación. Apto para todo tipo de piel, en cualquier momento del año.',
			description_en: 'Ideal for all types of darkened, thick, and dull skin. Progressively reduces spot intensity with a formula free of irritation risks. Suitable for all skin types at any time of the year.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/Hyalu7.jpeg',
			alt: 'Eclair Lumiblend',
			category: 'Limpiadores'
		},
		{
			id: '6',
			name_es: 'VITA C BROSSAGE',
			name_en: 'VITA C BROSSAGE',
			price: 200,
			summary_es: 'Espuma limpiadora.',
			summary_en: 'Cleansing foam.',
			description_es: 'Higieniza la piel eliminando residuos grasos, sin dejar la piel reseca. Su espuma es refrescante y de grata acción limpiadora.',
			description_en: 'Cleanses the skin by removing greasy residues without leaving it dry. Its foam is refreshing and provides a pleasant cleansing effect.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/ControlBrossage.jpeg',
			alt: 'Vita C Brossage',
			category: 'Limpiadores'
		},
		{
			id: '7',
			name_es: 'VITA C FLUID',
			name_en: 'VITA C FLUID',
			price: 210,
			summary_es: 'Emulsión antioxidante con micronutrientes.',
			summary_en: 'Antioxidant emulsion with micronutrients.',
			description_es: 'Emulsión antioxidante con micronutrientes que revitaliza y humecta las pieles más apagadas devolviendo la luminosidad.',
			description_en: 'Antioxidant emulsion with micronutrients that revitalizes and moisturizes dull skin, restoring its radiance.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/Hyalu7.jpeg',
			alt: 'Vita C Fluid',
			category: 'Hidratantes'
		},
		{
			id: '8',
			name_es: 'HYALU CREAM',
			name_en: 'HYALU CREAM',
			price: 170,
			summary_es: 'Emulsión humectante que aporta y retiene la humedad.',
			summary_en: 'Moisturizing emulsion that provides and retains moisture.',
			description_es: 'Ideal para todo tipo de pieles y edades. Posee una textura elástica y adaptable. Mejora suavidad de la piel y atenúa arrugas. Ideal para el uso diario.',
			description_en: 'Ideal for all skin types and ages. It has an elastic and adaptable texture. Improves skin softness and reduces wrinkles. Perfect for daily use.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/HyaluCream.jpeg',
			alt: 'Hyalu Cream',
			category: 'Hidratantes'
		},
		{
			id: '9',
			name_es: 'VITA A MULTISERUM',
			name_en: 'VITA A MULTISERUM',
			price: 230,
			summary_es: 'Serum multivitaminas que repara y reequilibra.',
			summary_en: 'Multivitamin serum that repairs and rebalances.',
			description_es: 'Representa un verdadero soporte antiedad integral con 5 vitaminas antioxidantes. El resultado es una piel más nutrida, húmeda, menos arrugas profundas, mejor renovación celular y mejor función de barrera.',
			description_en: 'A true comprehensive anti-aging support with 5 antioxidant vitamins. The result is more nourished, hydrated skin, fewer deep wrinkles, improved cell renewal, and better barrier function.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/Hyalu7.jpeg',
			alt: 'Vita A Multiserum',
			category: 'FPS'
		},
		{
			id: '10',
			name_es: 'URBAN LAIT',
			name_en: 'URBAN LAIT',
			price: 190,
			summary_es: 'Fotoprotector +35, incoloro y no graso.',
			summary_en: 'SPF 35 sunscreen, colorless and non-greasy.',
			description_es: 'Textura fluida, fresca y con alta protección con un acabado no graso. Especialmente diseñado para pieles grasas y en climas cálidos y húmedos.',
			description_en: 'Fluid, fresh texture with high protection and a non-greasy finish. Specially designed for oily skin and warm, humid climates.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/UrbanLait.jpeg',
			alt: 'Urban Lait',
			category: 'FPS'
		},
		{
			id: '11',
			name_es: 'PURE MEGA TONIC',
			name_en: 'PURE MEGA TONIC',
			price: 160,
			summary_es: 'Loción renovadora.',
			summary_en: 'Renewing lotion.',
			description_es: 'Loción renovadora que ablanda y afina la piel mejorando sus condiciones para la higiene profunda. Ayuda a emparejar el tono y suavidad al tacto.',
			description_en: 'Renewing lotion that softens and refines the skin, improving its condition for deep cleansing. Helps even out skin tone and smoothness to the touch.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/Hyalu7.jpeg',
			alt: 'Pure Mega Tonic',
			category: 'FPS'
		},
		{
			id: '12',
			name_es: 'FRESH CLEAN',
			name_en: 'FRESH CLEAN',
			price: 120,
			summary_es: 'Gel limpiador de 150ml para pieles sensibles.',
			summary_en: '150ml cleansing gel for sensitive skin.',
			description_es: 'Con textura fresca y una eficaz acción limpiadora. Formulado para desmaquillar e higienizar el rostro sin irritaciones.',
			description_en: 'With a fresh texture and effective cleansing action. Formulated to remove makeup and cleanse the face without irritation.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/ControlBrossage.jpeg',
			alt: 'Fresh Clean',
			category: 'FPS'
		},
	]);


	await db.insert(Service).values([
		{ id: '100', name: 'Limpieza Facial Profunda', price: 90, summary: 'chau celulas muertas acumuladas, puntos negros,quistes de milium y postulas!', description: 'chau celulas muertas acumuladas, puntos negros,quistes de milium y postulas!. En 10 pasos mejoro la salud y la apariencia de tu piel, eliminando impurezas y revitalizándola. Limpio en profundidad, elimino las células muertas, realizo extracciones de puntos negros, quistes de millium y pústulas, coloco sueros para tratar cada problemática e hidrato en todos los niveles dejando tu piel impecable.', recomendation: '', image: '/img/higieneFacial.jpeg', alt: 'Limpieza facial', benefits: '', care: '' },
		{ id: '101', name: 'Limpieza Facial + Dermaplaning', price: 110, summary: '¿Te copa la idea de hacerte un peeling apto para todo el año o eliminar esos vellitos que opacan y le otorgan textura a tu rostro? ', description: '¿Te copa la idea de hacerte un peeling apto para todo el año o eliminar esos vellitos que opacan y le otorgan textura a tu rostro? . Si tu piel es apta, el dermaplaning es el tratamiento perfecto. Utiliza un bisturí descartable para eliminar células muertas y vello facial, mejorando la textura, reduciendo arrugas finas y cicatrices por acné. Además, proporciona una exfoliación profunda que estimula la renovación celular. El resultado es una piel más uniforme y luminosa, ideal para mantener durante todo el año. ', recomendation: '', image: '/img/limpiezaFacial+dermapiling.jpeg', alt: 'limpieza facial y dermapiling', benefits: '', care: '' },
		{ id: '102', name: 'Limpieza Facial + Terapia Led', price: 100, summary: 'Disfruta de una piel fresca y renovada con nuestro tratamiento de Limpieza Facial + Terapia LED.', description: 'Disfruta de una piel fresca y renovada con nuestro tratamiento de Limpieza Facial + Terapia LED. Comenzamos con una limpieza profunda que elimina impurezas y prepara tu piel para los beneficios de la terapia LED, que estimula la producción de colágeno, reduce la inflamación y mejora la textura de la piel. Ideal para todo tipo de piel, este tratamiento purifica, rejuvenece y deja tu rostro radiante, con resultados visibles y duraderos. ¡Perfecto para lucir una piel saludable y revitalizada!', recomendation: '', image: '/img/limpiezaFacial+tratamientoLed.jpeg', alt: 'Limpieza facial con dermapen', benefits: '', care: '' },
		{ id: '103', name: 'Microneedling facial', price: 135, summary: 'El Microneedling Facial es un tratamiento innovador que utiliza microagujas para estimular la regeneración celular y mejorar la textura de la piel.', description: 'El Microneedling Facial es un tratamiento innovador que utiliza microagujas para estimular la regeneración celular y mejorar la textura de la piel. A través de pequeñas punciones, se activan los procesos naturales de reparación de la piel, promoviendo la producción de colágeno y elastina. Este tratamiento ayuda a reducir cicatrices, líneas finas, poros dilatados y manchas, dejando la piel más firme, suave y luminosa. Es ideal para quienes buscan una solución efectiva y mínimamente invasiva para mejorar la apariencia general del rostro, logrando resultados visibles con poco tiempo de recuperación.', recomendation: '', image: '/img/limpiezaFacial+dermapen.jpeg', alt: 'Limpieza facial con dermapen', benefits: '', care: '' },
		{ id: '104', name: 'Tratamiento para Manchas', price: 95, summary: 'Nuestro Tratamiento para Manchas está diseñado para aclarar y unificar el tono de la piel, eliminando manchas causadas por el sol, el envejecimiento o el acné.', description: 'Nuestro Tratamiento para Manchas está diseñado para aclarar y unificar el tono de la piel, eliminando manchas causadas por el sol, el envejecimiento o el acné. Utilizamos técnicas avanzadas y productos específicos que ayudan a reducir la pigmentación y promover una piel más luminosa y uniforme. Resultados visibles en pocas sesiones, para que luzcas una piel radiante y sin imperfecciones. Ideal para todo tipo de piel.', recomendation: '', image: '/img/limpiezaFacial+dermapen.jpeg', alt: 'Limpieza facial con dermapen', benefits: '', care: '' },
		{ id: '105', name: 'Facial para Piel Sensible y Rosácea', price: 110, summary: 'Nuestro Facial para Piel Sensible y Rosácea está especialmente formulado para calmar, hidratar y fortalecer las pieles delicadas o con rosácea. ', description: 'Nuestro Facial para Piel Sensible y Rosácea está especialmente formulado para calmar, hidratar y fortalecer las pieles delicadas o con rosácea. Utilizamos ingredientes suaves y de acción antiinflamatoria que ayudan a reducir el enrojecimiento, la irritación y la incomodidad, restaurando el equilibrio de la piel. Ideal para quienes buscan un tratamiento gentil pero efectivo para su piel sensible.', recomendation: '', image: '/img/facialrosacea.jpeg', alt: 'Limpieza facial con dermapen', benefits: '', care: '' },
		{ id: '106', name: 'Tratamiento de Acné + Alta Frecuencia', price: 150, summary: 'Nuestro Tratamiento para Acné + Alta Frecuencia está diseñado para combatir el acné de manera efectiva y duradera.', description: 'Nuestro Tratamiento para Acné + Alta Frecuencia está diseñado para combatir el acné de manera efectiva y duradera. Combinamos una limpieza profunda con la tecnología de alta frecuencia, que ayuda a eliminar bacterias, reducir la inflamación y acelerar la cicatrización de las lesiones. La alta frecuencia también favorece la regeneración celular, mejorando la textura de la piel y minimizando marcas de acné. Ideal para pieles con brotes activos o propensas al acné, este tratamiento te ayudará a lograr una piel más limpia, equilibrada y libre de imperfecciones.', recomendation: '', image: '/img/tratamientoAcne.jpeg', alt: 'Limpieza facial con dermapen', benefits: '', care: '' },
		{
			id: '107', name: 'Biorepeel CL3', price: 200, summary: 'Un tratamiento facial innovador y altamente efectivo. El Biorepeel utiliza una combinación de ácidos como el ácido salicílico, el ácido láctico y el ácido tricloroacético (TCA) para proporcionar una exfoliación controlada y renovar la piel.', description: 'Un tratamiento facial innovador y altamente efectivo. El Biorepeel utiliza una combinación de ácidos como el ácido salicílico, el ácido láctico y el ácido tricloroacético (TCA) para proporcionar una exfoliación controlada y renovar la piel. Entre sus múltiples beneficios para la piel, ayuda a mejorar la textura y la luminosidad de la piel, reduciendo la apariencia de arrugas, manchas y cicatrices. También promueve la formación de colágeno, mejorando la elasticidad y la firmeza de la piel. Este tratamiento es adecuado para diferentes tipos de piel y se puede personalizar según las necesidades individuales. En verbena evaluarán tu piel y ajustarán la formulación del Biorepeel para ofrecerte los mejores resultados.', recomendation: '', image: '/img/biorepeel.jpeg', alt: 'Limpieza facial', benefits: [
				'Sin inyecciones',
				'No requiere anestesia',
				'Rápido',
				'Resultado instantáneo',
				'Multifuncional',
				'Libre de amoniaco',
				'Aplicable para todas las edades',
				'Apto para todo el cuerpo',
				'Puede usarse todo el año',
				'No aumenta la fotosensibilidad'
			]
			, care: ''
		},
		{ id: '108', name: 'Limpieza Facial Profunda de Espalda', price: 130, summary: 'El tratamiento de Limpieza Facial Profunda de Espalda elimina impurezas, exceso de grasa y células muertas, dejando la piel limpia y libre de imperfecciones.', description: 'El tratamiento de Limpieza Facial Profunda de Espalda elimina impurezas, exceso de grasa y células muertas, dejando la piel limpia y libre de imperfecciones. Ideal para combatir el acné y mejorar la textura de la piel en esta zona. Luciendo una espalda suave, equilibrada y radiante.', recomendation: '', image: '/img/limpiezaEspalda.jpeg', alt: 'Limpieza facial', benefits: '', care: '' },
		{ id: '109', name: 'Laminado de Cejas', price: 120, summary: 'Transforma tu mirada con nuestro servicio de Laminado de Cejas. Diseño personalizado, resultados naturales y duraderos que realzan tu expresión sin esfuerzo.  Lucí unas cejas perfectas y definidas todo el día.', description: 'Transforma tu mirada con nuestro servicio de Laminado de Cejas. Diseño personalizado, resultados naturales y duraderos que realzan tu expresión sin esfuerzo.  Lucí unas cejas perfectas y definidas todo el día.', recomendation: '', image: '/img/laminadoCejas.jpeg', alt: 'Limpieza facial con dermapen', benefits: '', care: '' },
		{
			id: '110', name: 'Lifting de Pestañas + Tinte + Botox', price: 120, summary: 'Resalta tu mirada con nuestro Lifting de Pestañas + Tinte + Botox. El lifting riza tus pestañas, el tinte las oscurece y el Botox las fortalece, dejándolas más voluminosas y saludables.', description: 'Resalta tu mirada con nuestro Lifting de Pestañas + Tinte + Botox. El lifting riza tus pestañas, el tinte las oscurece y el Botox las fortalece, dejándolas más voluminosas y saludables. ¡Olvídate del rímel y disfruta de unas pestañas naturales y definidas!', recomendation: '', image: '/img/liftingPestanas2.jpeg', alt: 'Limpieza facial con dermapen', benefits: '', care: [
				'Evite los productos grasos: Antes del tratamiento, evite usar productos aceitosos alrededor de los ojos, ya que pueden interferir con la efectividad del levantamiento.',
				'No use rizadores de pestañas: No use un rizador de pestañas durante al menos 24 horas antes del procedimiento para evitar dañar o debilitar sus pestañas naturales.',
				'Quitar el maquillaje: Asegúrese de que sus pestañas estén completamente limpias y libres de residuos de maquillaje.'
			]
		},
		{
			id: '111', name: 'Microneedling Full Face', price: 120, summary: 'Este tratamiento minimiza líneas de expresión, cicatrices de acné, manchas y poros dilatados.', description: 'Este tratamiento minimiza líneas de expresión, cicatrices de acné, manchas y poros dilatados. A través de microperforaciones controladas, estimulamos la regeneración celular para mejorar la textura y elasticidad de tu piel.', recomendation: '', image: '/img/liftingPestanas2.jpeg', alt: 'Microneedling Full Face', benefits: '', care: ''
		},
		{
			id: '112', name: 'Microneedling en Labios', price: 120, summary: 'Dale a tus labios una hidratación profunda y un efecto de relleno natural.', description: 'Dale a tus labios una hidratación profunda y un efecto de relleno natural. El microneedling en labios mejora la circulación, estimula la producción de colágeno y suaviza la textura, logrando un aspecto más jugoso y definido.', recomendation: '', image: '/img/liftingPestanas2.jpeg', alt: 'Microneedling en Labios', benefits: '', care: ''
		},
		{
			id: '113', name: 'Microneedling Full Face + Labios', price: 120, summary: 'Para un rejuvenecimiento completo, este tratamiento combina ambos procedimientos, potenciando los beneficios del microneedling en todo el rostro y labios, dejando tu piel más uniforme, tersa y radiante.', description: 'Para un rejuvenecimiento completo, este tratamiento combina ambos procedimientos, potenciando los beneficios del microneedling en todo el rostro y labios, dejando tu piel más uniforme, tersa y radiante.', recomendation: '', image: '/img/liftingPestanas2.jpeg', alt: 'Limpieza facial con dermapen', benefits: '', care: ''
		},
	]);
}
