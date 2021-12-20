import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/HomePage";
import { NewPost } from "./pages/NewPostPage";
import { Post } from "./pages/PostPage";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":postId" element={<Post />} />
          <Route path="/new" element={<NewPost />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
