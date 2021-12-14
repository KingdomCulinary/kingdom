import React from "react";
import Banner from "../components/banner/Banner";
import Navigation from "../components/navigation/Navigation";
import { useState, useEffect } from "react";
import SubHeader from "../components/SubHeader";

function Profile() {
    const [userData, setuserData] = useState(null);

    function ProfData() {
        if (localStorage.getItem("profData") === null) {
            localStorage.setItem("profData", JSON.stringify(userData));
        }  
    }

    useEffect(() => {
        async function fetchAPI() {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const [user] = data.results;
            setuserData(user);
        }
        fetchAPI();
        
    }, []);
    ProfData();
    return (
        <div>
            <Banner Page="Profile" tNail={userData && userData.picture.thumbnail} alt="pic" />
            <main style={styles.mainContain}>
                <Navigation style={styles.nav} />
                <div>
                    <SubHeader />
                </div>
                <main style={styles.mnContain}>
                    <section style={styles.secDisp}>
                        <legend>
                            <h2>User Profile</h2>
                        </legend>
                        <figure style={styles.imgContain}>
                            {userData && <img src={userData.picture.medium} alt="pic" />}
                        </figure>
                        <article style={styles.nameContain}>
                            <div>
                                <h3>First Name:</h3>
                                {userData && <h2 style={styles.nameMask}>{userData.name.first}</h2>}
                            </div>
                            <div>
                                <h3>Last Name:</h3>
                                {userData && <h2 style={styles.nameMask}>{userData.name.last}</h2>}
                            </div>
                        </article>
                        <article style={styles.emailContain}>
                            <div>
                                <h3>Email:</h3>
                                {userData && <h2 style={styles.emailMask}>{userData.email}</h2>}
                            </div>
                        </article>
                        <article style={styles.contactContain}>
                            <div>
                                <h3>Contact Number:</h3>
                                {userData && <h2 style={styles.phoneMask}>{userData.phone}</h2>}
                            </div>
                        </article>
                        <article style={styles.streetContain}>
                            <div>
                                <h3>Street:</h3>
                                <div style={styles.street}>
                                    {userData && <h2 style={styles.space}>{userData.location.street.number}</h2>}
                                    {userData && <h2>{userData.location.street.name}</h2>}
                                </div>
                            </div>
                        </article>
                        <article style={styles.ctStateContain}>
                            <div style={styles.space}>
                                <h3>City:</h3>
                                {userData && <h2 style={styles.ctyStMask}>{userData.location.city}</h2>}
                            </div>
                            <div>
                                <h3>State:</h3>
                                {userData && <h2 style={styles.ctyStMask}>{userData.location.state}</h2>}
                            </div>
                        </article>
                        <article style={styles.zipCoContain}>
                            <div style={styles.space}>
                                <h3>Zip code:</h3>
                                {userData && <h2 style={styles.zipCoMask}>{userData.location.postcode}</h2>}
                            </div>
                            <div>
                                <h3>Country:</h3>
                                {userData && <h2 style={styles.zipCoMask}>{userData.location.country}</h2>}
                            </div>
                        </article>
                    </section>
                </main>
            </main>
        </div>
    );
}
export default Profile;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    mainContain: {
        display: 'flex',
        flexDirection: 'row'
    },
    secDisp: {
        border: '.1rem solid black',
        marginTop: '2.1rem',
        width: '40rem'
    },
    mnContain: {
        marginLeft: '10rem'
    },
    nameContain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    emailContain: {
        position: 'relative',
        top: '-1rem',
        display: 'flex',
        marginLeft: '3.9rem'
    },
    contactContain: {
        position: 'relative',
        top: '-2rem',
        display: 'flex',
        marginLeft: '3.9rem'
    },
    streetContain: {
        position: 'relative',
        top: '-2.9rem',
        display: 'flex',
        marginLeft: '3.9rem'
    },
    imgContain: {
        display: 'flex',
        justifyContent: 'center'
    },
    street: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        border: '.1rem solid black',
        width: '32.2rem',
        // padding: '.1rem',
        top: '-1rem'
    },
    space: {
        paddingRight: '1rem'
    },
    ctStateContain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '-3rem'
    },
    zipCoContain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '-1rem'
    },
    nameMask: {
        position: 'relative',
        border: '.1rem solid black',
        width: '12rem',
        padding: '.2rem',
        top: '-1rem'
    },
    emailMask: {
        position: 'relative',
        border: '.1rem solid black',
        width: '31.8rem',
        padding: '.2rem',
        top: '-1rem'
    },
    phoneMask: {
        position: 'relative',
        border: '.1rem solid black',
        width: '31.8rem',
        padding: '.2rem',
        top: '-1rem'
    },
    ctyStMask: {
        position: 'relative',
        border: '.1rem solid black',
        width: '12rem',
        padding: '.2rem',
        top: '-1rem'
    },
    zipCoMask: {
        position: 'relative',
        border: '.1rem solid black',
        width: '12rem',
        padding: '.2rem',
        top: '-1rem'
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    },
}