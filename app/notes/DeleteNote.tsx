"use client";

import { useRouter } from "next/navigation";

export default function CreateNote({ note }: { note: any }) {
  const router = useRouter();

  const deleteNote = async () => {
    await fetch(`http://127.0.0.1:8090/api/collections/notes2/records/${note.id}`, {
      method: "DELETE",
    });

    router.refresh();
  };

  return (
    <button type="button" onClick={deleteNote}>
      Delete
    </button>
  );
}
