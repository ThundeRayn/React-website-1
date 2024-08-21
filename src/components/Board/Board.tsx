import styles from './Border.module.css';
import * as loadData from '../../data/loadData';

const Board = () => {
  return (
    <div className={styles['container']}>
        <p className={styles['content']}>{loadData.annoucement}</p>
    </div>
  )
}

export default Board;