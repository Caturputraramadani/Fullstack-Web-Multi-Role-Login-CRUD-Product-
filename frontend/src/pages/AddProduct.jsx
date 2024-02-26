import React, {useEffect} from 'react'
import Layout from './Layout'
import FormAddProduct from '../components/FormAddProduct'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const AddProduct = () => {
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
        <FormAddProduct/>
    </Layout>
  )
}

export default AddProduct