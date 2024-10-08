export const BrandColor = {
  ['brand-blue']: '#5373FF',
  ['brand-orange']: '#F8A00D',
};

export const NeutralColor = {
  ['neutral-0']: '#000000',
  ['neutral-10']: '#232427',
  ['neutral-20']: '#3f3f3f',
  ['neutral-30']: '#6a6d75',
  ['neutral-40']: '#8d919c',
  ['neutral-50']: '#b1b5c2',
  ['neutral-60']: '#c0c4cf',
  ['neutral-70']: '#d0d3db',
  ['neutral-80']: '#e0e2e7',
  ['neutral-90']: '#eff0f3',
  ['neutral-100']: '#ffffff',
};

export const AlertColor = {
  ['alert-critical']: '#EC221F',
  ['alert-warning']: '#FE9800',
  ['alert-minor']: '#fcd752',
  ['alert-normal']: '#14AE5C',
};

export declare namespace UniversalColorType {
  type ColorKeys = keyof typeof BrandColor | keyof typeof NeutralColor | keyof typeof AlertColor;

  type ColorMap = {
    [K in ColorKeys]: (typeof BrandColor & typeof NeutralColor & typeof AlertColor)[K];
  };
  type Value = ColorMap[ColorKeys] | keyof ColorMap | 'transparent';
}
