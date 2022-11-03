import React from 'react'
import '../../css/Keyword.css'
import { IKeyword } from '../../interfaces/interfaces'

const Keyword = ({word}: IKeyword) => {
    return (
        <section className="keyword">

            <h1>{word}</h1>

        </section>
    )
}

export default Keyword