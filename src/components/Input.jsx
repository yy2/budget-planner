import React from 'react';
import "../css/input.css";


export const InputHeaders = (props) => {
    return (
        <div className="input-container input-hdr">
            <div className="input-col-one mg-btm-20">
                <div className="card-name">{props.cardName}</div>
            </div>
            <div className="input-col-two">
                <div className="planned-amt-header">Planned</div>
                <div className="remaining-amt-header">Remaining</div> 
            </div>
        </div>
    );
}

const Input = (props) => {
    // function handleInputChange(e) {
    //     console.log("value: " + e.target.value);
    // }

    return (
        <div className="input-container">
            <div className="input-col-one mg-btm-20">
                <div className="input-name"><input type="text" className="input-box-med" placeholder="Label" onChange={e => props.itemNameChange(e, props.index)} /></div>
            </div>
            <div className="input-col-two mg-btm-20">
                <div className="input-planned-amt"><input type="text" className="input-box-small align-right" placeholder="0" onBlur={e => props.plannedAmtChange(e, props.index)} /></div>
                <div className="remaining-amt align-right">{props.remainingAmt}</div>
            </div>
        </div>
    );
}

export default Input;