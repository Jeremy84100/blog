import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { ArticleType } from "../types/types";

import articlesData from "../utils/data.json";

const ArticlePage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const [article, setArticle] = useState<ArticleType | null>(null);

  useEffect(() => {
    const foundArticle = articlesData.articles.find(
      (article: ArticleType) =>
        `${article.id}_${article.title.replace(/\s+/g, "-").toLowerCase()}` ===
        articleId
    );
    setArticle(foundArticle || null);
  }, [articleId]);

  if (!article) {
    return <div>Article non trouvé.</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.date}</p>
      {/* Le reste du contenu de l'article */}
    </div>
  );
};

export default ArticlePage;
