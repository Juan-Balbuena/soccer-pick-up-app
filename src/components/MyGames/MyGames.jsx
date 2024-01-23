import React from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Card, CardContent, Typography, Paper, Grid, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';



function MyGames(){
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const games = useSelector((store) => store.games);
  const history = useHistory();


    useEffect(() => {
        dispatch({ type: 'FETCH_GAMEs'})
    }, []);

    const removeGame = (id) => {
      dispatch({ type: 'REMOVE_GAME', payload: id });
    }

    const editGame = (id) => {
      console.log('asdfghjkl', id);
      history.push(`/mygames/edit/${id}`)
      // dispatch({ type: 'EDIT_GAME'});
    }

    return(
    <>
      <h2>Upcoming Games:</h2>
      
      <>
      <div className="container">
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
                            <Button variant="outlined" color="success">JOINED</Button>
                            <Button Variant="outlined" color="error">REMOVE</Button>
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
                  
                      
                </Grid>
              )
            })}
          </Grid>
        </section>
        <>
        </> 
        <br />
      </div>

    </>
     </>
     
    )
  };





export default MyGames;