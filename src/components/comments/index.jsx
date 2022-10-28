import { StyledComment, StyledCommentsPanel } from "./styled";

function CommentsPanel({isLoading, comments}) {
    console.log(comments)

    return (<StyledCommentsPanel>
            {isLoading && <h1>Comments are loading</h1>}

            {comments?.map(({body,id}) => (
                <StyledComment key={id}>{body}</StyledComment>
            ))}
    </StyledCommentsPanel>);
}

export default CommentsPanel;