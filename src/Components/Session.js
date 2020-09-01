import React, { useState } from 'react';


// list of predicate possibilities

function Session({ session, index, removeSession }){
    console.log('Session', session);
    const [ payload, setPayload ] = useState([
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


    return (
        <div className='session'>
            <button onClick={() => removeSession(index)}>x</button>
            <select name="predicate" id={Math.random()} onChange={(event) => setPayload(payload)}>
                {
                    payload.map((item, index) => {
                        console.log('item value', item);
                        return (<option key={index} value={item.value}>{item.label}</option>);
                    })
                }
            </select>
        </div>
    );
}

export default Session;