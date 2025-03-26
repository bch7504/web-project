import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const products = [
    { id: 1, image: "/assets/Anh2.jpg", title: "Gói vacxin cho trẻ" },
    { id: 2, image: "/assets/Anh2.jpg", title: "Gói vacxin cho trẻ" },
    { id: 3, image: "/assets/Anh2.jpg", title: "Gói vacxin cho trẻ" },
    { id: 4, image: "/assets/Anh2.jpg", title: "Gói vacxin cho trẻ" },
    { id: 5, image: "/assets/Anh2.jpg", title: "Gói vacxin cho trẻ" },
    { id: 6, image: "/assets/Anh2.jpg", title: "Gói vacxin cho trẻ" },
];

const Sanpham = () => {
    return (
        <div className="bg-gray-100 min-h-screen ">
            <Nav />
            <nav className="text-sm text-gray-500 mb-4">Trang chủ &gt;&gt; Sản phẩm</nav>
            <h2 className="text-2xl font-bold text-center mb-6">Tất cả sản phẩm</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
                        <a href="#" className="text-blue-600 mt-2 inline-block">
                            Xem chi tiết
                        </a>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Sanpham;
