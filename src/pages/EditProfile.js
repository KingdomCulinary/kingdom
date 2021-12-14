import React from "react";
import Banner from "../components/banner/Banner";
import EditForm from "../components/form/EditForm";
import Navigation from "../components/navigation/Navigation";
import SubHeader from "../components/SubHeader";
import { useState } from "react";

function EditProfile() {
    const [userData] = useState(JSON.parse(localStorage.getItem("profData")));

    function fChange(e) {
        const newFirst = { firstname: e.target.value }
        return newFirst
    }
    function lChange(e) {
        const newLast = { lastname: e.target.value }
        return newLast
    }
    function addProfile(e) {
        e.preventDefault()  
    }

    return (
        <div>
            <Banner Page="Edit Profile" tNail={userData.picture.thumbnail} alt="pic" />
            <main style={styles.mainContain}>
                <Navigation style={styles.nav} />
                <div>
                    <SubHeader />
                </div>
                <section style={styles.mnContain}>
                    <EditForm
                        addProfile={addProfile}
                        middle={userData.picture.medium} alt="pic"
                        fChange={fChange}
                        lChange={lChange}
                        fval={userData.name.first}
                        lval={userData.name.last}
                        eval={userData.email}
                        pval={userData.phone}
                        snumber={userData.location.street.number}
                        sname={userData.location.street.name}
                        cval={userData.location.city}
                        sval={userData.location.state}
                        pcval={userData.location.postcode}
                        coval={userData.location.country}
                        uval={userData.login.username}
                        paval="********"
                    />
                </section>
            </main>
        </div>
    );
}
export default EditProfile;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    mainContain: {
        display: 'flex',
        flexDirection: 'row'
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    },
    mnContain: {
        marginLeft: '10rem'
    },
}