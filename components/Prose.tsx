import * as React from 'react';

interface Props {
  content: string;
}

const Prose: React.FC<Props> = ({ content }) => {
  if (!content) {
    return null;
  }

  let _content = content;

  if (!_content.includes('</')) {
    _content = `<p class="text-sm md:text-base lg:text-lg leading-relaxed -my-1">${content.replace(
      /(?:\r\n|\r|\n)/g,
      '</p><p>',
    )}</p>`;
  }

  return (
    <div
      className='grid gap-5'
      dangerouslySetInnerHTML={{
        __html: (_content ?? '')
          .replace(/<p><\/p>/g, '')
          .replace(
            /<p>/g,
            '<p class="text-sm md:text-base lg:text-lg leading-relaxed -my-1">',
          )
          .replace(
            /<h2>/g,
            '<h2 class="text-xl md:text-2xl lg:text-3xl -my-1">',
          )
          .replace(
            /<h3>/g,
            '<h3 class="text-lg md:text-xl lg:text-2xl font-bold text-green -my-1">',
          )
          .replace(/<ol>/g, '<ol class="list-decimal pl-4 grid gap-y-2">')
          .replace(/<ul>/g, '<ul class="list-disc pl-4 grid gap-y-2">')
          .replace(
            /<li>/g,
            '<li class="text-sm md:text-base lg:text-lg -my-1">',
          ),
      }}
    />
  );
};

export default Prose;
