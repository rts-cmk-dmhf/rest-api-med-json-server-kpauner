async function getProducts() {
  const res = await fetch("http://localhost:4000/products", {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function ProductList({ className }) {
  const products = await getProducts();
  return (
    <>
      {products.map((product) => (
        <article key={product.id} className={className}>
          <h3 className="font-bold text-2xl">{product.title}</h3>
          <p>{product.description.slice(0, 200)}...</p>
          <div className="py-4 border-t border-slate-300 mt-4">
            <button>Delete</button>
          </div>
        </article>
      ))}
      {products.length === 0 && <p>nothing to see here</p>}
    </>
  );
}
