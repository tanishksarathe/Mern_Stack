async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    const list = document.getElementById("productList");

    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("col-12", "p-2");

      d.innerHTML = `
               <div class="d-flex cardtwo border border-dark rounded p-3 shadow">
          <div class="col-3 p-3">
            <img src=${element.image} alt=${element.title} class="h-100 w-100 object-fit-contain">
          </div>
          <div class="col-9 d-flex flex-column gap-2">
             <span class="fs-3 fw-bold">${
               element.title.length > 50
                 ? element.title.slice(0, 45)
                 : element.title
             }</span>
              <span>${element.description.slice(0, 200)}...</span>
              <span class="fw-semibold fs-4">₹${element.price * 100}</span>
              <span>${element.rating.rate}/5 (${element.rating.count})</span>
              <span>${element.category}</span>
              <div
                class=""
              >
                <button class="btn btn-outline-primary">Buy Now</button>
                <button class="btn btn-outline-warning">Cart</button>
              </div>
          </div>
        </div>
            `;
      list.appendChild(d);
    });
  } catch (error) {
    console.log(error);
  }
}

getProducts();
