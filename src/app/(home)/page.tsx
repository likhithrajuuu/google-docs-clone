import Link from "next/link";

const home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click <Link href="/documents/123"><span className="text-blue-500 underline">&nbsp;Here</span></Link> to go to documents id
    </div>
  )
}

export default home;