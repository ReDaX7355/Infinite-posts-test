import { FC } from "react";

interface PostsContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const styles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const PostsContainer: FC<PostsContainerProps> = ({
  children,
  style,
}) => {
  return <div style={{ ...styles, ...style }}>{children}</div>;
};
