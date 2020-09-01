import React, {useState} from "react";

function SessionForm({addSession}){
    const [value, setValue ] = useState({
        'user_email': '',
        'user_first_name': '',
        'user_last_name': '',
        'screen_width': 0,
        'screen_height': 0,
        'visits': 0,
        'page_response': 0,
        'domain': '',
        'path': '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!value) return;
        console.log('SessionForm: value', value);
        addSession(value);
        setValue(value);
    };


    console.log('Session Form: Value', value);

    return (
        <form onSubmit={handleSubmit}>
            <input type='submit'
                    className='and-submit'
                    value='and'
                        onChange={(event) => setValue({
                            ...value,
                            [event.target.value]: value[event.target.value]
                        })}/>
        </form>)
}

export default SessionForm;