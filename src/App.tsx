import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthorizationContext from "./Context/authorization";
import DashContext from "./Context/dashContext";

import TodasRotas from "./Routes/rotas";
import GlobalStyled from "./Style/GlobalStyled";

function App() {
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
      <AuthorizationContext>
        <DashContext>
          <TodasRotas />
        </DashContext>
      </AuthorizationContext>
      <GlobalStyled />
    </>
  );
}

export default App;
