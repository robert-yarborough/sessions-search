import React from 'react';


export const NumOperand = ({predicateVal, numOperator}) => {
        console.log('predicateVal NumOperand', typeof predicateVal);
        return  (predicateVal.indexOf(0)) ? (
            <select name="numOperand" id="operand2" >
                    {
                            numOperator.map((item, index) => {
                                    return (<option key={index} value={item.value}>{item.value}</option>)
                            })
                    }
            </select> ) : null;
}