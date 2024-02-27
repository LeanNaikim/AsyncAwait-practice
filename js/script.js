'use strict'

import {cardProduct} from "../components/cardProducts.js";
import { cardUser } from "../components/cardProducts.js";
import { getData } from "../store/fetchApi.js";

const renderArea = document.querySelector("#render-area")
const renderUser = document.querySelector("#render-user")

// const BASE_URL = "http://localhost:5500/data/products.json";
// fetch(BASE_URL)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         data.forEach((product) => {
//             renderArea.innerHTML += cardProduct(product)
//         });
//     });

// section products
const products = await getData("products");
products.map((product) => {
    renderArea.innerHTML += cardProduct(product);
});

// section user
const users = await getData("users");
users.map((user) => {
    renderUser.innerHTML += cardUser(user)
});




