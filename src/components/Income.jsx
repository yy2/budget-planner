import React, {useState} from 'react';
import Card from './Card';
import "../css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Income = (props) => {

    const [totalIncome, setTotalIncome] = useState(0);   
    const [remainingAmt, setRemainingAmt] = useState(totalIncome);
    const cardName = `Income for ${props.monthSelected.text} with Index: ${props.monthSelected.index}`;
    const inputName="PayCheck1";
    
    return (
        <div>
            <Card 
                cardName={cardName}
                inputName={inputName}
            />
        </div>
    );
}

export default Income;