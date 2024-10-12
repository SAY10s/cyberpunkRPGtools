import NavLink from "./NavLink.tsx";

const InneNav = () => {
  return (
    <ul>
      <li>
        <NavLink name="Tips and Tricks" />
        <ul className="nested-ul">
          <NavLink name="Tworzenie postaci" />
        </ul>
      </li>
    </ul>
  );
};

export default InneNav;
