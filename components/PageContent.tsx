export default function PageContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gray-100 relative md:ml-64 flex flex-col px-4 min-h-screen w-full">
      {children}
    </section>
  );
}
