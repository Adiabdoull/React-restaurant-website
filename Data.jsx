import { BiMap } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage } from "react-icons/md";

import recipe1 from "./assets/recipe1.jpg";
import recipe2 from "./assets/recipe2.jpg";
import recipe3 from "./assets/recipe3.jpg";
import recipe4 from "./assets/recipe4.jpg";
import recipe5 from "./assets/recipe5.jpg";
import recipe6 from "./assets/recipe6.jpg";

import payment1 from "./assets/payment1.png";
import payment2 from "./assets/payment2.png";
import payment3 from "./assets/payment3.png";
import payment4 from "./assets/payment4.png";

export const heroIcons = [
  <CiBurger />,
  <FaIceCream />,
  <GiCakeSlice />,
  <GiBowlOfRice />,
];

export const recipes = [
  {
    id: 1,
    image: recipe1,
    name: "Recipe 1",
    price: "$20",
  },
  {
    id: 2,
    image: recipe2,
    name: "Recipe 2",
    price: "$13",
  },
  {
    id: 3,
    image: recipe3,
    name: "Recipe 3",
    price: "$17",
  },
  {
    id: 4,
    image: recipe4,
    name: "Recipe 4",
    price: "$22",
  },
  {
    id: 5,
    image: recipe5,
    name: "Recipe 5",
    price: "$14",
  },
  {
    id: 6,
    image: recipe6,
    name: "Recipe 6",
    price: "$20",
  },
];

export const footerSocials = [<BsFacebook />, <BsInstagram />, <BsTwitter />];
export const footerContacts = [
  {
    id: 1,
    icon: <HiOutlinePhone />,
    text: "+234-703-666-6225",
  },
  {
    id: 2,
    icon: <HiOutlineMail />,
    text: "adiabdoul62@gmail.com",
  },
  {
    id: 3,
    icon: <BiMap />,
    text: "Abdullahi Mai-Kano Way Dutse",
  },
];

export const mainMenu = [
  {
    id: 1,
    href: "home",
    text: "Home",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    href: "about",
    text: "About",
    icon: <MdExplore />,
  },
  {
    id: 3,
    href: "recipe",
    text: "Recipe",
    icon: <GiBowlOfRice />,
  },
  {
    id: 4,
    href: "contact",
    text: "Contact",
    icon: <MdContactPage />,
  },
];

export const explores = ["Drinks", "Burger", "Salad", "Breakfast", "Dinner"];

export const payements = [payment1, payment2, payment3, payment4];
