export default function NewsPage() {
    return (

        <section className="mx-auto max-w-[1124px] py-16">
            <div className="flex flex-col">

                <div className="flex justify-between items-center mb-12">
                    <span className="text-4xl text-white">Latest News</span>
                    <button className="px-4 py-2 rounded-full border border-gray-600 text-white tracking-wider">VIEW ALL</button>
                </div>

                <div className="flex justify-between">
                    <div className="w-[30%] flex flex-col ">
                        <div
                            className="bg-[url(https://x.ai/images/news/grok-3.webp)] w-full aspect-square flex justify-center items-center bg-cover">
                            <span className="bg-black text-white text-4xl px-2 py-1">GROK 3</span>
                        </div>
                        <span className="text-md font-semibold mt-2 text-white">Grok 3 Beta — The Age of Reasoning Agents</span>
                        <p className="text-md mt-1">
                            We are thrilled to unveil an early preview of Grok 3,
                            our most advanced model yet, blending superior reasoning with extensive pretraining
                            knowledge.
                        </p>
                        <div className="flex justify-between mt-8 items-center">
                            <span className="text-md">February 19, 2025</span>
                            <button className="px-3 py-1 rounded-3xl border text-white tracking-wider ">READ</button>
                        </div>
                    </div>
                    <div className="w-[30%] flex flex-col ">
                        <div
                            className="bg-[url(https://x.ai/images/news/grok-3.webp)] w-full aspect-square flex justify-center items-center bg-cover">
                            <span className="bg-black text-white text-4xl px-2 py-1">SERIES C</span>
                        </div>
                        <span className="text-md font-semibold mt-2 text-white">xAI raises $6B Series C</span>
                        <p className=" mt-1">
                            We are partnering with A16Z, Blackrock, Fidelity Management & Research Company, Kingdom Holdings, Lightspeed, MGX, Morgan Stanley, OIA, QI                        </p>
                        <div className="flex justify-between mt-8 items-center">
                            <span className="text-md">February 19, 2025</span>
                            <button className="px-3 py-1 rounded-3xl border text-white tracking-wider ">READ</button>
                        </div>
                    </div>
                    <div className="w-[30%] flex flex-col ">
                        <div
                            className="bg-[url(https://x.ai/images/news/grok-3.webp)] w-full aspect-square flex justify-center items-center bg-cover">
                            <span className="bg-black text-white text-4xl px-2 py-1">GROK FOR ALL</span>
                        </div>
                        <span className="text-lg font-semibold mt-2 text-white">Bringing Grok to Everyone</span>
                        <p className="text-md mt-1">
                            Grok is now faster, sharper, and has improved multilingual support.
                            It is available to everyone on the 𝕏 platform.
                        </p>
                        <div className="flex justify-between mt-8 items-center">
                            <span className="text-md">February 19, 2025</span>
                            <button className="px-3 py-1 rounded-3xl border text-white tracking-wider ">READ</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

