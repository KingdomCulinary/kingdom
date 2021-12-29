import React from "react";
import classes from "./ChefCard.module.scss";


function ChefCard() {
    return (
        <div>
            <p className={classes.chef__spacer}></p>
            <p className={classes.chef__content}>
                Chef Tony (Anthony McClendon) learned to cook at a very early age by watching all the great cooks in his family prepare meals for barbeques, parties, family and religious functions. With over 20 years experience, Chef Tony decided to pursue his passion of cooking by starting his own business. He provides full service catering and event planning as well as in-home private chef services. Having traveled with his high profile clients both locally and internationally, Tony prides himself on creating an elegant experience wherever necessary.
            </p>
        </div>
    );
}

export default ChefCard