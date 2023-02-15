import { all } from "redux-saga/effects";
import customer from "../features/components/customer/sagas";

export default function* rootSaga() {
  yield all([customer()]);
}
