import styles from './Contato.module.css'
import ContatoGif from '../assets/Rigby.webp'
import { useNavigate } from 'react-router-dom'

function Contato() {
  const navigate = useNavigate
  return (
    <div className={styles.contato}>
      <h1>Contato</h1>
      <img src={ContatoGif} alt="" className={styles.gif} />
      <button onClick={()=> navigate('/Sobre')}>Sobre</button>
      <button onClick={()=> navigate('/Home')}>Home</button>
    </div>
  )
}
export default Contato
