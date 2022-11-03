import React from 'react';
import AttemptImage from './components/AttemptImage/AttemptImage';
import Keyboard from './components/Keyboard/Keyboard';
import Keyword from './components/Keyword/Keyword';
import './css/index.css';
import keywordsArray from './Data/keywords';
import Hangman from './functions/Hangman';

function App() {
    const [hangman] = React.useState<Hangman>(new Hangman(keywordsArray, 6))

    const [attempt, setAttempt] = React.useState<number>(0)
    const [word, setWord] = React.useState<string>(hangman.getFixedWord)

    return (
        <div className="App">

            <Keyword word={word} />

            <section className="wrap">

                <AttemptImage attempt={attempt}  />
                <Keyboard
                    setWord={setWord}
                    setAttempt={setAttempt}
                    game={hangman} 
                />

            </section>

        </div>
    );
}

export default App;
