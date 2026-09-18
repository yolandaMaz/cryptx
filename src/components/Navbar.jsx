import { LuInfinity, LuLayoutDashboard, LuChartPie, LuArrowLeftRight, LuWallet, LuMail, LuSettings, LuLogOut } from "react-icons/lu";

function Navbar() {
    return(
        <div className="w-64 min-h-screen bg-gray-100 p-6 shrink-0">
            <div className="flex items-center gap-2 px-6 py-6">
                <span className="flex items-center gap-2 text-lg font-semibold text-black">
                    <LuInfinity className="w-5 h-5 text-indigo-500" />
                    CryptX
                </span>
                 </div>
                <ul className="flex flex-col gap-1 px-4 text-sm">
                    <li className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-indigo-600 font-medium bg-indigo-50">
                        <LuLayoutDashboard className="w-4 h-4" />
                        Overview
                    </li>
                    <li className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50">
                        <LuChartPie className="w-4 h-4" />
                        Chart
                    </li>
                    <li className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50">
                        <LuArrowLeftRight className="w-4 h-4" />
                        Transactions
                    </li>
                    <li className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50">
                        <LuWallet className="w-4 h-4" />
                        Wallet
                    </li>
                    <li className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50">
                        <LuMail className="w-4 h-4" />
                        Mail Box
                    </li>
                    <li className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50">
                        <LuSettings className="w-4 h-4" />
                        Setting
                    </li>
                    <li className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50">
                        <LuLogOut className="w-4 h-4" />
                        Logout
                    </li>
                </ul>
            </div>
    )
}

export default Navbar;