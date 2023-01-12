import { Link, Navigate } from "react-router-dom";
import { Input, Spacer, Loading } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { BtnPrimary } from "../../Modules/Button/button";
import { useContext } from "react";
import { authoContext } from "../../Context/authorization";
import { HeaderLogin, LoginForm } from "./styled-components";
import { ContLoading } from "../../Style/Load";
import { iLogin } from "../../interface/interfaces";

const schema = yup
  .object({
    email: yup.string().required('Coloque seu email'),
    password: yup.string().required('Coloque sua senha'),
  })
  .required();

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(schema),
  });

  const { load, onSubmitLogin } = useContext(authoContext);

  const token = localStorage.getItem('@TokenUser:');

  if (token) {
    return <Navigate to='/dashboard' replace />;
  } else {
    return !load ? (
      <>
        <HeaderLogin>

          <h1>Kenzie Hub</h1>

        </HeaderLogin>
        <LoginForm onSubmit={handleSubmit(onSubmitLogin)}>

          <header>

            <h2>Login</h2>

          </header>

          <div className='containerLogin'>

            <Input
              label='Email'
              type='email'
              placeholder='Digite aqui seu email'
              color='default'
              width='90%'
              size='md'
              helperText={errors.email?.message?.toString()}
              {...register('email')}
            />

            <Spacer y={0.9} />

            <Input.Password
              clearable
              type='password'
              label='Senha'
              placeholder='Digite sua senha'
              color='default'
              width='90%'
              size='md'
              helperText={errors.password?.message?.toString()}
              {...register('password')}
            />

            <BtnPrimary type='submit' className='btnLogin'>
              Entrar
            </BtnPrimary>

            <span className='spanLoginMensagem'>
              Ainda não possui uma conta?
            </span>

            <Link to='/register'>Cadastre-se</Link>
            
          </div>
        </LoginForm>
      </>
    ) : (
      <ContLoading>
        <Loading color='error' size='lg' />
      </ContLoading>
    );
  }
};

export default FormLogin;
