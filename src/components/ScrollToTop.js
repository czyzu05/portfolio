import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import animateScrollTo from "animated-scroll-to";

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      animateScrollTo(0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
};

export default withRouter(ScrollToTop);
