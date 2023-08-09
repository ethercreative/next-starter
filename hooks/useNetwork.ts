import * as React from 'react';

type Network = 'idle' | 'busy' | 'error' | 'success';

export const useNetwork = (defaultStatus?: Network) => {
  const [network, setNetwork] = React.useState<Network>(defaultStatus ?? 'idle');
  return { network, setNetwork };
};
