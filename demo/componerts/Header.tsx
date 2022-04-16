import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between p-5 bg-blue-600">
            <div className="flex items-center space-x-5">
                <Link href="/">
                    <img className="w-44 object-contain cursor-pointer" src="" alt=""/>
                </Link>
            </div>
            <div className="flex items-center space-x-5 text-white">
                <Link href="/">
                    <h3 className="cursor-pointer text-white">Home</h3>
                </Link>
                <Link href="card">
                    <h3 className="cursor-pointer text-white">Cards</h3>
                </Link>
                <h3 className="text-white cursor-pointer">Get Started</h3>
            </div>
        </header>
    )
}
