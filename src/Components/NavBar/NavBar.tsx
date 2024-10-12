import ZasadyNav from "./ZasadyNav.tsx";
import InneNav from "./InneNav.tsx";

const NavBar = () => {
  return (
    <nav>
      <InneNav />
      <ZasadyNav />
    </nav>
  );
};

export default NavBar;
