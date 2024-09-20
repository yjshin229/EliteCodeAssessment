type ValueType = string | number | boolean
export type Union<T extends { [key: string]: ValueType } | ReadonlyArray<ValueType>> = T extends ReadonlyArray<ValueType>
  ? T[number]
  : T extends { [key: string]: infer U }
  ? U
  : never

  export const Stacks = {
    BottomTabNavigationBar: 'BottomTabNavigationBar',
   HomeScreen:'HomeScreen',
   SavedScreen: 'SavedScreen',
   SettingsScreen: 'SettingsScreen'
  } as const
  export type Stacks = Union<typeof Stacks>

  export type StackParamList = {
    [Stacks.BottomTabNavigationBar]: object
    [Stacks.HomeScreen]: object
    [Stacks.SavedScreen]: object
    [Stacks.SettingsScreen]: object
  }