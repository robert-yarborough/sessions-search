import React from 'react';


export const StrOperand = ({predicateVal, strOperator}) => (typeof predicateVal === 'string') ? (
        <select name="strOperand" id="operand1">
                {
                    strOperator.map((item, index) => {

                        return (<option key={index} value={item.value}>{item.value}</option>)
                    })
                }
        </select> ) : null;
