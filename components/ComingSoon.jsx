import { HiArrowUpRight } from 'react-icons/hi2';

export default function ComingSoon() {

    return (
        <section className="max-w-[1124px] mx-auto mt-40">
            <div className="flex flex-col justify-center items-center py-12 ">
                <h3 className="text-2xl text-white">Grok 3 coming soon</h3>
                <p className="text-gray-500 text-center w-1/3 mt-3">We're working hard to bring Grok 3 to the API. We'll be
                    rolling out access soon.</p>
                <button className="px-3 py-2 border border-gray-600 tracking-wider rounded-full text-white flex items-center gap-2 mt-12">READ
                    MORE <HiArrowUpRight/></button>
            </div>
        </section>

    )

}