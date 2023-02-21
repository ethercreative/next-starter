type Network = 'idle' | 'busy' | 'error';

export const useNetwork = (defaultStatus?: Network) => {
  const [network, setNetwork] = React.useState<Network>(defaultStatus ?? 'idle');
  return { network, setNetwork };
};
