import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
            <div className="flex-grow"></div>
            <footer className="bg-blue-500 text-white p-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                    <div>
                        <p>Địa chỉ: 96A Đ. Trần Phú, P. Mộ Lao, Hà Đông, Hà Nội</p>
                        <p>Hotline: 0987654321</p>
                        <p>Giờ mở cửa: 8:00 - 20:00 (Kể cả thứ 7 và chủ nhật)</p>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">Bản đồ google map</h2>
                        <img
                            src="https://storage.googleapis.com/a1aa/image/-ZqgYBdcYtiTb1Vzy_CQpFc8hvwI0e68-msQFpKcSAI.jpg"
                            alt="Google map showing the location of 96A Đ. Trần Phú, P. Mộ Lao, Hà Đông, Hà Nội"
                            width="200"
                            height="150"
                        />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;