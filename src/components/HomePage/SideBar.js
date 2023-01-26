const SideBar = ({ pages, selected, setSelected }) => {
    return (
        <div className="w-full flex flex-col bg-slate-200 h-full ">
            <div className="font-semibold text-orange-400 mx-auto mt-12">
                Khaki AI
            </div>
            <div className="flex flex-col mt-8 space-y-4 px-6">
                {pages?.map((key, idx) => {
                    return (
                        <div
                            onClick={() => {
                                setSelected(idx)
                            }}
                            className={`flex text-gray-700 hover:bg-orange-400 px-4 w-full cursor-pointer rounded-md py-1 hover:bg-opacity-40 ${
                                selected === idx && 'bg-orange-400/40'
                            }`}
                        >
                            {key?.name}
                            <span className="my-auto ml-2">{key?.icon}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default SideBar
