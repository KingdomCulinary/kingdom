import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { RiFileEditLine } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai"
import { AiOutlineShareAlt } from "react-icons/ai"

const PostCard = props => {
    return (
        <article key={props.id}>
            <RiDeleteBin2Line onClick={props.delMe} style={styles.postDelBtn} />
            <RiFileEditLine style={styles.postEditBtn} />
            <p style={styles.title}>{props.val.pTitle}</p>
            <p style={styles.description}>{props.val.pDesc}</p>
            <img src={props.picUrl} alt="upload" />
            <p style={styles.footTabs}>
                <AiOutlineLike style={styles.postLikeBtn} />
                <AiOutlineComment style={styles.postCommentBtn} />
                <AiOutlineShareAlt style={styles.postShareBtn} />
            </p>
        </article>
    );
}
export default PostCard;

const styles = {
    description: {
        fontSize: "1.6rem" //This font was too small to see.....
    },
    title: {
        fontSize: "2rem" //This font was too small to see.....
    },
    postDelBtn: {
        float: "right",
        marginRight: "1rem",
        fontSize: "2rem"
    },
    postEditBtn: {
        float: "right",
        marginRight: "1.5rem",
        fontSize: "2rem"
    },
    postLikeBtn: {
        fontSize: "2rem"
    },
    postCommentBtn: {
        fontSize: "2rem"
    },
    postShareBtn: {
        fontSize: "2rem"
    },
    footTabs: {
        display: 'flex',
        flexDirection: 'row',
        padding: "2rem",
        justifyContent: "space-between",
    }
}