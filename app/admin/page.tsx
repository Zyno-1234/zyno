import AdminCard from "@/components/AdminCard";

export default function Dashboard() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8">
        Dashboard
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        <AdminCard title="Buildings" value="2" />
        <AdminCard title="Rooms" value="48" />
        <AdminCard title="Beds" value="192" />
        <AdminCard title="Occupied" value="164" />
        <AdminCard title="Vacant" value="28" />
        <AdminCard title="Revenue" value="₹7.82L" />
        <AdminCard title="Pending Rent" value="₹54K" />
        <AdminCard title="Check-ins" value="6" />
      </div>
    </>
  );
}