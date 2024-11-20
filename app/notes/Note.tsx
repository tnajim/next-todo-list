import Link from "next/link";
import styles from './Notes.module.css';

export default function Note({ note }: any) {
  const { id, content, created } = note || {};

  return (
    <div>
      <Link href={`/notes/${id}`}>
        <div className={styles.note}>
          <h3>{content}</h3>
          <p>{created}</p>
        </div>
      </Link>
      <Link href={`/notes/${id}/edit`}>
        <div className="align-center"><h4>Edit</h4></div>
      </Link>
    </div>
  )
}