import React from 'react'
import ProductItem from './ProductItem'

const Products = (props) => (
    <div className="row">
        <div className="col-md-12">
            <h3>{ props.title }</h3>
            <div className="row text-center">
                {
                    props.products.map((product, index) => {
                        let { name, price, img } = product
                        return (
                            <ProductItem name={name} price={price} img={img} key={product + index} />
                        )
                    })
                }
            </div>
        </div>
    </div>
)

Products.defaultProps = {
    products: []
}
export default Products