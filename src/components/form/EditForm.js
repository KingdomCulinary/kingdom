import React from "react";

const EditForm = props => {
    return (
        <form method="get" style={styles.secDisp} onSubmit={props.addProfile} action="" noValidate>
                        <legend>
                            <h2>User Profile</h2>
                        </legend>
                        <figure style={styles.imgContain}>
                            <img src={props.middle} alt={props.alt} />
                        </figure>
                        <section style={styles.nameContain}>
                            <div>
                                <h3>First Name:</h3>
                                <input type="text" id="firstname" name="firstname" style={styles.nameMask} placeholder={props.firstPlace} onChange={props.fChange} value={props.fval}></input>
                            </div>
                            <div>
                                <h3>Last Name:</h3>
                                <input type="text" id="lastname" name="lastname" style={styles.nameMask} placeholder={props.lastPlace} onChange={props.lChange} value={props.lval}></input>
                            </div>
                        </section>
                        <section style={styles.emailContain}>
                            <div>
                                <h3>Email:</h3>
                                <input type="email" id="email" name="email" style={styles.emailMask} placeholder={props.emailPlace} value={props.eval}></input>
                            </div>
                        </section>
                        <section style={styles.contactContain}>
                            <div>
                                <h3>Contact Number:</h3>
                                <input type="tel" id="phone" name="phone" style={styles.phoneMask} placeholder={props.phonePlace} value={props.pval}></input>
                            </div>
                        </section>
                        <section style={styles.streetContain}>
                            <div>
                                <h3>Street:</h3>
                                <div style={styles.street}>
                                    <input type="text" id="street" name="street" style={styles.strSpace} value={props.snumber + "-" + props.sname}>
                                    </input>
                                </div>
                            </div>
                        </section>
                        <section style={styles.ctStateContain}>
                            <div style={styles.space}>
                                <h3>City:</h3>
                                <input type="text" id="city" name="city" style={styles.ctyStMask} value={props.cval}></input>
                            </div>
                            <div>
                                <h3>State:</h3>
                                <input type="text" id="state" name="state" style={styles.ctyStMask} value={props.sval}></input>
                            </div>
                        </section>
                        <section style={styles.zipCoContain}>
                            <div style={styles.space}>
                                <h3>Zip code:</h3>
                                <input type="text" id="zipcode" name="zipcode" style={styles.zipCoMask} value={props.pcval}></input>
                            </div>
                            <div>
                                <h3>Country:</h3>
                                <input type="text" id="country" name="country" style={styles.zipCoMask} value={props.coval}></input>
                            </div>
                        </section>
                        <section style={styles.nameContain}>
                            <div>
                                <h3>userName:</h3>
                                <input type="username" id="username" name="username" style={styles.nameMask} value={props.uval}></input>
                            </div>
                            <div>
                                <h3>Password:</h3>
                                <input type="password" id="password" name="password" style={styles.nameMask} value={props.paval}></input>
                            </div>
                        </section>
                        <div style={styles.btnContain}>
                            <input type="submit" value="Save"></input>
                        </div>
                    </form>
    )
}
export default EditForm;

const styles = {
    secDisp: {
        border: '.1rem solid black',
        marginTop: '2.1rem',
        width: '40rem'
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
        width: '32.2rem',
        top: '-1rem'
    },
    strSpace: {
        paddingRight: '1rem',
        width: '32.2rem',
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
    btnContain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: '1rem'
    },
}