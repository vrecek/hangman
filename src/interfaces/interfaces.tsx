import Hangman from "../functions/Hangman"

export interface IAttemptImage {
    attempt: number
}

export interface IKeyword {
    word: string
}

export interface IKeyboard {
    game: Hangman
    setAttempt: React.Dispatch<React.SetStateAction<number>>
    setWord: React.Dispatch<React.SetStateAction<string>>
}