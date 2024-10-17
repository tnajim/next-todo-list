"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function CreateNote() {
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async () => {
    await fetch('http://127.0.0.1:8090/api/collections/notes2/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content
      })
    });

    setContent('');
    router.refresh();
  }

  return (
    <form onSubmit={create}>
      <h3>Create a New Note</h3>
      <textarea placeholder="Note" value={content} onChange={(e) => setContent(e.target.value)}></textarea>

      <button type="submit">Create Note</button>
    </form>
  )
}