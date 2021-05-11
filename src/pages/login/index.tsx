import Image from 'next/image';
import Link from 'next/link';

import Template from '../../components/Template';
import { DefaultInput } from '../../components/Inputs';
import { ActionButton } from '../../components/Buttons';

import styles from './styles.module.scss';

const Register = () => {
  return(
    <div>
      <Template>
        <div className={styles.leftContent}>
          <Image src="/logo.jpg" width={350} height={250}/>
        </div>

        <div className={styles.rightContent}>
          <h1>Entrar</h1>
          <div className={styles.form}>
            <form action="">
              <div>
                <DefaultInput label="E-mail" type="email" placeholder="Ex: alberto@gmail.com"/>
              </div>
              <div>
                <DefaultInput label="Senha" type="password" placeholder="Ex: abxh@7x9854!"/>
              </div>
              <div className={styles.formButtons}>
                <ActionButton name="Cadastrar" type="success" />
                <Link href="/">
                  <a>
                    <ActionButton name="Cancelar" type="danger" />              
                  </a>
                </Link>
              </div>
              <div className={styles.formLink}>
                <Link href="#">
                  <a>Não possui cadastro? Cadastre-se</a>
                </Link>
              </div>
            </form>
            
          </div>
        </div>
      </Template>
    </div>
  )
}

export default Register;