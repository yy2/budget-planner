import React, {useState} from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'react-bootstrap';
import "../css/index.css";
import { Button, InputGroup, FormControl } from 'react-bootstrap';

const MonthlyCard = (props) => {

    const [totalBalance, setTotalBalance] = useState(0);
    const [cards, setCards] = useState([]);
    const [cardName, setCardName] = useState("");

    function addToBalance(income) {
        // console.log("totalIncome: " + parseInt(totalBalance));
        // console.log("income: " + income);
        setTotalBalance(totalBalance+income);
        console.log("totalBalance: " + totalBalance);
    }

    function addNewCard(e) {
        //e.preventDefault();
        const prevCards = cards;
        setCards([...prevCards, {
            // key: index,
            cardName: cardName
        }]);
        setCardName("");
        //console.log("Add New Card: " + cards);
    }

    function addNewCardName(e) {
        console.log("New Card Name: " + e.target.value);
        setCardName(e.target.value);
    }

    //console.log("month: " + props.monthSelected.text);

    return (
        <div>
            <p>Your remaining balance for this month is <strong>${totalBalance}</strong></p>
            <Card 
            cardName={`Income for ${props.monthSelected.text}`}
            addToBalance={addToBalance}
            />
            {cards.map((card, index) => {
            return (
                <Card
                key={index}
                cardName={cards[index].cardName}
                totalIncome={totalBalance}
                addToBalance={addToBalance}
                />
                );
            })}  

            <div className="new-card-container">
                    {/* <input type="text" className="new-card-input" placeholder="New Expense Category" onChange={addNewCardName}/>
                    <Button variant="outline-info" className="add-card-btn" onClick={addNewCard}>Add New Expense Category</Button> */}
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Expense Name"
                            aria-label="Expense Name"
                            aria-describedby="basic-addon2"
                            value={cardName}
                            onChange={addNewCardName}
                        />
                        <InputGroup.Append>
                        <Button variant="outline-info" bsclass="add-card-btn" onClick={addNewCard}>Add New Expense</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>

        </div>
    )
}

export default MonthlyCard;