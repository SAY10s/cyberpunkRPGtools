const AkcjeIInicjatywa = () => {
  return (
    <section id="akcje-i-inicjatywa">
      <h2>Akcje i inicjatywa</h2>
      <article id="inicjatywa">
        <h3>Inicjatywa</h3>
        <p>
          Każda tura zajmuje 3 sekundy. Wszystkie tury dzieją się +/- w tym
          samym czasie w trakcie jednej rundy.
        </p>
        <div className="rzuty-box">
          <p>Na start walki, wszyscy rzucają na inicjatywę:</p>
          <p>REF + 1k10</p>
        </div>
        <p>
          Remisy rozstrzyga się dodatkowym rzutem postaci, które zremisowały.
        </p>
        <div className="rzuty-box">
          <p>Każda tura składa się z:</p>
          <p>1 Akcja ruchu + 1 inna Akcja</p>
        </div>
      </article>
      <article id="skrot-akcji">
        <h3>Skrót Akcji</h3>
        <table>
          <thead>
            <tr>
              <th>Akcja</th>
              <th>Opis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ruch</td>
              <td>
                Przemieszczasz się o tyle metrów, ile wynosi twój RUCH x2 (lub o
                liczbę pół równą wartości RUCH)
              </td>
            </tr>
            <tr>
              <td>Atak</td>
              <td>Wykonaj atak wręcz lub dystansowy.</td>
            </tr>
            <tr>
              <td>Duszenie</td>
              <td>Dusisz przeciwnika, którego pochwyciłeś.</td>
            </tr>
            <tr>
              <td>Wyposaż/Odłóż Tarczę</td>
              <td>
                Wyposażenie i odłożenie tarczy zajmuje Akcję. Patrz sekcja
                "Korzystanie z Tarczy" na str. 183.
              </td>
            </tr>
            <tr>
              <td>Wejście do Pojazdu</td>
              <td>
                Wejdź do pojazdu. Patrz sekcja "Walka Pojazdów" na str. 189.
              </td>
            </tr>
            <tr>
              <td>Wstawanie</td>
              <td>
                Wstań po byciu Przewróconym. Będąc Przewróconym, dopóki nie
                użyjesz tej Akcji, nie możesz użyć Akcji Ruchu.
              </td>
            </tr>
            <tr>
              <td>Złapanie</td>
              <td>
                Złap i trzymaj przeciwnika lub chwyć trzymany przez niego
                przedmiot.
              </td>
            </tr>
            <tr>
              <td>Wstrzymanie Akcji</td>
              <td>
                Wstrzymaj Akcję do późniejszego momentu w Kolejce Inicjatywy.
                Musisz wybrać określone zdarzenie, które uruchomi Akcję, lub
                konkretny numer w Kolejce Inicjatywy, kiedy Akcja się odbędzie,
                a także określić, jaka to Akcja i jaki jest jej cel.
              </td>
            </tr>
            <tr>
              <td>Ludzka Tarcza</td>
              <td>
                Wyposaż przeciwnika, którego Złapałeś, jako Ludzką Tarczę.
              </td>
            </tr>
            <tr>
              <td>Przeładowanie</td>
              <td>
                Całkowicie przeładuj i wymień magazynek broni na jeden typ
                amunicji.
              </td>
            </tr>
            <tr>
              <td>Bieg</td>
              <td>
                Wykonaj dodatkową Akcję Ruchu, ale tylko jeśli już wykonałeś
                Akcję Ruchu w tej Turze.
              </td>
            </tr>
            <tr>
              <td>Uruchomienie Pojazdu</td>
              <td>
                Uruchom pojazd, aby uzyskać jego WARTOŚĆ RUCHU i przeskoczyć na
                początek Kolejki Inicjatywy.
              </td>
            </tr>
            <tr>
              <td>Stabilizacja</td>
              <td>
                Stabilizuj cel, aby rozpocząć naturalny proces leczenia lub
                wyciągnąć go ze stanu Krytycznych Ran, aby uratować mu życie.
                Patrz str. 222.
              </td>
            </tr>
            <tr>
              <td>Rzut</td>
              <td>
                Rzuć Złapanego przeciwnika na ziemię lub rzuć przedmiotem.
              </td>
            </tr>
            <tr>
              <td>Netrunning</td>
              <td>Netrunning. Nie mamy netrunnerów (chwała bogu).</td>
            </tr>
            <tr>
              <td>Użycie Przedmiotu</td>
              <td>
                Użycie przedmiotu niewymagającego rzutu na umiejętności.
                Wyciągnięcie łatwo dostępnej broni do wolnej ręki lub
                upuszczenie trzymanej broni (nie tarczy) na podłogę nie wymaga
                tej Akcji, ale schowanie trzymanej broni do kieszeni/plecaka/etc
                już tak.
              </td>
            </tr>
            <tr>
              <td>Użycie Umiejętności</td>
              <td>
                Użyj jednej ze swoich Umiejętności, aby wykonać szybką czynność.
                Dłuższa czynność będzie wymagała wielu Akcji w trakcie wielu
                Tur, a rzuty będą wykonywane, dopiero gdy czynność dobiegnie
                końca (tj. minie odpowiednia ilość 3 sekundowych tur).
              </td>
            </tr>
            <tr>
              <td>Manewr Pojazdu</td>
              <td>
                Użyj swojej Akcji podczas prowadzenia pojazdu, aby skupić się
                całkowicie na wykonaniu niebezpiecznego Manewru.
              </td>
            </tr>
          </tbody>
        </table>
      </article>
      <article id="akcja-ruchu">
        <h3>Akcja Ruchu</h3>
        <p>
          Przemieszczasz się o tyle metrów, ile wynosi twój RUCH x2 (lub o
          liczbę pół równą wartości RUCH)
        </p>
        <p>
          Jeżeli jesteś przewrócony, to musisz poświęcić akcję ruchu na wstanie,
          zanim będziesz mógł wykonać akcję ruchu.
        </p>
        <h3 id="inne-typy-ruchu">
          Inne typy ruchu - Pływanie, Wspinaczka, Skok
        </h3>
        <p>
          Inne typy ruchu skracają odległość przemieszczania się o 50%, tj. 1
          punkt RUCHU daje 1m przemieszczenia "innym typem". Skok z miejsca
          pozwala przemieścić się o 25% RUCHU, skok z rozbiegu o 50% RUCHU.
          Spadanie i tonięcie znajduje się w dziale Otrzymywanie obrażeń.
        </p>
      </article>
    </section>
  );
};

export default AkcjeIInicjatywa;
