import Link from "next/link";
import styles from './Notes.module.css';
import CreateNote from "./CreateNote";

async function getNotes() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes2/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <div className="note-container">
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h3>{content}</h3>
        <p>{created}</p>
      </div>
    </Link>
  )
}