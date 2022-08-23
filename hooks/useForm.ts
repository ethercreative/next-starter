import * as React from 'react';

interface KeyVal {
  [x: string]: any;
}

export const useForm = (initialValues: KeyVal) => {
  type FieldName = keyof typeof initialValues;

  interface UpdatedValue {
    key: FieldName;
    value: any;
  }

  const reducer = (prevState: KeyVal, { key, value }: UpdatedValue) => ({
    ...prevState,
    [key]: value,
  });

  const [state, dispatch] = React.useReducer(reducer, initialValues);

  const onChange = React.useCallback(
    (key: FieldName, value: typeof initialValues[typeof key]) => {
      dispatch({
        key,
        value,
      });
    },
    [],
  );

  return { state, onChange };
};
