import React, {useState} from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/index.css";

const Income = (props) => {

    const [totalIncome, setTotalIncome] = useState(0);   
    const [remainingAmt, setRemainingAmt] = useState(totalIncome);
    const cardName = `Income for ${props.monthSelected.text}`; 
    // with Index: ${props.monthSelected.index}`;

    function addToBalance(income) {
        //console.log("totalIncome: " + parseInt(totalIncome));
        //console.log("income: " + income);
        setTotalIncome(totalIncome+income);
    }
    
    return (
        <div>
            <Card 
                cardName={cardName}
                totalIncome={totalIncome}
                addToBalance={addToBalance}
                remainingAmt={remainingAmt}
            />
        </div>
    );
}

export default Income;