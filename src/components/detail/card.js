import React from 'react'
import styled from 'styled-components';

const StyledCard = styled.div`
margin-top: 1rem;
width: 328px;
height: 148px;
border-radius: 6px;
box-shadow: 0 6px 15px 0 rgba(212, 220, 226, 0.5), 0 2px 13px -3px rgba(230, 241, 254, 0.5);
background-color: #ffffff;
`
function Card({type, name, score,email, rate, amount}) {
  return (
    <StyledCard>
      {
        type === 'user' &&
        <div>
          <p>{name}</p>
          <p>{email}</p>
          <p>{score}</p>
        </div>
      }
      {
        <div>
          <p>{rate}</p>
          <p>{amount}</p>
        </div>
      }
    </StyledCard>
  )

}
export default Card