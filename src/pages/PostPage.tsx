import { useParams } from "react-router-dom";
import { HelmetHelper } from "../components/HelmetHelper/HelmetHelper";
import { PostsData } from "../components/PostList/PostData";
import { PostListItem } from "../components/PostList/PostListItem";
import { Post1 } from "../posts/Post1";

export const Post = () => {
  const { postId } = useParams();
  function parserHelper(string: string | undefined): number {
    for (let i = 0; i < 20; i++) {
      if (string === `${i}`) {
        return i;
      }
    }
    return 99999;
  }
  const componentId = parserHelper(postId);

  const switchComponent = () => {
    switch (componentId) {
      case 1:
        return <Post1 />;
    }
  };

  const optionData = PostsData[componentId - 1];
  console.log(optionData);

  return (
    <div>
      <HelmetHelper title={optionData.headline + " | CodeHouse"} />
      <PostListItem
        id={optionData.id}
        headline={optionData.headline}
        date={optionData.date}
        coffee={optionData.coffee}
        readingTime={optionData.readingTime}
        noLink
      />
      {switchComponent()}
    </div>
  );
};
