import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { ArticleType } from "../types/types";

const Article = ({ article }: { article: ArticleType }) => {
  return (
    <StyledArticle
    to={`${article.id}_${article.title.replace(/\s+/g, "-").toLowerCase()}`}
    key={article.id}
      important={article.important}
      color={article.color}>
      <StyledArticleImage src={article.image} alt="netflix" />
      <StyledArticleContent>
        <StyledArticleCategory
          important={article.important}
          color={article.color}>
          {article.category}
        </StyledArticleCategory>
        <StyledArticleTitle>{article.title}</StyledArticleTitle>
        <StyledArticleBottom>
          <StyledArticleBorder
            important={article.important}
            color={article.color}
          />
          <StyledArticleDate important={article.important}>
            {article.date}
          </StyledArticleDate>
        </StyledArticleBottom>
      </StyledArticleContent>
    </StyledArticle>
  );
};

const StyledArticleImage = styled.img`
  border-radius: 1rem;
  width: 150px;
  height: 150px;
  opacity: 0.8;
  transition: opacity 0.2s;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    opacity: 1;
  }
`;

const StyledArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  @media (max-width: 768px) {
    padding-left: 1rem;
  }
`;

const StyledArticleCategory = styled.p<{
  important: string;
  color: string;
}>`
  color: ${({ color }) =>
    color === "red"
      ? "rgb(255, 124, 107)"
      : color === "green"
      ? "rgb(48, 223, 150)"
      : color === "blue"
      ? "rgb(87, 112, 255)"
      : "#fff"};
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
  padding-bottom: 0.5rem;
  ${(props) =>
    props.important === "true" &&
    css`
      color: #fff;
    `}
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const StyledArticleTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 1rem;
  max-width: 600px;
  transition: color 0.2s;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledArticle = styled(Link)<{
  important: string;
  color: string;
}>`
  display: flex;
  padding: 1rem;
  margin: 1rem;
  align-items: center;
  border-radius: 1rem;
  background-color: #2c3049;
  transition: transform 0.2s ease-in-out;

  &:hover {
    position: relative;
    transform: translateY(-5px);
  }

  &:hover ${StyledArticleTitle} {
    color: ${({ color }) =>
      color === "red"
        ? "rgb(255, 124, 107)"
        : color === "green"
        ? "rgb(48, 223, 150)"
        : color === "blue"
        ? "rgb(87, 112, 255)"
        : "#fff"};
  }

  &:hover ${StyledArticleImage} {
    opacity: 1;
  }

  ${(props) =>
    props.important === "true" &&
    css`
      background-image: linear-gradient(
        -45deg,
        rgb(66, 95, 255),
        rgb(169, 95, 221)
      );

      &:hover ${StyledArticleTitle} {
        color: #fff;
      }
    `}

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(0px);
    }
  }
`;

const StyledArticleBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledArticleBorder = styled.div<{
  important: string;
  color: string;
}>`
  width: 4rem;
  height: 5px;
  border-radius: 1rem;
  background-image: ${({ color }) =>
    color === "red"
      ? "linear-gradient(45deg, rgb(255, 124, 107) 0%, rgb(255, 124, 107) 30%, rgb(255, 117, 179) 100%)"
      : color === "green"
      ? "linear-gradient(45deg, rgb(48, 223, 150), rgb(138, 255, 206))"
      : color === "blue"
      ? "linear-gradient(rgb(87, 112, 255), rgb(87, 112, 255))"
      : "linear-gradient(45deg, rgb(255, 124, 107) 0%, rgb(255, 124, 107) 30%, rgb(255, 117, 179) 100%)"};

  ${(props) =>
    props.important === "true" &&
    css`
      background-image: none;
      background-color: #fff;
    `}

  @media (max-width: 768px) {
    width: 3rem;
  }
`;

const StyledArticleDate = styled.p<{ important: string }>`
  color: #d1d1d1;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  margin-top: 1rem;

  ${(props) =>
    props.important === "true" &&
    css`
      color: #fff;
    `}

  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 0;
    letter-spacing: 0rem;
  }
`;

export default Article;
