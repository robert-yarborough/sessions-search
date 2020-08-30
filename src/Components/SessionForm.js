import React, {useState} from "react";

function SessionForm({ addSession }){
    const [value, setValue ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!value) return;
        addSession(value);
        setValue(' ');
    };
    console.log('Session Form: Value', value)
    return (
        <form onSubmit={handleSubmit}>
            <input type='submit'
                    className='input'
                    value='and'
                    onClick={(event) => setValue(event.target.value)}/>
        </form>
    )
}

export default SessionForm;