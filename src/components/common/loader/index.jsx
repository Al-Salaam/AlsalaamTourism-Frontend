import React from 'react'
import styles from '../loader/loader.module.css'
export const Loader = () => {
    return (
        <div className={styles.loader_container}>
            <div className={styles.loader}></div>
        </div>

    )
}
