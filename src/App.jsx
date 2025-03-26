import React from 'react';
import Nav from './Component/Nav';
import Footer from './Component/Footer';





const App = () => {
  return (
    <div className="bg-gray-50">
      <Nav />
      <main className="container mx-auto flex flex-col md:flex-row items-center py-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-black-900 mb-4">
            Trung tâm tiêm chủng PTITC
          </h1>
          <p className="text-lg text-gray-500 mt-4 mb-4">
            Hệ thống đăng ký tiêm chủng trực tuyến
          </p>
          <button className="text-gray-100 font-bold bg-blue-400 py-2 px-4   rounded-lg hover:bg-blue-500 transition duration-300" onClick="{handleLoginClick}">
            Đăng ký ngay
          </button>
        </div>
        <div className="mt-10 flex justify-center">
          <img alt="Illustration of a nurse holding a syringe, a calendar, a document, a coin, and a vaccine bottle" src="/assets/Anh6.png" className='w-250 h-100' />
        </div>
      </main>
      <Footer />
    </div >

  );
};
export default App;


