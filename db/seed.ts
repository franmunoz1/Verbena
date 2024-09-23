import { db, Product, Service } from 'astro:db';

// https://astro.build/db/seed



export default async function seed() {
	await db.insert(Product).values([
		{ id: '1', name: 'Higiene facial', price: 100, summary: 'Summary 1', description: 'Description 1', recomendation: 'Recomendation 1', image: '/img/higieneFacial.jpeg', alt: 'Alt 1' },
		{ id: '2', name: 'Laminado Cejas', price: 200, summary: 'Summary 2', description: 'Description 2', recomendation: 'Recomendation 2', image: '/img/laminadoCejas.jpeg', alt: 'Alt 2' },
		{ id: '3', name: 'Limpieza Facial + Dermapiling', price: 300, summary: 'Summary 3', description: 'Description 3', recomendation: 'Recomendation 3', image: '/img/limpiezaFacial+dermapiling.jpeg', alt: 'Alt 3' },
		{ id: '4', name: 'Limpieza Facial + Tratamiento Led', price: 400, summary: 'Summary 4', description: 'Description 4', recomendation: 'Recomendation 4', image: '/img/limpiezaFacial+tratamientoLed.jpeg', alt: 'Alt 4' },
		{ id: '5', name: 'Lifting Pestañas', price: 500, summary: 'Summary 5', description: 'Description 5', recomendation: 'Recomendation 5', image: '/img/liftingPestanas.jpeg', alt: 'Alt 5' },
	]);

	await db.insert(Service).values([
		{ id: '6', name: 'Limpieza facial prunda', price: 90, summary: 'chau celulas muertas acumuladas, puntos negros,quistes de milium y postulas!', description: 'chau celulas muertas acumuladas, puntos negros,quistes de milium y postulas!. En 10 pasos mejoro la salud y la apariencia de tu piel, eliminando impurezas y revitalizándola. Limpio en profundidad, elimino las células muertas, realizo extracciones de puntos negros, quistes de millium y pústulas, coloco sueros para tratar cada problemática e hidrato en todos los niveles dejando tu piel impecable. 💧🌟', recomendation: '', image: '/img/higieneFacial.jpeg', alt: 'Limpieza facial' },
		{ id: '7', name: 'Limpieza facial + Dermaplaning', price: 100, summary: '¿Te copa la idea de hacerte un peeling apto para todo el año o eliminar esos vellitos que opacan y le otorgan textura a tu rostro? 😍', description: '¿Te copa la idea de hacerte un peeling apto para todo el año o eliminar esos vellitos que opacan y le otorgan textura a tu rostro? 😍. Si tu piel es apta, el dermaplaning es el tratamiento perfecto. Utiliza un bisturí descartable para eliminar células muertas y vello facial, mejorando la textura, reduciendo arrugas finas y cicatrices por acné. Además, proporciona una exfoliación profunda que estimula la renovación celular. El resultado es una piel más uniforme y luminosa, ideal para mantener durante todo el año. ✨', recomendation: '', image: '/img/limpiezaFacial+dermapiling.jpeg', alt: 'limpieza facial y dermapiling' },
		{ id: '8', name: 'Limpieza facial + Dermapen', price: 120, summary: '¿Rejuvenecer la piel sin cirugía ni tiempos de recuperación prolongados? 😍', description: '¿Rejuvenecer la piel sin cirugía ni tiempos de recuperación prolongados? 😍. El dermapen utiliza microagujas para estimular la regeneración de la piel, logrando la reducción de arrugas, líneas finas y cicatrices. Además, al añadir una ampolla específica durante el tto, potenciamos los resultados y maximizamos los beneficios de cada sustancia aplicada. ✨. Incluye masajes con Cryo Sticks, esferas de metal que proporcionan una sensación refrescante y relajante con frío localizado, ayudando a reducir la inflamación post-tratamiento. Además, un masaje relajante en hombros, cervicales y cabeza para un toque de bienestar adicional. 💆‍♀️', recomendation: '⚠️ Este tto no es apto para embarazadas, anticoagulados, diabéticos, ni personas que cursen un proceso inflamatorio de la piel.', image: '/img/limpiezaFacial+dermapen.jpeg', alt: 'Limpieza facial con dermapen' },
	]);
}
