import Image from "next/image";
import UserList from "@/components/UserList"
import AddUser from "@/components/AddUser";

export default function Home() {
  return (
    <div className="container mx-auto  p-6 max-w-4xl">
        <h1 className="font-bold text-xl text-center mb-8">Tanstack Query Demo</h1>
        <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-6">
              <UserList />
              <AddUser />
            </div>
        </div>
    </div>
  );
}
