import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to={{
        pathname: '/about',
        search: '?username=abc.xyz.com'
      }}>
        <FaQuestion size={40} />
      </Link>
    </div>
  )
}

export default AboutIconLink