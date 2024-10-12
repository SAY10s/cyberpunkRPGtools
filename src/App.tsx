import NavBar from "./Zasady/NavBar/NavBar.tsx";
import AkcjeIInicjatywa from "./Zasady/AkcjeIInicjatywa/AkcjeIInicjatywa.tsx";
import WalkaDystansowa from "./Zasady/WalkaDystansowa/WalkaDystansowa.tsx";
import WalkaWZwarciu from "./Zasady/WalkaWZwarciu/WalkaWZwarciu.tsx";
import ObrazeniaIOslony from "./Zasady/ObrazeniaIOslony/ObrazeniaIOslony.tsx";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <AkcjeIInicjatywa />
        <WalkaDystansowa />
        <WalkaWZwarciu />
        <ObrazeniaIOslony />
      </main>
    </>
  );
}

export default App;
