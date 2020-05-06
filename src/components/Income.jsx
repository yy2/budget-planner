// import React, {useState} from 'react';
// import Card from './Card';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../css/index.css";

// const Income = (props) => {

//     const [totalIncome, setTotalIncome] = useState(0);   
//     const [remainingAmt, setRemainingAmt] = useState(totalIncome);
//     const cardName = `Income for ${props.monthSelected.text}`; 
//     // with Index: ${props.monthSelected.index}`;

//     // function addToBalance(income) {
//     //     //console.log("totalIncome: " + parseInt(totalIncome));
//     //     //console.log("income: " + income);
//     //     setTotalIncome(totalIncome+income);
//     // }
    
//     function plannedAmtChange(e, i) {
//         // console.log("index: " + e.target.id);
//         items[i].plannedAmt = Number(e.target.value);
//         setPlannedAmt(items[i].plannedAmt);
//         //console.log("plannedAmt: " + items[i].plannedAmt);
//         props.addToBalance(items[i].plannedAmt);
//         //console.log("total: " + props.totalIncome);
//     }

//     return (
//         <div>
//             <Card 
//                 cardName={cardName}
//                 totalIncome={totalIncome}
//                 addToBalance={addToBalance}
//                 remainingAmt={remainingAmt}
//             />
//         </div>
//     );
// }

// export default Income;