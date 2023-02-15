import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PENDING, INPROGRESS } from "../../utils/helpers";
import * as actions from "./reducers";

export const useUpdateFields = (customerID = null) => {
  const dispatch = useDispatch();
  const [isnew, setIsNew] = useState(true);
  const status = useSelector((state) => state.customer.edit.status);
  let fields;
  if (customerID !== null)
    fields = useSelector((state) => state.customer.form.fields);
  else{
    fields = isnew ? "" : useSelector((state) => state.customer.form.fields)
    isnew && setIsNew((isnew)=> !isnew);
  }
    useEffect(() => {
    if (customerID && status === PENDING) {
      dispatch(actions.setForm(customerID));
    }
  }, [customerID, status]);

  return {
    fields,
    setFormField: (field, value) => {
      console.log(`Updating field ${field} to ${value}`);

      dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useNewCustomer = () => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatching CREATE_CUSTOMER action");
      dispatch(actions.createCustomer());
    },
  };
};

export const useCreateCustomerStatus = () => {
  return useSelector((state) => state.customer.create.status);
};

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();
  const status = useEditCustomerStatus();

  return {
    status,
    onSubmit: () => {
      console.log("Dispatching EDIT_CUSTOMER action");
      dispatch(actions.editCustomer(customerID));
    },
  };
};

export const useEditCustomerStatus = () => {
  return useSelector((state) => state.customer.edit.status);
};

export const useListCustomers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadCustomers());
  }, [dispatch]);

  return useSelector((state) => state.customer.list.customers);
};
