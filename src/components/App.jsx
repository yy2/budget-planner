import React, {useState, useEffect } from 'react';
import Month from './Month';
import Income from './Income';
import "../css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';


const App = () => {

    const date = new Date();
    const month = date.getMonth();
    const options = { month: 'long'};
    const monthString = date.toLocaleDateString('en-US', options);

    const [monthSelected, setMonthSelected] = useState( {
        index: month,
        text: monthString
    });

    //console.log("monthSelected: " + JSON.stringify(monthSelected));

    function handleMonthChange(e) {
        //console.log(e.target.selectedOptions[0].text);

        setMonthSelected({ 
            index: e.target.value,
            text: e.target.selectedOptions[0].text});
    }

    // useEffect(() => {
    //     console.log("render");
    // }, [monthSelected]);

    return (
            <div className="main-container">
                <h2 className="header">Budget Planner</h2>
                <Month 
                    handleMonthChange={handleMonthChange}
                    monthSelected={monthSelected} />
                <Income 
                    monthSelected={monthSelected} />
                
            </div>
    );
}

export default App;