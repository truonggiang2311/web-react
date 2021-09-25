import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

export default function MenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact,
    });

    return (
      <div className={match ? "active" : ""}>
        <Link to={to}>{label}</Link>
      </div>
    );
  }