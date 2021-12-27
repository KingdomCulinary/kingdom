import React from "react";

const PostCard = props => {
    return (
        <article key={props.id}>
            <p style={styles.title} >Installation



            </p>
        </article>
    );
}
export default PostCard;

const styles = {

    title: {
        width: "15rem",
        hight: "15rem",
        fontSize: "3rem",
        border: "2rem",
        padding: "2rem",
        margin: '1rem'
    }
}