import React, {useState} from 'react';
import Input, { InputHeaders } from './Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import "../css/index.css";

const Card = (props) => {

    const [itemName, setItemName] = useState("");
    const [plannedAmt, setPlannedAmt] = useState(0); 
    // const [remainingAmt, setRemainingAmt] = useState(0);
    if(props.isIncome) {
        console.log("is an income card");
    }
    const [items, setItems] = useState([{
        // key: 0,
        itemName: itemName,
        plannedAmt: plannedAmt,
        remainingAmt: 0
    }]);

    function itemNameChange(e, i) {
        //const prevItem = items[e.target.id].;
        // console.log("index: " + e.target.id);
        // console.log("value: " + (e.target.value));
        items[i].itemName = e.target.value;
    }

    function plannedAmtChange(e, i) {
        // console.log("index: " + e.target.id);
        items[i].plannedAmt = Number(e.target.value);
        setPlannedAmt(items[i].plannedAmt);
        //console.log("plannedAmt: " + items[i].plannedAmt);
        if(props.isExpense) {
            props.subtractFromBalance(items[i].plannedAmt);
        }
        else {
            props.addToBalance(items[i].plannedAmt);
        }
        //console.log("total: " + props.totalIncome);
    }
   
    function addNewItem() {
        const item = {
            // key: index,
            itemName: "",
            plannedAmt: 0,
            remainingAmt: 0
        };
        setItems(prevItems => {
            return [...prevItems, item];
        });
    }

    console.log(items);

    return (
        <div className="card-container">
            <InputHeaders 
                cardName={props.cardName}
            />
            {items.map((items, i) => {
                return (
                <Input
                    key={i}
                    index={i}
                    itemName={items.itemName}
                    plannedAmt={items.plannedAmt}
                    remainingAmt={items.remainingAmt}
                    itemNameChange={itemNameChange}
                    plannedAmtChange={plannedAmtChange}
                />
                );
            }
            )}
            <Button variant="outline-info" className="add-item-btn" onClick={addNewItem}>Add Item</Button>
        </div>
    );
}

export default Card;