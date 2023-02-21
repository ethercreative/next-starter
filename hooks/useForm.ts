export const useForm = <T>(initialValues: T) => {
  type FieldName = keyof typeof initialValues;

  interface UpdatedValue {
    key: FieldName;
    value: any;
  }

  const reducer = (prevState: T, { key, value }: UpdatedValue) => ({
    ...prevState,
    [key]: value,
  });

  const [state, dispatch] = React.useReducer(reducer, initialValues);

  const onChange = React.useCallback((key: FieldName, value: typeof initialValues[typeof key]) => {
    dispatch({
      key,
      value,
    });
  }, []);

  return { state, onChange };
};
