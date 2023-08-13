import PostItem from "./post-item"

function PostGrid(props) {
    const {posts} = props

    return (
        <ul className={classes.grid}>
            {posts.map((post) => <PostItem />)}
        </ul>
    )
}
export default PostGrid