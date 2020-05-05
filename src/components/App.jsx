import React, {useState} from 'react';
import Month from './Month';
import Income from './Income';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

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

    const [totalBalance, setTotalBalance] = useState(0);
    const [cards, setCards] = useState([]);
    const [cardName, setCardName] = useState("");

    function addToBalance(income) {
        // console.log("totalIncome: " + parseInt(totalBalance));
        // console.log("income: " + income);
        setTotalBalance(totalBalance+income);
        console.log("totalBalance: " + totalBalance);
    }

    function handleMonthChange(e) {
        //console.log(e.target.selectedOptions[0].text);

        setMonthSelected({ 
            index: e.target.value,
            text: e.target.selectedOptions[0].text});
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

    //console.log(cards);
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
                <p>Your remaining balance for this month is <strong>${totalBalance}</strong></p>
                <Income 
                    monthSelected={monthSelected} 
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
                }
               )}

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
    );
}

export default App;