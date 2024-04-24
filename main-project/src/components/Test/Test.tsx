import React from 'react';
import * as styles from './Test.css';

type Props = Omit<React.ComponentPropsWithoutRef<"div">, 'className'> & {
    color: 'red' | 'yellow';
}

export const Test = ({ color, ...props }: Props) => (
    <div {...props} className={styles.root({ color })} />
);
