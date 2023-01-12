import { useContext} from "react";
import { AiOutlinePlus } from "react-icons/ai";

import ModalCriaCard from "../../Modules/Modais/CriaTech/modal";
import ModalEdita from "../../Modules/Modais/EditaTech/modal";
import { authoContext } from "../../Context/authorization";
import { ContAddTechs, UlCards, Card, Nivel } from "./styled-components";
import { contextDash } from "../../Context/dashContext";

const AreaLista = () => {

  const {
    setVisible,
  } = useContext(authoContext);

  const{
    selectedCard, 
    listTechs
  } = useContext(contextDash)

 
  return (
    <>
      <ContAddTechs>

        <div className="containerBtnToCreateCard">

          <h3>Tecnologias</h3>

          <button className="btnOpenModal" onClick={() => setVisible(true)}>

            <AiOutlinePlus />

          </button>
        </div>

      </ContAddTechs>
      <ModalCriaCard />
      <UlCards>

        <ModalEdita />

        {listTechs?.length === 0 ? (

          <Card>
            <h4>Nenhum card criado</h4>
          </Card>

        ) : (
          listTechs.map((element) => {

            const { id, status, title } = element;

            return (
              
              <Card key={id} onClick={() => selectedCard(id)}>

                <h4>{title}</h4>

                <div>
                  <Nivel>{status}</Nivel>
                </div>

              </Card>
            
            );
          })
        )}
      </UlCards>
    </>
  );
};

export default AreaLista;
