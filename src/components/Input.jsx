import React from 'react';
import "../css/index.css";

const Input = (props) => {
    return (
        <div className="input-container">
            <div className="input-headers">
                <div className="row">
                    <div className="title">Title</div>
                    <div className="plannedAmt-header">Planned</div>
                    <div className="remainingAmt-header">Remaining</div>
                </div>
            </div>
            <div>
                <div className="row">
                    <div className="input-name">{props.inputName}</div>
                    <div className="input-planned-amt"><input type="text" name="plannedAmt" placeholder={props.plannedAmt} /></div>
                    <div className="remaining-amt">{props.remainingAmt}</div>
                </div>
            </div>
        </div>
    );
}

export default Input;