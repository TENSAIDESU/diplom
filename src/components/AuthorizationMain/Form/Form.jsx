import React, {useEffect, useState} from 'react'
import Inputs from '../Inputs/Inputs';
import './Form.css';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { dropStatus, signIn } from '../../../store/slices/profile';
import google from './google.svg';
import yandex from './yandex.svg';
import facebook from './facebook.svg';

const Form = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const signInStatus = useSelector(state => state.profile.status)
  useEffect(()=>{
    if(signInStatus === 'done'){
      navigate("/");
      dispatch(dropStatus())
    }
    if(signInStatus === 'error'){
      setError(true);
    }
  },[error , signInStatus, navigate, dispatch])
  const  handleSubmit = async () => {
    dispatch(signIn({
      login,
      password
    }))
       
  }
  const submitDisable = !( login && password )
  return (
      <div className='form__container'>
        <div className='form__linkBox'>
          <a className='form__link' href='xxx' >Войти</a>
          <a className='form__link form__link_inactive' href='xxx'>Зарегистрироваться</a>
        </div>
        <Inputs 
        login={login} 
        password={password} 
        setLogin={setLogin} 
        setPassword={setPassword}
        error={error}
        />
        <button 
        className='form__button' 
        onClick={handleSubmit} 
        disabled={submitDisable}
        style={submitDisable ? {opacity:`${'50%'}`} : {opacity:`${'100%'}`}}>Войти</button>
        <a className='form__ResumeLink' href='xxx' >Восстановить пароль</a>
        <div className='formFooterContainer'>
      <section className='formFooterSection'>Войти через:</section>
      <div className='formFooterBox'>
        <div className='formFooterBoxItem'>
          <a className='formFooterBoxLink' href='xxx'>
            <img src={google} alt='GoogleLink' />
          </a>
        </div>
        <div className='formFooterBoxItem'>
          <a className='formFooterBoxLink' href='xxx'>
            <img src={facebook} alt='Facebook' />
          </a> 
        </div>
        <div className='formFooterBoxItem'>
          <a className='formFooterBoxLink' href='xxx'>
            <img src={yandex} alt='Yandex' />
          </a> 
        </div>
      </div> 
    </div>
      </div>
  )
}

export default Form
