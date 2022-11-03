export default class Hangman {
    private words: string[]

    private currentWord: string
    private underscoredWord: string

    private tries: number
    private maxTries: number

    private replaceAt(index: number, letter: string): string {
        return this.underscoredWord.substring(0, index) + letter + this.underscoredWord.substring(index + 1)
    }

    private turnToUnderscore(word: string): string {
        return Array.from(word).map(x => '_').join('')
    }

    public constructor(words: string[], maxTries: number) {
        this.words = words
        this.tries = 0
        this.maxTries = maxTries
        this.currentWord = this.getRandomKeyword()
        this.underscoredWord = this.turnToUnderscore(this.currentWord)
    }

    public keywordClickHandle(letter: string, element: HTMLElement): void {
        const hasLetter: boolean = this.currentWord.toLowerCase().includes(letter)

        element.classList.add('active', hasLetter.toString())

        if(hasLetter) {
            const regex: RegExp = new RegExp(letter, 'ig')
            const indexes: number[] = Array.from(this.currentWord.matchAll(regex)).map(x => x.index) as number[]

            for(let index of indexes) this.underscoredWord = this.replaceAt(index, letter)

            return
        }

        this.tries++
    }

    public getRandomKeyword(): string {
        return this.words[ Math.floor( Math.random() * this.words.length ) ] 
    }

    public isWordGuessed(): boolean {
        return this.currentWord.toLowerCase() === this.getFixedWord.toLowerCase()
    }

    public isGameLost(): boolean {
        return this.tries > this.maxTries
    }

    public returnAlphabet(): string[] {
        return [...Array(26)].map((_, i) => String.fromCharCode(i + 97))
    }

    public restartGame(): void {
        this.currentWord = this.getRandomKeyword()
        this.underscoredWord = this.turnToUnderscore(this.currentWord)
        this.tries = 0
    }

    public get getFixedWord(): string {
        return this.underscoredWord
    }

    public get getWord(): string {
        return this.currentWord
    }

    public get getAttempt(): number {
        return this.tries
    }
}