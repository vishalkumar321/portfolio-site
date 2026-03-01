import { useState, useEffect } from 'react'

export function useScrollspy(ids, offset = 100) {
    const [activeId, setActiveId] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset

            for (let i = ids.length - 1; i >= 0; i--) {
                const element = document.getElementById(ids[i])
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveId(ids[i])
                    return
                }
            }

            setActiveId('')
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [ids, offset])

    return activeId
}
