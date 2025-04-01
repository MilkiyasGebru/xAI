import { HiArrowUpRight } from 'react-icons/hi2';

export default function ComingSoon() {

    return (
        <div className="flex flex-col justify-center items-center py-12 gap-y-6">
            <h3 className="text-2xl text-white">Grok 3 coming soon</h3>
            <p className="text-gray-500">We're working hard to bring Grok 3 to the API. We'll be rolling out access soon.</p>
            <button className="px-3 py-2 border rounded-full text-white flex items-center gap-2">READ MORE <HiArrowUpRight/> </button>
        </div>
    )

}