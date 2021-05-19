import * as React from 'react';

const Container: React.FC = ({ children }) => (
  <div className='w-full px-6 mx-auto xl:container md:px-10'>{children}</div>
);

export default Container;
