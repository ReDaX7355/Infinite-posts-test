import { Link, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../../shared/api/postsSlice";

export const PostDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetPostByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      <Link to="/">Назад</Link>
    </div>
  );
};
