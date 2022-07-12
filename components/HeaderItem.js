import styles from '../styles/HeaderItem.module.css'

const HeaderItem = ({title, Icon}) => {
  return (
    <div className={styles.app__headerItem}> 
    <Icon class={styles.app__headerItem_icon} />
    <p className={styles.app__headerItem_text}>{title}</p>
    </div>
  )
}

export default HeaderItem;
