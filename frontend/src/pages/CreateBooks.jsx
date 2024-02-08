import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SnackbarProvider, useSnackbar } from "notistack";
import '../../src/index.css'


const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () => {
    const data = {
      title, 
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created Successfully', { variant: 'success'});
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error'});
        console.log(error);

      })
  };

  return (
    <div className='container'>
      <BackButton />
      <h1 className='title'>Add A New Book</h1>
      { loading ? <Spinner /> : '' }
      <div className='new__book__form'>
        <div className=''>
          <input
            placeholder='Book Title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=''
            />
        </div>
        <div className=''>
          <input
            placeholder='Book Author'
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className=''
            />
        </div>
        <div className=''>
          
          <input
            placeholder='Pusblished Year'
            type='text'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className=''
            />
        </div>
        <button className='button' onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBooks