import * as React from 'react';

export const useBoolean = (defaultStatus?: boolean) => {
  const [boolean, setBoolean] = React.useState<boolean>(defaultStatus ?? false);
  return [boolean, setBoolean];
};
