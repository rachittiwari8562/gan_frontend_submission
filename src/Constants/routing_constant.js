import pizza from "../Assets/Images/pizza.png"
import cake from "../Assets/Images/cake.png"
import icecream from "../Assets/Images/icecream.png"
import bread from "../Assets/Images/bread.png"

const navigationItems = [
    { name: 'Home',routes:""},
    { name: 'Receipe',routes:"/homepage/receipe" },
    { name: 'About us',routes:"/homepage/about_us" },
    { name: 'Contact Us',routes:"/homepage/contact_us"}
  ]

const menuItems = [
    { name: 'Pizzas',current: false,routes:"/homepage/pizza/",icon:pizza},
    { name: 'Cakes', current: true,routes:"/homepage/cakes/",icon:cake},
    { name: 'Icecreams',current: false,routes:"/homepage/icecreams/",icon:icecream},
    { name: 'Breads',current:false,routes:"/homepage/breads/",icon:bread}
  ]
export {menuItems,navigationItems};