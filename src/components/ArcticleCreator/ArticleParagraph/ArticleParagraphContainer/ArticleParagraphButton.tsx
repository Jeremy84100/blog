import styled from "styled-components";
import { ArticleType } from "../../../../types/types";

const ArticleParagraphButton = ({
  setNewArticle,
  contentIndex,
  paragraphIndex,
}: any) => {
  const handleAddTitleAndParagraph = (contentIndex: number) => {
    setNewArticle((prevState: ArticleType) => {
      const updatedContents = [...prevState.contents];
      updatedContents.splice(contentIndex + 1, 0, {
        title: "",
        paragraphs: [""],
      });
      return {
        ...prevState,
        contents: updatedContents,
      };
    });
  };

  const handleAddParagraph = (contentIndex: number) => {
    setNewArticle((prevState: ArticleType) => {
      const updatedContents = [...prevState.contents];
      const updatedParagraphs = [...updatedContents[contentIndex].paragraphs];
      updatedParagraphs.splice(paragraphIndex + 1, 0, "");
      updatedContents[contentIndex] = {
        ...updatedContents[contentIndex],
        paragraphs: updatedParagraphs,
      };
      return {
        ...prevState,
        contents: updatedContents,
      };
    });
  };

  const handleAddList = (contentIndex: number) => {
    setNewArticle((prevState: ArticleType) => {
      const updatedContents = [...prevState.contents];
      const updatedParagraphs = [...updatedContents[contentIndex].paragraphs];
      updatedParagraphs.splice(paragraphIndex + 1, 0, {
        list: {
          title: "",
          items: [""],
        },
      });
      updatedContents[contentIndex] = {
        ...updatedContents[contentIndex],
        paragraphs: updatedParagraphs,
      };
      return {
        ...prevState,
        contents: updatedContents,
      };
    });
  };

  return (
    <StyledArticleParagraphButton>
      <a onClick={() => handleAddTitleAndParagraph(contentIndex)}>
        Ajouter un titre et un paragraphe
      </a>
      <a onClick={() => handleAddParagraph(contentIndex)}>
        Ajouter un paragraphe
      </a>
      <a onClick={() => handleAddList(contentIndex)}>Ajouter une liste</a>
    </StyledArticleParagraphButton>
  );
};

const StyledArticleParagraphButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 1rem;
  gap: 0.5rem;

  a {
    color: rgb(87, 112, 255);
    padding: 0.5rem;
    text-align: center;
    width: 100%;
    font-weight: 600;
    background-color: #424866;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    
    a {
      padding: 1rem 0;
      margin: 0;
  }
`;

export default ArticleParagraphButton;
