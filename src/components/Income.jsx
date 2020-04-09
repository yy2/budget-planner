import React, {useState} from 'react';
import Input from './Input';
import "../css/index.css";

const Income = (props) => {

    const [totalIncome, setTotalIncome] = useState(0);   
    const [remainingAmt, setRemainingAmt] = useState(totalIncome);
    
    return (
        <div className="income-container">
            <p>Income for {props.monthSelected.text} Index: {props.monthSelected.index}</p>
            <Input 
                inputName="Paycheck1"
                plannedAmt={totalIncome}
                remainingAmt={remainingAmt}
            />
        </div>
    );
}

export default Income;