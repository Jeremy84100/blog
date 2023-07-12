import styled from "styled-components";

import CardArticle from "../components/CardArticle";

import data from "../utils/data.json";

const Home = () => {
  return (
    <StyledHome>
      <StyledHero>
        <StyledHeroTitle>Actualités et tutoriel</StyledHeroTitle>
        <StyledHeroBorder />
        <StyledHeroText>Les dessous du web</StyledHeroText>
      </StyledHero>
      <StyleHomeContainer>
        <StyledTitle>Les derniers articles</StyledTitle>
        <StyledArticleContener>
          {data.articles.slice().reverse().map((article) => (
            <CardArticle article={article} key={article.id} />
          ))}
        </StyledArticleContener>
      </StyleHomeContainer>
    </StyledHome>
  );
  
};

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    45deg,
    rgba(87, 112, 255, 0.5) 0%,
    rgba(137, 82, 254, 0.5) 100%
  );
  width: 100%;
  gap: 1rem;
  padding: 2rem 0;
`;

const StyledHeroTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 800;
`;

const StyledHeroBorder = styled.div`
  width: 4rem;
  height: 5px;
  border-radius: 1rem;
  background-image: linear-gradient(
    45deg,
    rgb(255, 124, 107) 0%,
    rgb(255, 124, 107) 30%,
    rgb(255, 117, 179) 100%
  );

  @media (max-width: 768px) {
    width: 3rem;
  }
`;

const StyledHeroText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

const StyleHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  margin: 2rem 0;
`;

const StyledTitle = styled.h1`
  -webkit-text-fill-color: transparent;
  background: linear-gradient(
    -45deg,
    rgb(87, 112, 255) 0%,
    rgb(87, 112, 255) 60%,
    rgb(184, 107, 255) 100%
  );
  -webkit-background-clip: text;
  font-weight: 800;
  margin: 1rem;
`;

const StyledArticleContener = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Home;
