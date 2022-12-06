import styles from './new-component.module.scss';

export interface NewComponentProps {
    className?: string;
}

export const NewComponent = ({ className }: NewComponentProps) => {
    return <div className={`${styles.root} ${className} ${styles.icon}`}><select className={styles.root}><option>Apple</option><option>Banana</option><option>Watermelon</option></select>
    </div>;
};
