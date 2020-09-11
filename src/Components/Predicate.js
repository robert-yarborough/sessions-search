import React from 'react';


export const Predicate = function(props){
    function handlePredicateValue(event){
        props.onChange(event.target.value);
    }
    return (<select name="predicate" id={Math.random()} onChange={handlePredicateValue}>
        {
            props.predicate.map((item, index) => {
                return (<option key={index} value={item.value}>{item.label}</option>)
            })
        }
    </select>)

}

