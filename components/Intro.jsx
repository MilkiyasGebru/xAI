import {BiDownArrowAlt} from "react-icons/bi";

export default function Intro(){
    return (
        <div className="min-h-[90vh] flex flex-col justify-between py-12 mt-6 border-b border-gray-500">
            <div className="flex flex-col gap-y-12">
                <p className="tracking-widest text-md">[ ELEVATE YOUR APPS]</p>
                <div className="flex flex-col text-7xl">
                    <p>The Next Frontier</p>
                    <p>in AI integration</p>
                </div>
            </div>
            <div className="flex justify-between">
                <BiDownArrowAlt className="text-4xl font-thin" />
                <div className="flex gap-x-3">
                    <button className="px-3 py-2 rounded-full border bg-white text-black">DOCUMENTATION</button>
                    <button className="px-3 py-2 rounded-full border">PRICING</button>
                </div>

            </div>
        </div>
    )
}