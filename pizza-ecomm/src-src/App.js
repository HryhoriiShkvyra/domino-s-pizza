import React from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavbarFirstPart from './components/Navbar/NavbarFirstPart';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Pizza from './components/Pages/Pizza/Pizza';
import Drinks from './components/Pages/Drinks/Drinks';
import Sides from './components/Pages/Sides/Sides';
import Dessert from './components/Pages/Dessert/Dessert';
import Checkout from './components/Pages/Checkout/Checkout';
import PizzaConstructor from './components/Pages/PizzaConstructor/PizzaConstructor';
import './App.scss';
import CardIngredients from './components/CardIngredient/CardIngredients';
import UserProfile from './components/User/UserProfile/UserProfile'
import UserBankCards from './components/User/UserBankCards/UserBankCards';
import UserLeaveFeedback from './components/User/UserLeaveFeedback/UserLeaveFeedback';
import UserMessages from './components/User/UserMessages/UserMessages';
import UserOrders from './components/User/UserOrders/UserOrders';
import UserAddresses from './components/User/UserAddresses/UserAddresses';
import UserGroups from './components/User/UserGroups/UserGroups';
import UserContainer from './components/User/UserContainer/UserContainer';

export default function  App() {

  const Layout = () => {
    return(
      <div className='app'>
        <NavbarFirstPart/>
        <Outlet/>
        <Footer/>
      </div>
    )
    
  }
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {path: '/',
        element: <Home/>
        },
        {
          path: '/pizza/',
          element: <Pizza/>
        },
        {
          path: '/drinks/',
          element: <Drinks/>,
        },
        {
          path: '/sides/',
          element: <Sides/>,
        },
        {
          path: '/dessert/',
          element: <Dessert/>,
        },
        {
          path: '/checkout/',
          element: <Checkout/>,
        },
        {
          path: '/product/:id',
          element: <CardIngredients/>,
        },
        {
          path: '/pizza-constructor/:id',
          element: <PizzaConstructor/>,
        },
        {
          path: '/profile/',
          element: <UserProfile/>,
        },
        {
          path: '/bankcard/',
          element: <UserBankCards/>,
        },
        {
          path: '/addresses/',
          element: <UserAddresses/>,
        },
        {
          path: '/groups/',
          element: <UserGroups/>,
        },
        {
          path: '/leave-feedback/',
          element: <UserLeaveFeedback/>,
        },
        {
          path: '/messages/',
          element: <UserMessages/>,
        },
        {
          path: '/orders/',
          element: <UserOrders/>,
        },
        {
          path: '/user-container/',
          element: <UserContainer/>,
        },
      ]
    },
  ]);
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  )
}
