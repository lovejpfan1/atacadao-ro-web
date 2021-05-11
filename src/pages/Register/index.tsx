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
          <h1>Cadastre-se</h1>
          <div className={styles.form}>
            <form action="">
              <div>
                <DefaultInput label="Nome" type="text" placeholder="Ex: Alberto"/>
              </div>
              <div>
                <DefaultInput label="E-mail" type="email" placeholder="Ex: alberto@gmail.com"/>
              </div>
              <div>
                <DefaultInput label="Senha" type="password" placeholder="Ex: abxh@7x9854!"/>
              </div>
              <div>
                <DefaultInput label="Repita a senha" type="password" placeholder="Ex: abxh@7x9854!"/>
              </div>
              <div className={styles.formButtons}>
                <ActionButton name="Cadastrar" type="success" />
                <Link href="/">
                  <a>
                    <ActionButton name="Cancelar" type="danger" />              
                  </a>
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