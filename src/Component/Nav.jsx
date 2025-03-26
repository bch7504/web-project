import React from "react";
import {
    Link, NavLink
} from "react-router-dom";

const Nav = () => {
    return (
        <header className="bg-blue-400">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="text-red-400 font-bold text-4xl">
                    PTITC
                </div>
                <nav className="space-x-10">
                    <Link to="/App" className="text-gray-100 font-bold"> Trang chủ </Link>
                    <Link to="/Gioithieu" className="text-gray-100 font-bold"> Giới Thiệu </Link>
                    <Link to="/Tintuc" className="text-gray-100 font-bold"> Tin tức </Link>
                    <Link to="/Sanpham" className="text-gray-100 font-bold"> Sản phẩm </Link>

                    <button className="text-blue-500 bg-gray-100 font-bold py-2 px-4 border-2 border-gray-200 rounded hover:bg-gray-200 transition duration-300" onClick="{handleLoginClick}">
                        Đăng nhập
                    </button>
                </nav>
            </div>
        </header>

    )
};
export default Nav;