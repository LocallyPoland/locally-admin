import React from 'react'
import s from './OrderWrapper.module.css'

const EndedOrderWrapper = ({children}) => {
    return(
        <div className={s.card}>
            {children}
        </div>
    )
}

export default EndedOrderWrapper