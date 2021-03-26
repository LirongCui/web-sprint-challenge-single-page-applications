import React from 'react'
import { Link } from 'react-router-dom'


export default function OrderForm (props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
      evt.preventDefault();
      submit();
    };
    
    const onChange = (evt) => { 
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };


    return (
        <div>
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group submit">
                <h2>Build Your Own Pizza</h2>
                <div className='form-group inputs'>
                    <label>
                        <h4>Your Name</h4>
                        <input
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        />
                    </label>
                    <label>
                        <h4>Choice of Size (required)</h4>
                        <select value={values.size} onChange={onChange} name='size'>
                            <option value=''>--Select--</option>
                            <option value='xl'>Extra Large</option>
                            <option value='large'>Large</option>
                            <option value='medium'>Medium</option>
                            <option value='small'>Small</option>
                        </select>
                    </label>
                    <div className='form-group sauce'>
                        <h4>Choice of Sauce (Required)</h4>
                        <label>
                            Original Red
                            <input
                                type='radio'
                                name='sauce'
                                value='red'
                                checked={values.sauce === 'red'}
                                onChange={onChange}
                        />
                        </label>
                        <label>
                            Garlic Ranch
                            <input
                                type='radio'
                                name='sauce'
                                value='garlic'
                                checked={values.sauce === 'garlic'}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            BBQ Sauce
                            <input
                                type='radio'
                                name='sauce'
                                value='bbq'
                                checked={values.sauce === 'bbq'}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Spinach Alfredo
                            <input
                                type='radio'
                                name='sauce'
                                value='alfredo'
                                checked={values.sauce === 'alfredo'}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    <div className='form-group toppings'>
                        <h4>Add Toppings</h4>
                        <label>
                            Pepperoni
                            <input
                                type='checkbox'
                                name='pepperoni'
                                checked={values.pepperoni}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Sausage
                            <input
                                type='checkbox'
                                name='sausage'
                                checked={values.sausage}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Onions
                            <input
                                type='checkbox'
                                name='onions'
                                checked={values.onions}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Pineapple
                            <input
                                type='checkbox'
                                name='pineapple'
                                checked={values.pineapple}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    <label>
                        <h4>Speical Instructions</h4>
                        <input
                            value={values.instructions}
                            onChange={onChange}
                            name='instructions'
                            type='text'
                            placeholder="Anything else?"
                        />
                    </label>
                </div>
                <div className='errors'>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.topping}</div>
                </div>
                <Link to='/confirmation'>
                    <button disabled={disabled}>Add to Order</button>
                </Link> 
            </div>
        </form>
        </div>
    )



}