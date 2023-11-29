interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="flex items-center justify-between mt-8 mb-4">
      <h1 className="text-2xl font-bold text-gray-700">{title}</h1>
    </div>
  );
}
