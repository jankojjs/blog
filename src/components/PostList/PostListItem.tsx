import { Link } from "react-router-dom";
import styled from "styled-components";

export interface PostListItemProps {
  id: number;
  headline: string;
  date: string;
  readingTime: number;
  coffee: number;
  description?: string;
  noLink?: boolean;
}

const PostListItemStyle = styled.h2`
  a {
    text-decoration: none;
    margin-top: 56px;
    display: block;
    font-family: Montserrat, sans-serif;
    font-size: 1.75rem;
  }
`;

const PostListItemDescriptionStyle = styled.div`
  margin-top: 10px;
`;

export const PostListItem = (options: PostListItemProps) => {
  return (
    <div>
      <PostListItemStyle>
        {options.noLink ? (
          <div className="link">{options.headline}</div>
        ) : (
          <Link to={options.id.toString()}>{options.headline}</Link>
        )}
      </PostListItemStyle>
      <small>
        {options.date} • ☕️☕️☕️ {options.readingTime} min read
      </small>
      {options.description ? (
        <PostListItemDescriptionStyle>
          {options.description}
        </PostListItemDescriptionStyle>
      ) : null}
    </div>
  );
};
