import { useSelector } from "react-redux";
import CommentsPanel from "../components/comments";

function CommentsContainer() {
  const comments = useSelector(state => state.comments);
  return <CommentsPanel comments={comments} />;
}

export default CommentsContainer;
