import UserForm from "@/components/UserForm";
import UserList from "@/components/UserList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">User Management</h1>
        <p className="text-sm text-muted-foreground ">Basic CRUD operation with Drizzle ORM and PostgreSQL</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-medium mb-3">Users</h2>
          <UserList />
        </div>
        <div>
          <h2 className="text-xl font-medium mb-3">Add User</h2>
          <UserForm />
        </div>
      </div>
    </div>
  );
}
