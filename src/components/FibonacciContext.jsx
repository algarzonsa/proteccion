import React, { createContext, useState } from 'react'

const FibonacciContext = createContext();

const FibonacciProvider = ({ children }) => {
    const [series, setSeries] = useState([]);
    const [history, setHistory] = useState([]);

    const addToHistory = (newSeries) => {
        setHistory([newSeries, ...history]);
    };

    return (
        <FibonacciContext.Provider value={{ series, setSeries, addToHistory, history }}>
            {children}
        </FibonacciContext.Provider>
    );
}

export { FibonacciContext, FibonacciProvider };