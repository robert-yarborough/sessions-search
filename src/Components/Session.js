import React from 'react';


// list of predicate possibilities


function Session({ session, index, removeSession }){
    console.log('session domain', session.domain);
    const predicates = <select name="columns" id="predicate-options">
                            <option value={session.user_email}>{'user email'}</option>
                            <option value={session.user_first_name}>{'user first name'}</option>
                            <option value={session.user_last_name}>{'user last name'}</option>
                            <option value={session.screen_width}>{'screen width'}</option>
                            <option value={session.screen_height}>{'screen height'}</option>
                            <option value={session.visits}>{'visits'}</option>
                            <option value={session.page_response}>{'page response'}</option>
                            <option value={session.domain}>{'domain'}</option>
                            <option value={session.path}>{'path'}</option>
                        </select>
    return (
        <div className='session'
             style={{ textDecoration: (session.visits <= 0) ? 'line-through' : ''}}>
            <button onClick={() => removeSession(index)}>x</button>
            {/*{Array.of(predicates).forEach((data) => {*/}
            {/*    const { children } = data.props;*/}

            {/*    // iterate through array*/}
            {/*    children.filter((val) => {*/}
            {/*        const { value } = val.props;*/}
            {/*        console.log('value', value);*/}
            {/*        return (typeof value === "string") ? (*/}
            {/*            <select name="columns2" id="predicate1">*/}
            {/*                <option value="email">{'user email'}</option>*/}
            {/*                <option value="first name">{'user first name'}</option>*/}
            {/*                <option value="last name">{'user last name'}</option>*/}
            {/*                <option value="screen width">{'screen width'}</option>*/}
            {/*                <option value="screen height">{'screen height'}</option>*/}
            {/*                <option value="visits">{'visits'}</option>*/}
            {/*                <option value="page response">{'page response'}</option>*/}
            {/*                <option value="domain">{'domain'}</option>*/}
            {/*                <option value="path">{'path'}</option>*/}
            {/*            </select>*/}
            {/*        ) : (*/}
            {/*            <select name="columns2" id="predicate2">*/}
            {/*                <option value="email">{'user email'}</option>*/}
            {/*                <option value="first name">{'user first name'}</option>*/}
            {/*                <option value="last name">{'user last name'}</option>*/}
            {/*                <option value="screen width">{'screen width'}</option>*/}
            {/*                <option value="screen height">{'screen height'}</option>*/}
            {/*                <option value="visits">{'visits'}</option>*/}
            {/*                <option value="page response">{'page response'}</option>*/}
            {/*                <option value="domain">{'domain'}</option>*/}
            {/*                <option value="path">{'path'}</option>*/}
            {/*            </select>*/}
            {/*        );*/}
            {/*    })*/}
            {/*})}*/}
            {predicates}
        </div>
    );
}

export default Session;