import {useParams} from "react-router-dom";
function User(){
    const {id}= useParams();
    return(
        <div>
            <h1>User {id}</h1>
            <p>you are the user here is=diot</p>
        </div>
    );
}
export default User;