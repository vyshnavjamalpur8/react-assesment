import React from "react";
import styles from "./ProductCard.module.css";

// Clean, neutral studio product photos on clean backgrounds
const FALLBACK_MAP = {
  1: "https://images.unsplash.com/photo-1536584754829-12214d404f32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcCUyMGJhY2twYWNrfGVufDB8fDB8fHww", // Travel backpack
  2: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjB0c2hpcnR8ZW58MHx8MHx8fDA%3D", // White t-shirt
  3: "https://images.unsplash.com/photo-1624548140129-74786c5f1279?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJ3MlMjBjb3R0b24lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D", // Clean folded jacket
  4: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJ3MlMjBjYXN1YWwlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D", // Clean casual shirt
  5: "https://images.unsplash.com/photo-1620291699655-d958150a3ff8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWluaW1hbGlzdCUyMGpld2Vscnl8ZW58MHx8MHx8fDA%3D", // Minimalist bracelet / jewelry
  6: "https://plus.unsplash.com/premium_photo-1675003662150-2569448d2b3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW4lMjBnb2xkJTIwcmluZ3xlbnwwfHwwfHx8MA%3D%3D", // Clean gold ring
};

function ProductCard({ product, onSelect }) {
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src =
      FALLBACK_MAP[product.id] ||
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80"; // Neutral headphones
  };

  return (
    <div className={styles.card} onClick={() => onSelect(product)}>
      <div className={styles.imgWrap}>
        <img
          src={FALLBACK_MAP[product.id] || product.image}
          alt={product.title}
          className={styles.thumbnail}
          onError={handleImgError}
        />
      </div>
      <h4 className={styles.title}>{product.title}</h4>
      <div className={styles.footer}>
        <span className={styles.price}>${product.price.toFixed(2)}</span>
        <span className={styles.tag}>{product.category}</span>
      </div>
    </div>
  );
}

export default ProductCard;