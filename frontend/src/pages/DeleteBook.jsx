import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { enqueueSnackbar, useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqeueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted Successfully.', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  }

  return (
    <div className='container'>
      <BackButton />
      <h1 className='title'>Delete Book</h1>
      { loading ? <Spinner /> : ''}
      <div className='container__delete'>
        <h3 className='deletebook__text'>You sure you want to delete this book?</h3>
        <button className='button' onClick={handleDeleteBook}>Yes, Delete</button>
      </div>
    </div>
  )
}

export default DeleteBook