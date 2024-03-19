import { useEffect, useState } from "react";
import { useGetPostsQuery } from "../../../shared/api/postsSlice";
import { PostItem } from "../../../widgets/postItem";
import { PostsContainer } from "../../../widgets/postsContainer/ui";

export const Posts = () => {
  const [page, setPage] = useState(1);
  const {
    data: posts,
    isLoading,
    isFetching,
    error,
  } = useGetPostsQuery({
    page: page,
  });

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      {" "}
      <h1
        style={{
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        Posts
      </h1>
      <PostsContainer>
        {posts?.map((post) => <PostItem key={post.id} post={post} />)}
      </PostsContainer>
      {isFetching && <div>Fetching...</div>}
    </>
  );
};
