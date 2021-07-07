import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from '../containers/HomePage/HomePage'
import Login from '../containers/Login/Login'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Signup from '../containers/Signup/Signup';
import ProductPage from '../containers/ProductListingPage/ProductPage';
const Routes=()=>{
 return(
   <>
  <Header/>
   <Switch>
   <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path='/home' component={HomePage}/>
      {/* <Route  path='/products' component={ProductPage}/> */}
      <Route  path={['/products']} component={ProductPage}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Signup}/>
    </Switch>
    <Footer/>
    </>
    )
}

export default Routes