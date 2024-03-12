"use client";
import { useAuthContext } from "../context/AuthContext";
import Boton from "../ui/Boton";

const LogoutButton = () => {
  const { logout } = useAuthContext();
  return (
    <div className="flex justify-end pb-4">
      <Boton onClick={logout} className="bg-red-500">
        Cerrar sesión
      </Boton>
    </div>
  );
};

export default LogoutButton;
