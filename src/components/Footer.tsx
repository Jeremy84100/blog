import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <h1>INORME</h1>
        <StyledFooterLinkContainer>
          <StyledFooterLink to="/">Accueil</StyledFooterLink>
          <StyledFooterLink to="/contact">Contact</StyledFooterLink>
          <StyledFooterLink to="/about">A propos</StyledFooterLink>
          <StyledFooterLink to="/about">Debrid</StyledFooterLink>
        </StyledFooterLinkContainer>
        <p>© 2023 - Inorme, tous droits réservés</p>
      </StyledFooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 3rem 0;
        background: radial-gradient(ellipse 100% 100%at 0 100%,#3747a4 0,#92456b 62%,#944c4d 100%);
    };
`;

const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
  justify-content: center;
  max-width: 800px;

  p {
    font-size: 1.5rem;
    color: #fff;
  }
`;

const StyledFooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: #d1d1d1;
    }
`;

const StyledFooterLinkContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export default Footer;
