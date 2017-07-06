import React, { Component } from 'react';
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Products from './common/Products'
import Welcome from './common/Welcome'
import Content from './common/Content'
import './stylesheet/bootstrap.min.css'

class App extends Component {

    componentDidMount() {
        document.title = "Bootstrap Simple Page"
    }

    render() {
        const product1 = [
            { name: 'เสื้อเชิ้ต', price: '100' },
            { name: 'กางเกง', price: '200' },
            { name: 'นาฬิกา', price: '300' },
            { name: 'รองเท้า', price: '150' }
        ]
        const product2 = [
            { name: 'กระเป๋า', price: '100' },
            { name: 'เข็มขัด', price: '200' },
            { name: 'กำไล', price: '300' },
            { name: 'รองเท้า', price: '150' }
        ]
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
