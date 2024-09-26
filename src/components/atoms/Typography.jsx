import React from 'react';
import cn from '@/utils';

const Typography = ({ as: Component = 'p', className, children, ...props }) => {
  const baseStyles = {
    h1: 'text-3xl md:text-4xl xl:text-5xl font-bold',
    h2: 'text-2xl lg:text-3xl font-bold',
    h3: 'text-xl lg:text-2xl font-bold',
    h4: 'text-lg lg:text-xl font-semibold',
    p: 'text-sm lg:text-base',
    a: 'text-blue-500 hover:underline',
    span: 'text-sm',
  };

  const combinedClassName = cn(baseStyles[Component], className);

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
