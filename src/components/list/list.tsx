import styles from './list.module.scss';

export interface ListProps {
    className?: string;
}

export const List = ({ className }: ListProps) => {
    return <div className={`${styles.root} ${className}`}>List</div>;
};
