import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { ArticleType } from "../types/types";
import articlesData from "../utils/data.json";

import ArticleContenu from "../components/ArticleContenu";
import ArticleHero from "../components/ArticleHero";

const Article = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const [article, setArticle] = useState<ArticleType | null>(null);

  useEffect(() => {
    const foundArticle = articlesData.articles.find(
      (article) =>
        `${article.id}_${article.title.replace(/\s+/g, "-").toLowerCase()}` ===
        articleId
    ) as ArticleType;
    setArticle(foundArticle || null);
  }, [articleId]);

  if (!article) {
    return <div>Article non trouvé.</div>;
  }

  return (
    <StyledArticle>
      <StyledArticleContainer>
        <ArticleHero article={article} />
        <ArticleContenu article={article} />
      </StyledArticleContainer>
    </StyledArticle>
  );
};

const StyledArticle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  padding: 0 1rem;
`;

export default Article;
