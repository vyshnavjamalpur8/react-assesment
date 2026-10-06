import React from "react";
import styles from "./ProductDetailModal.module.css";

const FALLBACK_MAP = {
  1: "https://images.unsplash.com/photo-1536584754829-12214d404f32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcCUyMGJhY2twYWNrfGVufDB8fDB8fHww",
  2: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjB0c2hpcnR8ZW58MHx8MHx8fDA%3D",
  3: "https://images.unsplash.com/photo-1624548140129-74786c5f1279?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJ3MlMjBjb3R0b24lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D", 
  4: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJ3MlMjBjYXN1YWwlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  5: "https://images.unsplash.com/photo-1620291699655-d958150a3ff8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWluaW1hbGlzdCUyMGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
  6: "https://plus.unsplash.com/premium_photo-1675003662150-2569448d2b3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW4lMjBnb2xkJTIwcmluZ3xlbnwwfHwwfHx8MA%3D%3D",
};

function ProductDetailModal({ product, onClose }) {
  if (!product) return null;

  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src =
      FALLBACK_MAP[product.id] ||
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80";
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
        <div className={styles.modalLayout}>
          <img
            src={FALLBACK_MAP[product.id] || product.image}
            alt={product.title}
            className={styles.modalImg}
            onError={handleImgError}
          />
          <div className={styles.details}>
            <span className={styles.categoryTag}>{product.category}</span>
            <h3 className={styles.modalTitle}>{product.title}</h3>
            <h4 className={styles.modalPrice}>${product.price.toFixed(2)}</h4>
            <p className={styles.modalDesc}>{product.description}</p>
            {product.rating && (
              <p className={styles.modalRating}>
                ★ {product.rating.rate} / 5 ({product.rating.count} reviews)
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailModal;