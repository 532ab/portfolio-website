

const Header = () => {
  return (
    <header className="absolute w-full z-50 transition-all duration-300">
        <div className = "container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo/Name */}
            <div className = "flex items-center">
                <div className = "h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100
                flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
                    A
                </div>

            </div>
        </div>
        </header>
  )
}

export default Header