import { Filter } from "lucide-react";
import { useState } from "react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const products = [
    {
      id: 1,
      name: "John P Lopez OG Sauce",
      category: "sauces",
      price: "$14.95",
      image: "🍯",
      description: "Award-winning BBQ sauce blend",
    },
    {
      id: 2,
      name: "Smoke-A-Holics Competition Rub",
      category: "rubs",
      price: "$12.99",
      image: "🧂",
      description: "Award-winning competition grade",
    },
    {
      id: 3,
      name: "Zavala's Sloppy Juan Sauce",
      category: "sauces",
      price: "$12.95",
      image: "🍯",
      description: "Bold & flavorful signature sauce",
    },
    {
      id: 4,
      name: "Hurtado's 4-Piece Bundle",
      category: "bundles",
      price: "$23.31",
      image: "📦",
      description: "Texas Rangers official BBQ",
    },
    {
      id: 5,
      name: "Big Wick's Mesquite Jalapeño",
      category: "sauces",
      price: "$14.99",
      image: "🌶️",
      description: "Award-winning glaze",
    },
    {
      id: 6,
      name: "Smokey Woods Apple Pellets",
      category: "equipment",
      price: "$29.99",
      image: "🔥",
      description: "100% natural hardwood pellets",
    },
    {
      id: 7,
      name: "Franklin's Barbecue Rub",
      category: "rubs",
      price: "$16.99",
      image: "🧂",
      description: "Legend's blend - legendary results",
    },
    {
      id: 8,
      name: "Mesquite Smoking Chips",
      category: "equipment",
      price: "$18.99",
      image: "🪵",
      description: "Premium smoking wood",
    },
    {
      id: 9,
      name: "Carolina Gold Mustard Sauce",
      category: "sauces",
      price: "$13.99",
      image: "🍯",
      description: "Classic Southern style",
    },
    {
      id: 10,
      name: "Texas Beef Dry Rub",
      category: "rubs",
      price: "$14.99",
      image: "🧂",
      description: "Bold beef seasoning blend",
    },
    {
      id: 11,
      name: "Premium Grill Tool Set",
      category: "equipment",
      price: "$49.99",
      image: "🛠️",
      description: "Complete grilling accessory kit",
    },
    {
      id: 12,
      name: "Competition BBQ Bundle",
      category: "bundles",
      price: "$59.99",
      image: "📦",
      description: "Everything for championship BBQ",
    },
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "sauces", name: "Sauces & Condiments" },
    { id: "rubs", name: "Rubs & Seasonings" },
    { id: "equipment", name: "Equipment & Accessories" },
    { id: "bundles", name: "Bundle Packs" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Helper: convert "$14.95" -> 14.95
  const getPriceValue = (price: string) =>
    parseFloat(price.replace("$", "") || "0");

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") {
      return getPriceValue(a.price) - getPriceValue(b.price);
    }
    if (sortBy === "price-high") {
      return getPriceValue(b.price) - getPriceValue(a.price);
    }
    if (sortBy === "newest") {
      // Pretend higher id = newer
      return b.id - a.id;
    }
    // "featured" – leave as original order
    return 0;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => window.history.back()}
            className="flex flex-col cursor-pointer hover:opacity-80 transition"
          >
            <div className="text-2xl font-black text-white bg-gradient-to-r from-orange-600 to-red-600 px-3 py-1 rounded">
              BBQ<span className="text-yellow-400">TEST</span>
            </div>
            <div className="text-xs text-gray-600 font-bold tracking-widest">
              LEVEL UP YOUR GAME
            </div>
          </button>

          <div className="hidden md:flex gap-8">
            <button
              onClick={() => window.history.back()}
              className="text-gray-600 hover:text-black transition cursor-pointer"
            >
              Home
            </button>
            <a href="#" className="text-gray-600 hover:text-black transition">
              About Us
            </a>
            <span className="text-orange-600 font-semibold">Products</span>
          </div>

          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
            Cart
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">BBQ Products</h1>
          <p className="text-xl text-orange-100 max-w-2xl">
            Discover our curated collection of premium BBQ sauces, rubs,
            equipment, and bundles from championship pitmasters.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-32">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filter
              </h3>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-900">Category</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat.id}
                        checked={selectedCategory === cat.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 text-orange-600 cursor-pointer"
                      />
                      <span className="ml-3 text-gray-700 group-hover:text-orange-600 transition">
                        {cat.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h4 className="font-semibold mb-4 text-gray-900">Sort</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <p className="text-gray-600">
                Showing {sortedProducts.length}{" "}
                {selectedCategory === "all"
                  ? "products"
                  : `${selectedCategory.replace("-", " ")} products`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sortedProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-amber-900 via-orange-700 to-red-800 aspect-square rounded-lg mb-4 flex items-center justify-center overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                      {product.image}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600 transition line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">
                      {product.price}
                    </span>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex flex-col">
                <div className="text-lg font-black text-white bg-gradient-to-r from-orange-600 to-red-600 px-2 py-1 rounded">
                  BBQ<span className="text-yellow-400">TEST</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Fueling legendary cookouts everywhere
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    Sauces
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    Grills
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    Recipes
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600 transition">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex justify-between items-center text-sm text-gray-600">
            <p>&copy; 2025 BBQ Test. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-600 transition">
                Facebook
              </a>
              <a href="#" className="hover:text-orange-600 transition">
                Instagram
              </a>
              <a href="#" className="hover:text-orange-600 transition">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
