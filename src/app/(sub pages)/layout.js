import HomeBtn from "@/components/HomeBtn";

// Shared layout for /about, /projects, /contact: home button + centered content area
export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20">
      <HomeBtn />
      {children}
    </main>
  );
}
