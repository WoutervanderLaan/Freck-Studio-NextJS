const Hamburger = ({ isOpen = false }: { isOpen?: boolean }) => (
    <svg
        width={24}
        height={16}
        viewBox="0 0 98 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-black dark:stroke-white"
    >
        <path
            d="M4.85001 4.58997H93.15"
            strokeWidth="9"
            strokeMiterlimit="10"
            strokeLinecap="round"
        />
        <path
            d="M4.85001 33H93.15"
            strokeWidth="9"
            strokeMiterlimit="10"
            strokeLinecap="round"
        />
        <path
            d="M4.85001 61.41H93.15"
            strokeWidth="9"
            strokeMiterlimit="10"
            strokeLinecap="round"
        />
    </svg>
)

export default Hamburger
