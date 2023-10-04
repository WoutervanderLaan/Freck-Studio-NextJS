import { ReactNode } from 'react'

const Tag = ({ children }: { children: ReactNode }) => (
    <div className="bg-white text-black rounded-custom py-2 text-center px-5 lg:text-lg">
        {children}
    </div>
)

export default Tag
