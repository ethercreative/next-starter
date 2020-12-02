import * as React from 'react';

interface Props {
  content: string;
}

const Prose: React.FC<Props> = ({ content }) => (
  <div
    className='grid gap-y-5'
    dangerouslySetInnerHTML={{
      __html: content.replace(
        /<p>/g,
        '<p class="text-sm md:text-base leading-relaxed -my-1">',
      ),
    }}
  />
);

export default Prose;
