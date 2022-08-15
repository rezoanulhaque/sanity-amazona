import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import NextLink from 'next/link';
import React from 'react';
import { urlForThumbnail } from '../utils/image';

const ProductItem = ({product, addToCartHandler}) => {
    console.log(product)
    return (
        <div>
            <Card>
                <NextLink href={`/product/${product.slug.current}`} passHref>
                    <CardActionArea >
                        <CardMedia
                        component="img" 
                        image={urlForThumbnail(product.image)}
                        title={product.name}
                        >
                        </CardMedia>
                        <CardContent>
                            <Typography>{product.name}</Typography>
                            <Rating value={product.rating} readonly></Rating>
                        </CardContent>
                    </CardActionArea>
                </NextLink>
                <CardActions>
                    <Typography>${product.price}</Typography>
                    <Button size="small" color="primary" onClick={() => addToCartHandler(product)}>Add to Card</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ProductItem;