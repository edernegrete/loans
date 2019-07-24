import React, { useEffect } from 'react';
import Table from '../components/home/table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoans } from '../actions-creators/loans';

function Home({history}) {
  const dispatch = useDispatch();

  const loans = useSelector(state => state.getIn(['loans', 'data']));
  useEffect(() => {
    if(!loans.size) dispatch(fetchLoans());
  });
  return (
    <div>
      <h3> Listado de prestamos</h3>
      <Table data={loans} history={history}/>
    </div>
  );
}

export default Home;
