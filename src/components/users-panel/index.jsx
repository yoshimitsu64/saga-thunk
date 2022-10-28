import { StyledUser, StyledUsersPanel } from "./styled";

function UsersPanel({isLoading, users}) {
    console.log(users, isLoading)
    return (<StyledUsersPanel>
            {isLoading && <h1>Users are loading</h1>}

            {users?.map(({id}) => (
                <StyledUser key={id}>{id}</StyledUser>
            ))}
    </StyledUsersPanel>);
}

export default UsersPanel