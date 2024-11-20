import Link from "next/link";
import styles from "./Notes.module.css";
import DeleteNote from "./DeleteNote";

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
      <div className="align-center">
        <Link href={`/notes/${id}/edit`}>
          <h4>Edit</h4>
        </Link>
        <DeleteNote note={note} />
      </div>
    </div>
  );
}