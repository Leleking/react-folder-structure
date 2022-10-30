import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import useExampleHook from "../../hooks/useExampleHook";
import DashboardLayout from "../../layout/DashboardLayout";

export default function Home() {
  const { sample } = useExampleHook();
  return (
    <DashboardLayout>
      <div style={{ padding: "10px" }}>
        <div>This is my home page </div>
        <Button>
          <Link to="/login">Login</Link>
        </Button>
        <div>{sample} hook data</div>
      </div>
    </DashboardLayout>
  );
}
