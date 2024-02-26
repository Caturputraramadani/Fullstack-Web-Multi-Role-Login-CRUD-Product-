import React, {useEffect} from 'react'
import Layout from './Layout'
import ProductList from '../components/ProductList'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const Products = () => {
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
        <ProductList/>
    </Layout>
  )
}

export default Products