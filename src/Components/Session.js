import React, {useState} from 'react';



// list of predicate possibilities
import {Predicate} from "./Predicate";
import {StrOperand} from "./StrOperand";
import {NumOperand} from "./NumOperand";



function Session({ session, index, removeSession }){
    const [ predicate ] = useState([
        {
            label: Object.keys(session)[0],
            value: session.user_email,
        },
        {
            label: Object.keys(session)[1],
            value: session.user_first_name,
        },
        {
            label: Object.keys(session)[2],
            value: session.user_last_name,
        },
        {
            label: Object.keys(session)[3],
            value: session.screen_width,
        },
        {
            label: Object.keys(session)[4],
            value: session.screen_height,
        },
        {
            label: Object.keys(session)[5],
            value: session.visits,
        },
        {
            label: Object.keys(session)[6],
            value: session.page_response,
        },
        {
            label: Object.keys(session)[7],
            value: session.domain,
        },
        {
            label: Object.keys(session)[8],
            value: session.path,
        }
    ]);
    const [ predicateVal, setPredicateVal ] = useState('');
    const [ strOperator ] = useState([
        {
            value: 'equals',
        },
        {
            value: 'contains',
        },
        {
            value: 'starts with'
        },
        {
            value: 'in list'
        }
    ]);
    const [ numOperator ] = useState([
        {
            value: 'equals'
        },
        {
            value: 'between'
        },
        {
            value: 'greaterThan'
        },
        {
            value: 'lessThan'
        },
        {
            value: 'in list'
        }
    ]);

    console.log('predicate-scope', predicate);
    console.log('predicateVal-scope', predicateVal);

    function handlePredicateValue(newValue){
        console.log('newValue', newValue);
        setPredicateVal(newValue);
    }

    return (
        <div className='session'>
            <button onClick={() => removeSession(index)}>x</button>
            <Predicate predicate={predicate} onChange={handlePredicateValue} />
            <StrOperand predicate={predicate} predicateVal={predicateVal} strOperator={strOperator} onChange={handlePredicateValue} />
            <NumOperand predicate={predicate} predicateVal={predicateVal} numOperator={numOperator} onChange={handlePredicateValue} />
        </div>
    );
}

export default Session;