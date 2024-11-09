export default function SitesDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="py-10 px-4 h-full w-full flex justify-center">
      <div className="max-w-screen-lg w-full flex flex-col min-h-full">
        {children}
      </div>
    </div>
  );
}
