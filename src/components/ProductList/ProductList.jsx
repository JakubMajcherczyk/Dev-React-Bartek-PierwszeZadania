import styles from "./ProductList.module.scss";
import Product from "./Product";
import productsData from "./productsData.json";

function ProductList() {
  //Komponent przyjmuje tablicę produktów i renderuje listę komponentów Product
  return (
    <div className={styles.productList}>
      {productsData.products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default ProductList;
