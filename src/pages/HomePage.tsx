import { Avatar } from "../components/Avatar/Avatar";
import { HelmetHelper } from "../components/HelmetHelper/HelmetHelper";
import { PostList } from "../components/PostList/PostList";

export const Home = () => {
  return (
    <div>
      <HelmetHelper title={"CodeHouse"} />
      <Avatar />
      <PostList />
    </div>
  );
};
