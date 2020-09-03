import * as React from 'react';

export interface DimensionObject {
  width: number;
  height: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
}

export type UseDimensionsHook = [
  (node: HTMLDivElement) => void,
  DimensionObject,
];

const getDimensionObject = (node: HTMLElement): DimensionObject => {
  const rect = node.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    bottom: rect.bottom,
  };
};

export const useDimensions = (): UseDimensionsHook => {
  const [dimensions, setDimensions] = React.useState<DimensionObject>({
    width: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  const [node, setNode] = React.useState<HTMLElement | null>(null);

  const ref = React.useCallback((node) => {
    setNode(node);
  }, []);

  React.useLayoutEffect(() => {
    if (!node) {
      return;
    }

    const measure = () =>
      window.requestAnimationFrame(() =>
        setDimensions(getDimensionObject(node)),
      );

    measure();

    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [node]);

  return [ref, dimensions];
};
