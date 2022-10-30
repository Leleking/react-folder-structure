import { AppRoutes } from "../utils/Constants";
import { HomePage, LoginPage, RegisterPage } from "../pages";

interface route {
  path: String;
  component: JSX.Element;
  auth?: Boolean | undefined | null;
}

export const routes: route[] = [
  // unauthenticated routes
  { path: AppRoutes.LOGIN, component: <LoginPage /> },
  { path: AppRoutes.REGISTER, component: <RegisterPage /> },

  // user routes
  { path: AppRoutes.HOME, component: <HomePage />, auth: false },

  /* You can define your own object keys and manipulate your app how you see fit */
  // { path: AppRoutes.HOME, component: <UserAccount />, auth: true },
];
