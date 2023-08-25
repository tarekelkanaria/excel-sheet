import Header from "@/components/Header";
import Table from "@/components/Table";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-auto px-1">
        <Table />
      </main>
    </>
  );
}
