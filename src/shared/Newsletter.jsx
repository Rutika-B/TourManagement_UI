import React from 'react'
import './newsletter.css';
import { Container, Row,Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Row>
            <Col lg='6'>
                <div className='newsletter__content'>
                    <h2>
                        Subscribe now to get useful traveling information.
                    </h2>
                    <div className='newsletter__input'>
                        <input type="email" placeholder='Enter your email'/>
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ipsum quaerat molestiae sapiente nisi sed vitae ab accusantium provident! Fugiat odio consequatur iste ipsa cumque accusamus dicta deleniti assumenda quas.</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className='newsletter__img'>
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </section>
  )
}

export default Newsletter