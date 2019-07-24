import React from 'react';
import styled from 'styled-components';
import TableHeader from './table-header';
import TableRow from './table-row';
import { useDispatch} from 'react-redux';
import { getLoan } from '../../actions-creators/loans';

const TableStyled = styled.div`
  margin: 1rem;
`;

function Table({data}) {
  const dispatch = useDispatch();
  const getLoanInfo = id => dispatch(getLoan(id));
  return (
    <TableStyled >
      <TableHeader />
      {
        data.map(item => <TableRow key={item.get('id')} 
        customer={item.get('customer')} 
        id={item.get('id')} 
        status={item.get('status')} 
        amount={item.get('loan_amount')} 
        rate={item.get('interest_rate')} 
        date={item.get('start_date')} 
        handleClick = {() => getLoanInfo(item.get('id'))}
        />)
      }
    </TableStyled>
  );
}

export default Table;
