import React from 'react'

const ProductItem = (props) => (
    <div className="col-md-3 col-sm-6 hero-feature">
        <div className="thumbnail">
            <img src={ props.img } alt=""/>
            <div className="caption">
                <h3>{ props.name }</h3>
                <p>ราคา: { props.price }</p>
                <p>
                    <a href="" className="btn btn-primary">Buy Now!</a> <a href="" className="btn btn-default">More Info</a>
                </p>
            </div>
        </div>
    </div>
)

ProductItem.defaultProps = {
    name: 'Product name',
    price: 'XX.XX',
    img: 'http://placehold.it/800x500'
}

export default ProductItem