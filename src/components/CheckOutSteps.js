import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckOutSteps = ({ step1, step2 }) => {
  return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link className='shipping-link'>Shipping</Nav.Link>
                    </LinkContainer>
                ) : (
                <Nav.Link disabled className='shipping-link'>Shipping</Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link className='shipping-link'>Place Order</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled className='shipping-link'>Place Order</Nav.Link>
                )}
            </Nav.Item>
        </Nav>
  )
}

export default CheckOutSteps
