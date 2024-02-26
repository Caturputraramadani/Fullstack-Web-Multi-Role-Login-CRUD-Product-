import React,{useEffect} from 'react'
import Layout from './Layout'
import FormEditProduct from '../components/FormEditProduct'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const EditProduct = () => {
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
        <FormEditProduct/>
    </Layout>
  )
}

export default EditProduct
