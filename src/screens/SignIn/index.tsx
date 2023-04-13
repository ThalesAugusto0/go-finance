import React, { useContext } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Apple from "../../assets/Apple.svg";
import Google from "../../assets/Google.svg";
import Logo from "../../assets/Logo.svg";
import { SignInSocialButton } from "../../components/SignInSocialButton";
import { useAuth } from "../../hooks/auth";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";

export function SignIn() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Logo width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas {"\n"}
            finanças de forma {"\n"}
            muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {"\n"}
          uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton title="Entrar com Google" svg={Google} />

          <SignInSocialButton title="Entrar com Apple" svg={Apple} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
