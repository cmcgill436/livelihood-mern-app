import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Logo2 from "../../components/Logo2/Logo2";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Logo2 />
      <Link to="/dashboard">Dashboard</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
