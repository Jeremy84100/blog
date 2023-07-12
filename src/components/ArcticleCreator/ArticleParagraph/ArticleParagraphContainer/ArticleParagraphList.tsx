import { ArticleType } from "../../../../types/types";
import styled from "styled-components";

const ArticleParagraphList = ({
  setNewArticle,
  paragraphIndex,
  paragraph,
  contentIndex,
}: any) => {
  const handleRemoveList = (contentIndex: number, listIndex: number) => {
    setNewArticle((prevState: ArticleType) => {
      const updatedContents = [...prevState.contents];
      const updatedParagraphs = [...updatedContents[contentIndex].paragraphs];
      updatedParagraphs.splice(listIndex, 1);
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

  const handleTitleChange = (
    contentIndex: number,
    listIndex: number,
    title: string
  ) => {
    setNewArticle((prevState: ArticleType) => {
      const updatedContents = [...prevState.contents];
      const updatedParagraphs = updatedContents[contentIndex].paragraphs.map(
        (paragraph, currentIndex) => {
          if (
            currentIndex === listIndex &&
            typeof paragraph !== "string" &&
            paragraph.list
          ) {
            const updatedList = {
              ...paragraph.list,
              title: title,
            };
            const updatedParagraph = {
              ...paragraph,
              list: updatedList,
            };
            return updatedParagraph;
          }
          return paragraph;
        }
      );
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

  const handleListItemChange = (
    contentIndex: number,
    listIndex: number,
    itemIndex: number,
    value: string
  ) => {
    setNewArticle((prevState: ArticleType) => {
      const updatedContents = [...prevState.contents];
      const updatedParagraphs = updatedContents[contentIndex].paragraphs.map(
        (paragraph, currentIndex) => {
          if (
            currentIndex === listIndex &&
            typeof paragraph !== "string" &&
            paragraph.list
          ) {
            const updatedItems = [...paragraph.list.items];
            updatedItems[itemIndex] = value;
            const updatedList = {
              ...paragraph.list,
              items: updatedItems,
            };
            const updatedParagraph = {
              ...paragraph,
              list: updatedList,
            };
            return updatedParagraph;
          }
          return paragraph;
        }
      );
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

  const handleAddListItem = (
    contentIndex: number,
    listIndex: number,
    itemIndex: number
  ) => {
    setNewArticle((prevState: ArticleType) => {
      const updatedContents = [...prevState.contents];
      const updatedParagraphs = [...updatedContents[contentIndex].paragraphs];
      const paragraph = updatedParagraphs[listIndex];
      if (typeof paragraph !== "string" && paragraph.list) {
        const updatedItems = [...paragraph.list.items];
        updatedItems.splice(itemIndex + 1, 0, "");
        const updatedList = {
          ...paragraph.list,
          items: updatedItems,
        };
        const updatedParagraph = {
          ...paragraph,
          list: updatedList,
        };
        updatedParagraphs[listIndex] = updatedParagraph;
        updatedContents[contentIndex] = {
          ...updatedContents[contentIndex],
          paragraphs: updatedParagraphs,
        };
      }
      return {
        ...prevState,
        contents: updatedContents,
      };
    });
  };

  const handleRemoveListItem = (
    contentIndex: number,
    listIndex: number,
    itemIndex: number
  ) => {
    setNewArticle((prevState: ArticleType) => {
      const updatedContents = [...prevState.contents];
      const updatedParagraphs = updatedContents[contentIndex].paragraphs.map(
        (paragraph, currentIndex) => {
          if (
            currentIndex === listIndex &&
            typeof paragraph !== "string" &&
            paragraph.list
          ) {
            const updatedItems = [...paragraph.list.items];
            updatedItems.splice(itemIndex, 1);
            const updatedList = {
              ...paragraph.list,
              items: updatedItems,
            };
            const updatedParagraph = {
              ...paragraph,
              list: updatedList,
            };
            return updatedParagraph;
          }
          return paragraph;
        }
      );
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
      <label>Titre :</label>
      <input
        type="text"
        value={paragraph.list?.title || ""}
        onChange={(e) =>
          handleTitleChange(contentIndex, paragraphIndex, e.target.value)
        }
        required
      />
      <label>Élément :</label>
      {paragraph.list?.items.map((item: string, itemIndex: number) => (
        <StyledArticleParagraphList key={itemIndex}>
          <StyledArticleParagraphListItems
            value={item}
            onChange={(e) =>
              handleListItemChange(
                contentIndex,
                paragraphIndex,
                itemIndex,
                e.target.value
              )
            }
            required
          />
          <StyledArticleParagraphListbutton>
            {itemIndex >= 0 && (
              <StyledArticleParagraphListItemsAdd
                onClick={() =>
                  handleAddListItem(contentIndex, paragraphIndex, itemIndex)
                }>
                Ajouter un élément
              </StyledArticleParagraphListItemsAdd>
            )}

            {itemIndex > 0 && (
              <StyledArticleParagraphListItemsRemove
                onClick={() =>
                  handleRemoveListItem(contentIndex, paragraphIndex, itemIndex)
                }>
                Supprimer l'élément
              </StyledArticleParagraphListItemsRemove>
            )}
          </StyledArticleParagraphListbutton>
        </StyledArticleParagraphList>
      ))}
      <StyledArticleParagraphRemove
        onClick={() => handleRemoveList(contentIndex, paragraphIndex)}>
        Supprimer la liste
      </StyledArticleParagraphRemove>
    </>
  );
};

const StyledArticleParagraphList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 100%;
`;

const StyledArticleParagraphListItems = styled.textarea`
  height: 5rem;
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

const StyledArticleParagraphListbutton = styled.div`
  display: flex;
  justify-content: space-between;
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

const StyledArticleParagraphListItemsRemove = styled.a`
  color: red;
  text-align: center;
  margin: 0 1rem;
  cursor: pointer;
`;

const StyledArticleParagraphListItemsAdd = styled.a`
  color: green;
  text-align: center;
  margin: 0 1rem;
  cursor: pointer;
`;

export default ArticleParagraphList;
