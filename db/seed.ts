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
			image: '/img/IMG_0380.PNG',
			alt: 'HYALU7 bioserum',
			category: 'Serum',
			capacity: '30ml'
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
			image: '/img/IMG_0379.PNG',
			alt: 'Control Brossage',
			category: 'Limpiadores',
			capacity: '130ml'
		},
		{
			id: '3',
			name_es: 'BIOCONTROL DETOX',
			name_en: 'BIOCONTROL DETOX',
			price: 150,
			summary_es: 'Serum equilibrante para piel grasa.',
			summary_en: 'Balancing serum for oily skin.',
			description_es: 'Fluido ideado para mejorar los desbalances del microbioma cutáneo, con efecto detox y regulador. Refuerza la función protectora de la piel y aporta suavidad, frescura y luz interior. Ideal para tratar poros muy visibles.',
			description_en: 'Fluid designed to improve skin microbiome imbalances, with detox and regulatory effects. Strengthens the skins protective function and provides softness, freshness, and an inner glow.Ideal for treating highly visible pores.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/IMG_0392.PNG',
			alt: 'Control Bio Detox',
			category: 'Serum',
			capacity: '60ml'
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
			image: '/img/IMG_0391.PNG',
			alt: 'Control Fluid',
			category: 'Cremas',
			capacity: '50ml'
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
			image: '/img/IMG_0384.PNG',
			alt: 'Eclair Lumiblend',
			category: 'Serum',
			capacity: '30ml'
		},
		{
			id: '6',
			name_es: 'VITA-C BROSSAGE',
			name_en: 'VITA-C BROSSAGE',
			price: 200,
			summary_es: 'Espuma limpiadora.',
			summary_en: 'Cleansing foam.',
			description_es: 'Higieniza la piel eliminando residuos grasos, sin dejar la piel reseca. Su espuma es refrescante y de grata acción limpiadora.',
			description_en: 'Cleanses the skin by removing greasy residues without leaving it dry. Its foam is refreshing and provides a pleasant cleansing effect.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/IMG_0388.PNG',
			alt: 'Vita C Brossage',
			category: 'Limpiadores',
			capacity: '60ml'
		},
		{
			id: '7',
			name_es: 'VITA-C FLUID',
			name_en: 'VITA-C FLUID',
			price: 210,
			summary_es: 'Emulsión antioxidante con micronutrientes.',
			summary_en: 'Antioxidant emulsion with micronutrients.',
			description_es: 'Emulsión antioxidante con micronutrientes que revitaliza y humecta las pieles más apagadas devolviendo la luminosidad.',
			description_en: 'Antioxidant emulsion with micronutrients that revitalizes and moisturizes dull skin, restoring its radiance.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/IMG_0387.PNG',
			alt: 'Vita C Fluid',
			category: 'Cremas',
			capacity: '50ml'
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
			image: '/img/IMG_0382.PNG',
			alt: 'Hyalu Cream',
			category: 'Cremas',
			capacity: '50ml'
		},
		{
			id: '9',
			name_es: 'VITA-A MULTI-SERUM',
			name_en: 'VITA-A MULTI-SERUM',
			price: 230,
			summary_es: 'Serum multivitaminas que repara y reequilibra.',
			summary_en: 'Multivitamin serum that repairs and rebalances.',
			description_es: 'Representa un verdadero soporte antiedad integral con 5 vitaminas antioxidantes. El resultado es una piel más nutrida, húmeda, menos arrugas profundas, mejor renovación celular y mejor función de barrera.',
			description_en: 'A true comprehensive anti-aging support with 5 antioxidant vitamins. The result is more nourished, hydrated skin, fewer deep wrinkles, improved cell renewal, and better barrier function.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/vita-a-multiserum-Photoroom.png',
			alt: 'Vita A Multiserum',
			category: 'Serum',
			capacity: '30ml'
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
			image: '/img/IMG_0383.PNG',
			alt: 'Urban Lait',
			category: 'Protector solar',
			capacity: '50ml'
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
			image: '/img/IMG_0395.PNG',
			alt: 'Pure Mega Tonic',
			category: 'Tónico',
			capacity: '130ml'
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
			image: '/img/IMG_0393.PNG',
			alt: 'Fresh Clean',
			category: 'Limpiadores',
			capacity: '150ml'
		},
		{
			id: '13',
			name_es: 'GLYCO CREAM',
			name_en: 'GLYCO CREAM',
			price: 120,
			summary_es: 'Crema de uso diario para atenuar las arrugas, mejorar la tersura de la piel y aumentar su luminosidad.',
			summary_en: 'Daily use cream to reduce wrinkles, improve skin smoothness, and increase luminosity.',
			description_es: 'Crema de uso diario para atenuar las arrugas, mejorar la tersura de la piel y aumentar su luminosidad. Previene la tirantez superficial con acción elastizante y final aterciopelado.',
			description_en: 'Daily use cream to reduce wrinkles, improve skin smoothness, and increase luminosity. Prevents superficial tightness with an elasticizing action and a velvety finish.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/IMG_0389.PNG',
			alt: 'Glyco Cream',
			category: 'Cremas',
			capacity: '50ml'
		},
		{
			id: '14',
			name_es: 'SERUM C',
			name_en: 'SERUM C',
			price: 120,
			summary_es: 'Serum nanosomado de Vitamina C pura',
			summary_en: 'Nanosomed serum of pure Vitamin C',
			description_es: 'Mejora la oxigenación de la piel, favorece la renovación celular y devuelve su grado de humectación. Potencia la luminosidad de la piel y tiene un efecto AntiOxidante (AOX). Ayuda a permeabilizar la piel. Se absorbe con facilidad permitiendo que las manos deslicen sin pesar en el rostro. Es ideal para pieles sensibles.',
			description_en: 'Improves skin oxygenation, promotes cell renewal, and restores its moisture level. Enhances skin luminosity and has an Antioxidant (AOX) effect. Helps to permeabilize the skin. It is easily absorbed, allowing the hands to glide without weighing on the face. Ideal for sensitive skin.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/IMG_0390.PNG',
			alt: 'Serum C',
			category: 'Serum',
			capacity: '30ml'
		},
		{
			id: '15',
			name_es: 'CUIDADO EXTREMO FACIAL',
			name_en: 'CUIDADO EXTREMO FACIAL',
			price: 120,
			summary_es: 'Concentrado facial de óleos reparadores',
			summary_en: 'Facial concentrate of repairing oils',
			description_es: 'Blend finamente emoliente y nutritivo, ideal para elastizar y defender las zonas más frágiles del rostro. Sus delicados óleos de efecto balsámico protegen y colaboran en la cicatrización de microlesiones típicas en las pieles vulnerables.',
			description_en: 'Finely emollient and nourishing blend, ideal for elastizing and defending the most fragile areas of the face. Its delicate balsamic effect oils protect and collaborate in the healing of microlesions typical of vulnerable skin.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/IMG_0381.PNG',
			alt: 'Cuidado extremo facial',
			category: 'Cremas',
			capacity: '50ml'
		},
		{
			id: '16',
			name_es: 'URBAN LAIT COLOR',
			name_en: 'URBAN LAIT COLOR',
			price: 120,
			summary_es: 'Fotoprotector con color FPS 35+ no graso',
			summary_en: 'Non-greasy SPF 35+ color sunscreen',
			description_es: 'Leche de alta fotoprotección, final fresco no-graso y como plus aporta una cálida coloración a modo de maquillaje leve. Ideal para el cuidado diario urbano en climas cálidos, en pieles grasas y en pieles con tendencia a la formación de manchas.',
			description_en: 'High sun protection milk, fresh non-greasy finish, and as a plus, it provides a warm coloration as a light makeup. Ideal for daily urban care in warm climates, oily skin, and skin prone to spot formation.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/IMG_0401.PNG',
			alt: 'Urban Lait Color',
			category: 'Protector solar',
			capacity: '50ml'
		},
		{
			id: '17',
			name_es: 'HYDRA LIPSTICK',
			name_en: 'HYDRA LIPSTICK',
			price: 120,
			summary_es: 'Fotoprotector elastizante en barra',
			summary_en: 'Elasticizing sunscreen in stick form',
			description_es: 'Barra labial super humectante de efecto protector y elastizante. Ideal para labios dañados por el sol y otros factores agresivos. Concebido para el cuidado diario UNISEX: incoloro, sin brillos ni aromas predominantes.',
			description_en: 'Super moisturizing lip balm with a protective and elasticizing effect. Ideal for lips damaged by the sun and other aggressive factors. Designed for daily UNISEX care: colorless, without shine or predominant aromas.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/hydra-lipstick-Photoroom2.png',
			alt: 'Hydra lipstick',
			category: 'Protector solar',
			capacity: ''
		},
		{
			id: '18',
			name_es: 'Pure Bio Serum',
			name_en: 'Pure Bio Serum',
			price: 120,
			summary_es: 'Serum purificante, normaliza el exceso de grasitud, purifica y regenera la piel dañanda.',
			summary_en: 'Purifying serum, normalizes excess oiliness, purifies and regenerates damaged skin.',
			description_es: '-Controla la flora bacteriana -Mejora la regeneración de las lesiones -Garantiza la condición higiénica óptima.',
			description_en: '-Controls bacterial flora -Improves lesion regeneration -Guarantees optimal hygienic condition.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/IMG_0385.PNG',
			alt: 'Pro bioserum',
			category: 'Serum',
			capacity: '30ml'
		},
		{
			id: '19',
			name_es: 'CONTROL PORE TONIC',
			name_en: 'CONTROL PORE TONIC',
			price: 120,
			summary_es: 'Loción refinadora para poros dilatados',
			summary_en: 'Refining lotion for enlarged pores',
			description_es: 'Tónico equilibrante y renovador ideal para el uso nocturno. Mejora la apariencia y textura de la piel. Colabora a regular el exceso de secreción con un efecto purificante.',
			description_en: 'Balancing and renewing tonic ideal for nighttime use. Improves the appearance and texture of the skin. Helps regulate excess secretion with a purifying effect.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/IMG_0396.PNG',
			alt: 'Control Pore Tonic',
			category: 'Tónico',
			capacity: '130ml'
		},
	]);


	await db.insert(Service).values([
		{
			id: '100',
			name_es: 'Limpieza Facial Profunda',
			name_en: 'Deep Facial Cleansing',
			price: 90,
			summary_es: 'Chau células muertas acumuladas, puntos negros, quistes de milium y pústulas!',
			summary_en: 'Goodbye to accumulated dead cells, blackheads, milium cysts, and pustules!',
			description_es: 'Chau células muertas acumuladas, puntos negros, quistes de milium y pústulas! En 10 pasos mejoro la salud y la apariencia de tu piel, eliminando impurezas y revitalizándola. Limpio en profundidad, elimino las células muertas, realizo extracciones de puntos negros, quistes de millium y pústulas, coloco sueros para tratar cada problemática e hidrato en todos los niveles dejando tu piel impecable.',
			description_en: 'Goodbye to accumulated dead cells, blackheads, milium cysts, and pustules! In 10 steps, I improve your skins health and appearance by removing impurities and revitalizing it. I deeply cleanse, remove dead cells, extract blackheads, milium cysts, and pustules, apply serums to treat specific issues, and hydrate at all levels, leaving your skin flawless.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/higieneFacial.jpeg',
			alt: 'Limpieza facial',
			benefits_es: '',
			benefits_en: '',
			care_es: '',
			care_en: ''
		},
		{ id: '101', name_es: 'Limpieza Facial Profunda + Dermaplaning', name_en: 'Deep Facial + Dermaplaning', price: 110, summary_es: '¿Te copa la idea de hacerte un peeling apto para todo el año o eliminar esos vellitos que opacan y le otorgan textura a tu rostro?', summary_en: 'Do you like the idea of a year-round peel or removing those little hairs that give texture to your face?', description_es: '¿Te copa la idea de hacerte un peeling apto para todo el año o eliminar esos vellitos que opacan y le otorgan textura a tu rostro? Si tu piel es apta, el dermaplaning es el tratamiento perfecto. Utiliza un bisturí descartable para eliminar células muertas y vello facial, mejorando la textura, reduciendo arrugas finas y cicatrices por acné. Además, proporciona una exfoliación profunda que estimula la renovación celular. El resultado es una piel más uniforme y luminosa, ideal para mantener durante todo el año.', description_en: 'Do you like the idea of getting a year-round peel or removing those little hairs that obscure and give texture to your face? If your skin is suitable, dermaplaning is the perfect treatment. It uses a disposable scalpel to remove dead cells and facial hair, improving texture, reducing fine wrinkles and acne scars. Additionally, it provides deep exfoliation that stimulates cellular renewal. The result is a more even and luminous skin, perfect to maintain year-round.', recomendation_es: '', recomendation_en: '', image: '/img/limpiezaFacial+dermapiling.jpeg', alt: 'limpieza facial y dermapiling', benefits_es: '', benefits_en: '', care_es: '', care_en: '' },
		{ id: '102', name_es: 'Limpieza Facial + Terapia Led', name_en: 'Facial + LED Therapy', price: 100, summary_es: 'Disfruta de una piel fresca y renovada con nuestro tratamiento de Limpieza Facial + Terapia LED.', summary_en: 'Enjoy fresh and renewed skin with our Facial + LED Therapy treatment.', description_es: 'Disfruta de una piel fresca y renovada con nuestro tratamiento de Limpieza Facial + Terapia LED. Comenzamos con una limpieza profunda que elimina impurezas y prepara tu piel para los beneficios de la terapia LED, que estimula la producción de colágeno, reduce la inflamación y mejora la textura de la piel. Ideal para todo tipo de piel, este tratamiento purifica, rejuvenece y deja tu rostro radiante, con resultados visibles y duraderos. ¡Perfecto para lucir una piel saludable y revitalizada!', description_en: 'Enjoy fresh and renewed skin with our Facial + LED Therapy treatment. We start with a deep cleansing that removes impurities and prepares your skin for the benefits of LED therapy, which stimulates collagen production, reduces inflammation, and improves skin texture. Ideal for all skin types, this treatment purifies, rejuvenates, and leaves your face radiant, with visible and long-lasting results. Perfect for a healthy and revitalized skin!', recomendation_es: '', recomendation_en: '', image: '/img/limpiezaFacial+tratamientoLed.jpeg', alt: 'Limpieza facial con dermapen', benefits_es: '', benefits_en: '', care_es: '', care_en: '' },
		{
			id: '103',
			name_es: 'Tratamiento de Acné + Alta Frecuencia',
			name_en: 'Acne Treatment + High Frequency',
			price: 150,
			summary_es: 'Nuestro Tratamiento para Acné + Alta Frecuencia está diseñado para combatir el acné de manera efectiva y duradera.',
			summary_en: 'Our Acne Treatment + High Frequency is designed to effectively and permanently fight acne.',
			description_es: 'Nuestro Tratamiento para Acné + Alta Frecuencia está diseñado para combatir el acné de manera efectiva y duradera. Combinamos una limpieza profunda con la tecnología de alta frecuencia, que ayuda a eliminar bacterias, reducir la inflamación y acelerar la cicatrización de las lesiones. La alta frecuencia también favorece la regeneración celular, mejorando la textura de la piel y minimizando marcas de acné. Ideal para pieles con brotes activos o propensas al acné, este tratamiento te ayudará a lograr una piel más limpia, equilibrada y libre de imperfecciones.',
			description_en: 'Our Acne Treatment + High Frequency is designed to effectively and permanently fight acne. We combine a deep cleansing treatment with high-frequency technology, which helps eliminate bacteria, reduce inflammation, and speed up the healing of acne lesions. High frequency also promotes cell regeneration, improving skin texture and minimizing acne scars. Ideal for skin with active breakouts or acne-prone skin, this treatment will help you achieve cleaner, more balanced, and blemish-free skin.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/tratamientoAcne.jpeg',
			alt: 'Limpieza facial con dermapen',
			benefits_es: '',
			benefits_en: '',
			care_es: '',
			care_en: ''
		},
		{
			id: '104',
			name_es: 'Microneedling Full Face',
			name_en: 'Microneedling Full Face',
			price: 120,
			summary_es: 'Este tratamiento minimiza líneas de expresión, cicatrices de acné, manchas y poros dilatados.',
			summary_en: 'This treatment minimizes fine lines, acne scars, blemishes, and enlarged pores.',
			description_es: 'Este tratamiento minimiza líneas de expresión, cicatrices de acné, manchas y poros dilatados. A través de microperforaciones controladas, estimulamos la regeneración celular para mejorar la textura y elasticidad de tu piel.',
			description_en: 'This treatment minimizes fine lines, acne scars, blemishes, and enlarged pores. Through controlled microperforations, we stimulate cell regeneration to improve the texture and elasticity of your skin.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/microneedling-fullface.jpeg',
			alt: 'Microneedling Full Face',
			benefits_es: '',
			benefits_en: '',
			care_es: '',
			care_en: ''
		},
		{
			id: '105',
			name_es: 'Microneedling en Labios',
			name_en: 'Lip Microneedling',
			price: 120,
			summary_es: 'Dale a tus labios una hidratación profunda y un efecto de relleno natural.',
			summary_en: 'Give your lips deep hydration and a natural plumping effect.',
			description_es: 'Dale a tus labios una hidratación profunda y un efecto de relleno natural. El microneedling en labios mejora la circulación, estimula la producción de colágeno y suaviza la textura, logrando un aspecto más jugoso y definido.',
			description_en: 'Give your lips deep hydration and a natural plumping effect. Lip microneedling improves circulation, stimulates collagen production, and smooths texture, achieving a fuller and more defined look.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/microneedling-labios.jpeg',
			alt: 'Microneedling en Labios',
			benefits_es: '',
			benefits_en: '',
			care_es: '',
			care_en: ''
		},
		{
			id: '106',
			name_es: 'Microneedling Full Face + Labios',
			name_en: 'Microneedling Full Face + Lips',
			price: 120,
			summary_es: 'Para un rejuvenecimiento completo, este tratamiento combina ambos procedimientos, potenciando los beneficios del microneedling en todo el rostro y labios, dejando tu piel más uniforme, tersa y radiante.',
			summary_en: 'For complete rejuvenation, this treatment combines both procedures, enhancing the benefits of microneedling on the entire face and lips, leaving your skin more even, smooth, and radiant.',
			description_es: 'Para un rejuvenecimiento completo, este tratamiento combina ambos procedimientos, potenciando los beneficios del microneedling en todo el rostro y labios, dejando tu piel más uniforme, tersa y radiante.',
			description_en: 'For complete rejuvenation, this treatment combines both procedures, enhancing the benefits of microneedling on the entire face and lips, leaving your skin more even, smooth, and radiant.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/liftingPestanas2.jpeg',
			alt: 'Microneedling Full Face + Labios',
			benefits_es: '',
			benefits_en: '',
			care_es: '',
			care_en: ''
		},
		{
			id: '107',
			name_es: 'PRP con Microneedling: Regeneración Profunda para Tu Piel',
			name_en: 'PRP with Microneedling: Deep Regeneration for Your Skin',
			price: 120,
			summary_es: 'El PRP (Plasma Rico en Plaquetas) con Microneedling es un tratamiento avanzado que estimula la regeneración celular, mejorando la textura, firmeza y luminosidad de la piel.',
			summary_en: 'PRP (Platelet-Rich Plasma) with Microneedling is an advanced treatment that stimulates cell regeneration, improving skin texture, firmness, and radiance.',
			description_es: 'El PRP (Plasma Rico en Plaquetas) con Microneedling es un tratamiento avanzado que estimula la regeneración celular, mejorando la textura, firmeza y luminosidad de la piel. ¿Cómo funciona? Este procedimiento combina dos técnicas altamente efectivas: ✔ Microneedling: Se utilizan microagujas para crear microcanales en la piel, promoviendo la producción natural de colágeno y elastina. ✔ PRP: Se extrae una pequeña cantidad de sangre del paciente, se procesa para obtener el plasma rico en plaquetas y se aplica sobre la piel para potenciar la reparación celular y la regeneración de los tejidos.',
			description_en: 'PRP (Platelet-Rich Plasma) with Microneedling is an advanced treatment that stimulates cell regeneration, improving skin texture, firmness, and radiance. How does it work? This procedure combines two highly effective techniques: ✔ Microneedling: Micro-needles are used to create micro-channels in the skin, promoting the natural production of collagen and elastin. ✔ PRP: A small amount of the patient blood is extracted, processed to obtain platelet-rich plasma, and applied to the skin to enhance cell repair and tissue regeneration.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/prp.jpeg',
			alt: 'Microneedling Full Face + Labios',
			benefits_es: [
				'Mejora la textura y elasticidad de la piel',
				'Reduce cicatrices de acné y líneas finas',
				'Unifica el tono y aporta luminosidad',
				'Disminuye los poros dilatados',
				'Acelera la regeneración celular',
			],
			benefits_en: [
				'Improves skin texture and elasticity',
				'Reduces acne scars and fine lines',
				'Unifies tone and adds radiance',
				'Reduces enlarged pores',
				'Accelerates cell regeneration'
			],
			care_es: '',
			care_en: ''
		},
		{
			id: '108',
			name_es: 'Biorepeel CL3',
			name_en: 'Biorepeel CL3',
			price: 200,
			summary_es: 'Un tratamiento facial innovador y altamente efectivo. El Biorepeel utiliza una combinación de ácidos para exfoliar y renovar la piel.',
			summary_en: 'An innovative and highly effective facial treatment. Biorepeel uses a combination of acids to exfoliate and renew the skin.',
			description_es: 'Un tratamiento facial innovador y altamente efectivo. El Biorepeel utiliza una combinación de ácidos como el ácido salicílico, el ácido láctico y el ácido tricloroacético (TCA) para proporcionar una exfoliación controlada y renovar la piel. Entre sus múltiples beneficios, ayuda a mejorar la textura y luminosidad de la piel, reduciendo la apariencia de arrugas, manchas y cicatrices. También promueve la formación de colágeno, mejorando la elasticidad y firmeza. Este tratamiento es adecuado para diferentes tipos de piel y se puede personalizar según las necesidades individuales.',
			description_en: 'An innovative and highly effective facial treatment. Biorepeel uses a combination of acids such as salicylic acid, lactic acid, and trichloroacetic acid (TCA) to provide controlled exfoliation and renew the skin. Among its many benefits, it helps improve skin texture and radiance, reducing the appearance of wrinkles, blemishes, and scars. It also promotes collagen production, enhancing skin elasticity and firmness. This treatment is suitable for various skin types and can be customized to individual needs.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/biorepeel.jpeg',
			alt: 'Limpieza facial',
			benefits_es: [
				"Sin inyecciones",
				"No requiere anestesia",
				"Rápido",
				"Resultado instantáneo",
				"Multifuncional",
				"Libre de amoniaco",
				"Aplicable para todas las edades",
				"Apto para todo el cuerpo",
				"Puede usarse todo el año",
				"No aumenta la fotosensibilidad"
			],
			benefits_en: [
				"No injections",
				"No anesthesia required",
				"Fast",
				"Instant results",
				"Multifunctional",
				"Ammonia-free",
				"Applicable for all ages",
				"Suitable for the entire body",
				"Can be used year-round",
				"Does not increase photosensitivity"
			],
			care_es: '',
			care_en: ''
		},
		{ id: '109', name_es: 'Tratamiento para Manchas', name_en: 'Treatment for Spots', price: 95, summary_es: 'Nuestro Tratamiento para Manchas está diseñado para aclarar y unificar el tono de la piel, eliminando manchas causadas por el sol, el envejecimiento o el acné.', summary_en: 'Our Treatment for Spots is designed to lighten and unify the skin tone, eliminating spots caused by the sun, aging, or acne.', description_es: 'Nuestro Tratamiento para Manchas está diseñado para aclarar y unificar el tono de la piel, eliminando manchas causadas por el sol, el envejecimiento o el acné. Utilizamos técnicas avanzadas y productos específicos que ayudan a reducir la pigmentación y promover una piel más luminosa y uniforme. Resultados visibles en pocas sesiones, para que luzcas una piel radiante y sin imperfecciones. Ideal para todo tipo de piel.', description_en: 'Our Treatment for Spots is designed to lighten and unify the skin tone, eliminating spots caused by the sun, aging, or acne. We use advanced techniques and specific products that help reduce pigmentation and promote a brighter, more even skin. Visible results in just a few sessions, so you can look radiant and flawless. Ideal for all skin types.', recomendation_es: '', recomendation_en: '', image: '/img/limpiezaFacial+dermapen.jpeg', alt: 'Limpieza facial con dermapen', benefits_es: '', benefits_en: '', care_es: '', care_en: '' },
		{ id: '110', name_es: 'Tratamiento para Piel Sensible y Rosácea', name_en: 'Treatment for Sensitive Skin and Rosacea', price: 110, summary_es: 'Nuestro Facial para Piel Sensible y Rosácea está especialmente formulado para calmar, hidratar y fortalecer las pieles delicadas o con rosácea.', summary_en: 'Our Facial for Sensitive Skin and Rosacea is specially formulated to calm, hydrate, and strengthen delicate skin or skin with rosacea.', description_es: 'Nuestro Facial para Piel Sensible y Rosácea está especialmente formulado para calmar, hidratar y fortalecer las pieles delicadas o con rosácea. Utilizamos ingredientes suaves y de acción antiinflamatoria que ayudan a reducir el enrojecimiento, la irritación y la incomodidad, restaurando el equilibrio de la piel. Ideal para quienes buscan un tratamiento gentil pero efectivo para su piel sensible.', description_en: 'Our Facial for Sensitive Skin and Rosacea is specially formulated to calm, hydrate, and strengthen delicate skin or skin with rosacea. We use gentle, anti-inflammatory ingredients that help reduce redness, irritation, and discomfort, restoring the skins balance. Ideal for those looking for a gentle yet effective treatment for their sensitive skin.', recomendation_es: '', recomendation_en: '', image: '/img/facialrosacea.jpeg', alt: 'Limpieza facial con dermapen', benefits_es: '', benefits_en: '', care_es: '', care_en: '' },
		{
			id: '111',
			name_es: 'Limpieza Facial Profunda de Espalda',
			name_en: 'Deep Back Facial Cleansing',
			price: 130,
			summary_es: 'El tratamiento de Limpieza Facial Profunda de Espalda elimina impurezas, grasa y células muertas, dejando la piel limpia y libre de imperfecciones.',
			summary_en: 'The Deep Back Facial Cleansing treatment removes impurities, oil, and dead skin cells, leaving the skin clean and blemish-free.',
			description_es: 'El tratamiento de Limpieza Facial Profunda de Espalda elimina impurezas, exceso de grasa y células muertas, dejando la piel limpia y libre de imperfecciones. Ideal para combatir el acné y mejorar la textura de la piel en esta zona.',
			description_en: 'The Deep Back Facial Cleansing treatment removes impurities, excess oil, and dead skin cells, leaving the skin clean and blemish-free. Ideal for treating back acne and improving skin texture in this area.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/limpiezaEspalda.jpeg',
			alt: 'Limpieza facial',
			benefits_es: '',
			benefits_en: '',
			care_es: '',
			care_en: ''
		},
		{
			id: '112',
			name_es: 'Lifting de Pestañas + Tinte + Botox',
			name_en: 'Eyelash Lift + Tint + Botox',
			price: 120,
			summary_es: 'Resalta tu mirada con nuestro Lifting de Pestañas + Tinte + Botox. El lifting riza tus pestañas, el tinte las oscurece y el Botox las fortalece, dejándolas más voluminosas y saludables.',
			summary_en: 'Enhance your look with our Eyelash Lift + Tint + Botox. The lift curls your lashes, the tint darkens them, and the Botox strengthens them, making them more voluminous and healthy.',
			description_es: 'Resalta tu mirada con nuestro Lifting de Pestañas + Tinte + Botox. El lifting riza tus pestañas, el tinte las oscurece y el Botox las fortalece, dejándolas más voluminosas y saludables. ¡Olvídate del rímel y disfruta de unas pestañas naturales y definidas!',
			description_en: 'Enhance your look with our Eyelash Lift + Tint + Botox. The lift curls your lashes, the tint darkens them, and the Botox strengthens them, making them more voluminous and healthy. Forget about mascara and enjoy naturally defined eyelashes!',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/liftingPestanas2.jpeg',
			alt: 'Lifting de Pestañas',
			benefits_es: '',
			benefits_en: '',
			care_es: [
				"Evite los productos grasos: Antes del tratamiento, evite usar productos aceitosos alrededor de los ojos, ya que pueden interferir con la efectividad del levantamiento.",
				"No use rizadores de pestañas: No use un rizador de pestañas durante al menos 24 horas antes del procedimiento para evitar dañar o debilitar sus pestañas naturales.",
				"Quitar el maquillaje: Asegúrese de que sus pestañas estén completamente limpias y libres de residuos de maquillaje."
			],
			care_en: [
				"Avoid oily products: Before the treatment, avoid using oily products around the eyes, as they may interfere with the effectiveness of the lift.",
				"Do not use eyelash curlers: Avoid using an eyelash curler for at least 24 hours before the procedure to prevent damaging or weakening your natural lashes.",
				"Remove makeup: Make sure your lashes are completely clean and free of makeup residues."
			]
		},
		{
			id: '113',
			name_es: 'Laminado de Cejas',
			name_en: 'Eyebrow Lamination',
			price: 120,
			summary_es: 'Transforma tu mirada con nuestro servicio de Laminado de Cejas. Diseño personalizado, resultados naturales y duraderos que realzan tu expresión sin esfuerzo. Lucí unas cejas perfectas y definidas todo el día.',
			summary_en: 'Transform your look with our Eyebrow Lamination service. Personalized design, natural and long-lasting results that enhance your expression effortlessly. Enjoy perfect and defined eyebrows all day long.',
			description_es: 'Transforma tu mirada con nuestro servicio de Laminado de Cejas. Diseño personalizado, resultados naturales y duraderos que realzan tu expresión sin esfuerzo. Lucí unas cejas perfectas y definidas todo el día.',
			description_en: 'Transform your look with our Eyebrow Lamination service. Personalized design, natural and long-lasting results that enhance your expression effortlessly. Enjoy perfect and defined eyebrows all day long.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/laminadoCejas.jpeg',
			alt: 'Laminado de Cejas',
			benefits_es: '',
			benefits_en: '',
			care_es: '',
			care_en: ''
		},
		{
			id: '114',
			name_es: 'Perfilado de Cejas',
			name_en: 'Eyebrow Shaping',
			price: 120,
			summary_es: 'Es un tratamiento estético que consiste en dar forma a las cejas para realzar la belleza natural del rostro.',
			summary_en: 'Is an aesthetic treatment that consists of shaping the eyebrows to enhance the natural beauty of the face.',
			description_es: 'Es un tratamiento estético que consiste en dar forma a las cejas para realzar la belleza natural del rostro. Con el objetivo de mejorar la simetría facial, Aumentar la definición de la mirada, Dar un aspecto más equilibrado al rostro, Crear armonía facial. La técnica la realizamos con pinza, y el proceso es personalizado, ya que depende de las necesidades de cada cliente.',
			description_en: 'Is an aesthetic treatment that consists of shaping the eyebrows to enhance the natural beauty of the face. With the aim of improving facial symmetry, Increasing the definition of the gaze, Giving a more balanced appearance to the face, Create facial harmony. The technique is done with tweezers, and the process is personalized, as it depends on the needs of each client.',
			recomendation_es: '',
			recomendation_en: '',
			image: '/img/perfilado-cejas.jpeg',
			alt: 'Laminado de Cejas',
			benefits_es: '',
			benefits_en: '',
			care_es: '',
			care_en: ''
		},

	]);
}
