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
  );
};

export default Index;
