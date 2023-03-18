import React from 'react'
import Meals from '../../assets/meals.jpeg'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <>
    <header className={classes.header} >
   <h1>ReactMeals</h1>
   <HeaderCartButton onClick={props.onShowCartHandler}  />
    </header>
  <div className={classes['main-image']}>
    <img  src={Meals} alt="A table full of delicious food!" />
    </div>  
    
    </>
    
  )
}

export default Header;