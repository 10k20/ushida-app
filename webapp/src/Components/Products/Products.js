import React from 'react'
import './Products.scss'
import exampleImage from './../../Assets/images/background_1.jpg'
import { Link } from 'react-router-dom'

const Products = () => {

    return (
        <div className="products">
            <div className="products-wrapper">
                <Link to={`/products/`}>
                    <div className="product-card">
                        <div className="product-card-image">
                            <img src={exampleImage}/>
                        </div>
                        <div className="product-card-main">
                            <div className="product-card-body">
                                <div className="product-card-body-title">Title</div>
                                <div className="product-card-body-description">Some description text for this product</div>
                            </div>
                            <div className="product-card-footer">
                                <div className="product-card-author">Ushida</div>
                                <div className="product-card-price">20$</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="product-card">
                    <div className="product-card-image">
                        <img src={exampleImage}/>
                    </div>
                    <div className="product-card-main">
                        <div className="product-card-body">
                            <div className="product-card-body-title">Title</div>
                            <div className="product-card-body-description">Some description text for this product</div>
                        </div>
                        <div className="product-card-footer">
                            <div className="product-card-author">Ushida</div>
                            <div className="product-card-price">20$</div>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-card-image">
                        <img src={exampleImage}/>
                    </div>
                    <div className="product-card-main">
                        <div className="product-card-body">
                            <div className="product-card-body-title">Title</div>
                            <div className="product-card-body-description">Some description text for this product</div>
                        </div>
                        <div className="product-card-footer">
                            <div className="product-card-author">Ushida</div>
                            <div className="product-card-price">20$</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products