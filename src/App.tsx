import NavBar from "./Zasady/NavBar/NavBar.tsx";
import AkcjeIInicjatywa from "./Zasady/AkcjeIInicjatywa/AkcjeIInicjatywa.tsx";
import WalkaDystansowa from "./Zasady/WalkaDystansowa/WalkaDystansowa.tsx";
import WalkaWZwarciu from "./Zasady/WalkaWZwarciu/WalkaWZwarciu.tsx";
import ObrazeniaIOslony from "./Zasady/ObrazeniaIOslony/ObrazeniaIOslony.tsx";
import Section from "./Components/Section.tsx";
import Article from "./Components/Article.tsx";
import Box from "./Components/Box.tsx";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Section sectionName="żarty i kłaki">
          <Article articleName="artykuł w środku">
            <p>O rany rany jestem rozwałkowany</p>
            <Box>
              <p>Na start walki, wszyscy rzucają na inicjatywę:</p>
              <p>REF + 1k10</p>
            </Box>
          </Article>
        </Section>
        <AkcjeIInicjatywa />
        <WalkaDystansowa />
        <WalkaWZwarciu />
        <ObrazeniaIOslony />
      </main>
    </>
  );
}

export default App;
