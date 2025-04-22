import Image from "next/image"

import { footerLinks } from "@/app/constants"
import Link from "next/link"
export const Footer = () => {
    return (
        <footer className=" max-w-[1440px] mx-auto  ">
            <div className="flex  max-md:flex-col  justify-between gap-5 flex-wrap   px-10 ">
                <div className=" flex flex-col items-start  gap-6">
                    
                        <Image
                            src='/logo.svg'
                            alt='car hub logo'
                            width={118}
                            height={18}
                            className='object-contain' />
                    
                    <p className='' >Git hub 2023<br />
                        All rights Reserved</p>

                </div>
                <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20 ">
                    {footerLinks.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-1 min-w-[170px] " >
                            <h3 className="font-bold">{item.title}</h3>
                            {item.links.map((item, index) => (
                                <Link className="" key={index} href={item.url}>{item.title}</Link>
                            ))}
                        </div>

                    ))}
                </div>
            </div>


            {/* <div className="flex basis-[200px] flex-col gap-[10px]">
                    <Link href={''}>About</Link>
                    <Link href={''}>How it works</Link>
                    <Link href={''}>Featured</Link>
                    <Link href={''}>About</Link>
                    <Link href={''}>About</Link>
                </div>
                <div className="flex basis-[200px] flex-col gap-[10px]">
                    <Link href={''}>Company</Link>
                    <Link href={''}>How it works</Link>
                    <Link href={''}>Featured</Link>
                    <Link href={''}>About</Link>
                    <Link href={''}>About</Link>
                </div>
                <div className="flex basis-[200px] flex-col gap-[10px]">
                    <Link href={''}>Socials</Link>
                    <Link href={''}>How it works</Link>
                    <Link href={''}>Featured</Link>
                    <Link href={''}>About</Link>
                    <Link href={''}>About</Link>
                </div> */}

        </footer>
    )
}
