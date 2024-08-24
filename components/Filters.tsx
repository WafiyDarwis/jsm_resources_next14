"use client"

import { formUrlQuery } from "@/sanity/utils"
import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"

const links = ['All', 'Next 14', 'Frontend', 'Backend', 'FullStack']

const Filters = () => {
    const [active, setActive] = useState('')
    const searchParams = useSearchParams()
    const router = useRouter()

    const handleFilter = (Link: string) => {
        let newUrl = ''
        
    if(active === Link) {
        setActive('')

        newUrl = formUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ['category'],
        })
    } else {
        setActive(Link)

        newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: 'category',
            value: Link.toLowerCase()
    })

    }
    router.push(newUrl, { scroll: false })
    }
    
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
        {links.map((Link) => (
            <button
                key={Link}
                onClick={() => handleFilter(Link)}
                className={`${ active === Link ? "gradient_blue-purple" : "" } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
                >
                {Link}
            </button>
        ))}
    </ul>
  )
}

export default Filters