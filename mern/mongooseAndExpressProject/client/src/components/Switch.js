import styles from './Switch.module.scss';

const Switch = () => (
    <div className={styles["switch-button"]}>
        <input className={styles["switch-button-checkbox"]} type="checkbox"></input>
        <label className="switch-button-label" for="">Tablas
        </label>
    </div>
);

export default Switch;