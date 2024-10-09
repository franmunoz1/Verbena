// import React, { useState } from 'react';
// import { addToCart } from '../store/cart';

// const ProductDetail = ({ product, siteUrl, lang }) => {
//     const [quantity, setQuantity] = useState(1);

//     const handleAddToCart = () => {
//         if (quantity > 0) {
//             addToCart(product, quantity);
//         }
//     };

//     return (
//         <section className="text-gray-600 body-font overflow-hidden">
//             <div className="container px-5 py-24 mx-auto">
//                 <div className="lg:w-4/5 mx-auto flex flex-wrap">
//                     <img alt={product.alt} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded max-h-[500px]" src={product.image} />
//                     <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//                         <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
//                         <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
//                         <div className="flex mb-4"></div>
//                         <p className="leading-relaxed">{product.description}</p>
//                         <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
//                         <div className="flex justify-between">
//                             <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>

//                             <div className="flex items-center">
//                                 <input
//                                     type="number"
//                                     min="1"
//                                     value={quantity}
//                                     onChange={(e) => setQuantity(parseInt(e.target.value))}
//                                     className="w-16 text-center border rounded mr-2"
//                                 />
//                                 <button
//                                     onClick={handleAddToCart}
//                                     className="flex bg-green-verbena hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
//                                     Add to Cart
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default ProductDetail;


import React, { useState } from 'react';
import { addToCart } from '../store/cart';

const ProductDetail = ({ product, siteUrl, lang }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (quantity > 0) {
            console.log('Adding to cart, quantity:', quantity); // Debugging
            addToCart(product, quantity);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <div className="relative aspect-square">
                        <img
                            src={product.image}
                            alt={product.alt || "Product Image"}
                            className="rounded-lg object-cover w-full h-full"
                            style={{ maxHeight: '500px' }}
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <nav className="text-sm mb-2">
                        <ol className="list-none p-0 inline-flex">
                            <li className="flex items-center">
                                <span className="text-gray-800">{product.brand}</span>
                            </li>
                        </ol>
                    </nav>
                    {/* <h1 className="text-2xl font-semibold mb-2">{product.brand}</h1> */}
                    <h2 className="text-4xl font-light text-primary mb-4">{product.name}</h2>
                    <p className="text-2xl mb-4">US${product.price}</p>
                    <p className="text-sm text-gray-500 mb-6">
                        {product.description}
                    </p>
                    <div className="mb-6">
                        <h3 className="text-sm font-medium mb-2">QUANTITY</h3>
                        <div className="flex items-center">
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className="w-16 text-center border rounded mr-2"
                            />
                            <button
                                onClick={handleAddToCart}
                                className="flex bg-green-verbena hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
