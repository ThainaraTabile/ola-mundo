import styles from './Banner.module.css';
import nomeSite from '../../assets/nome_site.png'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <div className={styles.titulo}>
                <img
                    className={styles.imagens}
                    src={nomeSite}
                    aria-hidden={true}
                    alt=""
                />
                </div>

                <p className={styles.paragrafo}>
                Este é meu primeiro projeto feito com React!
Aqui compartilho algumas informações sobre os projetos que desenvolvi durante o bootcamp da Laboratória.
                </p>
            </div>

             <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=""
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Antônio Evaldo sorrindo"
                /> 
        </div>
       </div>
    )
}