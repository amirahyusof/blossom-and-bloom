
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#89B9AD] text-white py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base">© {new Date().getFullYear()} Blossom&Bloom. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4 md:space-x-6">
            <Link href="#" className="text-white hover:text-[#FFEBD8] transition-colors text-sm md:text-base">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white hover:text-[#FFEBD8] transition-colors text-sm md:text-base">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
