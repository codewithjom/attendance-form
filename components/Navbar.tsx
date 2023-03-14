import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <div className="flex flex-col">
        <div className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-blue-500"></div>
        <nav className="fixed top-0 left-0 right-0 z-10 flex justify-around w-full py-4 shadow-md bg-white/80 backdrop-blur-md">
          <div className="flex items-center">
            <Link href="#" className="cursor-pointer">
              <h3 className="text-2xl font-medium text-blue-500">
                <Image
                  src={'https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg'}
                  alt="logo"
                  width={150}
                  height={150}
                />
              </h3>
            </Link>
          </div>
          <div className="items-center hidden space-x-8 lg:flex">
            <Link
              href="#"
              className="flex text-gray-600 cursor-pointer hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </Link>
            <Link href="#" className="flex font-semibold text-gray-600 cursor-pointer transition-colors duration-300">
              Themes
            </Link>
            <Link
              href="#"
              className="flex text-gray-600 cursor-pointer hover:text-blue-500 transition-colors duration-300"
            >
              Developers
            </Link>
            <Link
              href="#"
              className="flex text-gray-600 cursor-pointer hover:text-blue-500 transition-colors duration-300"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="flex text-gray-600 cursor-pointer hover:text-blue-500 transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="flex text-gray-600 cursor-pointer hover:text-blue-500 transition-colors duration-300"
            >
              About Us
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
