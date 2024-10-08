const WalkaDystansowa = () => {
  return (
    <section id="walka-dystansowa">
      <h2>Walka Dystansowa</h2>
      <article id="celowanie">
        <h3>Celowanie</h3>
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
      </article>
      <article id="ogien-pojedynczy">
        <h3>
          Ogień pojedynczy - PT Pojedynczego strzału w zależności od odległości
        </h3>
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
      </article>

      <article id="ogien-ciagly">
        <h3>Ogień ciągły - PT Ognia ciągłego w zależności od odległości</h3>
        <p>
          Kosztuje Akcję i zużywa 10 sztuk amunicji. (Musisz mieć min. 10 sztuk
          ammo w magazynku). Używasz umiejętności Ogień Ciągły (x2)(REF).
          Wykorzystuje się poniższą tabelę, zamiast tabeli Ognia Pojedynczego.
          Strzelając ogniem ciągłym, nie można celować.
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
      </article>
      <article id="inne-ataki-dystansowe">
        <div>
          <h3>Dobywanie, upuszczanie i CHowanie broni</h3>
          <p>
            Dobycie łatwo dostępnej broni nie jest akcją (o ile masz jedną rękę
            wolną). Upuszczenie również nie jest akcją. Schowanie broni do
            kabury, kieszeni, plecaka etc. jest akcją.
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
      </article>
    </section>
  );
};

export default WalkaDystansowa;
