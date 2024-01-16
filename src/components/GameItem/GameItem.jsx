import React from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Card, CardContent, Typography, Paper, Grid } from '@mui/material';



function GameItem(){
    const dispatch = useDispatch();
    const addGame = useSelector((store) => store.addGame);

    useEffect(() => {
        dispatch({ type: 'FETCH_GAME'})
    }, []);

    return(
    <>
    <section className='addGame'>
      <Grid container spacing={3}> 
      <Paper elevation={3}>
      <Card>
        <CardContent> 
          <>
        {addGame.map(addGame => {
          return (
            <div key={addGame.id}>
              <Typography sx={{ fontWeight: 'bold' }}>Created By: {addGame.created_by}<br/>
              Location: {addGame.location}<br/>
              Date: {addGame.date}</Typography>
            </div>
            
          )
        })}
         </>
         </CardContent> 
        </Card>
        </Paper>
        </Grid> 
      </section>
      </>
    )
}





export default GameItem;