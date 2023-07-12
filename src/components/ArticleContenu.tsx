import { ArticleType } from "../types/types";
import styled from "styled-components";

const ArticleContenu = ({ article }: { article: ArticleType }) => {
  return (
    <StyledArticleContenu>
      <StyledArticleContenuIntro>
        {article.header?.title}
      </StyledArticleContenuIntro>
      <StyledArticleContenuImage
        src={article.header?.image}
        alt={article.header?.caption}
      />
      <StyledArticleContenuCaption>
        {article.header?.caption}
      </StyledArticleContenuCaption>

      {article.contents?.map((content, index) => (
        <div key={index}>
          {content.title && (
            <StyledArticleContenuTitle>
              {content.title}
            </StyledArticleContenuTitle>
          )}
          {content.paragraphs.map((paragraph, index) =>
            typeof paragraph === "string" ? (
              <StyledArticleContenuParagraph key={index}>
                {paragraph}
              </StyledArticleContenuParagraph>
            ) : (
              <div key={index}>
                {paragraph.list && (
                  <div>
                    <StyledArticleContenuListTitle>
                      {paragraph.list.title}
                    </StyledArticleContenuListTitle>
                    <StyledArticleContenuList>
                      {paragraph.list.items.map((item, index) => (
                        <StyledArticleContenuListContainer key={index}>
                          <StyledArticleContenuListStyle />
                          <StyledArticleContenuListItem>
                            {item}
                          </StyledArticleContenuListItem>
                        </StyledArticleContenuListContainer>
                      ))}
                    </StyledArticleContenuList>
                  </div>
                )}
                {paragraph.image && (
                  <div>
                    <StyledArticleContenuImage
                      src={paragraph.image.src}
                      alt={paragraph.image.caption}
                    />
                    {paragraph.image.caption && (
                      <StyledArticleContenuCaption>
                        {paragraph.image.caption}
                      </StyledArticleContenuCaption>
                    )}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      ))}
    </StyledArticleContenu>
  );
};

const StyledArticleContenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 2rem;
`;

const StyledArticleContenuIntro = styled.h2`
  -webkit-text-fill-color: transparent;
  background: linear-gradient(
    45deg,
    rgb(87, 112, 255) 0%,
    rgb(87, 112, 255) 60%,
    rgb(184, 107, 255) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: rgb(87, 112, 255);
  font-size: 1.125rem;
  line-height: 1.5rem;
  padding: 0.5rem 0;
`;

const StyledArticleContenuParagraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.625rem;
  padding: 0.5rem 0;
`;

const StyledArticleContenuImage = styled.img`
  border-radius: 20px;
  height: auto;
  width: 100%;
  max-height: 80vh;
  max-width: 650px;
  margin: 1rem 0;
`;

const StyledArticleContenuCaption = styled.p`
  width: 100%;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  color: #d1d1d1;
  padding-bottom: 1rem;
  border-bottom: 1px solid #424866;
  margin-bottom: 1rem;
`;

const StyledArticleContenuTitle = styled.h3`
  font-size: 1.6rem;
  line-height: 2rem;
  padding: 2rem 0 1rem;
  color: rgb(87, 112, 255);
`;

const StyledArticleContenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  gap: 0.5rem;
`;

const StyledArticleContenuListTitle = styled.h4`
  font-size: 1.375rem;
  line-height: 1.8rem;
  padding: 0.5rem 0;
  color: rgb(255, 117, 179);
`;

const StyledArticleContenuListStyle = styled.div`
  min-width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  background-image: linear-gradient(
    45deg,
    rgba(87, 112, 255, 0.5) 0%,
    rgba(137, 82, 254, 0.5) 100%
  );
  margin: 12px 0.6rem;
`;

const StyledArticleContenuListContainer = styled.li`
  display: flex;
`;

const StyledArticleContenuListItem = styled.p`
  font-size: 1.125rem;
  line-height: 1.8rem;
  padding: 0.25rem 0;
`;

export default ArticleContenu;
