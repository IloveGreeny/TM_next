import Link from "next/link";


export default function Body() {
    return(
        <div>
            <div className="bg-blue-600">
                <Link href="card">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiS2RF6QI1BAp_uZhTXosG_dMYWw5I5SqplLchE0rRyQ2EGvfiKmo8YuQvb7-Angj2wl4&usqp=CAU"
                        alt="" className="flex-grow h-screen pb-44 pt-6 px-44"/>
                </Link>
            </div>
        </div>
    )
}
