import React from 'react'
import { Container, MoreBtn } from './ReUsable'
import { Link } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';

const Juz = () => {
  return (
    <Container>
      <MoreBtn>
        <Link to='/'>
          back
        </Link>
      </MoreBtn>
      <div className="juz-con">
        <h1>
          404 not found
        </h1>
        <h4>database is under construction <FiAlertTriangle /> </h4>
      </div>
    </Container>
  )
}

export default Juz