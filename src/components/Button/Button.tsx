import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

export interface IButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
}

export const Button = ({ className, onClick, children }: IButtonProps): JSX.Element => {
    return (
        <button onClick={onClick} className={cn(className, styles.button)}>
            {children}
        </button>
    );
};
