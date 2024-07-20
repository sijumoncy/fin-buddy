import SideBar from './_components/SideBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <div className="fixed hidden md:w-64 md:block">
        <SideBar />
      </div>
      <div className="md:ml-64">{children}</div>
    </div>
  );
}
