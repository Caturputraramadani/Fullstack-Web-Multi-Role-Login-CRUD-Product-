import React, {useEffect} from 'react'
import Layout from './Layout'
import FormAddUser from '../components/FormAddUser'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const AddUser = () => {
  const dispatch  = useDispatch();
  const Navigate  = useNavigate();
  const {isError, user} = useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);

  useEffect(()=>{
    if(isError){
      Navigate("/");
    }
    if(user && user.role !== "admin"){
      Navigate("/dashboard");
    }
  }, [isError, user,  Navigate]);

  return (
    <Layout>
        <FormAddUser/>
    </Layout>
  )
}

export default AddUser