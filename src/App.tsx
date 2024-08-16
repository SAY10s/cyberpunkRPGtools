import NavBar from "./NavBar/NavBar.tsx";
import AkcjeIInicjatywa from "./AkcjeIInicjatywa/AkcjeIInicjatywa.tsx";
import WalkaDystansowa from "./WalkaDystansowa/WalkaDystansowa.tsx";
import WalkaWZwarciu from "./WalkaWZwarciu/WalkaWZwarciu.tsx";
import ObrazeniaIOslony from "./ObrazeniaIOslony/ObrazeniaIOslony.tsx";

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
