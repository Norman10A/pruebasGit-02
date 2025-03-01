import React from "react"; 
import { data } from "../../src/data"; 

export const ProductList = ({ 
    allProducts, 
    setAllProducts, 
    countProducts, 
    setCountProducts, 
    total, 
    setTotal, 
}) => { 
    const onAddProduct = (product) => { 
        const existingProduct = allProducts.find(item => item.id === product.id);

        if (existingProduct) { 
            const updatedProducts = allProducts.map(item => 
                item.id === product.id 
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item 
            ); 
            setAllProducts(updatedProducts);
        } else { 
            setAllProducts([...allProducts, { ...product, quantity: 1 }]); 
        } 

        setTotal(prevTotal => prevTotal + product.price); 
        setCountProducts(prevCount => prevCount + 1); 
    };  

    return ( 
        <div className="container-items"> 
            {data.map(product => ( 
                <div className="item" key={product.id}> 
                    <figure> 
                        <img src={product.urlImage} alt={product.title} /> 
                    </figure> 
                    <div className="info-product"> 
                        <h2 className="titulo-producto-carrito">{product.title}</h2> 
                        <p className="price">${product.price}</p> 
                        <button className="btn-add-cart" onClick={() => onAddProduct(product)}>
                            Añadir al carrito
                        </button> 
                    </div> 
                </div> 
            ))} 
        </div> 
    ); 
};
