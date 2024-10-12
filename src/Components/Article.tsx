import { toLowercaseRemovePolishAndReplaceSpaces } from "../utils/utils.ts";

interface Props {
  articleName: string;
  children: React.ReactNode; // To oznacza, że children mogą być dowolnymi elementami React
}

const Article: React.FC<Props> = ({ children, articleName }) => {
  const articleId = toLowercaseRemovePolishAndReplaceSpaces(articleName);

  return (
    <article id={articleId}>
      <h3>{articleName}</h3>
      {children}
    </article>
  );
};

export default Article;
