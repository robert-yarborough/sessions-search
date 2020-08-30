import React, { useState } from 'react';
import SessionForm from '../../Components/SessionForm';
import Session from '../../Components/Session';


const App = () => {
    const [sessions, setSession] = useState([
        {
            user_email: '',
            user_first_name: '',
            user_last_name: '',
            screen_width: 0,
            screen_height: 0,
            visits: 0,
            page_response: '',
            domain: 'robert-yarborough.com',
            path: '',
        },
    ]);

    const addSession = (session) => {
        const newSession = [...sessions, {session}];
        setSession(newSession);
    };

    const removeSession = ( index ) => {
        const newSession = [...sessions];
        newSession.splice(index, 1);
        setSession(newSession);
    };

    return (
        <div>
            <div>
                {sessions.map((session, index) => (
                    <Session
                        key={index}
                        index={index}
                        session={session}
                        removeSession={removeSession} />
                ))}
                <SessionForm addSession={addSession} />
            </div>
        </div>
    );
}


export default App;