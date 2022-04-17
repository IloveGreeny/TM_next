import Link from "next/link";


export default function Card() {
    return(
        <div>
            <Link href="/">
                <img
                    src="https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                    alt=""
                    className="cursor-pointer"/>
            </Link>
            <h1 className="bg-blue-400">Lms;</h1>
        </div>
    )
}
