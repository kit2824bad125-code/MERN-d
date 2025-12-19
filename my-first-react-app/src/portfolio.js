import React from "react";
import "./App.css";

function Products() {
  return (
    <main className="portfolio">
      <section className="about">
        <h2>About Our Store</h2>
        <p>
          Welcome to Ram’s Tech Store! We specialize in modern web tools,
          creative coding resources, and AI-powered solutions.
        </p>

        <img
          src="https://th.bing.com/th?id=OIF.in7bAyStp0ImY%2fKsRqV%2bKQ&w=142&h=195&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
          alt="Product showcase"
          className="animated-pic1"
        />
      </section>

      <section className="projects">
        <h2>Featured Products</h2>
        <ul>
          <li>💻 Responsive Web Layout Templates</li>
          <li>🎨 CSS Animation Packs</li>
          <li>🤖 AI Project Management Toolkit</li>
          <li>📚 Accessibility & SEO Best Practices Guide</li>
        </ul>
      </section>

      <section className="products">
        <h3>Products Available</h3>
        <div className="product-wrap">
          <div className="product-card">
            <img
              src="https://th.bing.com/th/id/OIP.Wrn-5Kx8e-ugmxbOOvAzAgHaHa?w=182&h=182&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
              alt="Ghosty"
              
            />
            <p>Ghosty</p>
          </div>

          <div className="product-card">
            <img
              src="https://th.bing.com/th/id/OIP.TgygS03H7CAsszirTekfQwHaHa?w=182&h=182&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
              alt="Web Layout Pack"
            />
            <p>Decorations</p>
          </div>

          <div className="product-card">
            <img
              src="https://th.bing.com/th/id/OIP.-FG-O2t_aHBSziXrNd58bQHaJI?w=151&h=187&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
              alt="AI Toolkit"
            />
            <p>Witches</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;