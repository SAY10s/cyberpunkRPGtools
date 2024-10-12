interface Props {
  articleName: string;
  children: React.ReactNode; // To oznacza, że children mogą być dowolnymi elementami React
}
const Article: React.FC<Props> = ({ children, articleName }) => {
  return (
    <article>
      <h3>{articleName}</h3>
      {children}
    </article>
  );
};

export default Article;
