import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
    { id: 1, name: 'Producto 1', price: 100, imageUrl: 'ruta/imagen1.jpg', description: 'Descripción breve del producto 1' },
    { id: 2, name: 'Producto 2', price: 200, imageUrl: 'ruta/imagen2.jpg', description: 'Descripción breve del producto 2' },
    { id: 3, name: 'Producto 3', price: 300, imageUrl: 'ruta/imagen3.jpg', description: 'Descripción breve del producto 3' },
    // Agrega más productos aquí
];

const Products = ({ products }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
