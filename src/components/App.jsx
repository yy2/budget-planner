import React, {useState, useEffect } from 'react';
import Month from './Month';
import Income from './Income';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../css/index.css";

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

    const [totalBalance, setTotalBalance] = useState(0);

    // useEffect(() => {
    //     console.log("render");
    // }, [monthSelected]);

    return (
            <div className="main-container">
                <h2 className="header">Budget Planner</h2>
                <Month 
                    handleMonthChange={handleMonthChange}
                    monthSelected={monthSelected} 
                />
                <p>Your remaining balance for this month is <strong>${totalBalance.toFixed(2)}</strong></p>
                <Income 
                    monthSelected={monthSelected} 
                />
                
            </div>
    );
}

export default App;