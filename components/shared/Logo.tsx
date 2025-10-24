import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image 
        src="/assets/images/logo.svg"
        alt="EventForge"
        width={32}
        height={32}
      />
      <span className="text-xl font-bold text-primary">EventForge</span>
    </Link>
  )
}