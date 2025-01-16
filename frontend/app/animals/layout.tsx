export default function AnimalsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="py-10 px-4 h-full w-full flex justify-center">
      <div className="w-full flex flex-col min-h-full items-center">
        {children}
      </div>
    </div>
  );
}
