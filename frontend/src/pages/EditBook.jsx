import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';



const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('AN error happened, please check console.')
        console.log(error)
      });
  }, [])

  const handleEditBook = () => {
    const data = {
      title, 
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited Successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);

      })
  };

  return (
    <div className='container'>
      <BackButton />
      <h1 className='title'>Edit Book</h1>
      { loading ? <Spinner /> : '' }
      <div className='new__book__form'>
        <div className=''>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=''
            />
        </div>
        <div className=''>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className=''
            />
        </div>
        <div className=''>
          <input
            type='text'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className=''
            />
        </div>
        <button className='button' onClick={handleEditBook}>Save</button>
      </div>
    </div>
  )
}

export default EditBook