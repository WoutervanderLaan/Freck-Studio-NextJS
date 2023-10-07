import { ReactNode } from 'react'

const Tag = ({ children, note }: { children: ReactNode; note?: string }) => (
    <div className="bg-white text-black rounded-custom py-3 text-center px-6 text-base sm:text-lg hover:scale-110 duration-100">
        {children} {note && <span className="text-purple-alt">{note}</span>}
    </div>
)

export default Tag
