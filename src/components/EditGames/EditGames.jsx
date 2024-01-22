import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SaveIcon from '@mui/icons-material/Save';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/material';


function EditGameForm(){
    
    
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const game = useSelector(store => store.gameDetailsReducer);
    const [createdBy, setCreatedBy] = useState(game.created_by);
    const [location, setLocation] = useState(game.location);
    const [date, setDate] = useState(game.date);

    useEffect(() => {
        console.log("hi");
        dispatch({
            type: 'FETCH_DETAILS',
            payload: id
        })
        console.log("hello");
    }, [])

    useEffect(() => {
        if (game) {
            setCreatedBy(game.createdBy);
            setLocation(game.location);
            setDate(game.date);
        }
    }, [game])

   

    const backButton = () => {
        history.push(`/user`)
    }
    
    const editGame = () => {
        dispatch({
            type: 'FINAL_EDIT',
            payload: {
                id: id,
                created_by: createdBy,
                location: location,
                date: date,
            }
        })
        history.push(`/user`)
    }

    return (
        <>
        <Container>
            <div>
                <h3>Edit Game</h3>
            </div>
            <form>
                <div>
                    <label>Location:
                        <input
                        type='text'
                        value={location}
                        onChange={(event) => {
                        console.log(location);
                            setLocation(event.target.value)}
                        }
                        />
                    </label>
                </div>
                <div>
                    <label>Date:</label>
                        <input
                        size='small'
                        type='date'
                        value={date}
                        onChange={(event) => setDate(event.target.value)}/>
                    
                </div>
            </form>
            <div className='buttonContainer'>
                <Button onClick={backButton} variant='contained' startIcon={<ArrowBackIosIcon />}>Back</Button>
                <Button className='right' onClick={editGame} variant='contained' startIcon={<SaveIcon />}>Save</Button>
            </div>
        </Container>
        
        
        
        </>
    )

}









export default EditGameForm;
