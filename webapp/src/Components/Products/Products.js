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
                        <div className="product-card-category">
                            <span>Video</span>
                        </div>
                        <div className="product-card-image">
                            <img src={exampleImage}/>
                        </div>
                        <div className="product-card-main">
                            <div className="product-card-body">
                                <div className="product-card-body-title">Autumn 2019 LUT Pack</div>
                                <div className="product-card-body-description">Some description text for this product</div>
                            </div>
                            <div className="product-card-footer">
                                <div className="product-card-author">Ushida</div>
                                <div className="product-card-price">20$</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/products/`}>
                    <div className="product-card">
                        <div className="product-card-category">
                            <span>Video</span>
                        </div>
                        <div className="product-card-image">
                            <img src={exampleImage}/>
                        </div>
                        <div className="product-card-main">
                            <div className="product-card-body">
                                <div className="product-card-body-title">Title</div>
                                <div className="product-card-body-description">Some descafw awf awf awf A fription aw faw af awf af af wfafw a text for this produc afw awfaw faw faw  awf awf awf afawf aw fafw awf awf awft af awfawfawfwaf  afwfawfawfafwafwawffaw fawfawfaw</div>
                            </div>
                            <div className="product-card-footer">
                                <div className="product-card-author">Ushida</div>
                                <div className="product-card-price">20$</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/products/`}>
                    <div className="product-card">
                        <div className="product-card-category">
                            <span>Video</span>
                        </div>
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
                <Link to={`/products/`}>
                    <div className="product-card">
                        <div className="product-card-category">
                            <span>Video</span>
                        </div>
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
                <Link to={`/products/`}>
                    <div className="product-card">
                        <div className="product-card-category">
                            <span>Video</span>
                        </div>
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
            </div>
        </div>
    )
}

export default Products