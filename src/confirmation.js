import React from 'react'

export default function Confirmation({pizza}) {
    return (
        <div className='confirmation container'>
            <div className='pizza-detail'>
                <h2>Congrats! Pizza is on its way!</h2>
                <p>Your Name: {pizza.name}</p>
                <h3>Your order details:</h3>
                <p>Size: {pizza.size}</p>
                <p>Sauce: {pizza.size}</p>
                {
                    !!pizza.toppings && !!pizza.toppings.length &&
                <div>
                    Toppings:          
                    <ul>
                        {pizza.toppings.map((topping, id) => <li key={id}>{topping}</li>)}
                    </ul>
                </div>
                }
                <p>Special Instructions:{pizza.instructions}</p>
            </div>
        </div>
    )
}