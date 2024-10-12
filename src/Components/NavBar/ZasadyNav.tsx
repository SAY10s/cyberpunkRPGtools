import NavLink from "./NavLink.tsx";

const ZasadyNav = () => {
  return (
    <ul>
      <li>
        <NavLink name="Akcje i inicjatywa" />
        <ul className="nested-ul">
          <NavLink name="inicjatywa" />
          <NavLink name="skrót akcji" />
          <NavLink name="Akcja ruchu" />
          <NavLink name="inne typy ruchu" />
        </ul>
      </li>
      <li>
        <NavLink name="Walka dystansowa" />
        <ul className="nested-ul">
          <NavLink name="Celowanie" />
          <NavLink name="ogień pojedynczy" />
          <NavLink name="ogień ciągły" />
          <NavLink name="inne" />
        </ul>
      </li>
      <li>
        <NavLink name="Walka w zwarciu" />
        <ul className="nested-ul">
          <NavLink name="broń biała" />
          <NavLink name="bijatyka" />
          <NavLink name="pochwycenie" />
          <NavLink name="duszenie" />
          <NavLink name="rzut" />
          <NavLink name="Sztuki walki" />
        </ul>
      </li>
      <li>
        <NavLink name="obrażenia i osłony" />
        <ul className="nested-ul">
          <NavLink name="Otrzymywanie obrażeń" />
          <NavLink name="progi ran" />
          <NavLink name="Rany Krytyczne Ciała" />
          <NavLink name="Rany Krytyczne Głowy" />
          <NavLink name="Test przeżywalności" />
          <NavLink name="Osłony" />
        </ul>
      </li>
    </ul>
  );
};

export default ZasadyNav;
