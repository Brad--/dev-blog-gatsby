import React from "react"
import ReactDOM from "react-dom"

import styles from "./email-hider.module.css"

function EmailHider ({ linkText }) {

    function exposeEmail() {
        // TODO this causes:
        // Warning: Text content did not match. Server: "Shoot me an email" Client: "Shoot me an email at brad.smith.1324@gmail.com"
        ReactDOM.hydrate(
            linkText + ' at brad.smith.1324@gmail.com',
            document.getElementById('emailHider')
        )
    }

    return (
        <button
            id="emailHider"
            onClick={exposeEmail}
            className={styles.emailHider}
            // className="emailHider"
            >{ linkText }</button>
    )
}
export default EmailHider;