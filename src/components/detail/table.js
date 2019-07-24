import React from 'react';
import styled from 'styled-components';
import TableHeader from './table-header';
import TableRow from './table-row';

const TableStyled = styled.div`
  margin: 1rem;
`;

function Table({data}) {
  return (
    <TableStyled >
      <TableHeader />
      {
        data.map(item => <TableRow key={item.get('period')} 
        principal={item.get('principal')}
        amount={item.get('amount')}
        date={item.get('date')}
        />)
      }
    </TableStyled>
  );
}

export default Table;
