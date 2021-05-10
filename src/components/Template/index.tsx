import Image from 'next/image';

import styles from './styles.module.scss';

interface ITemplateProps {
  props?: string,
  children: React.ReactNode
}

const Template  = ({props, children}: ITemplateProps) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

export default Template;