export default function ServiceCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
          <Icon size={20} />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}
