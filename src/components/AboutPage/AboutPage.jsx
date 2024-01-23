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

    <div className="thankyou">
    <h1>Thank you:</h1>
    <h3>Thanks to my Taaffeite Cohort, instructor and anyone else who has helped me along my journey in completing this app. I also want to say that I am proud of each and every one of us for learning a new skill and getting to this point of Prime. I am grateful for this experience and the people in this cohort.</h3>
    </div>

    <div className="list">
      <h1>Technologies:</h1>
      <br/>
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>React</li>
        <li>Redux</li>
        <li>Sagas</li>
        <li>Express</li>
        <li>PostgresSQL</li>
        <li>CSS</li>
        <li>Material UI</li>
      </ul>
    </div>
    </div>
  );
}

export default AboutPage;
