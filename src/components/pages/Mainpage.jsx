import { LuSearch, LuBell, LuCircleHelp } from "react-icons/lu";

function Mainpage() {
    return(
        <div className="flex-1 min-w-0">
        <div className="w-full bg-white px-8 py-5 flex items-center justify-between border-b border-gray-100">
            <div className="relative w-80">
                <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                type="text"
                placeholder="Search type of keywords"
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300" />
            </div>
            <div className="flex items-center gap-6">
                <button className="relative text-gray-500 hover:text-gray-700">
                    <LuBell className="w-5 h-5" />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                    <LuCircleHelp className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-700">
                        L
                    </div>
                    <div className="leading-tight">
                        <p className="text-sm font-medium text-gray-800">
                            Laurice
                        </p>
                        <p className="text-xs text-gray-400">
                            @laurice22
                        </p>
                    </div>
                </div>
            </div>
            </div>

            <div className="p-8 grid grid-cols-5 gap-6">
                <div className="col-span-3 grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center text-white font-bold">B</div>
                            <span className="text-xs text-green-500">+0.25%</span>
                        </div>
                        <h2 className="mt-6 text-2xl font-semibold">$40,291</h2>
                        <p className="text-sm text-gray-400">Bitcoin - BTC</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-lg bg-indigo-500 flex-center justify-center text-white font-bold">E</div>
                            <span className="text-xs text-green-500">+0.25%</span>
                        </div>
                        <h2 className="mt-6 text-2xl font-semibold">$18,291</h2>
                        <p className="text-sm text-gray-400">Ethereum - ETH</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">L</div>
                            <span className="text-xs text-green-500">+0.25%</span>
                        </div>
                        <h2 className="mt-6 text-2xl font-semibold">$8,291</h2>
                        <p className="text-sm text-gray-400">Litecoin - ITL</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center text-white font-bold">A</div>
                            <span className="text-xs text-orange-500">-2.05%</span>
                        </div>
                        <h2 className="mt-6 text-2xl font-semibold">$3,291</h2>
                        <p className="text-sm text-gray-400">Cardono - ADA</p>
                    </div>
                </div>

                <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="text-lg font-semibold mb-4">BTC Prices</h2>
                    <svg viewBox="0 0 460 260" className="w-full">
                        <g fontSize="11" fill="#9ca3af">
                            <text x="0" y="24">$800</text>
                            <text x="0" y="64">$600</text>
                            <text x="0" y="104">$400</text>
                            <text x="0" y="144">$200</text>
                            <text x="0" y="184">0</text>
                        </g>
                        <g transform="translate(50,0)">
                            <rect x="158" y="95" width="26" height="90" fill="#e0dcfa" />
                            <path
                            d="M0,75 C40,65 70,30 110,30 C150,30 150,75 171,75 C200,75 210,55 240,57 C270,60 280,130 C350,130 360,30 400,30"
                            fill="none"
                            stroke="#5b4fd6"
                            strokeWidth="2" />
                            <circle cx="171" cy="75" r="4" fill="#5b4fd6" />
                            <rect x="140" y="85" width="62" height="24" rx="6" fill="#5b4fd6" />
                            <text x="171" y="101" fontSize="11" fill="white" textAnchor="middle">$25,240</text>
                            <line x1="0" y1="185" x2="400" y2="185" stroke="#e5e7eb" />
                        <g fontSize="11" fill="#9ca3af" textAnchor="middle">
                             <text x="10" y="215">Jan</text>
                             <text x="90" y="215">Mar</text>
                             <text x="171" y="215">May</text>
                             <text x="250" y="215">Jul</text>
                             <text x="330" y="215">Sep</text>
                             <text x="395" y="215">Nov</text>
                        </g>
                        </g>
                    </svg>
                </div>
            </div>

            <div className="px-8 pb-8 grid grid-cols-3 gap-6">
                <div className="col-span-2">
                    <h2 className="text-lg font-semibold mb-4">Live Market</h2>
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3 w-48">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex-center justify-center text-indigo-600 font-bold">E</div>
                    <div>
                        <p className="font-medium">Ethereum</p>
                        <p className="text-xs text-gray-400">ETH / USDT</p>
                    </div>
                </div>
                <div className="w-24">
                    <p className="text-xs text-gray-400">Change</p>
                    <p className="text-sm text-green-500">+14.02%</p>
                </div>
                <div className="w-28">
                    <p className="text-xs text-gray-400">Price</p>
                    <p className="text-sm font-semibold">39,786 USD</p>
                </div>

                <svg viewBox="0 0 125 40" className="w-32 h-10">
                    <path d="M0,30 C10,10 20,35 30,25 C40,15 50,35 60,25 C70,15 80,30 90,20 C100,10 110,25 125,15" fill="none"  stroke="#5b4fd6" strokeWidth="2" />
                </svg>
            </div>
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3 w-48">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-yellow-500 font-bold">B</div>
                    <div>
                        <p className="font-medium">Bitcoin</p>
                        <p className="text-xs text-gray-400">ETH / USDT</p>
                    </div>
                </div>
                <div className="w-24">
                    <p className="text-xs text-gray-400">Change</p>
                    <p className="text-sm text-orange-500">+4.02%</p>
                </div>
                <div className="w-28">
                    <p className="text-xs text-gray-400">Price</p>
                    <p className="text-sm font-semibold">21,786 USD</p>
                </div>
                <svg viewBox="0 0 125 40" className="w-32 h-10">
                    <path d="M0,30 C10,10 20,35 30,25 C40,15 50,35 60,25 C70,15 80,30 90,20 C100,10 110,25 125,15" fill="none" stroke="#f5b93a" strokeWidth="2" />
                </svg>
            </div>
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3 w-48">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-blue-600 font-bold">A</div>
                    <div>
                        <p className="font-medium">Litecoin</p>
                        <p className="text-xs text-gray-400">ITC / USDT</p>
                    </div>
                </div>
                <div className="w-24">
                    <p className="text-xs text-gray-400">Change</p>
                    <p className="text-sm text-green-500">-4.02%</p>
                </div>
                <div className="w-28">
                    <p className="text-xs text-gray-400">Price</p>
                    <p className="text-sm font-semibold">9,786 USD</p>
                </div>
                <svg viewBox="0 0 125 40" className="w-32 h-10">
                    <path d="M0,30 C10,10 20,35 30,25 C40,15 50,35 60,25 C70,15 80,30 90,20 C100,10 110,25 125,15" fill="none" stroke="#3b4fd6" strokeWidth="2" />
                </svg>
            </div>
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3 w-48">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-green-500 font-bold">A</div>
                    <div>
                        <p className="font-medium">Cordano</p>
                        <p className="text-xs text-gray-400">ADA / USDT</p>
                    </div>
                </div>
                <div className="w-24">
                    <p className="text-xs text-gray-400">Change</p>
                    <p className="text-sm text-green-500">+0.02%</p>
                </div>
                <div className="w-28">
                    <p className="text-xs text-gray-400">Price</p>
                    <p className="text-sm font-semibold">4,786 USD</p>
                </div>
                <svg viewBox="0 0 125 40" className="w-32 h-10">
                    <path d="M0,30 C10,10 20,35 30,25 C40,15 50,35 60,25 C70,15 80,30 90,20 C100,10 110,25 125,15" fill="none" stroke="#4ec26a" strokeWidth="2" />
                </svg>
            </div>
                </div>

                <div className="col-span-1">
                    <h2 className="text-lg font-semibold mb-4">Transactions</h2>

                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-green-500">^</div>
                            <div>
                                <p className="font-medium">Ethereum</p>
                                <p className="text-xs text-gray-400">Received</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold">$24,102</p>
                            <p className="text-xs text-gray-400">Today, 19:30</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-orange-500">^</div>
                            <div>
                                <p className="font-medium">Bitcoin</p>
                                <p className="text-xs text-gray-400">Buy</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold">$4,157</p>
                            <p className="text-xs text-gray-400">Today, 14:32</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-orange-500">^</div>
                            <div>
                                <p className="font-medium">Bitcoin</p>
                                <p className="text-xs text-gray-400">Buy</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold">$64,784</p>
                            <p className="text-xs text-gray-400">Today, 13:50</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-orange-500">^</div>
                            <div>
                                <p className="font-medium">Litecoin</p>
                                <p className="text-xs text-gray-400">Buy</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold">$14,265</p>
                            <p className="text-xs text-gray-400">Today, 09:38</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Mainpage;