"use client"
export default function Calculator() {

    return (
        <div className="flex flex-col py-16">
            <div className="flex justify-between items-center">
                <span className="text-2xl font-semibold">Cost calculator</span>
                <button className="px-3 py-2 rounded-full">REQUEST CUSTOM PRICING</button>
            </div>
            <div className="flex justify-between">
                <span className="w-1/4">Model</span>
                <span className="w-1/3">Text Input Tokens</span>
                <span className="w-1/3">Completion Tokens</span>
            </div>

            <form action="" className="flex flex-col gap-6">

                <div className="flex justify-between">
                    <select name="models" id="models" className="w-1/4 border border-gray-500 px-2 py-2">
                        <option value="grok-2-1212" className="bg-black">grok-2-1212</option>
                        <option value="grok-2-vision-1212" className="bg-black">grok-2-vision-1212</option>

                    </select>
                    <input type="text" value={2500000} placeholder={"2500000"} onChange={()=>{}} className="text-left border border-gray-100 w-1/3 px-3 py-2"/>
                    <input type="text" value={2500000} placeholder={"2500000"} onChange={()=>{}} className="text-left border border-gray-100 w-1/3 px-3 py-2"/>
                </div>


                <div className="flex justify-between items-center">

                    <div className="w-1/4">
                        <button className="w-fit px-2 py-1 border rounded-full font-thin">
                            RESET
                        </button>
                    </div>
                    <div className="flex flex-col  w-1/3 gap-2">
                        <input
                            type="range"
                            className="outline-none appearance-none h-3 bg-[rgb(51,51,51)]  cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-green-500  [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-12 [&::-moz-range-thumb]:h-12 [&::-moz-range-thumb]:bg-green-500 [&::-moz-range-thumb]:rounded-full"
                        />
                        <div className="flex justify-between text-xs">
                            <span>0</span>
                            <span>10M+</span>
                        </div>
                    </div>

                    <div className="flex flex-col  w-1/3 gap-2">
                        <input
                            type="range"
                            className="outline-none appearance-none h-3 bg-[rgb(51,51,51)]  cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-green-500  [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-12 [&::-moz-range-thumb]:h-12 [&::-moz-range-thumb]:bg-green-500 [&::-moz-range-thumb]:rounded-full"
                        />
                        <div className="flex justify-between text-xs">
                            <span>0</span>
                            <span>10M+</span>
                        </div>
                    </div>
                </div>

            </form>

            <span className="self-end  mt-6 text-[rgb(130, 133, 138)]">cost</span>
            <span className="self-end text-6xl mt-4">30.00$</span>


        </div>
    )
}