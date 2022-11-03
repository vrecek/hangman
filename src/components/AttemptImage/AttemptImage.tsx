import React from 'react'
import '../../css/AttemptImage.css'
import FigureImage from '../Common/FigureImage'
import start from '../../images/i0.png'
import i0 from '../../images/i1.png'
import i1 from '../../images/i2.png'
import i2 from '../../images/i3.png'
import i3 from '../../images/i4.png'
import i4 from '../../images/i5.png'
import i5 from '../../images/i6.png'
import i6 from '../../images/i7.png'
import { IAttemptImage } from '../../interfaces/interfaces'

const AttemptImage = ({attempt}: IAttemptImage) => {
    const images: string[] = [start, i0, i1, i2, i3, i4, i5, i6]

    return (
        <section className="attempt-image">

            <FigureImage source={images[attempt]} altTxt='Attempt' />

        </section>
    )
}

export default AttemptImage