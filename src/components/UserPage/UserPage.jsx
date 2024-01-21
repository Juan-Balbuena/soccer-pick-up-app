import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Card, CardContent, Typography, Paper, Grid, Button } from '@mui/material';



function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const games = useSelector((store) => store.games);
  const history = useHistory();

  useEffect(() => {
    console.log(games);
    dispatch({ type: 'FETCH_GAMES' })
    console.log(games);
  }, []);

  const removeGame = (id) => {
    dispatch({ type: 'REMOVE_GAME', payload: id });
  }

  const editGame = (id) => {
    history.push(`/mygames/edit/${id}`)
    // dispatch({ type: 'EDIT_GAME'});
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
                          <Typography sx={{ fontWeight: 'bold' }}>Created By: {game ? game.created_by : ''}<br />
                            Location: {game.location}<br />
                            Date: {game.date}</Typography>
                        </div>
                        <Button variant="contained" color="success" onClick={() => editGame()}>JOIN</Button>
                        {
                          user.id == game.user_id && (
                            <>
                              <Button variant="outlined" color="primary" onClick={() => editGame(game.id)}>EDIT</Button>
                              <Button variant="outlined" color="error" onClick={() => removeGame(game.id)}>DELETE</Button>
                            </>

                          )
                        }


                      </>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </section>
        <>
        </>
        <h3>Games that you add or others add will go here for you to join. Will only be able to edit games you created.</h3>
        <LogOutButton className="btn" />
      </div>

    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
