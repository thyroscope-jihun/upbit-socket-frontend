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
              // const isAuthenticated = (g.jwt && !isPublic) || isPublic;
              const isAuthenticated = true;
              return (
                <Route
                  key={path}
                  path={path}
                  element={
                    <ProtectedRoute
                      isAuthenticated={isAuthenticated as boolean}
                    >
                      <div>
                        {!rest?.hideHeader && <Header />}
                        <Container hideHeader={rest.hideHeader as boolean}>
                          {element}
                        </Container>
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

const Container = styled.div<{ hideHeader: boolean }>`
  padding-top: ${(props) => (props.hideHeader ? 0 : 80)}px;
`;

export default observer(App);
