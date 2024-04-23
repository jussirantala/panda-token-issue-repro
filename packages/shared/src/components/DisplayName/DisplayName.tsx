import React from 'react';
import * as styles from './DisplayName.css';

interface Props { name: string; }

const DisplayName = ({ name }: Props) => (
    <div className={styles.root}>{name}</div>
);

export default DisplayName;
