import styles from './Home.module.css'
import homeGif from '../assets/Racoon.avif'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <img src={homeGif} alt="" className={styles.gif} />
      <button onClick={()=> navigate('/Sobre')}>Sobre</button>
      <button onClick={()=> navigate('/Contato')}>Contato</button>
    </div>
  )
}
export default Home
