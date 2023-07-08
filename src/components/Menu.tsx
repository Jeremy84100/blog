import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  const data = [
    {
      linkName: "Home",
      link: "/",
      color: "blue",
    },
    {
      linkName: "About",
      link: "/about",
      color: "green",
    },
    {
      linkName: "Debrid",
      link: "/",
      color: "red",
    },
  ];

  return (
    <StyledMenu>
      <StyledMenuContainer>
        <Link to="/">
          <StyledLogo
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Wikispecies-logo.png"
            alt="Google"
          />
        </Link>
        <StyledItems>
          {data.map((item) => (
            <StyledLinkContainer to={item.link} key={item.linkName}>
              <StyledLinkName color={item.color}>
                {item.linkName}
              </StyledLinkName>
              <StyledLinkBorder color={item.color} />
            </StyledLinkContainer>
          ))}
        </StyledItems>
      </StyledMenuContainer>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  background-color: #2c3049;
`;

const StyledMenuContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
`;

const StyledLinkBorder = styled.div<{ color: string }>`
  width: 45%;
  height: 0.1rem;
  border-radius: 1rem;
  background-color: ${({ color }) =>
    color === "red"
      ? "rgb(255, 124, 107)"
      : color === "green"
      ? "rgb(48, 223, 150)"
      : color === "blue"
      ? "rgb(87, 112, 255)"
      : "#fff"};
  transition: width 0.2s;
`;

const StyledLinkContainer = styled(Link)`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 1rem 0;

  &:hover ${StyledLinkBorder} {
    width: 100%;
  }
`;

const StyledLinkName = styled.div<{ color: string }>`
  text-decoration: none;
  color: ${({ color }) =>
    color === "red"
      ? "rgb(255, 124, 107)"
      : color === "green"
      ? "rgb(48, 223, 150)"
      : color === "blue"
      ? "rgb(87, 112, 255)"
      : "#fff"};
  font-weight: 500;
  font-size: 1.2rem;
  transition: color 0.2s;
`;

const StyledLogo = styled.img`
  height: 2rem;
`;

const StyledItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export default Menu;
