import Card from "./card";
import Link from "next/link";
import Header from "../componets/Header";



export default function Home() {
    return(
        <div>
           <Header/>
            <Link href="card">
                <h1 className="cursor-pointer ">KLA/</h1>
            </Link>
        </div>
    )
}
