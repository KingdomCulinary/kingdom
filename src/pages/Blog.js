import React, { Component } from "react";
import Banner from "../components/banner/Banner";
import Navigation from "../components/navigation/Navigation";
import Enform from "../components/form/Enform";
import ProfTag from "../components/profile/ProfTag";
import Avatar from "../src/images/profilePic46.jpg"
import PostCard from "../components/cards/PostCard";
import Ads from "../components/ads/Ads";
import Logo from "../src/images/logo.jpg";
import Upload from "../src/images/postPic1.jpg";
import PostAvatar from "../src/images/profilePic2.jpg"
import AdPic1 from "../src/images/adPic1.jpg";
import AdPic2 from "../src/images/adPic2.jpg";

//Parent Component
class App extends Component {
  state = {
    pTitle: "",
    pDesc: "",
    postList: [{
      pTitle: "One Way",
      pDesc: "This is how we do it",
      avatar: ""
    },
    {
      pTitle: "I was on the Bus",
      pDesc: "This is how they did it",
      avatar: ""
    }]
  }
  userInput1 = e => {
    this.setState({ pTitle: e.target.value })
  }
  userInput2 = e => {
    this.setState({ pDesc: e.target.value })
  }
  addPost = e => {
    e.preventDefault()
    if (this.state.pTitle === "") {
      alert("Please enter a title!")
      return false
    }
    if (this.state.pDesc === "") {
      alert("Please enter a description!")
      return false
    }
    this.setState({
      postList: [...this.state.postList, { pTitle: this.state.pTitle, pDesc: this.state.pDesc }]
    });
    e.target.reset()
  }
  removePost = key => {
    this.state.postList.splice(key, 1)
    this.setState({
      postList: [...this.state.postList]
    });
  }
  render() {
    this.state.postList.reverse()
    let newPost = this.state.postList.map((element, i) => {
      return <><ProfTag tagProfUrl={PostAvatar} usrName="World's Best Lover" /><PostCard
        key={i}
        val={element}
        delMe={() => this.removePost(i)}
        picUrl={Upload} /></>
    })

    return (
      <div>
        <Banner logoUrl={Logo} />
        <section style={styles.section}>
          <Navigation linkText1='Newsfeed' linkText2='Messages' linkText3='Watch' />
          <main style={styles.midSection}>
            <Enform addPost={this.addPost}
              userInput1={this.userInput1}
              userInput2={this.userInput2}
              profileUrl={Avatar}
              profileMsg="What's on your mind?"
            />
            {newPost}
          </main>
          <aside style={styles.adsPos}>
            <Ads adUrl={AdPic1} adsTitle="It's 5 O'clock Somewhere" adsDesc="It doesn’t necessarily have to be 5 p.m. to crack open a beer, according to some Americans. Data from a recent YouGov survey of 2,747 US adults shows roughly one in six (16%) consider noon the earliest acceptable time of day to have an alcoholic drink on non-working days. One in 10 (10%) say 5 p.m. " />
            <Ads adUrl={AdPic2} adsTitle="I Spent a Weekend in Pocono" adsDesc="For a certain generation at a certain time, as sex became more acceptable in pop culture and returning GIs needed a place to take their blushing brides, there was no hotter destination than Cove Haven. One weekend at Pocono Palace, in all its retro royalty, instantly made my fiancé and I both say: “Goals.”" />
          </aside>
        </section>
      </div>
    );
  }
}

export default App;

const styles = {
  wrapper: {
    display: "flex",
    padding: "1rem",
  },
  header: {
    display: "flex",
    flexDirection: "row wrap",
    justifyContent: "space-between",
    width: "92%",
    margin: '.2rem',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: "2rem",
  },
  midSection: {
    height: '100vh',
    overflow: 'scroll'
  },
  adsPos: {
    width: "20%",
  },
  "@media all and (min-width: 600px)": {
    "__expression__": "all and (min-width: 600px)", "aside": { "flex": "1 0 0" }
  },
  "@media all and (min-width: 800px)": {
    "__expression__": "all and (min-width: 800px)", "midSection": { "order": "2" },
    "lSideNav": { "order": "1" },
    "adsPos": { "order": "3" }
  },
};
