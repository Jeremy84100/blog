import { ArticleType } from "../../../types/types";
import styled from "styled-components";
import ArticleParagraphList from "./ArticleParagraphContainer/ArticleParagraphList";
import ArticleParagraphParagraph from "./ArticleParagraphContainer/ArticleParagraphParagraph";
import ArticleParagraphButton from "./ArticleParagraphContainer/ArticleParagraphButton";

const ArticleParagraph = ({ newArticle, setNewArticle }: any) => {
  const handleContentChange = (
    contentIndex: number,
    fieldName: keyof ArticleType["contents"][0],
    value: string
  ) => {
    setNewArticle((prevState: ArticleType) => {
      const updatedContents = [...prevState.contents];
      updatedContents[contentIndex] = {
        ...updatedContents[contentIndex],
        [fieldName]: value,
      };
      return {
        ...prevState,
        contents: updatedContents,
      };
    });
  };

  return (
    <StyledArticleHeader>
      <h3>Contenu</h3>
      {newArticle.contents.map(
        (
          content: {
            title?: string;
            paragraphs: (
              | string
              | {
                  image?: { src: string; caption: string[] };
                  list?: { title: string; items: string[] };
                }
            )[];
          },
          contentIndex: number
        ) => (
          <div key={contentIndex}>
            {content.paragraphs.map((paragraph, paragraphIndex) => (
              <div key={paragraphIndex}>
                {typeof paragraph === "string" ? (
                  <>
                    <StyledArticleLabelContainer>
                      <ArticleParagraphParagraph
                        handleContentChange={handleContentChange}
                        setNewArticle={setNewArticle}
                        paragraph={paragraph}
                        paragraphIndex={paragraphIndex}
                        contentIndex={contentIndex}
                        content={content}
                      />
                    </StyledArticleLabelContainer>
                  </>
                ) : (
                  <>
                    <StyledArticleLabelContainer>
                      <ArticleParagraphList
                        setNewArticle={setNewArticle}
                        paragraph={paragraph}
                        paragraphIndex={paragraphIndex}
                        handleContentChange={handleContentChange}
                        contentIndex={contentIndex}
                      />
                    </StyledArticleLabelContainer>
                  </>
                )}
                <ArticleParagraphButton
                  setNewArticle={setNewArticle}
                  contentIndex={contentIndex}
                  paragraphIndex={paragraphIndex}
                />
              </div>
            ))}
          </div>
        )
      )}
    </StyledArticleHeader>
  );
};

const StyledArticleHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledArticleLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export default ArticleParagraph;
