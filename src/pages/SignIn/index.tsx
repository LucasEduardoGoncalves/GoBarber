import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { getValidationErrors } from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';
import * as Yup from 'yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import * as Icons from '../../styles/Icons';
import * as Styles from './styles';

export const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async(data: object) => {

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatorio').email('Digite um email valido'),
        password: Yup.string().min(6, 'Minino de 6 caracteres')
      })
      formRef.current?.setErrors({
        name: 'o nome é gay'
      })

      await schema.validate(data, {
        abortEarly: false
      });

      console.log(data);
    } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
    }
  }, [])

  return (
    <Styles.Container>
        <Styles.Content>
            <img src={logoImg} alt="GoBarber" />

            <Form ref={formRef} onSubmit={handleSubmit}>
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