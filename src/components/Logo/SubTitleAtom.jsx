import styles from './Logo.module.css';

const SubTitleAtom = ({children}) => {
    return (
            <h4 className={styles.subtitle}>
                {children}
            </h4>
    );

} 

export default SubTitleAtom;