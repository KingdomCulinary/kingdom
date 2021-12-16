import React from "react";
import { MdPerson } from "react-icons/md";

const ProfMenu = (props) => {
    return (
        <div>
            <MdPerson />
            <h5>{props.usrName}</h5>
        </div>
    );
};
export default ProfMenu;
