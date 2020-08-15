import { useRouter } from "next/router";
import { useEffect } from "react";
import { NextPageContext, NextPage } from "next";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import postService from "../services/postService";
import { PostType } from ".";
import { PostItem } from "../components/PostItem";


type PropsType = {
    listPosts: PostType[]
}

const SearchPage: NextPage<PropsType> = ({ listPosts }) => {
    const router = useRouter();
    const searchStr = router.query.q || '';
    console.log("listPosts", listPosts);
    
    useEffect(() => {
        if(!searchStr) {
            router.push('/');
        }
    }, [searchStr])

    return (
        <div className="container">
            <div className="header-search" style={{ padding: '30px 0' }}>
                <h3>Từ khóa tìm kiếm: <strong>{searchStr}</strong></h3>
                <p>Tìm kiếm được ({listPosts.length}) kết quả</p>
            </div>

            <Masonry columnsCount={2} className="ass1-section__wrap row ass1-section__isotope-init">
                {
                    listPosts.map(post => (
                        <PostItem 
                            key={post.PID} 
                            post={post} 
                            customClass="col-lg-6"
                        />
                    ))
                }
            </Masonry>
        </div>
    )
}

SearchPage.getInitialProps = async (ctx: NextPageContext) => {
    const query = ctx.query.q || '';
    const listPostsRes = await postService.getPostSearch({ query });
    return { 
        listPosts: listPostsRes?.posts || []
    }
}

export default SearchPage