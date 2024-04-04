export type SetStateFn = (data: { [key: string]: any }) => void;

export type LanguageType = {
  key: string;
  name: string;
  label: string;
  source: string;
};

export type ClbFn = () => void;

export type Navigation = {
  navigate: (route: string, params?: any) => void;
  goBack: () => void;
}

export interface iNavigation {
  navigation: Navigation;
  route: any;
}
