import GoTo from "./GoTo.tsx";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <GoTo id="#akcje-i-inicjatywa" text="Akcje i inicjatywa" />
          <ul className="nested-ul">
            <GoTo id="#inicjatywa" text="inicjatywa" />
            <GoTo id="#skrot-akcji" text="skrót akcji" />
            <GoTo id="#akcja-ruchu" text="Akcja ruchu" />
            <GoTo id="#inne-typy-ruchu" text="inne typy ruchu" />
          </ul>
        </li>
        <li>
          <GoTo id="#walka-dystansowa" text="Walka dystansowa" />
          <ul className="nested-ul">
            <GoTo id="#celowanie" text="Celowanie" />
            <GoTo id="#ogien-pojedynczy" text="ogień pojedynczy" />
            <GoTo id="#ogien-ciagly" text="ogień ciągły" />
            <GoTo id="#inne-ataki-dystansowe" text="inne" />
          </ul>
        </li>
        <li>
          <GoTo id="#walka-w-zwarciu" text="Walka w zwarciu" />
          <ul className="nested-ul">
            <GoTo id="#bron-biala" text="broń biała" />
            <GoTo id="#bijatyka" text="bijatyka" />
            <GoTo id="#pochwycenie" text="pochwycenie" />
            <GoTo id="#duszenie" text="duszenie" />
            <GoTo id="#rzut" text="rzut" />
            <GoTo id="#sztuki-walki" text="Sztuki walki" />
          </ul>
        </li>
        <li>
          <GoTo id="#obrazenia-i-oslony" text="obrażenia i osłony" />
          <ul className="nested-ul">
            <GoTo id="#otrzymywanie-obrazen" text="Otrzymywanie obrażeń" />
            <GoTo id="#progi-ran" text="progi ran" />
            <GoTo id="#rany-krytyczne-ciala" text="Rany Krytyczne Ciała" />
            <GoTo id="#rany-krytyczne-glowy" text="Rany Krytyczne Głowy" />
            <GoTo id="#test-przezywalnosci" text="Test przeżywalności" />
            <GoTo id="#oslony" text="Osłony" />
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
