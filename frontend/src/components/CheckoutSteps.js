import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {

    const history = useHistory()

    const loginHandler = () => {
        history.push('/login')
    }

    const shippingHandler = () => {
        history.push('/shipping')
    }
    const paymentHandler = () => {
        history.push('/payment')
    }


    return (

        <Nav className='justify-content-center mb-4'>
        <Nav.Item>
          {step1 ? (
            <Link to='/login'>
              <Nav.Link onClick={loginHandler}>Sign In</Nav.Link>
            </Link>
          ) : (
            <Nav.Link disabled>Sign In</Nav.Link>
          )}
        </Nav.Item>
  
        <Nav.Item>
          {step2 ? (
            <Link to='/shipping'>
              <Nav.Link onClick={shippingHandler} >Shipping</Nav.Link>
            </Link>
          ) : (
            <Nav.Link disabled>Shipping</Nav.Link>
          )}
        </Nav.Item>
  
        <Nav.Item>
          {step3 ? (
            <Link to='/payment'>
              <Nav.Link onClick={paymentHandler} >Payment</Nav.Link>
            </Link>
          ) : (
            <Nav.Link disabled>Payment</Nav.Link>
          )}
        </Nav.Item>
  
        <Nav.Item>
          {step4 ? (
            <Link to='/placeorder'>
              <Nav.Link>Place Order</Nav.Link>
            </Link>
          ) : (
            <Nav.Link disabled>Place Order</Nav.Link>
          )}
        </Nav.Item>
      </Nav>

    )
}

export default CheckoutSteps