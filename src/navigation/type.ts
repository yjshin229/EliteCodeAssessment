import { BottomNavigation } from './BottomNavigation';

type ValueType = string | number | boolean;
export type Union<T extends { [key: string]: ValueType } | ReadonlyArray<ValueType>> =
  T extends ReadonlyArray<ValueType> ? T[number] : T extends { [key: string]: infer U } ? U : never;

export const Stacks = {
  BottomNavigation: 'BottomNavigation',
  HomeDetailScreen: 'HomeDetailScreen',
} as const;
export type Stacks = Union<typeof Stacks>;

export type StackParamList = {
  [Stacks.BottomNavigation]: object;
  [Stacks.HomeDetailScreen]: object;
};
