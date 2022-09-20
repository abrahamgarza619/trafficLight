import React, { useState } from 'react';
import './App.css';
import { Light } from './App';


export function TrafficLight() {
    const colors = ['red', 'yellow', 'green'];
    const [lit, setLit] = useState('red');



    return (
        <div>
            <div className='dot' color='red' onClick={() => setLit('red')} style={{backgroundColor: lit === 'red' ? lit : 'gray'}}>red</div>
            <div className='dot' color='yellow' onClick={() => setLit('yellow')} style={{backgroundColor: lit === 'yellow' ? lit : 'gray'}}>yellow</div>
            <div className='dot' color='green' onClick={() => setLit('green')} style={{backgroundColor: lit === 'green' ? lit : 'gray'}} >green</div>
            <div>{lit} is currently on</div>
        </div>
    )
}