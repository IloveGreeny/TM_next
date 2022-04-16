import Link from "next/link";


export default function Body() {
    return(
        <div>
            <div className="bg-blue-600">
                <Link href="card">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiS2RF6QI1BAp_uZhTXosG_dMYWw5I5SqplLchE0rRyQ2EGvfiKmo8YuQvb7-Angj2wl4&usqp=CAU"
                        alt="" className="w-2/3 cursor-pointer min-h-screen py-10  px-80"/>
                </Link>
            </div>
        </div>
    )
}
