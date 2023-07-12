import { ArticleType } from "../../../../types/types";

import styled from "styled-components";

const ArticleParagraphParagraph = ({
  setNewArticle,
  handleContentChange,
  paragraph,
  paragraphIndex,
  contentIndex,
  content,
}: any) => {
  const handleParagraphChange = (
    contentIndex: number,
    paragraphIndex: number,
    value: string
  ) => {
    setNewArticle((prevState: ArticleType) => {
      const updatedContents = [...prevState.contents];
      const updatedParagraphs = [...updatedContents[contentIndex].paragraphs];
      updatedParagraphs[paragraphIndex] = value;
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

  const handleRemoveParagraph = (
    contentIndex: number,
    paragraphIndex: number
  ) => {
    setNewArticle((prevState: ArticleType) => {
      const updatedContents = [...prevState.contents];
      const updatedParagraphs = [...updatedContents[contentIndex].paragraphs];
      updatedParagraphs.splice(paragraphIndex, 1);
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
    <>
      {paragraphIndex === 0 && (
        <>
          <label>Titre :</label>
          <input
            type="text"
            value={content.title || ""}
            onChange={(e) =>
              handleContentChange(contentIndex, "title", e.target.value)
            }
            required
          />
        </>
      )}
      <label htmlFor="">Paragraphe :</label>
      <StyledArticleParagraphTextarea
        value={paragraph}
        onChange={(e) =>
          handleParagraphChange(contentIndex, paragraphIndex, e.target.value)
        }
        required
      />
      <StyledArticleParagraphRemove
        onClick={() => handleRemoveParagraph(contentIndex, paragraphIndex)}>
        Supprimer le paragraphe
      </StyledArticleParagraphRemove>
    </>
  );
};

const StyledArticleParagraphTextarea = styled.textarea`
  height: 10rem;
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
`;

const StyledArticleParagraphRemove = styled.a`
  color: red;
  text-align: center;
  padding: 0.5rem 0;
  margin-top: 1rem;
  border: 1px solid red;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default ArticleParagraphParagraph;
