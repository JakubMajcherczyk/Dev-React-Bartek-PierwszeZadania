import styles from "./product.module.scss";

function Product({ name, price, description }) {
  // komponent do wyświetlania nazwy, ceny i opisu produktu
  return (
    <div className={styles.product}>
      <h3>{name}</h3>
      <p className={styles.firstP}>{price}</p>
      <p className={styles.lastP}>{description}</p>
    </div>
  );
}

export default Product;
