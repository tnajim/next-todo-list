
import styles from '../Notes.module.css';

async function getNote(noteId: string) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/notes2/records/${noteId}`,
    {
      next: { revalidate: 10 }, //regenerate page if over 10 seconds
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
    </div>
  )
} 