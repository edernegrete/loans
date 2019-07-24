import React from 'react';
import styled from 'styled-components';
import moment from 'moment'
const RowStyled = styled.div`
  width: 638px;
  height: 68px;
  border-radius: 9px;
  background-color: #edeff2;
  display: flex;
  justify-content: space-between;
`;

function TableRow({
  principal,
  amount,
  date,
}) {
  return (
    <RowStyled>
      <span>{principal}</span>
      <span>{amount}</span>
      <span>{moment(date).format('ll')}</span>
    </RowStyled>
  );
}

export default TableRow;
