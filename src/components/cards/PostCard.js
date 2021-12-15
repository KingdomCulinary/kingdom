import React from "react";

const PostCard = props => {
    return (
        <article key={props.id}>
            <p style={styles.title}>props.say</p>
        </article>
    );
}
export default PostCard;

const styles = {
    
    title: {
        width: "25rem",
        hight: "25rem",
        fontSize: "6rem",
        border: "2rem",
        backgroundColor: "red",
        padding: "2rem",
        margin: '1rem'
    }
}