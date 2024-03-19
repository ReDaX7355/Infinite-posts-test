import { FC } from "react";
import { Post } from "../../../entities/post";
import { Link } from "react-router-dom";
import { transformText } from "../../../shared/utils";

interface PostItemProps {
  post: Post;
  style?: React.CSSProperties;
}

const styles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 20,
  maxWidth: 1000,
  marginBottom: 20,
  padding: 20,
  border: "1px solid white",
  width: "100%",
};

export const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div style={styles}>
      <h3>
        {post.id}. {post.title}
      </h3>
      <p>{transformText(post.body)}</p>
      <Link to={`/post/${post.id}`}>Просмотр</Link>
    </div>
  );
};
