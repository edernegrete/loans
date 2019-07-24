import React, { useEffect } from 'react';
import Card from '../components/detail/card'
import Table from '../components/detail/table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoans, getLoan } from '../actions-creators/loans';
import styled from 'styled-components';
const StyledCards = styled.div`
  display: flex;
  justify-content: space-between;
`

function Detail({match}) {
  const dispatch = useDispatch();
  const loanDetail = useSelector(state => state.getIn(['loans', 'detail']));
  const loans = useSelector(state => state.getIn(['loans', 'data']));
  useEffect(() => {
    if(!loans.size) dispatch(fetchLoans());
    if(!loanDetail.size) dispatch(getLoan(match.params.id));
  });
  const detail = loanDetail.get(0)
  return (
    <div>
      {detail && 
      <div>
        <h3>Detalle del préstamo</h3>
        <StyledCards>
          <Card type="user" {...detail}/>
          <Card type="amount" {...detail}/>
        </StyledCards>
        <Table data={detail.payments}></Table>
      </div>
    }
      
    </div>
  );
}

export default Detail;
