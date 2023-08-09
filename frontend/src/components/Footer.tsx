import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-nav">
      <Link href="#home" className="text-white text-sm p-1.5 hover:text-yel">
        © 2023 Isaac Farias
      </Link>
    </footer>
  )
}