

const titles = ["Try Grok On", "Products", "Company","Resources"]
const topics = [["Web","iOS","Android","GROK on X"],["Grok","API"],["Company","Careers","Contact","News"],["Status","Privacy policy","Security","Legal"]]


export default function Footer() {

    return (
        <footer className="max-w-[1124px] mx-auto mt-40 py-40">
            <div className="flex justify-between">
                {titles.map((title,index) => (
                    <div className="flex flex-col gap-y-3" key={index}>
                        <span className="uppercase">{title}</span>
                        {topics[index].map((topic,index)=>{
                            return <span key={topic} className="text-white cursor-pointer hover:underline">{topic}</span>
                        })}
                    </div>
                ))}
            </div>
        </footer>
    )
}