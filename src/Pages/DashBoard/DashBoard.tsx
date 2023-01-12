
import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authoContext } from "../../Context/authorization";

import AreaLista from "./lista";
import { NavBar, HeaderDashBoard, MainDashBoard } from "./styled-components";

const DashBoard = () => {

  const { user } = useContext(authoContext);

  const navigate = useNavigate();

  const cleanLocalStorage = () => {
    localStorage.clear();
    navigate('/');
  };

    if (user) {
      return (
        <>
          <NavBar>

            <div className='containerNavBar'>

              <h1>Kenzie Hub</h1>

              <Link
                className='btnSairNavBar'
                to={'/'}
                onClick={() => cleanLocalStorage()}
              >
                Sair
              </Link>

            </div>

          </NavBar>

          <HeaderDashBoard>

            <div>

              <h2>Olá, {user.name}</h2>
              <span>{user.course_module} (Introdução ao Frontend)</span>

            </div>

          </HeaderDashBoard>
          <MainDashBoard>

            <AreaLista />
            
          </MainDashBoard>
        </>
      );
    } else {
      return <Navigate to='/' replace />;
    }
};

export default DashBoard;
