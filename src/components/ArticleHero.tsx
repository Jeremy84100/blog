import { useEffect, useState } from "react";
import styled from "styled-components";

import { ArticleType } from "../types/types";

import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  TelegramShareButton,
} from "react-share";

import {
  BiTimeFive,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoReddit,
  BiLogoTelegram,
} from "react-icons/bi";

const ArticleHero = ({ article }: { article: ArticleType }) => {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    const currentUrl = window.location.href;
    setShareUrl(currentUrl);
  }, []);

  const title = article.title;

  return (
    <StyledArticleHero>
      <StyledArticleHeroTitle>{article.title}</StyledArticleHeroTitle>
      <StyledArticleBorder />
      <StyledArticleHeroBottom>
        <StyledArticleHeroDateContainer>
          <StyledArticleHeroDateIcon>
            <BiTimeFive />
          </StyledArticleHeroDateIcon>
          <StyledArticleHeroDate>{article.date}</StyledArticleHeroDate>
        </StyledArticleHeroDateContainer>
        <StyledArticleShareContainer>
          <StyledArticleShareTitle>PARTAGER</StyledArticleShareTitle>
          <StyledArticleShareIcons>
            <FacebookShareButton url={shareUrl} quote={title}>
              <BiLogoFacebook />
            </FacebookShareButton>
          </StyledArticleShareIcons>
          <StyledArticleShareIcons>
            <TwitterShareButton url={shareUrl} title={title}>
              <BiLogoTwitter />
            </TwitterShareButton>
          </StyledArticleShareIcons>
          <StyledArticleShareIcons>
            <RedditShareButton url={shareUrl} title={title}>
              <BiLogoReddit />
            </RedditShareButton>
          </StyledArticleShareIcons>
          <StyledArticleShareIcons>
            <TelegramShareButton url={shareUrl} title={title}>
              <BiLogoTelegram />
            </TelegramShareButton>
          </StyledArticleShareIcons>
        </StyledArticleShareContainer>
      </StyledArticleHeroBottom>
    </StyledArticleHero>
  );
};

const StyledArticleHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 2rem;
  padding: 2rem 0;
`;

const StyledArticleHeroTitle = styled.h1`
  -webkit-text-fill-color: transparent;
  background: linear-gradient(45deg, rgb(87, 112, 255), rgb(184, 107, 255));
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
`;

const StyledArticleBorder = styled.div`
  width: 5%;
  height: 0.3rem;
  border-radius: 1rem;
  background-image: linear-gradient(
    45deg,
    rgb(87, 112, 255),
    rgb(184, 107, 255)
  );
  transition: width 0.2s;
`;

const StyledArticleHeroBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledArticleHeroDateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const StyledArticleHeroDateIcon = styled.p`
  display: flex;
  font-size: 1.2rem;
`;

const StyledArticleHeroDate = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #d1d1d1;
`;

const StyledArticleShareContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #d1d1d1;
`;

const StyledArticleShareTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #d1d1d1;
`;

const StyledArticleShareIcons = styled.p`
  font-size: 1.6rem;
  &:hover {
    color: #5770ff;
  }
`;

export default ArticleHero;
