export default function Models() {
    return (

        <section className="max-w-[1124px] mx-auto mt-40">
            <div className="flex flex-col py-6   ">
                <p className="tracking-wider space-x-1.5">[ FOR PROJECTS BIG AND SMALL ]</p>
                <h2 className="text-5xl text-white font-semibold mt-16 mb-24">Models and Pricing</h2>
                <div className="flex flex-col">
                    <div className="flex justify-between py-3 border-b border-gray-600">
                        <span>Model</span>
                        <div className="flex justify-between w-1/2">
                            <span className="w-1/4 flex justify-end">Context</span>
                            <span className="w-1/4 flex justify-end">Text Input</span>
                            <span className="w-1/4 flex justify-end">Image Input</span>
                            <span className="w-1/4 flex justify-end">Completion</span>

                        </div>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-600">
                        <div className="flex flex-col w-1/2 gap-2">
                            <span className="text-2xl font-semibold text-white">grok-2-1212</span>
                            <span className="w-1/2 text-md tracking-tighter">Grok 2 model supporting function calling and structured outputs.</span>
                        </div>
                        <div className="flex justify-between w-1/2 items-center text-2xl font-semibold text-white ">
                            <span className="w-1/4 flex justify-end">131,072</span>
                            <span className="w-1/4 flex justify-end">$2.00	</span>
                            <span className="w-1/4 flex justify-end">-</span>
                            <span className="w-1/4 flex justify-end">$10.00</span>

                        </div>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-600">
                        <div className="flex flex-col w-1/4 flex-wrap gap-2">
                            <span className="text-2xl font-semibold text-white">grok-2-1212</span>
                            <span className="tracking-tighter">Grok 2 model supporting function  calling and structured outputs.</span>
                        </div>
                        <div className="flex justify-end w-1/2 items-center text-2xl font-semibold text-white">
                            <span className="w-1/4 text-right">32,768</span>
                            <span className="w-1/4 text-right">$2.00	</span>
                            <span className="w-1/4 text-right">$2.00	</span>
                            <span className="w-1/4 text-right">$10.00</span>

                        </div>
                    </div>
                    <span className="self-end mt-4">All pricing is per million tokens.</span>
                    <span className="self-end">Full pricing can be found within the console.</span>
                </div>
            </div>
        </section>

    )
}