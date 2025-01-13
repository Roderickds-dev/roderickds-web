"use client";

import Footer from "@/components/footer/Footer";
import MainContent from "@/components/mainContent/MainContent";

import NavBar from "@/components/navBar/NavBar";
import SideBar from "@/components/sideBar/SideBar";

const Index = () => {
  return (
    <div className="container" id="home">
      <header id="header">
        <NavBar />
      </header>
      <aside>
        <SideBar />
      </aside>
      <main id="main-content">
        <MainContent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>

    // <div className="relative flex flex-col min-w-max min-h-screen dark:[background:linear-gradient(360deg,_#abf7f9,_#1F2D40)] [background:linear-gradient(315deg,_#ffffff,_#ABF7F9)]">
    //   <div id="dark_mode" className=" absolute top-0 right-16 m-4">
    //     <DarkMode />
    //   </div>
    //   <div
    //     id="nav_bar"
    //     className="h-[100px] ml-9 flex-shrink-0 justify-center flex my-6 md:ml-[350px] mt-14"
    //   >
    //     <a href="#main_content">
    //       <NavBar />
    //     </a>
    //   </div>
    //   <div
    //     id="side_bar"
    //     className="flex-grow flex flex-col md:flex-row mt-28 overflow-visible my-10 md:mt-12 "
    //   >
    //     <div className="md:w-[35%] p-4 flex sm:w-[100%] overflow-visible justify-center m-4 ">
    //       <SideBar />
    //     </div>
    //     <div
    //       id="main_content"
    //       className="md:w-[65%] p-4 flex sm:w-[87%] overflow-auto mx-14 justify-center sm:overflow-x-hidden sm:ml-[86px]
    //       "
    //     >
    //       <MainContent />
    //     </div>
    //   </div>
    //   <div
    //     id="footer"
    //     className="flex w-[100%] p-4 sm:w-[80%] overflow-auto -mt-6 sm:mx-32 mb-5 justify-center"
    //   >
    //     <Footer />
    //   </div>
    //   <div className="fixed content-center w-0 h-0 sm:hidden z-20">
    //     <MenuMobile />
    //   </div>
    // </div>
  );
};

export default Index;
