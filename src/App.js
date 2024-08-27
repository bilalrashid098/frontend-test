import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import AppRoutes from "./routes";
import { useEffect } from "react";
import withRouter from "./hooks/withRouter";

function App() {
  function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
  }
  const ScrollToTop = withRouter(_ScrollToTop);
  return (
    <Router>
      <ScrollToTop>
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}

export default App;
