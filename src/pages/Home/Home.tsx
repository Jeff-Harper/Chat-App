import React from "react";
import { AppContainer } from "../../components/AppContainer/AppContainer";
import { Outlet } from "react-router";

function Home() {
  return (
    <AppContainer>
      test
      <Outlet />
    </AppContainer>
  );
}

export { Home };
