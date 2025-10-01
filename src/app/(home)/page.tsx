import Link from "next/link";
import {Navbar} from "@/app/(home)/navbar";

const home = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
            <Navbar />
        </div>
      <div className="mt-16">
          Click <Link href="/documents/123"><span className="text-blue-500 underline">&nbsp;Here</span></Link> to go to documents id
      </div>
    </div>
  )
}

export default home;