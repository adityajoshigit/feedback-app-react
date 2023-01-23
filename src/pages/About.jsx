import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Card>
      <p>
        This is a web application created using React library.
      </p>
      <p>
        Version 1.0.0
      </p>
      <p>
        <Link to='/'>
          Home Page
        </Link>
      </p>
    </Card>
  )
}

export default About