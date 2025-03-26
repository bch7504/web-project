import React from 'react';
import Nav from './Nav';
import Footer from './Footer';



const Tintuc = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Nav />

            <div className="max-w-5xl mx-auto p-4">
                <nav className="text-sm text-gray-600 mb-4">Trang chủ &gt;&gt; Tin tức</nav>
                <h1 className="text-2xl font-bold mb-4">Tin tức</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 flex flex-col bg-white shadow rounded-lg">
                        <img
                            src="/assets/anh1.jpg"
                            alt="Tiêm chủng"
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">
                                Dịch sởi có nguy cơ bùng phát, cần tăng tỷ lệ tiêm chủng đạt 95%
                            </h2>
                            <p className="text-sm text-gray-500">20/03/2025</p>
                            <p className="text-gray-700 mt-2">
                                Dịch sởi đang bùng phát mạnh tại 63 tỉnh thành trên khắp cả nước, trong đó hơn
                                90% trường hợp chưa được tiêm phòng đầy đủ...
                            </p>
                            <a href="#" className="text-blue-500 mt-2 inline-block">
                                Xem chi tiết
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        {[
                            { title: "Tại sao dịch sởi bùng phát cả nước?", imgSrc: "/assets/Anh2.jpg" },
                            { title: "Những biến chứng nguy hiểm khi phụ nữ mang thai mắc viêm phổi.", imgSrc: "/assets/Anh3.jpg" },
                            { title: "Chủ động tiêm vắc xin đầy đủ, bảo vệ sức khỏe phái đẹp.", imgSrc: "/assets/Anh4.jpg" },
                            { title: "VNVC tiêm vắc xin sởi chống dịch cho trẻ từ 6 tháng tuổi.", imgSrc: "/assets/Anh5.jpg" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center bg-white shadow rounded-lg p-2">
                                <img src={item.imgSrc} alt={item.title} className="w-20 h-20 object-cover rounded-md mr-4" />
                                <div>
                                    <h3 className="text-sm font-semibold">{item.title}</h3>
                                    <a href="#" className="text-blue-500 text-xs mt-1 inline-block">
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tintuc;