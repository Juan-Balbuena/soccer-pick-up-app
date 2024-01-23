import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Card, CardContent, Typography, Paper, Grid, Button } from '@mui/material';
import './UserPage.css'
import EditIcon from '@mui/icons-material/Edit';

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
    console.log('asdfghjkl', id);
    history.push(`/mygames/edit/${id}`)
    // dispatch({ type: 'EDIT_GAME'});
  }

  return (
    <>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        {/* <p>Your ID is: {user.id}</p> */}
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
                  <div>
                        <Typography sx={{ fontWeight: 'bold' }}>Created By: Gabe<br />
                            Location: Concordia University Dome<br />
                            Date: 2024-02-10</Typography>
                            <Button variant="outlined" color="success">JOIN</Button>
                        </div>
                        </>  
                      </CardContent>
                  </Card>
                  <br />
                  <Card>
                    <CardContent>
                      <>

                        <div key={game.id}>
                          <Typography sx={{ fontWeight: 'bold' }}>Created By: {game ? game.created_by : ''}<br />
                            Location: {game.location}<br />
                            Date: {game.date}</Typography>
                        </div>

                       
                        {/* <Button variant="outlined" color="success" onClick={() => editGame()}>JOIN</Button> */}
                        
                        {
                          user.id == game.user_id && (
                            <>
                              <Button variant="outlined" color="error" onClick={() => removeGame(game.id)}>DELETE</Button>
                              <Button variant="contained" color="inherit" onClick={() => editGame(game.id)} startIcon={<EditIcon />}></Button>

                            </>

                          )
                        }


                      </>
                    </CardContent>
                  </Card>
                  <br/>
                 
                  <Card>
                    <CardContent>
                    <>
                  <div>
                        <Typography sx={{ fontWeight: 'bold' }}>Created By: Alvin<br />
                            Location: Holy Angels Dome<br />
                            Date: 2024-01-23</Typography>
                            <Button variant="outlined" color="success">JOIN</Button>
                        </div>
                        </>  
                      </CardContent>
                  </Card>
                  <br />
                  <Card>
                    <CardContent>
                    <>
                  <div>
                        <Typography sx={{ fontWeight: 'bold' }}>Created By: Megan<br />
                            Location: Park Center Dome<br />
                            Date: 2024-02-14</Typography>
                            <Button variant="outlined" color="success">JOIN</Button>
                        </div>
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
        <br />
        <LogOutButton className="btn" />
      </div>

    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
