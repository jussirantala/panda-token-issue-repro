import React from 'react';
import * as styles from './Test.css';

type Props = Omit<React.ComponentPropsWithoutRef<"div">, 'className'> & {
    variant: 'white' | 'yellow';
}

const Test = ({ variant, ...props }: Props) => {
    return (
        <div {...props} className={styles.root({ variant })} />
    );
};

export default Test;
