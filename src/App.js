import React, { Component } from 'react';
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Products from './common/Products'
import Welcome from './common/Welcome'
import Content from './common/Content'
import './stylesheet/bootstrap.min.css'
import Product from './product'
class App extends Component {

    componentDidMount() {
        document.title = "Bootstrap Simple Page"
    }

    render() {
        let { product1, product2 } = Product
        return (
            <div className="App">

                <Navbar />

                <Content>

                    <Welcome />

                    <hr/>

                    <Products title="สินค้าขายดี" products={ product1 }/>

                    <hr/>

                    <Products title="สินค้ามาใหม่" products={ product2 }/>

                    <hr/>

                    <Footer />

                </Content>

            </div>
        )
    }
}

export default App;
