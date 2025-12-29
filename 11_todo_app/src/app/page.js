import Image from "next/image";
import { Button } from "@/components/ui/button";
import TodoForm from "@/components/TodoForm";
import { Almendra_SC } from "next/font/google";
import TodoList from "@/components/TodoList";
import TodoFilter from "@/components/TodoFilter";

const myFont = Almendra_SC({
  weight: ["400"],
  subsets: ["latin"]
})


export default async  function Home() {



  return (
    <section className="min-h-screen bg-background relative">
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <header className="text-center mb-8">
          <h1 className={`font-bold text-5xl  ${myFont.className}`}>Todo Form</h1>
          <p className="text-muted-foreground">Built with Next.js, ustand, Tanstack Query, Zod & Mongoose</p>
        </header>
        <main>
          <TodoForm />
          <TodoFilter />
          <TodoList />
        </main>

      </div>
      <footer className="mt-6  text-center text-sm text-muted-foreground w-full py-2 bg-slate-700">
        <p className="text-gray-300">This app demonstrates CRUD operations with modern React patterns</p>
      </footer>

    </section>
  );
}
