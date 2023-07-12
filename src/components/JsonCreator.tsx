import { useState, useEffect } from "react";
import articlesData from "../utils/data.json";

import { ArticleType } from "../types/types";

import ArticleMain from "./ArcticleCreator/ArticleMain";
import ArticleHeader from "./ArcticleCreator/ArticleHeader";
import ArticleParagraph from "./ArcticleCreator/ArticleParagraph/ArticleParagraph";
import styled from "styled-components";

function JSONEditor() {
  const [articles, setArticles] = useState<ArticleType[]>(
    articlesData.articles
  );
  const [newArticle, setNewArticle] = useState<ArticleType>({
    id: articles.length > 0 ? articles[articles.length - 1].id + 1 : 0,
    category: "",
    title: "",
    date: "",
    image: "",
    alt: "",
    important: "",
    color: "",
    header: {
      title: "",
      image: "",
      caption: "",
    },
    contents: [
      {
        title: "",
        paragraphs: [""],
      },
    ],
  });

  const [isColorSelected, setIsColorSelected] = useState(false);
  const [isImportanceSelected, setIsImportanceSelected] = useState(false);

  useEffect(() => {
    const updatedData = { ...articlesData, articles: articles };
    console.log(updatedData);
  }, [articles]);

  const handleFieldChange = (fieldName: keyof ArticleType, value: string) => {
    setNewArticle((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleAddArticle = () => {
    if (isColorSelected && isImportanceSelected) {
      setNewArticle((prevState) => {
        const updatedArticle: ArticleType = { ...prevState };
        updatedArticle.id =
          articles.length > 0 ? articles[articles.length - 1].id + 1 : 0;
        setArticles((prevArticles) => [...prevArticles, updatedArticle]);
        return {
          id: articles.length > 0 ? articles[articles.length - 1].id + 1 : 0,
          category: "",
          title: "",
          date: "",
          image: "",
          alt: "",
          important: "",
          color: "",
          header: {
            title: "",
            image: "",
            caption: "",
          },
          contents: [
            {
              title: "",
              paragraphs: [""],
            },
          ],
        };
      });
      setIsColorSelected(false);
      setIsImportanceSelected(false);
    } else {
      alert("Veuillez sélectionner une couleur et une importance");
    }
  };

  return (
    <StyledArticleContenu>
      <StyledArticleContenuContainer>
        <h2>Creez un article</h2>
        <ArticleMain
          newArticle={newArticle}
          handleFieldChange={handleFieldChange}
          setIsColorSelected={setIsColorSelected}
          isColorSelected={isColorSelected}
          isImportanceSelected={isImportanceSelected}
          setIsImportanceSelected={setIsImportanceSelected}
        />
        <ArticleHeader newArticle={newArticle} setNewArticle={setNewArticle} />
        <ArticleParagraph
          newArticle={newArticle}
          setNewArticle={setNewArticle}
        />
        <StyledArticleAdd onClick={handleAddArticle}>
          Ajouter l'article
        </StyledArticleAdd>
      </StyledArticleContenuContainer>
    </StyledArticleContenu>
  );
}

const StyledArticleContenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`;

const StyledArticleContenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 20px 0;
  width: 100%;
  max-width: 800px;

  h2 {
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      45deg,
      rgb(87, 112, 255),
      rgb(184, 107, 255)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: rgb(87, 112, 255);
    font-size: 2rem;
    line-height: 1.5rem;
    padding: 0.5rem 0;
    text-align: center;
  }

  h3 {
    color: rgb(87, 112, 255);
    font-size: 1.5rem;
    line-height: 1.5rem;
    padding: 0.5rem 0;
    text-align: center;
  }

  label {
    margin-bottom: 0.5rem;
  }
  input {
    margin-bottom: 1rem;
    padding: 1rem;
    color: #fff;
    background-color: #424866;
    border: 0px;
    border-radius: 1rem;
    resize: none;
    outline: none;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.05rem;
  }
`;

const StyledArticleAdd = styled.a`
  color: green;
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin: 5rem 0;
  padding: 0.5rem 0;
  text-align: center;
  border: 1px solid green;
  border-radius: 1rem;
  cursor: pointer;
`;

export default JSONEditor;
