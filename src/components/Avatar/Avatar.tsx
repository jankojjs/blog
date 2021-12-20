import styled from "styled-components";
import avatar from "./avatar.jpeg";

const AvatarStyle = styled.div`
  display: grid;
  grid-template-columns: 56px auto;
  grid-gap: 20px;
  margin: 20px 0;
  margin-bottom: 3.5rem;

  img {
    border-radius: 50%;
  }

  p {
    line-height: 28px;
    margin: 0;
  }
`;

export const Avatar = () => {
  return (
    <AvatarStyle>
      <div>
        <img width={56} height={56} src={avatar} />
      </div>
      <div>
        <p>
          Personal blog by{" "}
          <a href="https://www.linkedin.com/in/janko-stanic/">Janko Stanic</a>.
          <br />I explain with words and code.
        </p>
      </div>
    </AvatarStyle>
  );
};
