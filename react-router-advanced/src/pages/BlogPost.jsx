import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // ✅ Get dynamic ID from URL

  return <h2>Blog Post ID: {id}</h2>;
};

export default BlogPost;
