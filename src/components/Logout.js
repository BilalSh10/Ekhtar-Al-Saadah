import { useNavigate } from "react-router-dom";
import { useAdminAuthContext } from "../store/authContext/AuthContext";

function Logout() {
  const navigate = useNavigate();
  const { logOut } = useAdminAuthContext();

  const handler = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <button onClick = {handler}>
        Logout
      </button>
    </div>
  );
};

export default Logout;