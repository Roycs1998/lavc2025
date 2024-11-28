export const LavcUrls = {
  workshop: {
    all: `http://localhost:3003/api/v1/workshop`,
    searchById: (id: number) => `http://localhost:3003/api/v1/workshop/${id}`

    //mainProducts: `http://localhost:8080/collections/1`,
    // search: (title: string) => `http://localhost:8080/products/search/product?title=${title}`
  }
}
