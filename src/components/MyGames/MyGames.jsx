import React from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Card, CardContent, Typography, Paper, Grid } from '@mui/material';



function MyGames(){
    const dispatch = useDispatch();
    const addGame = useSelector((store) => store.addGame);
    console.log('hello world', addGame);
    useEffect(() => {
        dispatch({ type: 'FETCH_GAME'})
    }, []);

    return(
      <h1>hello world</h1>
    )
}





export default MyGames;