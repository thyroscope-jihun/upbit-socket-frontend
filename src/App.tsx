import React from "react";
import { global } from "#assets/theme/global-styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import pageRoutes from "./routes/pages";
import styled from "@emotion/styled";
import ProtectedRoute from "./routes/protectedRoute";
import { GlobalStoreContext, useGlobalStore } from "#global-store";
import { observer } from "mobx-react";
import { ChakraProvider } from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

function App() {
  const g = useGlobalStore();

  return (
    <GlobalStoreContext.Provider value={useGlobalStore()}>
      {/* <Global styles={global} /> */}
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            {pageRoutes.map(({ isPublic, path, element, ...rest }) => {
              const isAuthenticated = true;
              return (
                <Route
                  key={path}
                  path={path}
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <div>
                        {!rest?.hideHeader && <Header />}
                        <Container>{element}</Container>
                      </div>
                    </ProtectedRoute>
                  }
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </GlobalStoreContext.Provider>
  );
}

const Container = styled.div`
  padding-top: 80px;
`;

export default observer(App);
