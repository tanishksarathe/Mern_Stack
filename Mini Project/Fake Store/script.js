async function getProducts(){

    try {       
        const res = await fetch('https://fakestoreapi.com/products');

        const data = await res.json();

        const list = document.getElementById('productList')

        data.forEach(element => {
            const d = document.createElement("div");
            d.classList.add('col-4', 'p-2');

            d.innerHTML = `
             <div
            class="card border border-dark gap-3 rounded-3 shadow p-3 d-flex flex-column"
          >
            <div class="images">
              <img
                src=${element.image}
                alt="img"
                class="rounded-top-3 object-fit-contain"
                width="200px"
                height="200px"
              />
            </div>
            <div class="h-100 d-flex flex-column gap-2 w-100">
              <span class="fs-3 fw-bold">${element.title.length>50?element.title.slice(0,45):element.title}</span>
              <span>${element.description.slice(0,50)}...</span>
              <span class="fw-semibold">₹${element.price*100}</span>
              <span>${element.rating.rate}/5 (${element.rating.count})</span>
              <span>${element.category}</span>
              <div
                class="d-flex gap-4 justify-content-center align-items-center"
              >
                <button class="btn btn-outline-primary">Buy Now</button>
                <button class="btn btn-outline-warning">Cart</button>
              </div>
            </div>
          </div>
            `
            list.appendChild(d);
        });

    } catch (error) {
        console.log(error);
    }

}

getProducts();