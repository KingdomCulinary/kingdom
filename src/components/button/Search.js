import React from "react";
import { MdOutlineSearch } from "react-icons/md";

//Dummy
const SrchComp = () => {
  return (
    <div style={styles.search}>
      <MdOutlineSearch style={styles.icon} />
      <input type="text" placeholder="Search" />
    </div>
  );
};
export default SrchComp;

const styles = {
  search: {
    fontSize: "1.6rem"
  },
  icon: {
    paddingTop: ""
  }
}