import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  // await connectDB();
  return (
    <main className="h-screen py-5 px-4">
      <div className="container mx-auto bg-gray-100 rounded-xl py-2">
            <div className="text-center mb-5">
                <h2 className='text-3xl font-bold mb-1 text-gray-900'>Server Actions Demo</h2>
                <p className='text-md  text-gray-700'>Contact form with MongoDb and revalidations</p>
                <div className="my-4">
                 <Link href="/contacts"> <Button className="text-xm font-semibold text-white cursor-pointer">See Contacts</Button></Link>
                </div>
            </div>
            <ContactForm />

        </div>
    </main>
  );
}
