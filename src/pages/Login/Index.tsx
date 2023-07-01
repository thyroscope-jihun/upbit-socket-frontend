import { useGlobalStore } from "#global-store";
import {
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  Button,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "src/components/Box";
import Flex from "src/components/Flex";
import Text from "src/components/Text";
import { Input } from "@chakra-ui/react";

const Login = () => {
  const g = useGlobalStore();
  const presenter = g.presenters.login;
  const navigate = useNavigate();

  return (
    <Container>
      <LoginContainer>
        <Flex c fw g={3}>
          <Text c="white">Access Token</Text>
          <Input
            value={presenter.accessKey}
            onChange={(e) => presenter.setAccessKey(e.target.value)}
            placeholder="Access token을 입력해주세요"
          />
        </Flex>
        <Flex c fw g={3}>
          <Text c="white">Secret Token</Text>
          <Input
            value={presenter.secretKey}
            onChange={(e) => presenter.setSecretKey(e.target.value)}
            placeholder="Secret token을 입력해주세요"
          />
        </Flex>
        <Button
          onClick={() => presenter.signIn()}
          bg={"rgb(29, 33, 55)"}
          size="md"
        >
          <Text c="white">로그인</Text>
        </Button>
      </LoginContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(29, 33, 55);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  background-color: rgb(38, 45, 70);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 20px;
  min-width: 40vw;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  width: 100%;
`;

const ListContainer = styled.div`
  height: calc(100vh - 80px);
  overflow-y: scroll;
  width: 100%;
`;

export default observer(Login);
