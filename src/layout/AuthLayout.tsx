import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>Auth Layout configuration goes here</div>
      <div>{children}</div>
    </div>
  );
}
