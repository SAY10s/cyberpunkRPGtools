import NavBar from "./Components/NavBar/NavBar.tsx";
import Zasady from "./Views/Zasady.tsx";
import Section from "./Components/Section.tsx";
import Article from "./Components/Article.tsx";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Section sectionName="Backstory postaci">
          <Article articleName="wstęp">
            <h4>Całość przeczytasz w X minut</h4>
            <p>
              Ten "poradnik" powstał, żebyśmy wszyscy się lepiej bawili. Nie
              jest to żadna świętość, a raczej luźny guide line :3
            </p>
            <p>
              Oprzemy się na wymyślonym przykładzie. Jakub chce stworzyć postać
              - Ringo, który jest Solo, byłym bokserem.
            </p>
          </Article>{" "}
          <Article articleName="1. Zapytaj GM'a">
            <h4>
              Dopytuj o to czego nie wiesz, a chcesz zawrzeć w twoim backstory
            </h4>
            <p>
              Przykładowe pytania:
              <ul>
                <li>Jakie są biedne dzielnice w Aglomeracji?</li>
                <li>Co jest charakterystyczne dla Korporacji ART-B?</li>
                <li>
                  Jakie są inne miejsca z których mogę pochodzić, poza
                  Metropolią?
                </li>
              </ul>
            </p>
          </Article>
          <Article articleName="2. Nazywaj postacie">
            <h4>
              Nazywaj postacie i precyzuj miejsca w twoim backstory! Jeżeli
              postać lub miejsce nie jest nazwane, to na 99% GM z tego nie
              skorzysta. Im więcej szczegółów tym lepiej!
            </h4>
            {/*<p>*/}
            {/*  Przykładowy (bardzo skrócony i łopatologiczny w ramach pokazania o*/}
            {/*  co chodzi) opis postaci Ringo:*/}
            {/*</p>*/}
            <p>
              Ringo urodził się <strong>poza Aglomeracją</strong>. Wychowywał
              się w biednej rodzinie razem z <strong>dwójką rodzeństwa.</strong>{" "}
              Od dziecka marzył o karierze boksera. Z biedy wyciągnął go{" "}
              <strong>jego trener</strong>, który był członkiem{" "}
              <strong>gangu</strong>. Już za młodu Ringo narobił sobie{" "}
              <strong>sporo wrogów</strong>. Kiedy dorósł, również wstąpił do{" "}
              <strong>gangu</strong>.
            </p>
            <p>
              <strong>poza aglomeracją</strong> → w Jastrzębiu-Zdroju na
              szerokiej
              <br />
              <strong>dwójką rodzeństwa</strong> → rodzeństwem - Sago i Nixie.
              <br />
              <strong>jego trener (…) członek gangu→</strong> Józef Haśnik, jego
              trener, który dzięki swojemu doświadczeniu w walce wręcz był
              ważnym Solo w gangu Szeroka.
              <br />
              <strong>sporo wrogów</strong> → sporo wrogów, m.in. podpadł Crazy
              M'owi, dilerowi z Mafii Ruptawskiej.
              <br />
              <strong>do gangu </strong>→ do gangu Szeroka, gdzie tak jak Haśnik
              był ceniony za swoje pięści.
            </p>
            <p>
              Ringo urodził się{" "}
              <strong>
                poza Aglomeracją, w Jastrzębiu-Zdroju na szerokiej
              </strong>
              . Wychowywał się w biednej rodzinie razem z{" "}
              <strong>rodzeństwem, Sago i Nixie.</strong> Od dziecka marzył o
              karierze boksera. Z biedy wyciągnął go jego trener,{" "}
              <strong>Józef Haśnik</strong>, który dzięki swojemu doświadczeniu
              w walce wręcz był ważnym <strong>Solo w gangu Szeroka.</strong>{" "}
              Już za młodu Ringo narobił sobie sporo wrogów, m.in. podpadł{" "}
              <strong>Crazy M</strong>'owi, dilerowi z
              <strong> Mafii Ruptawskiej</strong>. Kiedy dorósł, również wstąpił
              do <strong>gangu Szeroka</strong>, gdzie tak jak Haśnik był
              ceniony za swoje pięści.
            </p>
            <h4>
              Dzięki temu znamy mamy już 4 postacie, które mogą później pojawić
              się w kampanii, związek z Jastrzębiem, wroga oraz relację
              emocjonalną (wdzięczność za pomoc) wobec Haśnika.
            </h4>
          </Article>
          <Article articleName="3. Konsultuj pomysły z GM'em">
            <h4>
              Przedstawiaj twoje pomysły, możliwe, że przydadzą się do kampanii!
            </h4>
            <p>
              Tutaj ciężko mi o przykłady - rozmawiaj z GM'em, wspólnie możecie
              dostosować postać do settingu (albo rozwinąć niezagospodarowany
              jeszcze rejon świata tak, żeby pasował do backstory danej postaci)
            </p>
          </Article>
          <Article articleName="4. Twoja postać może się zmieniać">
            <h4>
              Nie tylko postacie oddziałują na świat, ale świat oddziałuje na
              postacie.
            </h4>
            <p>
              Możesz zacząć jako wierzący w sprawiedliwość dobry glina, ale z
              biegiem czasu stać się nieczułym i zatracić wiarę w ideały - może
              nawet zmienić stronę barykady i wstąpić do gangu?
            </p>
            <p>
              A może w drugą stronę? Rozpocząć jako Solo, który niczym wiedźmin
              wyrzekł się emocji, ale im więcej czasu spędził z drużyną i NPC,
              tym bliżej się z nimi związał i zaczęło mu na nich zależeć?{" "}
            </p>
            <p>
              Zmiana może też być subtelniejsza - zaczniesz jako nieogarnięta i
              zagubiona postać, a wraz z biegiem fabuły staniesz się skupiony i
              profesjonalny?
            </p>
          </Article>
          <Article articleName="5. Postacie wymienione w backstory również ewoluują">
            <h4>
              Rozwój nie tyczy się tylko twojej postaci, ale też postaci z
              twojej historii.
            </h4>
            <p>
              Nie zdziw się, jeżeli przyjaciel z dzieciństwa teraz jest w gangu
              i poderżnie Ci gardło, jeżeli sprawa będzie tego wymagać. Ale nie
              zdziw się również, jeżeli lokalny boss narkotykowy po odsiadce
              został buddystą i pacyfistą.
            </p>
          </Article>
          <Article articleName="6. Nie bój się wzorować!">
            <h4>Śmiało czerp z innych postaci</h4>
            <p>
              Możesz być drugim Silverhandem, ale nie bądź kopią 1:1, dodaj coś
              od siebie!
            </p>
          </Article>
          <Article articleName="7. Odpowiedz na te pytania">
            <h4>
              I zawrzyj to w swoim backstory. Nie musisz wziąć ich wszystkich
              pod uwagę
            </h4>
            <p>Co jest twoim celem i dlaczego akurat to?</p>
            <p>Co jest twoją motywacją i dlaczego akurat to?</p>
            <p>Skąd pochodzi twoja postać i jak to na nią wpłynęło?</p>
            <p>Jak osoba postronna opisałaby charakter twojej postaci?</p>
            <p>
              Co widzą inni, kiedy pierwszy raz spotykają twoją postać? Jak się
              porusza, jak wygląda, jakiego jest wzrostu i budowy? Jak pachnie?
            </p>
            <p>Czego się boisz?</p>
            <p>Czy masz jakiś wielki sekret?</p>
            <p>Co uformowało twoją postać? Jakie wydarzenie? Kto?</p>
            <p>Co cię denerwuje?</p>
            <p>Co robisz w wolnym czasie? Masz jakąś pasję?</p>
            <p>Co jest twoją najmocniejszą, a co najsłabszą stroną?</p>

            <h4>
              Poza krótką historią twojej postaci możesz "na chama" odpowiedzieć
              na te pytania wprost i dosłownie, na końcu backstory.
            </h4>
          </Article>
          <Article articleName="8. Keep it simple, keep it clean">
            <h4>Postaraj się zmieścić na 2 stronach A4 tekstu max. </h4>
            <p>
              Nie przejmuj się, jeżeli backstory twojej postaci nie jest
              idealne. Nie musi być! Całość (poza konkretnymi postaciami, które
              się w nim pojawią) ma pomóc tobie się wczuć, więc to ty wiesz co,
              ile i jak chcesz napisać. Jeżeli nie masz ochoty/nie czujesz się
              mocno w pisaniu opowiadań itp. to możesz opisać postać bardziej
              bezpośrednio, np. odpowiadając na pytania z punktu 7.
            </p>
          </Article>
        </Section>
        <Zasady />
      </main>
    </>
  );
}

export default App;
