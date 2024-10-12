import Section from "../Components/Section.tsx";
import Article from "../Components/Article.tsx";
import Box from "../Components/Box.tsx";

const Zasady = () => {
  return (
    <div>
      <Section sectionName="akcje i inicjatywa">
        <Article articleName="inicjatywa">
          <p>
            Każda tura zajmuje 3 sekundy. Wszystkie tury dzieją się +/- w tym
            samym czasie w trakcie jednej rundy.
          </p>
          <Box>
            <p>Na start walki, wszyscy rzucają na inicjatywę:</p>
            <p>REF + 1k10</p>
          </Box>
          <p>
            Remisy rozstrzyga się dodatkowym rzutem postaci, które zremisowały.
          </p>
          <Box>
            <p>Każda tura składa się z:</p>
            <p>1 Akcja ruchu + 1 inna Akcja</p>
          </Box>
        </Article>
        <Article articleName="skrót akcji">
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
                  Przemieszczasz się o tyle metrów, ile wynosi twój RUCH x2 (lub
                  o liczbę pół równą wartości RUCH)
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
                <td>Pochwycenie</td>
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
                  konkretny numer w Kolejce Inicjatywy, kiedy Akcja się
                  odbędzie, a także określić, jaka to Akcja i jaki jest jej cel.
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
                  Uruchom pojazd, aby uzyskać jego WARTOŚĆ RUCHU i przeskoczyć
                  na początek Kolejki Inicjatywy.
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
                  tej Akcji, ale schowanie trzymanej broni do
                  kieszeni/plecaka/etc już tak.
                </td>
              </tr>
              <tr>
                <td>Użycie Umiejętności</td>
                <td>
                  Użyj jednej ze swoich Umiejętności, aby wykonać szybką
                  czynność. Dłuższa czynność będzie wymagała wielu Akcji w
                  trakcie wielu Tur, a rzuty będą wykonywane, dopiero gdy
                  czynność dobiegnie końca (tj. minie odpowiednia ilość 3
                  sekundowych tur).
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
        </Article>
        <Article articleName="akcja ruchu">
          <p>
            Przemieszczasz się o tyle metrów, ile wynosi twój RUCH x2 (lub o
            liczbę pół równą wartości RUCH)
          </p>
          <p>
            Jeżeli jesteś przewrócony, to musisz poświęcić akcję ruchu na
            wstanie, zanim będziesz mógł wykonać akcję ruchu.
          </p>
        </Article>
        <Article articleName="inne typy ruchu">
          <p>
            Inne typy ruchu (np. pływanie, wspinaczka, skok) skracają odległość
            przemieszczania się o 50%, tj. 1 punkt RUCHU daje 1m przemieszczenia
            "innym typem". Skok z miejsca pozwala przemieścić się o 25% RUCHU,
            skok z rozbiegu o 50% RUCHU. Spadanie i tonięcie znajduje się w
            dziale Otrzymywanie obrażeń.
          </p>
        </Article>
      </Section>
      <Section sectionName="walka dystansowa">
        <Article articleName="celowanie">
          <p>
            Pojedynczy (max 1LA - zabiera całą akcję) atak z modyfikatorem -8 do
            testu.
          </p>
          <table>
            <thead>
              <tr>
                <th>Celujesz w...</th>
                <th>Efekt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Głowę</td>
                <td>Pomnóż obrażenia, które przejdą przez pancerz, x2</td>
              </tr>
              <tr>
                <td>Trzymany przedmiot</td>
                <td>Jeżeli atak przebije pancerz, cel upuszcza przedmiot.</td>
              </tr>
              <tr>
                <td>Nogę</td>
                <td>
                  Jeżeli atak przebije pancerz, cel otrzymuje Ranę Krytyczną
                  Złamanie Nogi.
                </td>
              </tr>
            </tbody>
          </table>
        </Article>
        <Article articleName="ogień pojedynczy">
          <table>
            <thead>
              <tr>
                <th>Typy broni</th>
                <th>0 to 6m</th>
                <th>7 to 12m</th>
                <th>13 to 25m</th>
                <th>26 to 50m</th>
                <th>51 to 100m</th>
                <th>101 to 200m</th>
                <th>201 to 400m</th>
                <th>401 to 800m</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pistolety</td>
                <td>13</td>
                <td>15</td>
                <td>20</td>
                <td>25</td>
                <td>30</td>
                <td>30</td>
                <td className="na">N/A</td>
                <td className="na">N/A</td>
              </tr>
              <tr>
                <td>PM-y</td>
                <td>15</td>
                <td>13</td>
                <td>15</td>
                <td>20</td>
                <td>25</td>
                <td>35</td>
                <td className="na">N/A</td>
                <td className="na">N/A</td>
              </tr>
              <tr>
                <td>Strzelba (pocisk)</td>
                <td>13</td>
                <td>15</td>
                <td>20</td>
                <td>25</td>
                <td>30</td>
                <td className="na">N/A</td>
                <td className="na">N/A</td>
                <td className="na">N/A</td>
              </tr>
              <tr>
                <td>Karabiny Szturmowe</td>
                <td>17</td>
                <td>16</td>
                <td>15</td>
                <td>13</td>
                <td>15</td>
                <td>16</td>
                <td>25</td>
                <td className="na">30</td>
              </tr>
              <tr>
                <td>Karabiny Snajperskie</td>
                <td>30</td>
                <td>25</td>
                <td>25</td>
                <td>20</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td className="na">20</td>
              </tr>
              <tr>
                <td>Łuki i kusze</td>
                <td>15</td>
                <td>13</td>
                <td>15</td>
                <td>17</td>
                <td>20</td>
                <td>22</td>
                <td className="na">N/A</td>
                <td className="na">N/A</td>
              </tr>
              <tr>
                <td>Granatniki</td>
                <td>16</td>
                <td>15</td>
                <td>17</td>
                <td>20</td>
                <td>20</td>
                <td>22</td>
                <td>25</td>
                <td className="na">N/A</td>
              </tr>
              <tr>
                <td>Wyrzutnie rakiet</td>
                <td>17</td>
                <td>16</td>
                <td>15</td>
                <td>15</td>
                <td>20</td>
                <td>20</td>
                <td>25</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
        </Article>
        <Article articleName="ogień ciągły">
          <p>
            Kosztuje Akcję i zużywa 10 sztuk amunicji. (Musisz mieć min. 10
            sztuk ammo w magazynku). Używasz umiejętności Ogień Ciągły
            (x2)(REF). Wykorzystuje się poniższą tabelę, zamiast tabeli Ognia
            Pojedynczego. Strzelając ogniem ciągłym, nie można celować.
          </p>
          <p>
            Cele z REF 8 lub wyższym mogą zdecydować się Unikać ognia ciągłego.
          </p>
          <p>
            Jeśli trafisz, zadajesz 2k6 obrażeń, a następnie mnożysz wynik przez
            tyle, o ile przerzuciłeś PT, do maksimum 3 dla PM-ów lub 4 dla
            karabinów szturmowych. Może trafić krytycznie. Pancerz zmniejsza
            zadane obrażenia.
          </p>
          <table>
            <thead>
              <tr>
                <th>Typy broni</th>
                <th>0 to 6m</th>
                <th>7 to 12m</th>
                <th>13 to 25m</th>
                <th>26 to 50m</th>
                <th>51 to 100m</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PM-y</td>
                <td>20</td>
                <td>17</td>
                <td>20</td>
                <td>25</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Karabiny Szturmowe</td>
                <td>22</td>
                <td>20</td>
                <td>17</td>
                <td>20</td>
                <td>25</td>
              </tr>
            </tbody>
          </table>
        </Article>
        <Article articleName="inne">
          <p>Poniżej znajduje się restsza akcji</p>
          <div>
            <h3>Dobywanie, upuszczanie i Chowanie broni</h3>
            <p>
              Dobycie łatwo dostępnej broni nie jest akcją (o ile masz jedną
              rękę wolną). Upuszczenie również nie jest akcją. Schowanie broni
              do kabury, kieszeni, plecaka etc. jest akcją.
            </p>
            <p>Przygotowanie lub upuszczenie tarczy jest akcją.</p>
          </div>
          <div>
            <h3>Przeładowywanie</h3>
            <p>
              Przeładowywanie zajmuje akcję. Nie można mieszać typów amunicji w
              magazynku
            </p>
          </div>
        </Article>
      </Section>
      <Section sectionName="walka w zwarciu">
        <Article articleName="broń biała">
          <p>Atakowany cel musi znajdować się do 2m od Ciebie.</p>
          <p>Broń biała ignoruje 50% pancerza (zaokrąglając w górę).</p>
          <p>
            Postacie z BC 8+ mogą używać dwuręcznych broni jak broni
            jednoręcznych.
          </p>
          <Box>
            <p>Atakujący: ZW + broń biała + 1k10</p>
            <p>Broniący: ZW + Unik + 1k10</p>
          </Box>
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
        </Article>
        <article id="bijatyka">
          <h3>Bijatyka</h3>
          <p>Obrażenia zadane bijatyką NIE IGNORUJĄ pancerza.</p>
          <p>Bijatyka ma 2LA.</p>
          <Box>
            <p>Atakujący: ZW + bijatyka + 1k10</p>
            <p>Broniący: ZW + Unik + 1k10</p>
          </Box>
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
              Pochwycenie pozwala chwycić i przetrzymać przeciwnika, zabrać mu
              coś z ręki lub wyrwać się z cudzego pochwycenia.
            </p>
            <p>
              Przetrzymywanie broniącego daje modyfikator -2 dla trzymającego i
              trzymanego do wszystkich akcji.
            </p>
            <p>
              Trzymając broniącego, można wykorzystać akcję na "ubranie" go jako
              Żywej Tarczy.
            </p>
            <Box>
              <p>Atakujący: ZW + bijatyka + 1k10</p>
              <p>Broniący: ZW + bijatyka + 1k10</p>
            </Box>
          </div>
          <div id="duszenie">
            <h3>Duszenie</h3>
            <p>Jeżeli trzymasz kogoś, możesz go dusić.</p>
            <p>
              Zadaje obrażenia równe BC duszącego. Duszenie ignoruje pancerz.
            </p>
            <p>
              Duszenie nie zabija, przy 1PW postać mdleje. Po trzech rundach
              duszenia (niezależnie od PW) duszony mdleje.
            </p>
          </div>
          <div id="rzut">
            <h3>Rzut</h3>
            <p>
              Możesz rzucić trzymanym, zadając obrażenia równe twojej BC.
              Ignoruje pancerz
            </p>
            <p>Rzut przedmiotem to ZW + Atletyka + 1k10 o PT granatkika.</p>
          </div>
        </article>
        <article id="sztuki-walki">
          <h3>Sztuki walki</h3>
          <p>Strona 178.</p>
        </article>
      </Section>
      <Section sectionName="obrażenia i osłony">
        <Article articleName="otrzymywanie obrażeń">
          <p>Zawsze, gdy otrzymujesz obrażenia:</p>
          <Box>
            <p>
              1. Twój przeciwnik rzuca kośćmi, aby określić obrażenia swojego
              ataku.
            </p>
            <p>
              2. Od otrzymanych obrażeń odejmij OB danej lokalizacji* (jeśli
              przeciwnik nie celował, zawsze trafia w ciało). Następnie odejmij
              pozostałe obrażenia od swoich Punktów Życia.
            </p>
            <p>3. Jeżeli otrzymujesz obrażenia, pancerz spada o 1 OB.</p>
          </Box>
          <p>
            *Niektóre źródła obrażeń, takie jak trucizny i ogień, omijają
            pancerz.
          </p>
        </Article>

        <Article articleName="progi ran">
          <table>
            <thead>
              <tr>
                <th>Stan Rany</th>
                <th>Próg Rany</th>
                <th>Efekt Rany</th>
                <th>Trudność Stabilizacji (DV)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lekko Ranny</td>
                <td>Mniej niż pełne PW</td>
                <td>Brak</td>
                <td>PT 10</td>
              </tr>
              <tr>
                <td>Poważnie Ranny</td>
                <td>Mniej niż 50% Punktów Życia (zaokrąglone w górę)</td>
                <td>-2 do wszystkich Akcji</td>
                <td>PT 13</td>
              </tr>
              <tr>
                <td>Śmiertelnie Ranny</td>
                <td>Mniej niż 1 PW</td>
                <td>
                  -4 do wszystkich Akcji <br />
                  -6 do RUCHU (minimum 1) <br />
                  Musi wykonać Test Przeżywalności na początku każdej swojej
                  Tury.
                </td>
                <td>
                  PT 15, aby wyleczyć się do 1 Punktu Życia i zostać
                  Nieprzytomnym.
                </td>
              </tr>
              <tr>
                <td>Martwy</td>
                <td>Jedno nieudane Test Przeżywalności</td>
                <td>Śmierć</td>
                <td>Nie można go stabilizować.</td>
              </tr>
            </tbody>
          </table>
        </Article>

        <Article articleName="rany krytyczne ciała">
          <table>
            <thead>
              <tr>
                <th>Rzut (2d6)</th>
                <th>Obrażenie</th>
                <th>Efekt Obrażenia</th>
                <th>Przyspieszona Naprawa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>Odcięta Ręka</td>
                <td>
                  Odcięta Ręka. Natychmiast wypuszczasz przedmioty z ręki. Kara
                  +1 do Testu Przeżywalności.
                </td>
                <td>N/A, Operacja DV17</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Odcięta Dłoń</td>
                <td>Odcięta Dłoń. Kara +1 do Testu Przeżywalności.</td>
                <td>N/A, Operacja DV17</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Zapadnięte Płuco</td>
                <td>
                  -2 do RUCHU (minimum 1). Kara +1 do Testu Przeżywalności.
                </td>
                <td>Paramedic DV15, Operacja DV15</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Złamane Żebra</td>
                <td>
                  Dodatkowe obrażenia, jeśli poruszysz się dalej niż 4m. <br />
                  Paramedic DV13, Operacja DV13
                </td>
                <td>Paramedic DV15</td>
              </tr>
            </tbody>
          </table>
        </Article>

        <Article articleName="rany krytyczne głowy">
          <table>
            <thead>
              <tr>
                <th>Rzut (2d6)</th>
                <th>Obrażenie</th>
                <th>Efekt Obrażenia</th>
                <th>Przyspieszona Naprawa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>Utrata Oka</td>
                <td>
                  Utracone Oko. -4 do Ataków Dystansowych i Testów Percepcji
                  związanych ze wzrokiem. Kara +1 do Testu Przeżywalności.
                </td>
                <td>N/A, Operacja DV17</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Uraz Mózgu</td>
                <td>
                  -2 do wszystkich Akcji. Kara +1 do Testu Przeżywalności.
                </td>
                <td>N/A, Operacja DV17</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Uszkodzone Oko</td>
                <td>
                  -2 do Ataków Dystansowych i Testów Percepcji związanych ze
                  wzrokiem.
                </td>
                <td>Paramedic DV15, Operacja DV13</td>
              </tr>
            </tbody>
          </table>
        </Article>
      </Section>
    </div>
  );
};

export default Zasady;
