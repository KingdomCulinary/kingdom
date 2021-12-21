import React from "react";

const PostCard = props => {
    return (
        <article key={props.id}>
            <p style={styles.title} >Installation
Install video-react and peer dependencies via NPM

npm install --save video-react react react-dom
import css in your app or add video-react styles in your page

import '~video-react/dist/video-react.css'; // import css
or

@import '~video-react/styles/scss/video-react'; // or import scss
or

<link
  rel="stylesheet"
  href="https://video-react.github.io/assets/video-react.css"
/>
Import the components you need, example:

import React from 'react';
import  from 'video-react';

export default props
    
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    
  );
;
Browser support
Browser	Windows	Mac	Linux	Android	iOS
Chrome	Y	Y	Y	Y	Native
Firefox	Y	Y	Y	untested	Native
Edge	Y	-	-	-	-
IE 11	untested	-	-	-	-
Safari	-	Y	-	-	Y
Please note that only the latest stable version is tested and supported. Video-react may be usable in older releases, and we will accept pull requests for them, but they will not be frequently tested or actively supported.

For the items marked as "untested", we do welcome volunteer testers.

Development
Run tests:

npm test
Run from local
$ npm install
$ npm start
Contribution
Interested in making contribution to this project? Want to report a bug? Please read the contribution guide.

Inspiration & Credits
This project is heavily inspired by video.js, and most of our css styles came from video.js's styles.
The document site is built with reactstrap.
All the icons came from Google Material Icons
Fonts were built by iconmon.</p>
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