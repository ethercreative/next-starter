import * as React from 'react';

export const Container: React.FC = ({ children }) => (
  <div className='w-full 2xl:container px-6 md:px-10 mx-auto'>{children}</div>
);
