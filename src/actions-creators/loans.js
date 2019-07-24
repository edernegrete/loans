import {
  GET_LOANS,
  GET_LOAN,
  FETCH_LOANS,
  SET_LOAN_DETAIL,
  SET_LOANS
} from '../actions/loans';

const getLoans = () => ({
  type: GET_LOANS
});
const fetchLoans = () => ({
  type: FETCH_LOANS
});
const setLoans = payload => ({
  type: SET_LOANS,
  payload
});
const setLoanDetail = payload => ({
  type: SET_LOAN_DETAIL,
  payload
});
const getLoan = payload => ({
  type: GET_LOAN,
  payload
});

export {
  getLoans,
  fetchLoans,
  setLoans,
  setLoanDetail,
  getLoan
};
