import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Clock from '../components/Clock' 
import FibonacciGenerator from '../components/FibonacciGenerator'
import { FibonacciProvider } from '../components/FibonacciContext'
import '../styles/Home.css'

const Home = () => {
    return (
        <>
            <Container>
                <FibonacciProvider>
                    
                        <Row className='center' as={Row}>
                            <h1>Serie Fibonacci</h1>
                        </Row>
                        <Row className='center' as={Row}>
                            <Clock />
                        </Row>
                        <Row className='center' as={Row}>
                            <FibonacciGenerator />
                        </Row>
                </FibonacciProvider>
            </Container>
        </>
    )
}

export default Home