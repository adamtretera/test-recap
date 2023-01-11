
import Image from "next/image";

import styles from './ProductCard.module.css';

import {Button} from "../../ui";
import {useState} from "react";

interface IProductCardProps  {
    price: number;
    name: string;
    id: number;
    imageURL: string;
}

export const ProductCard = ({price, name, imageURL}: IProductCardProps) => {


    return (
        <article className={styles.card}>
            <h4> {name} </h4>

            <Button> {price} </Button>



            <Image className={styles.image} src={imageURL} width={200} height={200} alt={name}/>
        </article>
    )
}

