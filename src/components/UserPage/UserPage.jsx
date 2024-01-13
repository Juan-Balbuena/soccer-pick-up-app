import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const sample = useSelector((store) => store.sample);

  useEffect(() => {
    dispatch({ type: 'FETCH_SAMPLE'})
  }, []);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      
      <section className='sample'>
        {sample.map(sample => {
          return (
            <div key={sample.id}>
              <h3>Created By: {sample.created_by}<br/>
              Location: {sample.location}<br />
              Date: {sample.date}</h3>
            </div>
          )
        })}
      </section>
      
      <h3>Games that you add or others add will go here for you to join. Will only be able to edit games you created.</h3>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
