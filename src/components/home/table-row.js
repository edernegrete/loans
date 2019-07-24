import React from 'react';
import styled from 'styled-components';
import moment from 'moment'
import Status from './status'
const RowStyled = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 6px 15px 0 rgba(212, 220, 226, 0.5), 0 2px 13px -3px rgba(230, 241, 254, 0.5);
  border-radius: 6px;
  padding: 1.5rem;
`;
const TitleStyled = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;
const DetailStyled = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  color: #4585c4;
`;
function TableRow({
  customer,
  id,
  status,
  amount,
  rate,
  date,
  handleClick
}) {
  return (
    <RowStyled onClick={handleClick}>
      <div>
        <TitleStyled>{customer.get('name')}</TitleStyled>
        <DetailStyled>{id}</DetailStyled>
      </div>
      <div>
        <TitleStyled>${amount}</TitleStyled>
        <DetailStyled>%{rate}</DetailStyled>
      </div>
      <div>
        <TitleStyled>{moment(date).format('ll')}</TitleStyled>
      </div>
      <div>
        <Status type={status}/>
      </div>
    </RowStyled>
  );
}

export default TableRow;
