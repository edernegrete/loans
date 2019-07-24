import {
  put
} from 'redux-saga/effects';
import { push } from 'connected-react-router';

function * navigate(pathname, routeState) {
  yield put(push({
    pathname,
    state: routeState
  }));
}

export default navigate;
