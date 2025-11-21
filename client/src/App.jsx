import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListingDetails from './pages/ListingDetails';
import Loading from './pages/Loading';
import ManageListing from './pages/ManageListing';
import MarketPlace from './pages/MarketPlace';
import Messages from './pages/Messages';
import MyListings from './pages/MyListings';
import MyOrders from './pages/MyOrders';

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/listing/:listingId'  element={<ListingDetails/>}/>
        <Route path='/loading'  element={<Loading/>}/>
        <Route path='/create-listing'  element={<ManageListing/>}/>
        <Route path='/edit-listing/:id'  element={<ManageListing/>}/>
        <Route path='/marketpalace'  element={<MarketPlace/>}/>
        <Route path='/messages'  element={<Messages/>}/>
        <Route path='/my-listings'  element={<MyListings/>}/>
        <Route path='/my-orders'  element={<MyOrders/>}/>
      </Routes>
    </div>
  );
};

export default App;