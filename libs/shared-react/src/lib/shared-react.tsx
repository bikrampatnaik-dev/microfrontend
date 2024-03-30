import styles from './shared-react.module.scss';

/* eslint-disable-next-line */
export interface SharedReactProps {}

export function SharedReact(props: SharedReactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedReact!</h1>
    </div>
  );
}

export default SharedReact;
