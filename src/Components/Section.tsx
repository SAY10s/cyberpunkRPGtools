import { toLowercaseRemovePolishAndReplaceSpaces } from "../utils/utils.ts";

interface Props {
  sectionName: string;
  children: React.ReactNode; // To oznacza, że children mogą być dowolnymi elementami React
}

const Section: React.FC<Props> = ({ children, sectionName }) => {
  const sectionId = toLowercaseRemovePolishAndReplaceSpaces(sectionName);

  return (
    <section id={sectionId}>
      <h2>{sectionName}</h2>
      {children}
    </section>
  );
};

export default Section;
