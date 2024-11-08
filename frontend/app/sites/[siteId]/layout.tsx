export default function SitesDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="py-10 px-20 h-full w-full flex justify-center">
      <div className="max-w-screen-2xl w-full flex flex-col gap-16 min-h-full">
        {children}
      </div>
    </div>
  );
}
