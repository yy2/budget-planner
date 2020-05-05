import React from 'react';
import "../css/index.css";

const Month = (props) => {

    //console.log("props month : " + props.monthSelected.month);

    return (
        <div className="month-select-container">
            <select className="month-select" onChange={props.handleMonthChange} defaultValue={props.monthSelected.index}>
                <option value="0" text="January">January</option>
                <option value="1">Febuary</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
            </select>
        </div>
    );
}

export default Month;