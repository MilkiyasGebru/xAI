const navbar_buttons = ["GROK", "API", "COMPANY", "COLOSSUS", "CAREERS", "NEWS"]

export default function Navbar(){

    return (
        <nav className="py-4 flex justify-between items-center sticky top-0 z-10 bg-black max-w-[1124px] mx-auto opacity-95">
            <div className="flex gap-x-3">
                {navbar_buttons.map((btn, i) => (
                    <button key={i} className="text-neutral-400 hover:text-white cursor-pointer">{btn}</button>
                ))}
            </div>
            <button className="px-2 py-1 rounded-full border text-neutral-400 hover:text-white transition duration-500">
                TRY GROK
            </button>
        </nav>
    )

}