export default function RelatedProducts() {

    return (
      <section>
  
        <h2 className="text-xl font-semibold mb-6">
          You May Also Like
        </h2>
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  
          {[1,2,3,4].map((i) => (
            <div key={i} className="border p-4 text-center">
              Product {i}
            </div>
          ))}
  
        </div>
  
      </section>
    )
  }