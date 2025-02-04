import { Collapsible } from "./Collapsible"
import { ThemedText } from "./ThemedText"

interface Post {
    postId: number;
    author: string;
    content: string;
    datetime: string;
}

interface PostProps {
    post: Post;
    handleSavedOpen: Function;
    isOpenProp: boolean;
}

const Post = ({post, handleSavedOpen, isOpenProp}:PostProps ) =>{

    const {postId, author, content, datetime} = post;

    console.log("ISOPEN: ", isOpenProp)

    return (
        <Collapsible title={`${author} ${datetime}`} key={postId} postId={postId} handleSavedOpen={handleSavedOpen} isOpenProp={isOpenProp}>
            <ThemedText>
                {content}
            </ThemedText>
        </Collapsible>
    )
} 

export default Post;