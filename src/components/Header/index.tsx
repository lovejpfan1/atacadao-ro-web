import Image from 'next/image';
import styles from './styles.module.scss';

const Header = () => {
  return(
    <div className={styles.headerBackground}>
      <div className={styles.headerContainer}>
        <div className={styles.leftContent}>
          <Image src="/logo.jpg" width={60} height={35} />
          <h2>Atacadão R.O</h2>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.menuMobile}>
            <Image src="/menu-mobile.svg" width={20} height={20} />
          </div>
          <ul>
            <li className={styles.activeLink}>Home</li>
            <li>Perfil</li>
            <li>Sair</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;