const SearchLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="py-10 px-4 h-full w-full flex flex-col">{children}</div>
  );
};

export default SearchLayout;
