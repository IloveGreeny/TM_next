import Link from "next/link";


export default function Body() {
    return(
        <div>
            <div className=" bg-blue-400 md:flex bg-slate-100 p-8 md:p-0 dark:bg-slate-800">
                <Link href="card">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiS2RF6QI1BAp_uZhTXosG_dMYWw5I5SqplLchE0rRyQ2EGvfiKmo8YuQvb7-Angj2wl4&usqp=CAU"
                        alt="" className="1/2 w-96 h-96 md:rounded-none rounded-full mx-auto"/>
                </Link>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                    </figcaption>
                </div>

            </div>
        </div>
    )
}
