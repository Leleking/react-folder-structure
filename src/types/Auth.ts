export interface User {
  id: string;
  email: string;
  isAdmin: boolean;
  username: string;
}
export interface AuthType {
  accessToken?: string | null;
  refreshToken?: string | null;
  user?: User | null;
}
