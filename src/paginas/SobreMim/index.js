import PostModelo from "../../componentes/PostModelo";
import fotoCapa from '../../assets/sobre_mim_capa.png'
import styles from './SobreMim.modules.css';


export default function SobreMim() {
    return (

        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Thainara!
            </h3>
            <p className={styles.paragrafo}>Estudante de desenvolvimento web com formação em Direito e pós-graduação em Privacidade e Proteção de Dados. Encontrei na tecnologia a oportunidade de unir meus interesses em solucionar problemas e criar soluções inovadoras.</p>
        </PostModelo>
    )
}