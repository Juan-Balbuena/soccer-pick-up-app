import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Card, CardContent, Typography, Paper, Grid, Button } from '@mui/material';
import GameItem from '../GameItem/GameItem';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const games = useSelector((store) => store.games);

  
  useEffect(() => {
    dispatch({ type: 'FETCH_GAMES'})
  }, []);

  const removeGame = (id) => {
    dispatch({ type: 'REMOVE_GAME', payload: id});
  }

  return (
    <>
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <br />
      <br />
      <section className='sample'>
      <Grid container spacing={3}> 
      {games.map(game => {
          return (
      <Grid item xs={12}>

      <Card>
        <CardContent> 
          <>
        
            <div key={game.id}>
              <Typography sx={{ fontWeight: 'bold' }}>Created By: {game.created_by}<br/>
              Location: {game.location}<br/>
              Date: {game.date}</Typography>
            </div>
            <Button variant="contained" color="error" onClick={() => removeGame(game.id)}>Delete</Button>
            <Button variant="contained" color="primary">Edit</Button>
         </>
         </CardContent> 
        </Card>
        </Grid>
        )
      })}
        </Grid> 
      </section>
      <>
      {/* <GameItem /> */}
      </>
      <h3>Games that you add or others add will go here for you to join. Will only be able to edit games you created.</h3>
      <LogOutButton className="btn" />
    </div>
    
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
