import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authoContext } from "../Context/authorization";

const RotasAutorizadas = () => {
  const { user } = useContext(authoContext);

  return user ? <Outlet /> : <Navigate to="/" replace={true} />;
};

export default RotasAutorizadas;
