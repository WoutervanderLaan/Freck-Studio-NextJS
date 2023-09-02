const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className="w-full self-end flex justify-center p-6">
            <p className="text-sm text-tertiary-bg">{`© Freck Studio ${year}`}</p>
        </footer>
    )
}

export default Footer
