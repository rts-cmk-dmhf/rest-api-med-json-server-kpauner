import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <main className="grid grid-cols-1 min-h-screen p-24 gap-8 sm:grid-cols-3">
      <ProductList className="p-4 bg-slate-100 rounded-lg" />
    </main>
  );
}
