import React, {useState} from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/index.css";

const Income = (props) => {

    const [totalIncome, setTotalIncome] = useState(0);   
    const [remainingAmt, setRemainingAmt] = useState(totalIncome);
    const cardName = `Income for ${props.monthSelected.text} with Index: ${props.monthSelected.index}`;
    
    return (
        <div>
            <Card 
                cardName={cardName}
            />
        </div>
    );
}

export default Income;