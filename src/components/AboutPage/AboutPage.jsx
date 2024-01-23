import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>About:</h1>
        <br/>
        <h3>As I get older I find it harder to schedule time to do something I love. With Soccer Pick-Me-Up, you'll be able to enjoy playing soccer again without the hassle or worry about your availability! Try it for yourself and see just how easy it is to add joy to your life with a little Pick-Me-Up.</h3>
      </div>
    </div>
  );
}

export default AboutPage;
