import React, {useState} from 'react';
import Input, { InputHeaders } from './Input';
import "../css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Card = (props) => {

    const [itemName, setInputName] = useState(props.inputName);
    const [plannedAmt, setPlannedAmt] = useState(0); 
    const [remainingAmt, setRemainingAmt] = useState(0);

    //array of items 
    const items = [{
        itemName: itemName,
        plannedAmt: plannedAmt,
        remainingAmt: remainingAmt
    }];

    console.log(items);
    function handleAddNewItem(e) {
        console.log("button clicked");
    }
    
    return (
        <div className="card-container">
            <InputHeaders 
                cardName={props.cardName}
            />
            <Input
                inputName={itemName}
                plannedAmt={plannedAmt}
                remainingAmt={remainingAmt}
            />
            <Button variant="outline-info" onClick={handleAddNewItem}>Add Item</Button>
        </div>
    );
}

export default Card;