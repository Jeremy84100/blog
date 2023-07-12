import styled from "styled-components";

const ArticleMain = ({
  newArticle,
  handleFieldChange,
  setIsColorSelected,
  isImportanceSelected,
  setIsImportanceSelected,
  isColorSelected,
}: any) => {
  return (
    <StyledArticleHeader>
      <StyledArticleLabelContainer>
        <label>Identifiant:</label>
        <input
          type="number"
          value={newArticle.id}
          onChange={(e) => handleFieldChange("id", e.target.value)}
          disabled
        />
      </StyledArticleLabelContainer>
      <StyledArticleLabelContainer>
        <label>Catégorie:</label>
        <input
          type="text"
          value={newArticle.category}
          onChange={(e) => handleFieldChange("category", e.target.value)}
          required
        />
      </StyledArticleLabelContainer>
      <StyledArticleLabelContainer>
        <label>Titre:</label>
        <input
          type="text"
          value={newArticle.title}
          onChange={(e) => handleFieldChange("title", e.target.value)}
          required
        />
      </StyledArticleLabelContainer>
      <FormContainer hasError={!isColorSelected}>
        <label>Couleur:</label>
        <StyledArticleHeaderSelect
          value={newArticle.color}
          onChange={(e) => {
            handleFieldChange("color", e.target.value);
            setIsColorSelected(e.target.value !== "");
          }}
          required>
          <option value="">Sélectionner une couleur</option>
          <option value="blue">Bleu</option>
          <option value="green">Vert</option>
          <option value="red">Rouge</option>
        </StyledArticleHeaderSelect>
      </FormContainer>
      <FormContainer hasError={!isImportanceSelected}>
        <label>Importance:</label>
        <StyledArticleHeaderSelect
          value={newArticle.important}
          onChange={(e) => {
            handleFieldChange("important", e.target.value);
            setIsImportanceSelected(e.target.value !== "");
          }}
          required>
          <option value="">Sélectionner une importance</option>
          <option value="true">Oui</option>
          <option value="false">Non</option>
        </StyledArticleHeaderSelect>
      </FormContainer>
    </StyledArticleHeader>
  );
};

const FormContainer = styled.div<{ hasError: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 8px;
  padding: 8px;

  select {
    border: ${(props) => (props.hasError ? "2px solid red" : "none")};
  }
`;

const StyledArticleHeaderSelect = styled.select`
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

const StyledArticleHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledArticleLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export default ArticleMain;
