import { ArticleType } from "../../types/types";

import styled from "styled-components";

const ArticleHeader = ({ newArticle, setNewArticle }: any) => {
  const handleHeaderChange = (
    fieldName: keyof ArticleType["header"],
    value: string
  ) => {
    setNewArticle((prevState: ArticleType) => ({
      ...prevState,
      header: {
        ...prevState.header,
        [fieldName]: value,
      },
    }));
  };

  return (
    <StyledArticleHeader>
      <h3>Header</h3>
      <StyledArticleLabelContainer>
        <label>Titre:</label>
        <input
          type="text"
          value={newArticle.header.title}
          onChange={(e) => handleHeaderChange("title", e.target.value)}
          required
        />
      </StyledArticleLabelContainer>
      <StyledArticleLabelContainer>
        <label>Image:</label>
        <input
          type="text"
          value={newArticle.header.image}
          onChange={(e) => handleHeaderChange("image", e.target.value)}
          required
        />
      </StyledArticleLabelContainer>
      <StyledArticleLabelContainer>
        <label>Légende:</label>
        <input
          type="text"
          value={newArticle.header.caption}
          onChange={(e) => handleHeaderChange("caption", e.target.value)}
          required
        />
      </StyledArticleLabelContainer>
    </StyledArticleHeader>
  );
};

const StyledArticleHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const StyledArticleLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ArticleHeader;
