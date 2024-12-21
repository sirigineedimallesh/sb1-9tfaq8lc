import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Categories />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Best of Electronics</h1>
        <ProductGrid />
      </main>
    </div>
  );
}

export default App;