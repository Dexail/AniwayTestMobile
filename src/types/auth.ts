export type AuthType = {
  AccessToken?: string;
  IdToken?: string;
};

export interface iLoginData {
  id: string;
  password: string;
}

export interface iResetData {
  email: string;
}

export interface iSetPasswordData {
  id: string;
  password: string;
  new_password: string;
}
