import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './views/Home';
import { WhatWeDo } from './views/WhatWeDo';
import { NewsEvents } from './views/NewsEvents';
import { WhereWork } from './views/WhereWork';
import { ContactUs } from './views/ContactUs';
import { Navbar } from './components/Navbar';

import './App.css';
import firebase from './firebase';
import { useAuth } from './contexts/AuthContext';


export const App = () => {
    const [user, setUser] = useState({});
    const { signIn } = useAuth();

    const db = firebase.database();

    useEffect(() => {
        setUser({
            name: 'Matt',
            age: 30,
            location: 'Chicago'
        });
    }, []);
    

    const signOut = () => {
        firebase.auth().signOut()
            .then(() => {
                console.log('User signed out.');
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div>
            <header>
                <Navbar signIn={signIn} signOut={signOut} />
            </header>

            <main className="container">
                <Switch>
                    <Route exact path='/' render={() => <Home user={{...user, something: 'hello'}} />} />
                    <Route exact path='/WhatWeDo' render={() => <WhatWeDo user={{...user, something: 'hello'}} />} />
                    <Route exact path='/NewsEvents' render={() => <NewsEvents user={{ ...user, something: 'hello' }} />} />
                    <Route exact path='/WhereWork' render={() => <WhereWork user={{ ...user, something: 'hello' }} />} />
                    <Route exact path='/ContactUs' render={() => <ContactUs user={{ ...user, something: 'hello' }} />} />
                </Switch>
            </main>

            <footer>

            </footer>
        </div>
    )
}
