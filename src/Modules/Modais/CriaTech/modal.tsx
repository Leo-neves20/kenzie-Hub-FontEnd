import { useContext } from "react";
import { Modal } from "@nextui-org/react";
import { Select } from "@chakra-ui/react";
import { Input, Spacer } from "@nextui-org/react";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { authoContext } from "../../../Context/authorization";
import { Header, FormMain } from "./styled-components";
import { BtnPrimary } from "../../Button/button";
import { contextDash } from "../../../Context/dashContext";
import {iCard} from "../../../interface/interfaces"

const schema = yup
  .object({
    title: yup.string().required("Campo obrigatório"),
  })
  .required();

const ModalCreateCard = () => {
  const {resgisterTechnology}        = useContext(contextDash);
  const {visible, setVisible}   = useContext(authoContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCard>({
    resolver: yupResolver(schema),
  });

  const submitTech = (data: iCard) => {
    resgisterTechnology(data);
  };

  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <Modal
      aria-labelledby='modal-title'
      open={visible}
      onClose={closeHandler}
      className='modalAdd'
    >
      <Header>
        <h2>Cadastrar Tecnologia</h2>
        <button onClick={() => closeHandler()}>
          <MdClose />
        </button>
      </Header>

      <Spacer y={0.5} />

      <FormMain onSubmit={handleSubmit(submitTech)}>
        <div className='containerNameTech'>
          <Input
            label='Nome'
            type='text'
            placeholder='Digite aqui seu nome'
            color='default'
            width='100%'
            size='md'
            helperText={errors.title?.message}
            {...register('title')}
          />
        </div>

        <Spacer y={0.9} />

        <div className='containerSelect'>
          <label htmlFor='selecStatus'>Selecionar status</label>

          <Select
            id='selecStatus'
            size='md'
            /* icon="none" */
            bg='#343B41'
            borderColor='transparent'
            {...register('status')}
          >
            <option value='Iniciante'>Iniciante</option>
            <option value='Intermediário'>Intermediário</option>
            <option value='Avançado'>Avançado</option>
          </Select>
        </div>

        <Spacer y={0.9} />

        <BtnPrimary type="submit">Cadastrar Tecnologia</BtnPrimary>
      </FormMain>
    </Modal>
  );
};

export default ModalCreateCard;
