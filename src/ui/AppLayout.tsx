import { Outlet } from "react-router";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import Main from "../components/Main";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <Main>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Main>
    </div>
  );
}
