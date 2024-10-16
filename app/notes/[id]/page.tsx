
import Link from 'next/link';
import styles from '../Notes.module.css';

async function getNote(noteId: string) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/notes2/records/${noteId}`,
    {
      cache: 'no-store'
    }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div className={styles.note}>
        <h3>{note.content}</h3>
        <p>{note.created}</p>
      </div>
      <Link href={`/notes/${note.id}/edit`}>
        <center><h4>Edit</h4></center>
      </Link>
    </div>
  )
} 