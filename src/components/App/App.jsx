import './App.css';
import React, {useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer/';
import { setScreenWidth } from '../../store/slices/app';
import { useDispatch, useSelector } from 'react-redux';
import AppRoutes from '../../routes';
import {getCompanyInfo} from '../../store/slices/profile'

function App() {
  const companyQuantityInfo = useSelector(state => state.profile.companyInfo);
  const dispatch = useDispatch()
  const handleResize = () => {
    dispatch(setScreenWidth(window.innerWidth))
  }
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
  })
  useEffect(()=>{
    const accessToken = localStorage.getItem('accessToken');
    if(accessToken && !companyQuantityInfo){
      dispatch(getCompanyInfo())
    }
  },[dispatch, companyQuantityInfo])
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
