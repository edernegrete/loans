import {
  takeLatest,
  select,
  fork,
  put
} from 'redux-saga/effects';
import navigate from './navigate';
import loansData from '../data';  
import { setLoans, setLoanDetail } from '../actions-creators/loans';
import NProgress from 'nprogress';
import { FETCH_LOANS, GET_LOAN } from '../actions/loans';


function * fetchLoans() {
  yield fork(NProgress.start);
  const data = loansData;
  yield put(setLoans(data.loans));
  yield fork(NProgress.done);
}
function * searchLoan({ payload }) {
  const loans = yield select(state => state.getIn(['loans', 'data']))
  yield fork(NProgress.start);
  const loanFiltered = loans.filter(item => item.get('id') === payload)
  const mapLoan = loanFiltered.map(item => ({
    score: item.getIn(['customer', 'score']),
    name: item.getIn(['customer', 'name']),
    email: item.getIn(['customer', 'email']),
    rate: item.get('interest_rate'),
    amount: item.get('loan_amount'),
    payments: item.get('payments')
  }))
  yield put(setLoanDetail(mapLoan));
  yield navigate(`/loan/${payload}`);
  yield fork(NProgress.done);
}

function * getLoans() {
  yield takeLatest(FETCH_LOANS, fetchLoans);
}
function * getLoan() {
  yield takeLatest(GET_LOAN, searchLoan);
}

export {
  getLoans,
  getLoan
};
