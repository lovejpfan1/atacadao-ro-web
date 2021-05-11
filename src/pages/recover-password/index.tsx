import Image from 'next/image';
import Link from 'next/link';

import Template from '../../components/Template';
import { DefaultInput } from '../../components/Inputs';
import { ActionButton } from '../../components/Buttons';

import styles from './styles.module.scss';

const RecoverPassword = () => {
  return(
    <div>
      <Template>
        <div className={styles.leftContent}>
          <Image src="/logo.jpg" width={350} height={250}/>
        </div>

        <div className={styles.rightContent}>
          <h1>Recupere sua senha</h1>
          <div className={styles.form}>
            <form action="">
              <div>
                <DefaultInput label="E-mail" type="email" placeholder="Ex: alberto@gmail.com"/>
              </div>
              <div className={styles.formButtons}>
                <ActionButton name="Enviar" type="success" />
                <Link href="/">
                  <a>
                    <ActionButton name="Voltar" type="danger" />              
                  </a>
                </Link>
              </div>
              <div className={styles.miniInfo}>
                <p>Nós iremos mandar um email com um link de recuperação de senha</p>
              </div>
            </form>
            
          </div>
        </div>
      </Template>
    </div>
  )
}

export default RecoverPassword;