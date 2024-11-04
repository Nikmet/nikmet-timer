import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Input.module.scss";
import cn from "classnames";

export interface IInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value: string;
}

export const Input = ({ className, value }: IInputProps): JSX.Element => {
    return (
        <div className={cn(styles.wrapper, className)}>
            <input className={styles.input} type="text" value={value} disabled />
        </div>
    );
};
