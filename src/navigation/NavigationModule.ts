import React from 'react';

import { NavigationContainerRef, StackActions } from '@react-navigation/native';
import { StackParamList } from './type';

export const EliteCodeNavigationRef: React.RefObject<NavigationContainerRef<StackParamList>> | undefined = React.createRef();

export async function navigate(screenName: string, params?: any) {
  // @ts-ignore
  EliteCodeNavigationRef.current?.navigate(screenName, params);
}

export function push(screenName: string, params?: any) {
  EliteCodeNavigationRef.current.dispatch(StackActions.push(screenName, params));
}

export function pop() {
  EliteCodeNavigationRef.current.dispatch(StackActions.pop());
}

export function goBack() {
  EliteCodeNavigationRef.current?.goBack();
}

export function popToTop() {
  const targetScreen = EliteCodeNavigationRef.current.getRootState?.()?.routes?.[0]?.name;
  if (!targetScreen) return;
  // @ts-ignore
  EliteCodeNavigationRef.current.navigate(targetScreen);
}

export function replace(screenName: string, params?: any) {
  EliteCodeNavigationRef.current.dispatch(StackActions.replace(screenName, params));
}

export function getCurrentScreenName() {
  return EliteCodeNavigationRef.current?.getCurrentRoute()?.name || '';
}

export const EliteCodeNavigationModule = {
  navigate,
  push,
  pop,
  goBack,
  popToTop,
  replace,
  getCurrentScreenName,
};
