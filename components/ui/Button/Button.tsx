import styles from "./Button.module.css"

import type {ReactNode} from "react";

interface IButtonProps {
    children: ReactNode;
}



export const Button = ({children}: IButtonProps) => {
    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}

