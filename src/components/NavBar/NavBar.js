import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Logo2 from "../../components/Logo2/Logo2";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav>
      <Logo2 />
      <Link to="/dashboard">Dashboard</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      <span>Welcome, {user.name}</span>
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
