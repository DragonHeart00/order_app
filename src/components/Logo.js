import React from "react";
import {useStyles} from '../styles'

function Logo() {
    const styles = useStyles();
    return(
        <img src={"logo.png"} alt="Crepe Cafe" className={styles.largeLogo}/>
    )
}


export default Logo;