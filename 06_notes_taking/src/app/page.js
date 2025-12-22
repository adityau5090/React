import NotesClient from "@/components/NotesClient";
import Image from "next/image";


export default async function Home() {

  return (
    <>
      <div className="container mx-auto py-4">
        <h1 className="text-3xl font-semibold">Notes App</h1>
        <NotesClient />
      </div>
    </>
  );
}
