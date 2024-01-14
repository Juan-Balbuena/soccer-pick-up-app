import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {

  const [created_by, setCreatedBy] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SAGA/ADD_GAME',
      payload: {
        created_by: created_by,
        location: location,
        date: date
      }
    })
    history.push('/user')
  }

  return (
    <>
    <div className="container">
      <h2>Add a Game!</h2>
    </div>
    <form>
      <div>
        <TextField 
          label='Created By'
          color='secondary'
          size='small'
          margin='normal'
          type='text'
          value={created_by}
          onChange={(event) => setCreatedBy(event.target.value)}/>
      </div>
      <div>
        <TextField 
          label='Location'
          color='secondary'
          size='small'
          margin='normal'
          type='text'
          value={location}
          onChange={(event) => setLocation(event.target.value)}/>
      </div>
      <div>
       <label>Date: </label>
       <input
       size='small'
       type='date'
       value={date}
       onChange={(event) => setDate(event.target.value)}/>
      </div>
    </form>

    <div>
      <Button color='success' onClick={handleClick} variant='contained' startIcon={<AddCircleIcon />}>Add Game</Button>
    </div>
    </>
  );
}

export default InfoPage;
