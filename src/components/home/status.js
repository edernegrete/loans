import React from 'react';
import styled from 'styled-components';

const getBackground = (type) => {
  switch (type) {
    case 'on-time':
      return '#d2f0cf'
    case 'cancelled':
      return '#ffd5d5'
    case 'behind':
      return '#ffdec2'
    case 'completed':
      return '#d2f0cf'
    default: return '#ffd5d5';
  }
} 
const BubbleStyled = styled.div`
  width: 110px;
  height: 28px;
  border-radius: 17.5px;
  background-color: ${({ type }) => getBackground(type)};
  text-align: center;
`
function Status({label, type}) {
  return (
    <BubbleStyled type={type}>
      {type}
    </BubbleStyled>
  )
}

export default Status