import React, {useContext, useState} from 'react';
import { Button, Form, Table, Row, Col, Container } from 'react-bootstrap';
import { FibonacciContext } from './FibonacciContext';
import axios from 'axios';


const FibonacciGenerator = () => {
    const { series, setSeries, addToHistory } = useContext(FibonacciContext);

    const generateSeries = async () => {
        const now = new Date();
        const seed1 = now.getMinutes();
        const seed2 = now.getSeconds();


        const numCount = parseInt(count, 10) || 0;

        try {
        const response = await axios.get('http://localhost:5000/fibonacci', {
            params: { seed1, seed2, count: numCount },
        });

        setSeries(response.data);
        addToHistory(response.data);
        } catch (error) {
        console.error('Error generating series:', error);
        }
    };

    return (
        <>
            <Container>
                <Row className='pb-3'>
                    <Button onClick={generateSeries}>Generar Serie</Button>
                </Row>
                <Row className='bt-3'>
                    <Table striped bordered hover className="mt-3">
                        <thead>
                        <tr>
                            <th>Índice</th>
                            <th>Valor</th>
                        </tr>
                        </thead>
                        <tbody>
                        {series.map((value, index) => (
                            <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    );
};

export default FibonacciGenerator;