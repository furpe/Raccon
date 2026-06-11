import styles from './Sobre.module.css'
import SobreGif from '../assets/Rocket.webp'
import { useNavigate } from 'react-router-dom'

function Sobre() {
  const navigate = useNavigate()
  return (
    <div className={styles.sobre}>
      <h1>Sobre</h1>
      <img src={SobreGif} alt="" className={styles.gif} />
      <button onClick={()=> navigate('/')} >Home</button>
      <button onClick={()=> navigate('/Contato')} >Contato</button>
    </div>
  )
}
export default Sobre
