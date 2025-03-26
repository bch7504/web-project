import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Gioithieu = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Nav />
            <main className="container mx-auto mt-4 p-4 bg-white shadow-md">
                <div className="text-sm text-gray-600 mb-4">Trang chủ...Giới thiệu</div>
                <h1 className="text-center text-xl font-bold mb-6">GIỚI THIỆU TRUNG TÂM TIÊM CHỦNG PTITC</h1>
                <p className="mb-4">
                    Trung tâm Tiêm chủng PTITC là đơn vị y tế chuyên cung cấp các dịch vụ tiêm chủng an toàn và chất lượng, phục vụ cho mọi đối tượng từ trẻ em, người lớn đến người cao tuổi. Với đội ngũ y bác sĩ giàu kinh nghiệm, hệ thống cơ sở vật chất hiện đại và nguồn vắc-xin đạt tiêu chuẩn, trung tâm cam kết mang đến trải nghiệm tiêm chủng an toàn, không đau và hiệu quả.
                </p>
                <p className="mb-4">
                    Chúng tôi cung cấp đa dạng các loại vắc-xin phòng ngừa bệnh truyền nhiễm theo chương trình tiêm chủng mở rộng và tiêm chủng dịch vụ, giúp bảo vệ sức khỏe cộng đồng. Đặc biệt, trung tâm ứng dụng hệ thống đăng ký trực tuyến và quản lý lịch tiêm khoa học, giúp khách hàng dễ dàng đặt lịch và theo dõi lịch sử tiêm chủng.
                </p>
                <p className="mb-4">
                    Hãy đến với Trung tâm PTITC để được tư vấn tận tình và chăm sóc sức khỏe tốt nhất cho bạn và gia đình.
                </p>
                <div className="mt-6">
                    <p>Trung tâm tiêm chủng PTITC 96A Đ. Trần Phú, P. Mộ Lao, Hà Đông, Hà Nội</p>
                    <p>Thời gian mở cửa: từ 8h-22h ( Kể cả thứ 7 và chủ nhật )</p>
                    <p>Hotline: 0987654321</p>
                    <p>Website:................</p>
                </div>

            </main>
            <Footer />

        </div>
    );
};

export default Gioithieu;



