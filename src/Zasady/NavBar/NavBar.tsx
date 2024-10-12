import NavLink from "./NavLink.tsx";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink id="#akcje-i-inicjatywa" text="Akcje i inicjatywa" />
          <ul className="nested-ul">
            <NavLink id="#inicjatywa" text="inicjatywa" />
            <NavLink id="#skrot-akcji" text="skrót akcji" />
            <NavLink id="#akcja-ruchu" text="Akcja ruchu" />
            <NavLink id="#inne-typy-ruchu" text="inne typy ruchu" />
          </ul>
        </li>
        <li>
          <NavLink id="#walka-dystansowa" text="Walka dystansowa" />
          <ul className="nested-ul">
            <NavLink id="#celowanie" text="Celowanie" />
            <NavLink id="#ogien-pojedynczy" text="ogień pojedynczy" />
            <NavLink id="#ogien-ciagly" text="ogień ciągły" />
            <NavLink id="#inne-ataki-dystansowe" text="inne" />
          </ul>
        </li>
        <li>
          <NavLink id="#walka-w-zwarciu" text="Walka w zwarciu" />
          <ul className="nested-ul">
            <NavLink id="#bron-biala" text="broń biała" />
            <NavLink id="#bijatyka" text="bijatyka" />
            <NavLink id="#pochwycenie" text="pochwycenie" />
            <NavLink id="#duszenie" text="duszenie" />
            <NavLink id="#rzut" text="rzut" />
            <NavLink id="#sztuki-walki" text="Sztuki walki" />
          </ul>
        </li>
        <li>
          <NavLink id="#obrazenia-i-oslony" text="obrażenia i osłony" />
          <ul className="nested-ul">
            <NavLink id="#otrzymywanie-obrazen" text="Otrzymywanie obrażeń" />
            <NavLink id="#progi-ran" text="progi ran" />
            <NavLink id="#rany-krytyczne-ciala" text="Rany Krytyczne Ciała" />
            <NavLink id="#rany-krytyczne-glowy" text="Rany Krytyczne Głowy" />
            <NavLink id="#test-przezywalnosci" text="Test przeżywalności" />
            <NavLink id="#oslony" text="Osłony" />
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
