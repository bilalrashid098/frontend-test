import styles from "./index.module.css";
import Logo from "../../assets/images/logo.svg";
import { Container } from "react-bootstrap";
import { routes } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../routes/PrivateRoute";

const Header = () => {
  const router = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    router(routes.login);
  };

  return (
    <div className={styles.header}>
      <Container className="d-flex align-items-center justify-content-between">
        <Link to={routes.home}>
          <img className={styles.logo} src={Logo} alt="logo" />
        </Link>
        <div className="d-flex align-items-center justify-content-end">
          <Link to={routes.contact}>Contact</Link>
          {isAuthenticated() && (
            <p onClick={logout} className="cursor-pointer ms-3 mb-0">
              Logout
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
