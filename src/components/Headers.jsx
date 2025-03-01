"use client";
import React, { useState } from 'react';

export const Headers = ({ 
    allProducts, 
    setAllProducts, 
    total, 
    countProducts, 
    setCountProducts, 
    setTotal 
}) => { 
    const [active, setActive] = useState(false); 

    const onDeleteProduct = (product) => {
        const confirmDelete = window.confirm(`¿Seguro que deseas eliminar "${product.name}" del carrito?`);
        if (!confirmDelete) return;

        const updatedProducts = allProducts.filter(item => item.id !== product.id);
        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(updatedProducts);
    };

    const onCleanCart = () => {
        const confirmClean = window.confirm("¿Estás seguro de que deseas vaciar el carrito?");
        if (!confirmClean) return;

        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    const generateInvoice = () => {
        if (allProducts.length === 0) {
            alert("El carrito está vacío. Agrega productos antes de generar la factura.");
            return;
        }

        const invoiceContent = `
            ========== FACTURA ==========
            Productos comprados:
            ${allProducts.map(product => `- ${product.name} x${product.quantity} - $${product.price * product.quantity}`).join("\n")}
            --------------------------------
            Total: $${total} USD
        `;

        alert(invoiceContent);
    };

    return (
        <header>
            <h1>Tienda de Productos Electrónicos</h1>
            <div className="container-icon">
                <div className="container-cart-icon" onClick={() => setActive(!active)}>
                    🛒 ({countProducts})
                </div>

                {active && (
                    <div className="cart-details">
                        <ul>
                            {allProducts.map((product) => (
                                <li key={product.id} className="cart-item">
                                    <img src={product.urlImage} alt={product.name} className="cart-item-image" />
                                    <div className="cart-item-info">
                                        <p>{product.name}</p>
                                        <p>{product.price} USD</p>
                                        <p>Cantidad: {product.quantity}</p>
                                    </div>
                                    <button onClick={() => onDeleteProduct(product)}>❌</button>
                                </li>
                            ))}
                        </ul>
                        <p>Total: {total} USD</p>
                        <button onClick={onCleanCart}>Vaciar Carrito</button>
                        <button onClick={generateInvoice}>Generar Factura</button>
                    </div>
                )}
            </div>
        </header>
    );
};
