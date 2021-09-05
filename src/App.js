import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tracker from '@openreplay/tracker';

const tracker = new Tracker({
    projectKey: 'O6Q7rBQdbxGMWgIeL7rd',
    ingestPoint: 'https://app.openreplaytutorial.ga/ingest',
});
tracker.start();

function App() {
    const [counter, setCounter] = useState(0);

    const handleClick = (operation = '+') => {
        if (operation === '-') {
            if (counter < 0) {
                throw new Error('Number is less than zero');
            }
            setCounter((prevState) => (prevState -= 1));
            return;
        }
        setCounter((prevState) => (prevState += 1));
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    Learn React
                </a>
            </header>
            <main>
                <button onClick={() => handleClick('-')}>-</button>
                <p>{counter}</p>
                <button onClick={() => handleClick()}>+</button>
            </main>
        </div>
    );
}

export default App;
