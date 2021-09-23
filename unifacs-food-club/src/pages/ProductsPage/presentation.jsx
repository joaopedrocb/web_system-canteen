// dependencies
import React from 'react';

// template
import { ManagementTemplate } from '../templates';

// components
import { Product } from './components';

// css
import './styles.css';

function ProductsPagePresentation(props) {
    const { productsList } = props;
    return (
        <ManagementTemplate>
            <div className="productsList">
                <div className="list-header">
                    <span>Nome</span>
                    <span>Código</span>
                    <span>Tipo</span>
                    <span>Fornecedor</span>
                    <span>Ingredientes</span>
                    <span>Valor</span>
                </div>
                {productsList.map(product => {
                    const {
                        code,
                        ingredients,
                        isBlocked,
                        name,
                        picture,
                        price,
                        type,
                        provider,
                    } = product;

                    return (
                        <Product 
                            code={code}
                            ingredients={ingredients}
                            isBlocked={isBlocked}
                            name={name}
                            picture={picture}
                            price={price}
                            type={type}
                            provider={provider}
                        />    
                    );
                })}
            </div>
        </ManagementTemplate>
    )
}

export default ProductsPagePresentation;