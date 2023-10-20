import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="crossorigin="anonymous"referrerpolicy="no-referrer"/>
      </Head>

      <header>
        <div class="navbar">
          <div class="nav-cart border">
            <i class="fa-solid fa-cart-shopping"></i>
            CartShop 
          </div>

          <div class="nav-address border">
            <p class="add-first">Deliver to</p>
            <div class="location-icon">
              <i class="fa-solid fa-location-dot"></i>
              <p class="add-second">China</p>
            </div>
          </div>

          <div class="nav-search">
            <select class="search-select">
              <option>All</option>
            </select>
            <input class="search-input" placeholder="Search Cart" />
            <div class="search-icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div class="nav-singin border">
            <p>
              <span>Hello, sign in</span>
            </p>
            <p class="nav-second">Account & lists</p>
          </div>

          <div class="nav-singin border">
            <p>
              <span>Returns</span>
            </p>
            <p class="nav-second">& Orders</p>
          </div>

          <div class="nav-carts border">
            <i class="fa-solid fa-cart-shopping"></i>
            Carts
          </div>
        </div>
      </header>
    </>
  );
}
