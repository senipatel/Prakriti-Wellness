import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
        <SpeedInsights />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;