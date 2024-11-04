import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./Container.module.scss";

export interface IContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}

export const Container = ({ children }: IContainerProps): JSX.Element => {
    return <div className={styles.container}>{children}</div>;
};
