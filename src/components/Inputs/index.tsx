import styles from './styles.module.scss';

interface IDefaultInput {
  label: string,
  type: string,
  placeholder?: string
};

export const DefaultInput = ({label, type, placeholder}: IDefaultInput) => {
  return(
    <div className={styles.main}>
      <label htmlFor="input">{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}
