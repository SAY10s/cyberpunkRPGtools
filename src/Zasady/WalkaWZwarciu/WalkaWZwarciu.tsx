const WalkaWZwarciu = () => {
  return (
    <section id="walka-w-zwarciu">
      <h2>Walka w zwarciu</h2>
      <article id="bron-biala">
        <h3>Broń biała</h3>
        <p>Atakowany cel musi znajdować się do 2m od Ciebie.</p>
        <p>Broń biała ignoruje 50% pancerza (zaokrąglając w górę).</p>
        <p>
          Postacie z BC 8+ mogą używać dwuręcznych broni jak broni
          jednoręcznych.
        </p>
        <div className="rzuty-box">
          <p>Atakujący: ZW + broń biała + 1k10</p>
          <p>Broniący: ZW + Unik + 1k10</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Typ broni białej</th>
              <th>Obrażenia</th>
              <th>LA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lekka</td>
              <td>1k6</td>
              <td>2 LA</td>
            </tr>
            <tr>
              <td>Średnia</td>
              <td>2k6</td>
              <td>2 LA</td>
            </tr>
            <tr>
              <td>Duża</td>
              <td>3k6</td>
              <td>2 LA</td>
            </tr>
            <tr>
              <td>Bardzo duża</td>
              <td>4k6</td>
              <td>1 LA</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article id="bijatyka">
        <h3>Bijatyka</h3>
        <p>Obrażenia zadane bijatyką NIE IGNORUJĄ pancerza.</p>
        <p>Bijatyka ma 2LA.</p>
        <div className="rzuty-box">
          <p>Atakujący: ZW + bijatyka + 1k10</p>
          <p>Broniący: ZW + Unik + 1k10</p>
        </div>
        <table className="bijatyka-dmg">
          <thead>
            <tr>
              <th>Budowa Ciała</th>
              <th>4 lub mniej</th>
              <th>5-6 (lub cyberręka)</th>
              <th>7-10</th>
              <th>11+</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Obrażenia</td>
              <td>1k6</td>
              <td>2k6</td>
              <td>3k6</td>
              <td>4k6</td>
            </tr>
          </tbody>
        </table>
        <div id="pochwycenie">
          <h3>Pochwycenie</h3>
          <p>
            Pochwycenie wymaga wolnej ręki, która będzie wykorzystywana przez
            cały czas trwania pochwycenia.
          </p>
          <p>
            Pochwycenie pozwala chwycić i przetrzymać przeciwnika, zabrać mu coś
            z ręki lub wyrwać się z cudzego pochwycenia.
          </p>
          <p>
            Przetrzymywanie broniącego daje modyfikator -2 dla trzymającego i
            trzymanego do wszystkich akcji.
          </p>
          <p>
            Trzymając broniącego, można wykorzystać akcję na "ubranie" go jako
            Żywej Tarczy.
          </p>
          <div className="rzuty-box">
            <p>Atakujący: ZW + bijatyka + 1k10</p>
            <p>Broniący: ZW + bijatyka + 1k10</p>
          </div>
        </div>
        <div id="duszenie">
          <h3>Duszenie</h3>
          <p>Jeżeli trzymasz kogoś, możesz go dusić.</p>
          <p>Zadaje obrażenia równe BC duszącego. Duszenie ignoruje pancerz.</p>
          <p>
            Duszenie nie zabija, przy 1PW postać mdleje. Po trzech rundach
            duszenia (niezależnie od PW) duszony mdleje.
          </p>
        </div>
        <div id="rzut">
          <h3>Rzut</h3>
          <p>
            Możesz rzucić trzymanym, zadając obrażenia równe twojej BC. Ignoruje
            pancerz
          </p>
          <p>Rzut przedmiotem to ZW + Atletyka + 1k10 o PT granatkika.</p>
        </div>
      </article>
      <article id="sztuki-walki">
        <h3>Sztuki walki</h3>
        <p>Strona 178.</p>
      </article>
    </section>
  );
};

export default WalkaWZwarciu;
