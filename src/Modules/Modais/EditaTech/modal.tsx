import { Modal } from "@nextui-org/react";
import { Select } from "@chakra-ui/react";
import { Input, Spacer } from "@nextui-org/react";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import {Header, FormMain} from "./styled-components";
import {BtnGrey, BtnPrimary} from "../../Button/button";
import {contextDash} from "../../../Context/dashContext";

const ModalEditCard = () => {
  const {
    setVisibleEdit,
    visibleEdit,
    cardSelected,
    postEditedCard,
    deleteCard,
  } = useContext(contextDash);

  const { register, handleSubmit } = useForm();

  const submitTech = (data: any) => {

    const newCard = {
      title: cardSelected.title,
      status: data.status
    }
   
    postEditedCard(newCard);

  };

  const closeHandler = () => {
    setVisibleEdit(false);
  };

  return (
    <Modal
      aria-labelledby='modal-title'
      open={visibleEdit}
      onClose={closeHandler}
      className='modalAdd'
    >
      <Header>
        <h2>Tecnologia Detalhes</h2>
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
            value={cardSelected.title}
            disabled
            {...register('title')}
          />
        </div>

        <Spacer y={0.9} />

        <div className='containerSelect'>
          <label htmlFor='selectLevel'>Selecionar status</label>

          <Select
            id='selectLevel'
            size='md'
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

        <div className='BtnModalEdit'>
          <BtnPrimary type='submit'>Salvar alterações</BtnPrimary>
           <BtnGrey type='button' onClick={() =>{deleteCard()}}>
            Excluir
          </BtnGrey>
        </div>
      </FormMain>
    </Modal>
  );
};

export default ModalEditCard;
