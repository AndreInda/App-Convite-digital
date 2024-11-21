import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fonte = Righteous({
    subsets: ["latin"],
    weight: "400",
})

export default function Logo(){
    return(
        <Link href="/"
        className={`
        ${fonte.className}
        `}
        >
            <Image
                src="/logo.svg"
                width={50}
                height={50}
                alt="Logo"
            />
            <span>Logo</span>
        </Link>
    );
}
