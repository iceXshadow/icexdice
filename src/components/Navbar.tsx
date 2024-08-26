

const Navbar: React.FC = () => {
    return (
        <header className="w-full p-4 border-b-2 border-yellow-50">
            <nav>
                <ul>
                    <li>
                        <a href="/" className="flex gap-3 items-center justify-center md:justify-start">
                            <img src="/dmlogo.svg" alt="logo" className="w-10" />
                            <p>Geeks for Geeks</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar