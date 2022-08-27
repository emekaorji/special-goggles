// Components
import { Logo } from './icon';

// Styles
import styles from '../styles/nav.module.sass'
import baseStyles from '../styles/app.module.sass'

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={baseStyles.container}>
        <div className="logo"><Logo width={48} height={48} /></div>
        <input type="text" name="posts" />
      </div>
    </nav>
  )
}

export default Nav;