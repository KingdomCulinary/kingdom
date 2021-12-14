import React from "react";

const Ads = (props) => {
    return(
        <article style={styles.rSideAds}>
            <img src={props.adUrl} alt="ad" />
            <h1>{props.adsTitle}</h1>
            <p>{props.adsDesc}</p>
        </article>
    )
}
export default Ads;

const styles = {
    rSideAds: {
        backgroundColor: "#ebebeb",
        padding: ".5rem",
        marginRight: "2rem",
        marginBottom: "2.5rem",
        textAlign: "center",
        // // display: 'flex',
        // // flexDirection: 'column',
        // width: '10%'
      }
}