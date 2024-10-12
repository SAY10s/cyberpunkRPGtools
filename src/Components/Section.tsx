interface Props {
  sectionName: string;
  children: React.ReactNode; // To oznacza, że children mogą być dowolnymi elementami React
}

const Section: React.FC<Props> = ({ children, sectionName }) => {
  return (
    <section>
      <h2>{sectionName}</h2>
      {children}
    </section>
  );
};

export default Section;
