import './rodape.css'
import fecebook from '../../assets/fb.png'
import instagram from '../../assets/ig.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.facebook.com/kaue.oliveira.9250" target="_blank">
                        <img src={fecebook} alt="Link para o fecebook" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kauê-matos-oliveira-a76410213/" target="_blank">
                        <img className="linkedin" style={{width:34,height:34,marginTop:10}}src={linkedin} alt="Link para o linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/kauematos2003/" target="_blank">
                        <img src={instagram} alt=" link para o Instagram" />
                    </a>
                </li>

                <li>
                    <a href="https://github.com/iKaueMatos" target="_blank">
                        <img src={github} alt="Link para o Github" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Kauê de matos oliveira.
            </p>
        </section>
    </footer>)
}

export default Rodape;