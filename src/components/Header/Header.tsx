import styled from "styled-components";
import { Toggler } from "./Toggler";
import { Link } from "react-router-dom";

const HeaderStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 2.625rem;

  a {
    text-decoration: none;
    color: var(--textTitle);
  }

  h1 {
    font-size: 1.98818rem;
    margin: 0;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <h1>
          <Link to={"/"}>&lt;CodeHouse /&gt;</Link>
        </h1>
      </div>
      <Toggler />
    </HeaderStyle>
  );
};

export default Header;
