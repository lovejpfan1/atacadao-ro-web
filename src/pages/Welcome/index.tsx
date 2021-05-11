import Image from 'next/image';
import Link from 'next/link';

import { OutlineButton, SolidButton } from '../../components/Buttons';

import styles from './styles.module.scss';

const Welcome = () => {
  return (
    <>
      {/* left content of the page */}
      <div className={styles.leftContent}>
        <Image src="/logo.jpg" width={330} height={210} />
        <h1>Atacadão R.O</h1>
        <span>Fique por dentro dos super descontos dos produtos em queima de estoque.</span>
      </div>
      {/* left content of the page */}
      
      {/* right content of the page */}
      <div className={styles.rightContent}>
        <h2>Bem-vindo!</h2>
        <Link href="/login">
          <div className={styles.button}>
            <OutlineButton name="Entrar"  />
          </div>
        </Link>
        <Link href="/register">
          <div className={styles.button}>
            <SolidButton name="Registrar" />
          </div>
        </Link>
        <div className={styles.link}>
          <Link href="#">
            <a>Esqueceu a senha</a>
          </Link>
        </div>
      </div>
      {/* right content of the page */}

    </>
  );
};

export default Welcome;