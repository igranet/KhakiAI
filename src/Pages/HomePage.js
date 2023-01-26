import { useState } from 'react'
import { AiFillHome, AiOutlineInbox, AiOutlineSearch } from 'react-icons/ai'
import SideBar from '../components/HomePage/SideBar'

const HomePage = ({}) => {
    const [selected, setSelected] = useState(0)
    const pages = [
        {
            name: 'Home',
            icon: <AiFillHome />,
        },
        {
            name: 'Inbox',
            icon: <AiOutlineInbox />,
        },
        {
            name: 'Prospect',
            icon: <AiOutlineSearch />,
        },
    ]
    return (
        <div className="w-full h-screen bg-slate-100 flex flex-row">
            <div className="w-1/6">
                <SideBar
                    pages={pages}
                    selected={selected}
                    setSelected={setSelected}
                />
            </div>

            <div className="w-4/5 flex bg-slate-100"></div>
        </div>
    )
}
export default HomePage
