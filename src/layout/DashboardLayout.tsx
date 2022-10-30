import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div style={{ paddingBottom: 10 }}>DashboardLayout</div>
      <div>{children}</div>
    </div>
  );
}
