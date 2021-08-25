import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import * as Icons from '../../styles/Icons';
import * as Styles from './styles';

export const SignIn: React.FC = () => {

  function handleSubmit(data: object) {
    console.log(data);
  }

  return (
    <Styles.Container>
        <Styles.Content>
            <img src={logoImg} alt="GoBarber" />

            <Form onSubmit={handleSubmit}>
                <h1>Faça seu Login</h1>

                <Input 
                  name="email" 
                  placeholder="E-mail"
                  icon={Icons.Email}
                />

                <Input 
                  name="password" 
                  placeholder="Senha"
                  icon={Icons.Lock}
                />

                <Button type="submit">Entrar</Button>

                <a href="/">Esqueci minha senha</a>
            </Form>

            <Link to="/signup">
                <Icons.Login /> 
                Criar conta
            </Link>
        </Styles.Content>

        <Styles.Background />
    </Styles.Container>
  );
};