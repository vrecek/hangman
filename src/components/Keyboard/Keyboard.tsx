import React from 'react'
import '../../css/Keyboard.css'
import { IKeyboard } from '../../interfaces/interfaces'

const Keyboard = ({game, setAttempt, setWord}: IKeyboard) => {
    const keyboardRef = React.useRef<HTMLDivElement>(null)
    const alphabet: string[] = game.returnAlphabet()

    const buttonRestartFunc = (finishComponent: HTMLElement) => {
        game.restartGame()

        finishComponent.remove()

        const keys: Element[] = Array.from(keyboardRef.current!.children)
        for(let x of keys) x.className = 'key'

        setAttempt(game.getAttempt)
        setWord(game.getFixedWord)
    }

    const createFinishComponent = (hTxt: string): Element => {
        const divWrap = document.createElement('div')
        divWrap.className = 'finish-wrap'

        const section = document.createElement('section')

        const btn = document.createElement('button')
        btn.textContent = 'Restart'

        btn.addEventListener('click', () => buttonRestartFunc(divWrap))

        const h2 = document.createElement('h2')
        h2.textContent = hTxt

        const div = document.createElement('div')

        const p = document.createElement('p')
        p.className = 'txt'
        p.textContent = 'Correct word'

        const p2 = document.createElement('p')
        p2.className = 'word'
        p2.textContent = game.getWord

        div.appendChild(p)
        div.appendChild(p2)

        section.appendChild(h2)
        section.appendChild(div)
        section.appendChild(btn)

        divWrap.appendChild(section)

        return divWrap
    }

    const handleClick = (e: React.MouseEvent, letter: string): void => {
        const t: HTMLElement = e.target as HTMLElement
        
        game.keywordClickHandle(letter, t)

        let result: string = ''

        if(game.isWordGuessed()) result = 'You win'
        else if(game.isGameLost()) result = 'You lost'

        if(result) {
            document.body.appendChild(createFinishComponent(result))
        }

        setAttempt(game.getAttempt)
        setWord(game.getFixedWord)
    }

    return (
        <section ref={keyboardRef} className="keyboard">

            {
                alphabet.map((x, i) => (
                    <div 
                    onClick={(e) => handleClick(e, x)} 
                    className='key' 
                    key={i}>
                        {x.toUpperCase()}
                    </div>
                ))
            }

        </section>
    )
}

export default Keyboard