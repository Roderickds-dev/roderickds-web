"use client";
import Footer from "@/components/footer/Footer";
import MainContent from "@/components/maincontent/MainContent";
import NavBar from "@/components/navbar/NavBar";
import SideBar from "@/components/sidebar/SideBar";

const Index = () => {
  return (
    <div className="container bg-white text-reactBlack" id="home">
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
  );
};

export default Index;
