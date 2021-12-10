import * as React from 'react';

type AllowedValues = string | number | boolean;

interface KeyVal {
  [x: string]: AllowedValues;
}

export const useForm = <FormTypes extends KeyVal>(initialValues: FormTypes) => {
  type FieldName = keyof typeof initialValues;

  interface UpdatedValue {
    key: FieldName;
    value: AllowedValues;
  }

  const reducer = (prevState: FormTypes, { key, value }: UpdatedValue) => ({
    ...prevState,
    [key]: value,
  });

  const [state, dispatch] = React.useReducer(reducer, initialValues);

  const onChange = React.useCallback((key: FieldName, value: AllowedValues) => {
    dispatch({
      key,
      value,
    });
  }, []);

  return { state, onChange };
};
