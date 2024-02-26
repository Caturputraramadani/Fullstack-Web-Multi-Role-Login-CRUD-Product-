import React, {useEffect} from 'react'
import Layout from './Layout'
import Welcome from '../components/Welcome'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const Dashboard = () => {
  const dispatch  = useDispatch();
  const Navigate  = useNavigate();
  const {isError} = useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);

  useEffect(()=>{
    if(isError){
      Navigate("/");
    }
  }, [isError, Navigate]);

  return (
    <Layout>
        <Welcome/>
        Don't give up 🐤
    </Layout>
  )
}

export default Dashboard