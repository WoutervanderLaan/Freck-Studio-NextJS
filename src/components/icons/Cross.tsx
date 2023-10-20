const Cross = ({ strokeColor = 'stroke-purple' }: { strokeColor?: string }) => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 346 335"
        xmlns="http://www.w3.org/2000/svg"
        className={strokeColor}
    >
        <path
            d="M220.254 119.946L125.746 214.424"
            strokeWidth="25.5"
            strokeMiterlimit="10"
            strokeLinecap="square"
        />
        <path
            d="M125.746 119.946L220.254 214.424"
            strokeWidth="25.5"
            strokeMiterlimit="10"
            strokeLinecap="square"
        />
    </svg>
)

export default Cross
