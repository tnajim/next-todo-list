"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";



export default function EditNote({ note }: { note: any }) {
  const [content, setContent] = useState(note?.content || '');

  const router = useRouter();

  const update = async (event: any) => {
    event.preventDefault();
    await fetch(`http://127.0.0.1:8090/api/collections/notes2/records/${note.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content
      })
    });

    router.refresh();
  }

  return (
    <form onSubmit={update}>
      <h3>Edit Note</h3>
      <textarea placeholder="Note" value={content} onChange={(e) => setContent(e.target.value)}></textarea>

      <button type="submit">Edit Note</button>
    </form>
  )
}