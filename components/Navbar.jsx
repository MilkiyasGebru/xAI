const navbar_buttons = ["GROK", "API", "COMPANY", "COLOSSUS", "CAREERS", "NEWS"]

export default function Navbar(){

    return (
        <nav className="py-2 flex justify-between items-center">
            <div className="flex gap-x-3">
                {navbar_buttons.map((btn, i) => (
                    <button key={i} className="text-gray-300 hover:text-white cursor-pointer">{btn}</button>
                ))}
            </div>
            <button className="px-2 py-1 rounded-full border text-white">
                TRY GROK
            </button>
        </nav>
    )

}