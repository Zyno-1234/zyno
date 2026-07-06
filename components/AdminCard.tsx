type Props = {
  title: string;
  value: string;
};

export default function AdminCard({ title, value }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <h2 className="text-3xl font-bold mt-2 text-blue-600">
        {value}
      </h2>
    </div>
  );
}