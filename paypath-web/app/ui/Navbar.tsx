import { LuWallet, LuArrowUpDown, LuHouse, LuChartPie, LuUser } from "react-icons/lu"
import Image from "next/image"


export default function Navbar() {
  return (
    <nav className="w-full md:w-max md:h-screen fixed z-10 max-md:bottom-0 md:py-14 max-md:pb-6 shadow-top">
      <div className="flex md:flex-col gap-5 items-center justify-between">
        <section className="w-full hidden md:flex justify-center md:pb-8 border-b-2 border-b-[#606060]">
          <Image 
            src='/paypath-logo.png'
            width={40}
            height={40}
            alt='paypath logo'
          />
        </section>
        <section className="w-full flex md:flex-col items-center justify-between navbar">
          <a href="/"><LuHouse className="text-[1.25rem]"/>Home</a>
          <a href="transactions"><LuArrowUpDown className="text-[1.25rem]"/>Transactions</a>
          <a><LuWallet className="text-[1.25rem]"/>Wallet</a>
          <a><LuChartPie className="text-[1.25rem]"/>Budget</a>
          <a><LuUser className="text-[1.25rem]"/>Profile</a>
        </section>
      </div>
    </nav>
  )
}
