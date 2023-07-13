import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var num1 = 10;
var num2 = 3;
var expression = <div>
    <h1>Let us expression in JSX</h1>
    addition of {num1} and {num2} = {num1 + num2} <br />
    substraction of {num1} and {num2} = {num1 - num2} <br />
    multiplication of {num1} and {num2} = {num1 * num2} <br />
    division of {num1} and {num2} = {num1 / num2} <br />
</div>
root.render(expression);
