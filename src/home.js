import React from 'react'
import { useHistory } from 'react-router-dom'
import pizzaimg from './Pizza.jpg'

export default function Home() {
    const history = useHistory()
    const routeToPizza = () => {
        history.push('/pizza')
    }
    return (
        <div className='home-page'>
            <img
                className='pizza-image'
                src={pizzaimg}
                alt=''
            />
            <button
                onClick={routeToPizza}
                className='pizza-button'
            >
                Pizza?
            </button>
        </div>
    )
}