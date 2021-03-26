import React, {useEffect, useState} from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import OrderForm from './order_form'
import Home from './home'
import * as yup from 'yup';
import schema from './validation/formSchema'
import Confirmation from './confirmation'

const initialFormValues={
  size:'',
  sauce:'',
  instructions:'',
  pepperoni: false,
  sausage: false,
  onion: false,
  pineapple: false,
}
const initialFormErrors = {
  size:'',
  sauce:'',
  instructions:'',
  topping:''
}

const initialDisabled = true;

const App = () => {
  // const [newPizza, setNewPizza] =useState(initialFormValues)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const inputChange = (name, value) => {
      yup
          .reach(schema, name)
          .validate(value)
          .then(() => {
              setFormErrors({
                  ...formErrors,
                  [name]:'',
              });
          })
          .catch((err) => {
              setFormErrors({
                  ...formErrors,
                  [name]:err.errors,
              })
          })
      setFormValues({
          ...formValues,
          [name]:value,
      })
  }

  const formSubmit = () => {

  }
  useEffect(() => {
      schema.isValid(formValues).then((valid) => {
          setDisabled(!valid);
      });
  },[formValues])

  return (
    <div className='App'>

      <nav>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link> 
          <Link to='/help'>Help</Link> 
        </div>
        <div className='order-pizza'>

        </div>
      </nav>
      <Switch>
        <Route path='/pizza'>
          <OrderForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/confirmation'>
          <Confirmation pizza={formValues}/>
        </Route>

      </Switch>
    </div>
  );
};
export default App;
