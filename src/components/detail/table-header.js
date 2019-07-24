import React from 'react';
import styled from 'styled-components';

const TableHeaderStyled = styled.div`
  margin: 1rem;
`;
const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
function TableHeader() {
  return (
    <TableHeaderStyled>
      <ListStyled>
        <li>Cliente</li>
        <li>Prestamo</li>
        <li>Fecha</li>
        <li>Estado</li>
      </ListStyled>
    </TableHeaderStyled>
  );
}

export default TableHeader;
