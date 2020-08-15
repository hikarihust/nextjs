import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { PostType } from "../../pages";
import { PostItem } from "../PostItem";

type PropsType = {
    userDetailPosts: PostType[]
}

const UserDetailPosts: React.FC<PropsType> = ({ userDetailPosts }) => {

    return (
        <Masonry columnsCount={2} className="ass1-section__wrap row ass1-section__isotope-init">
            {
                userDetailPosts.map(post => (
                    <PostItem
                        key={post.PID} 
                        post={post} 
                        customClass="col-lg-6"
                    />
                ))
            }
        </Masonry>
    )
}

export default UserDetailPosts;