import React, { useEffect, useState, Fragment } from 'react';
import SessionForm from '../../Components/SessionForm';
import Session from '../../Components/Session';


const App = () => {
    const [sessions, setSession] = useState([]);
    const [defaultSession, setDefaultSession ] = useState({
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
    useEffect(() => {
        async function getSession(){
            const response = await fetch('/default-session');
            const body = await response.json();
            const iterateBody = body.map((session) => session);
            setSession(iterateBody);
        }
        getSession();
    }, []);

    console.log('sessions', sessions);

    const addSession = ({...value} = defaultSession) => {
        const newSession = [...sessions, value];
        console.log('App session', value);
        console.log('newSession', newSession);
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
                        <Fragment key={index}>
                            <Session
                                key={index}
                                index={index}
                                session={session}
                                removeSession={removeSession} />
                                <SessionForm addSession={addSession} />
                        </Fragment>
                    );
                })}
        </div>
    );
}


export default App;