export default  function ServiceCard({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="text-blue-600 mb-4">
          <Icon size={48} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    );
  }

