// import { getAll } from "@/services/data";
import * as React from "react";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Rating } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "antd";
import Link from "next/link";

export async function getStaticProps() {
  const response = await fetch("https://dummyjson.com/products/");
  const data = await response.json();
  //   const data = getAll();
  return {
    props: {
      products: data.products,
    },
  };
}

export default function Home(props) {
  const { products } = props;
  const productsList = products.map((prod) => {
    return (
      <div>
        <Card className="cards-menu" sx={{ maxWidth: 270}} >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {prod.id}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={prod.category}
            subheader={prod.brand}
          />
          <Link href={`../productsList/${prod.id}`}>
          <CardMedia
            component="img"
            height="230"
            image="https://i.dummyjson.com/data/products/1/1.jpg"
            alt="Paella dish"
          />
          </Link>
          <CardContent className="card-content">
          <Typography component="legend">{prod.title}</Typography>
          <Rating defaultValue={2.5} precision={prod.rating} readOnly />
          <Typography component="legend">{`$${prod.price}`}</Typography>
          </CardContent>
          <CardActions disableSpacing >
            <Link href={`../productsList/${prod.id}`}> 
              <Button className="btn-see-more" type="link" >
                See more
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  });
  return (
    <div className="prod-cards">
      {productsList}
    </div>
  );
}
