import { PostListItem } from "./PostListItem";
import { PostsData } from "./PostData";

export const PostList = () => {
  return (
    <div>
      {PostsData.map((singlePost, id) => {
        return (
          <PostListItem
            id={singlePost.id}
            headline={singlePost.headline}
            date={singlePost.date}
            readingTime={singlePost.readingTime}
            coffee={singlePost.coffee}
            description={singlePost.description}
            key={id}
          />
        );
      })}
    </div>
  );
};
