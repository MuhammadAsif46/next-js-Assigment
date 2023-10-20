// import { getById } from "@/services/data";
import styles from "@/styles/Home.module.css";
import { Rating } from "@mui/material";

import { Button, Card, Divider } from "antd";
const { Meta } = Card;

export default function Home(props) {
  const { product } = props;
  return (
    <>
      <div className={styles.heading}>
        <h2>{product.brand}</h2>
        <h2>{product.category}</h2>
      </div>

      <div className={styles.container}>

        <div className={styles.image}>
          <img
            className={styles.prodImg}
            alt="example"
            // src="/mobile-img.jpg"
            src="https://i.dummyjson.com/data/products/1/4.jpg"
          />
        </div>

        <div className={styles.prodDes}>

          <div>
            <h2>{product.description}</h2>
          </div>

          <div className={styles.rating}>
          <Rating defaultValue={2.5} precision={product.rating} readOnly />
          </div>

          <div>
            <Divider/>
          </div>

        </div>

        <div className={styles.prodDetialCard}>
          
          <div className={styles.prodCard1}>
            <Card hoverable
              style={{
              width: 300,
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>

          <div className={styles.prodCard2}>
            <Card hoverable
              style={{
              width: 300,
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        </div>
        {/* <div>
          <Card hoverable>
            <div>
              <img
                className={styles.image1}
                alt="example"
                // src="/mobile-img.jpg"
                src="https://i.dummyjson.com/data/products/1/4.jpg"
              />
              <h2>{product.title}</h2>
              <Meta description={product.brand} />
            </div>
            <br />
            <div className={styles.button1}>
              <Button type="primary">show phone number</Button>
            </div>
            <div className={styles.button2}>
              <Button type="primary" danger ghost>
                Call
              </Button>
            </div>
          </Card>
        </div> */}
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { productId } = params;
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await response.json();

  // const data = getById(productId);
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          productId: "1",
        },
      },
    ],
    fallback: "blocking",
  };
}
