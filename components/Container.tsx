import * as React from 'react';

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className='mx-auto w-full px-6 md:px-10 2xl:container'>{children}</div>
);
