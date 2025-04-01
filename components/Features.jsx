import {BiMessage, BiPhotoAlbum, BiCommand} from "react-icons/bi";


export default function Features() {

    return (
        <div className="flex flex-col gap-4 mt-8 py-4 max-w-[1124px] mx-auto">
            <p>[ Capabilities ]</p>
            <h2 className="mt-12 text-5xl text-white mb-24">Models that fits your needs</h2>
            <div className="flex flex-wrap">
                {/*Features*/}
                <div className="flex flex-col  w-1/3 p-4 border-l border-gray-600 hover:border cursor-pointer">
                    <BiMessage className="text-4xl" />
                    <h3 className=" mt-12 mb-6 text-white text-2xl">Text</h3>
                    <p className="text-gray-400">The cornerstone of interaction; summarize articles, generate
                        creative writing, assist with coding tasks and more
                    </p>
                </div>
                <div className="flex flex-col gap-3 w-1/3 p-4 border-l border-gray-600 hover:border cursor-pointer">
                    <BiPhotoAlbum className="text-4xl" />
                    <h3 className="mt-12 mb-6 text-white text-2xl">Text</h3>
                    <p>The cornerstone of interaction; summarize articles, generate
                        creative writing, assist with coding tasks and more
                    </p>
                </div>
                <div className="flex flex-col gap-3 w-1/3 p-4 border-l border-gray-600 hover:border cursor-pointer">
                    <BiCommand className="text-4xl" />
                    <h3 className="mt-12 mb-6 text-white text-2xl">Text</h3>
                    <p>The cornerstone of interaction; summarize articles, generate
                        creative writing, assist with coding tasks and more
                    </p>
                </div>
                <div className="flex flex-col gap-3 w-1/3 p-4 border-l border-gray-600 hover:border cursor-pointer">
                    <BiMessage className="text-4xl" />
                    <h3 className="mt-12 mb-6 text-white text-2xl">Text</h3>
                    <p>The cornerstone of interaction; summarize articles, generate
                        creative writing, assist with coding tasks and more
                    </p>
                </div>
                <div className="flex flex-col gap-3 w-1/3 p-4 border-l border-gray-600 hover:border cursor-pointer">
                    <BiMessage className="text-4xl" />
                    <h3 className="mt-12 mb-6 text-white text-2xl">Text</h3>
                    <p>The cornerstone of interaction; summarize articles, generate
                        creative writing, assist with coding tasks and more
                    </p>
                </div>
                <div className="flex flex-col gap-3 w-1/3 p-4 border-l border-gray-600 hover:border cursor-pointer">
                    <BiMessage className="text-4xl" />
                    <h3 className="mt-12 mb-6 text-white text-2xl">Text</h3>
                    <p>The cornerstone of interaction; summarize articles, generate
                        creative writing, assist with coding tasks and more
                    </p>
                </div>

            </div>
        </div>
    )
}