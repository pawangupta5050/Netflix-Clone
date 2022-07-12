import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"
import styles from '../styles/Results.module.css'

const Results = ({ results }) => {
  return (
    <FlipMove className={styles.app__results}>
        {results.map( result => (
          <Thumbnail key={result.id} result={result} />
        ))}
    </FlipMove>
  )
}

export default Results