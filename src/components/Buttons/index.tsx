import styles from './styles.module.scss';

interface  IButton {
  name: string,
  type?: string
}

export const OutlineButton = ({ name } : IButton) => {
  return(
    <button className={styles.outline} >
      {name}
    </button>
  )
}

export const SolidButton = ({ name } : IButton) => {
  return(
    <button className={styles.solid} >
      {name}
    </button>
  )
}

export const ActionButton = ({ name, type } : IButton) => {
  return(
    <button className={type === 'success' ? styles.successAction : styles.dangerAction} >
      {name}
    </button>
  )
}