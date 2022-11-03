import React from 'react'

interface IButton {
   text: string
   additional?: JSX.Element
   action?: React.MouseEventHandler,
   cname?: string,
}

const Button = ({action, additional, cname, text}: IButton) => {
   const blank = ()=>{}

   const styles: React.CSSProperties = { pointerEvents: 'none' }
   
   return (
      <button onClick={action ?? blank} className={cname ?? ''}>

         <label style={styles}>{text}</label>
         {
            additional && <span style={styles}>{additional}</span>
         }

      </button>
   )
}

export default Button