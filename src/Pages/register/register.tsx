import { Input, Spacer } from "@nextui-org/react";
import { Select } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import { BtnPrimary } from "../../Modules/Button/button";
import { Link } from "react-router-dom";
import { authoContext } from "../../Context/authorization";
import { Register, Header } from "./styled-components";
import {iRegister} from "../../interface/interfaces"

interface iCadastro extends iRegister {
  confPassword?: string
}

const schema = yup
  .object({
    email: yup.string().required("Email é obrigatório"),
    password: yup
      .string()
      .matches(/[a-z]/, " Deve conter almenos uma letra minúscula  ")
      .matches(/[A-Z]/, " Deve conter almenos uma letra maiúscula  ")
      .matches(/(\W|_)/, " Deve conter almenos um caracter especial ")
      .matches(/(\d)/, " Deve conter almenos um número            ")
      .matches(/.{8,}/, " Deve conter 8 dígitos                    ")
      .required("Senha obrigatória"),
    confPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Senha precisa ser igual à senha anterior "
      ),
    name: yup.string().required("Nome obrigatório"),
    bio: yup.string().required("Bio é obrigatório"),
    contact: yup.string().required("Contato é obrigatório"),
    course_module: yup.string().required("Modulo é obrigatório"),
  })
  .required();

const FormCadastro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCadastro>({
    resolver: yupResolver(schema),
  });

  const {onSubmitRegister} = useContext(authoContext);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Header>
        <h1>Kenzie Hub</h1>

        <Link to="/">Voltar</Link>
      </Header>

      <Register onSubmit={handleSubmit(onSubmitRegister)}>
        <header className='cabecalhoForm'>
          <h2>Crie sua conta</h2>
          <span>Rapido e grátis, vamos nessa</span>
        </header>

        <div className='containerInputs'>
          <Input
            label='Nome'
            type='text'
            placeholder='Digite aqui seu nome'
            color='default'
            width='90%'
            size='md'
            helperText={errors.name?.message?.toString()}
            {...register('name')}
          />

          <Spacer y={0.9} />

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

          <Spacer y={0.9} />

          <Input.Password
            clearable
            type='password'
            label='Confirmar Senha'
            placeholder='Digite sua senha'
            color='default'
            width='90%'
            size='md'
            helperText={errors.confPassword?.message?.toString()}
            {...register('confPassword')}
          />

          <Spacer y={0.9} />

          <Input
            label='Bio'
            placeholder='Fale sobre você'
            color='default'
            width='90%'
            size='md'
            helperText={errors.bio?.message?.toString()}
            {...register('bio')}
          />

          <Spacer y={0.9} />

          <Input
            label='Contato'
            placeholder='Opção de contato'
            type='number'
            color='default'
            width='90%'
            size='md'
            helperText={errors.contact?.message?.toString()}
            {...register('contact')}
          />

          <Spacer y={0.9} />

          <div className='containerSelect'>
            <label htmlFor='selectModulo'>Selecionar módulo</label>
            <Select
              id='selectModulo'
              size='md'
              /* icon='none' */
              bg='#343B41'
              borderColor='transparent'
              {...register('course_module')}
            >
              <option value='Primeiro Módulo'>Primeiro Módulo</option>
              <option value='Segundo  Módulo'>Segundo Módulo</option>
              <option value='Terceiro Módulo'>Terceiro Módulo</option>
            </Select>
          </div>

          <BtnPrimary type='submit' className='btnCadastrar'>
            Cadastrar
          </BtnPrimary>
        </div>
      </Register>
    </>
  );
};

export default FormCadastro;
