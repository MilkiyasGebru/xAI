import { HiArrowUpRight } from 'react-icons/hi2';

export default function QuickStart() {
    return (

        <section className="max-w-[1124px] mx-auto flex">
            <div className="flex flex-col w-1/2 mt-8 ">
                <div className="flex flex-col ">
                    <p className="capitalize">[ minutes to launch ]</p>
                    <h2 className="text-5xl text-white font-semibold mt-12">Quickstart</h2>
                    <p className="text-white mt-6">Our API is compatible with OpenAI and Anthropic’s SDKs.</p>
                    <p className="text-white">Migrating is as easy as generating an API key and changing a URL.</p>
                    <button className="capitalize px-4 py-2 rounded-full w-fit border mt-12 text-white flex items-center gap-2">START BUILDING <HiArrowUpRight /></button>
                </div>
            </div>
        </section>

    )
}