const ObrazeniaIOslony = () => {
  return (
    <section id="obrazenia-i-oslony">
      <h2>Obrażenia, rany krytyczne i osłony</h2>
      <div id="otrzymywanie-obrazen">
        <h3>Otrzymywanie obrażeń</h3>

        <div className="rzuty-box">
          <p>Zawsze, gdy otrzymujesz obrażenia:</p>

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
        </div>
        <p>
          *Niektóre źródła obrażeń, takie jak trucizny i ogień, omijają pancerz.
        </p>
      </div>
      <div id="progi-ran">
        <h3>Progi ran</h3>
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
                -4 do wszystkich Akcji
                <br />
                -6 do RUCHU (minimum 1)
                <br />
                Musi wykonać Test Przeżywalności na początku każdej swojej Tury.
                Śmiertelnie ranna postać zawsze otrzymuje ranę krytyczną oraz
                modyfikator -1 do testów przeżywalności.
              </td>
              <td>
                PT 15, aby wyleczyć się do 1 Punktu Życia i zostać Nieprzytomnym
                (nieobecny przez 1 minutę)
              </td>
            </tr>
            <tr>
              <td>Martwy</td>
              <td>Jedno nieudane Test Przeżywalności</td>
              <td>Śmierć</td>
              <td>Broskie nie żyje. Jak go chcesz kurwa stabilizować.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="rany-krytyczne-ciala">
        <h3>Rany Krytyczne Ciała</h3>
        <table>
          <thead>
            <tr>
              <th>Rzut (2d6)</th>
              <th>Obrażenie</th>
              <th>Efekt Obrzędu</th>
              <th>Przyspieszona Naprawa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>Odcięta Ręka</td>
              <td>
                Odcięta Ręka jest nieobecna. Natychmiast wypuszczasz przedmioty
                trzymane w tej ręce. Kara za Test Przeżywalności wzrasta o 1.
              </td>
              <td>
                N/A
                <br />
                Operacja DV17
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Odcięta Dłoń</td>
              <td>
                Odcięta Dłoń jest nieobecna. Natychmiast wypuszczasz przedmioty
                trzymane w tej dłoni. Kara za Test Przeżywalności wzrasta o 1.
              </td>
              <td>
                N/A
                <br />
                Operacja DV17
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Zapadnięte Płuco</td>
              <td>
                -2 do RUCHU (minimum 1). Kara za Test Przeżywalności wzrasta o
                1.
              </td>
              <td>
                Paramedic
                <br />
                DV15
                <br />
                Operacja DV15
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Złamane Żebra</td>
              <td>
                Na koniec każdej Tury, w której poruszasz się dalej niż
                4m/jardów pieszo, ponosisz dodatkowe obrażenia od tego
                Krytycznego Urazu bezpośrednio na swoich Punktach Życia.
              </td>
              <td>
                Paramedic
                <br />
                DV13
                <br />
                Paramedic DV15 lub Operacja DV13
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Złamana Ręka</td>
              <td>
                Złamana Ręka nie może być używana. Natychmiast wypuszczasz
                przedmioty trzymane w tej ręce.
              </td>
              <td>
                Paramedic
                <br />
                DV13
                <br />
                Paramedic DV15 lub Operacja DV13
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Obcy Obiekt</td>
              <td>
                Na koniec każdej Tury, w której poruszasz się dalej niż
                4m/jardów pieszo, ponosisz dodatkowe obrażenia od tego
                Krytycznego Urazu bezpośrednio na swoich Punktach Życia.
              </td>
              <td>
                Pierwsza Pomoc lub
                <br />
                Paramedic DV13
                <br />
                Szybka Naprawa trwale usuwa Efekt Obrzędu
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Złamana Noga</td>
              <td>-4 do RUCHU (minimum 1)</td>
              <td>
                Paramedic
                <br />
                DV13
                <br />
                Paramedic DV15 lub Operacja DV13
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Rozciągnięty Mięsień</td>
              <td>-2 do Ataków Wręcz</td>
              <td>
                Pierwsza Pomoc lub
                <br />
                Paramedic DV13
                <br />
                Szybka Naprawa trwale usuwa Efekt Obrzędu
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Uraz Kręgosłupa</td>
              <td>
                W następnej Turze nie możesz podjąć Akcji, ale nadal możesz
                wykonać Akcję Ruchu. Kara za Test Przeżywalności wzrasta o 1.
              </td>
              <td>
                Paramedic
                <br />
                DV15
                <br />
                Operacja DV15
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Zmiażdżone Palce</td>
              <td>-4 do wszystkich Akcji związanych z tą ręką</td>
              <td>
                Paramedic
                <br />
                DV13
                <br />
                Operacja DV15
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>Odcięta Noga</td>
              <td>
                Odcięta Noga jest nieobecna. -6 do RUCHU (minimum 1). Nie możesz
                unikać ataków. Kara za Test Przeżywalności wzrasta o 1.
              </td>
              <td>
                N/A
                <br />
                Operacja DV17
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="rany-krytyczne-glowy">
        <h3>Rany Krytyczne Głowy</h3>
        <table>
          <thead>
            <tr>
              <th>Rzut (2d6)</th>
              <th>Obrażenie</th>
              <th>Efekt Obrzędu</th>
              <th>Przyspieszona Naprawa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>Utrata Oka</td>
              <td>
                Utracone Oko jest nieobecne. -4 do Ataków Dystansowych i Testów
                Percepcji związanych z wzrokiem. Kara za Test Przeżywalności
                wzrasta o 1.
              </td>
              <td>
                N/A
                <br />
                Operacja DV17
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Uraz Mózgu</td>
              <td>
                -2 do wszystkich Akcji. Kara za Test Przeżywalności wzrasta o 1.
              </td>
              <td>
                N/A
                <br />
                Operacja DV17
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Uszkodzone Oko</td>
              <td>
                -2 do Ataków Dystansowych i Testów Percepcji związanych z
                wzrokiem.
              </td>
              <td>
                Paramedic
                <br />
                DV15
                <br />
                Operacja DV13
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Wstrząs Mózgu</td>
              <td>-2 do wszystkich Akcji.</td>
              <td>
                Pierwsza Pomoc lub
                <br />
                Paramedic DV13
                <br />
                Szybka Naprawa trwale usuwa Efekt Obrzędu
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Złamana Szczęka</td>
              <td>-4 do wszystkich Akcji związanych z mówieniem.</td>
              <td>
                Paramedic
                <br />
                DV13
                <br />
                Paramedic lub Operacja DV13
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Obcy Obiekt</td>
              <td>
                Na koniec każdej Tury, w której poruszasz się dalej niż
                4m/jardów pieszo, ponosisz dodatkowe obrażenia od tego
                Krytycznego Urazu bezpośrednio na swoich Punktach Życia.
              </td>
              <td>
                Pierwsza Pomoc lub
                <br />
                Paramedic DV13
                <br />
                Szybka Naprawa trwale usuwa Efekt Obrzędu
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Uraz Szyi</td>
              <td>Kara za Test Przeżywalności wzrasta o 1.</td>
              <td>
                Paramedic
                <br />
                DV13
                <br />
                Paramedic lub Operacja DV13
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Spękany Czaszka</td>
              <td>
                Celne Strzały w głowę mnożą obrażenia, które przechodzą przez
                SP, przez 3 zamiast 2. Kara za Test Przeżywalności wzrasta o 1.
              </td>
              <td>
                Paramedic
                <br />
                DV15
                <br />
                Paramedic lub Operacja DV15
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Uszkodzone Ucho</td>
              <td>
                Za każdym razem, gdy poruszasz się dalej niż 4m/jardów pieszo w
                Turze, nie możesz wykonać Akcji Ruchu w następnej Turze.
                Dodatkowo, otrzymujesz -2 do Testów Percepcji związanych z
                słuchaniem.
              </td>
              <td>
                Paramedic
                <br />
                DV13
                <br />
                Operacja DV13
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Zmiażdżona Tchawica</td>
              <td>
                Nie możesz mówić. Kara za Test Przeżywalności wzrasta o 1.
              </td>
              <td>
                N/A
                <br />
                Operacja DV15
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>Utrata Ucha</td>
              <td>
                Utracone Ucho jest nieobecne. Za każdym razem, gdy poruszasz się
                dalej niż 4m/jardów pieszo w Turze, nie możesz wykonać Akcji
                Ruchu w następnej Turze. Dodatkowo, otrzymujesz -4 do Testów
                Percepcji związanych z słuchaniem. Kara za Test Przeżywalności
                wzrasta o 1.
              </td>
              <td>
                N/A
                <br />
                Operacja DV17
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="test-przezywalnosci">
        <h2>Test Przeżywalności</h2>
        <p>
          Na początku każdej z Twoich Tur, gdy jesteś Śmiertelnie Ranny, musisz
          wykonać test Ratowania Życia.
        </p>

        <div className="rzuty-box">
          <p>Rzuć kostką d10.</p>
          <p>Sukces: Wynik &lt; BC - Modyfikatory</p>
        </div>
        <p>
          Każdy nieudany rzut daje Mod -1. Wynik 10 na kostce to automatyczna
          śmierć.
        </p>
      </div>
      <div id="oslony">
        <h3>Osłony</h3>
        <table>
          <thead>
            <tr>
              <th>Rodzaj Osłony</th>
              <th>Gruba HP</th>
              <th>Cienka HP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stal</td>
              <td>50 HP</td>
              <td>25 HP</td>
            </tr>
            <tr>
              <td>Kamień</td>
              <td>40 HP</td>
              <td>20 HP</td>
            </tr>
            <tr>
              <td>Szkło pancerne</td>
              <td>30 HP</td>
              <td>15 HP</td>
            </tr>
            <tr>
              <td>Beton</td>
              <td>25 HP</td>
              <td>10 HP</td>
            </tr>
            <tr>
              <td>Drewno</td>
              <td>20 HP</td>
              <td>5 HP</td>
            </tr>
            <tr>
              <td>Plastik/etc.</td>
              <td>15 HP</td>
              <td>0 HP</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ObrazeniaIOslony;
