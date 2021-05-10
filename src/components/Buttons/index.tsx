import styles from './styles.module.scss';

interface  IButton {
  name: string,
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
