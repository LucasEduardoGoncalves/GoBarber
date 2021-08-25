import React from 'react';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import * as Icons from '../../styles/Icons';
import * as Styles from './styles';

export const SignUp: React.FC = () => {

  function handleSubmit(data: object) {
    console.log(data);
  }

  return (
    <Styles.Container>
        <Styles.Background />

        <Styles.Content>
            <img src={logoImg} alt="GoBarber" />

            <Form onSubmit={handleSubmit}>
                <h1>Faça seu Cadastro</h1>

                <Input 
                  name="name" 
                  placeholder="Nome"
                  icon={Icons.User}
                />

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

                <Button type="submit">Cadastrar</Button>
            </Form>

            <Link to="/">
                <Icons.ArrowLeft /> 
                Voltar para Login
            </Link>
        </Styles.Content>
    </Styles.Container>
  );
};