import React, { useEffect, useState } from 'react';


// list of predicate possibilities

function Session({ session, index, removeSession }){
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



    console.log('state: value', payload);
    console.log('session', Object.keys(session)[0]);

    return (
        <div className='session'
             style={{ textDecoration: (session.visits <= 0) ? 'line-through' : ''}}>
            <button onClick={() => removeSession(index)}>x</button>
            {/*{Array.of(pred()).filter((data) => {*/}
            {/*    const { children } = data.props;*/}
            {/*    // iterate through array*/}
            {/*    // return children.filter((val) => {*/}
            {/*    //     const { value } = val.props;*/}
            {/*    //     return (typeof value === "string") ? (*/}
            {/*    //        `<select name="columns1" id="predicate1">*/}
            {/*    //                 <option value="email">{'user email'}</option>*/}
            {/*    //                 <option value="first name">{'user first name'}</option>*/}
            {/*    //                 <option value="last name">{'user last name'}</option>*/}
            {/*    //                 <option value="screen width">{'screen width'}</option>*/}
            {/*    //               </select>`*/}
            {/*    //     ) : null;*/}
            {/*    // });*/}
            {/*    return children.filter((val, index) => {*/}
            {/*        const value = val.props;*/}
            {/*        console.log('value!!!', val.props);*/}
            {/*        return value*/}
            {/*    });*/}
            {/*})}*/}
            <select name="" id="">
                {
                    payload.map((item, index) => (
                        <option key={index} value={item.value}>{item.value}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default Session;