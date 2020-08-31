import React, { useEffect, useState } from 'react';
import SessionForm from '../../Components/SessionForm';
import Session from '../../Components/Session';


const App = () => {
    const [sessions, setSession] = useState([]);

    useEffect(() => {
        async function getSession(){
            const response = await fetch('/express-backend');
            const body = await response.json();
            console.log('body', body);
            const iterateBody = body.map((session) => session);
            setSession(iterateBody);
        }
        getSession();
    }, []);


    console.log('sessions', sessions);

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
                {sessions.map((session, index) => {
                    console.log('inside', session)
                    return (
                        <Session
                            key={index}
                            index={index}
                            session={session}
                            removeSession={removeSession} />
                    )
                })}
                <SessionForm addSession={addSession} />
        </div>
    );
}


export default App;