import React from 'react';
import styles from './SampleComponent.module.css';
import { sampleStyles } from './SampleComponent.styles';

const SampleComponent = ({ textColor }) => {

    const combinedStyles = {
        ...sampleStyles,
        color: textColor || 'gray', // Uses CSS-in-JS to override color dynamically
    };

    return (
        <div className={styles.container}>
            <div className={styles.text} style={combinedStyles}>
                Sample
            </div>
        </div>
    );
};

export default SampleComponent;
