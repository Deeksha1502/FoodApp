import subwayfirstdish from "../assets/dishes/subwayfirstdish.png";
import subwayseconddish from "../assets/dishes/subwayseconddish.png";
import subwaythirddish from "../assets/dishes/subwaythirddish.png";
import subwayfourthdish from "../assets/dishes/subwayfourthdish.png";
import subwayfifthdish from "../assets/dishes/subwayfifthdish.png";
import mcdfirstdish from "../assets/dishes/mcdfirstdish.png";
import mcdseconddish from "../assets/dishes/mcdseconddish.png";
import mcdthirddish from "../assets/dishes/mcdthirddish.png";
import mcdfourthdish from "../assets/dishes/mcdfourthdish.png";
import mcdfifthdish from "../assets/dishes/mcdfifthdish.png";
import califorfirstdish from "../assets/dishes/califorfirstdish";
import califorseconddish from "../assets/dishes/califorseconddish";
import a2bfirstdish from "../assets/dishes/a2bfirstdish.png"
import a2bseconddish from "../assets/dishes/a2bseconddish.png"

import a2bthirddish from "../assets/dishes/a2bthirddish.png"
import a2bfourthdish from "../assets/dishes/a2bfourthdish.png"
import a2bfifthdish from "../assets/dishes/a2bfifthdish.png"



export const resMenu = [
  {
    restaurantId: "159159",

    id: "1",
    restaurantName: "subway",
    firstItem: "Delhi Tikki Sandwich + Side + Coke",
    description:
      "Enjoy your favourite Grills sandwich with a choice of drink and a cookie or veg kebabs.",
    cloudinaryimageid: { subwayfirstdish },

    secondItem: "Bombay Grill Sandwich + Side + Coke",
    description:
      "Enjoy your favourite Grills sandwich with a choice of drink and a cookie or veg kebabs.",
    cost: "Rs.279",
    cloudinaryimageid: { subwayseconddish },

    thirdItem: "3 Cheese Melt Sandwich + Side + Coke",
    description:
      "Enjoy your favourite Grills sandwich with a choice of drink and any choice of side.",
    cost: "Rs.289",
    cloudinaryimageid: { subwaythirddish },

    fourthItem: "Paneer Achari Sandwich + Side + Coke",
    description:
      "Enjoy your favourite Hotseller sub with a choice of cookie and a choice of drink.",
    cost: "Rs.379",
    cloudinaryimageid: { subwayfourthdish },

    fifthItem: "Crunchy Mexican Sandwich + Side + Coke",
    description:
      "Enjoy your favourite Hotseller sub with a choice of cookie and a choice of drink.",
    cost: "Rs.359",
    cloudinaryimageid: { subwayfifthdish },
  },

  {
    restaurantId: "151978",

    id: "2",
    restaurantName: "mcd",
    firstItem: "2 McAloo Tikki Burger + 2 Fries (L)",
    description:
      "Enjoy your favourite Grills sandwich with a choice of drink and a cookie or veg kebabs.",
    cost: "Rs.329",
    cloudinaryimageid: { mcdfirstdish },

    secondItem: "Burger Combo for 2: McVeggie Burger with Pizza McPuff",
    description:
      "Save big on your favourite sharing combo - 2 McVeggie Burger + 2 Fries (M) + Veg Pizza McPuff",
    cost: "Rs.389",
    cloudinaryimageid: { mcdseconddish },

    thirdItem:
      "McSpicy Paneer Burger + 2 Fries M + McAloo Tikki + Veg Pizza McPuff",
    description:
      "Get the best value in your meal for 2. Save big on your favourite sharing meal - McSpicy Paneer Burger + 2 Fries (M) + McAloo Tikki Burger + Veg Pizza McPuff",
    cost: "Rs.359",
    cloudinaryimageid: { mcdthirddish },

    fourthItem:
      "McSpicy Paneer Burger + McAloo Tikki Burger + Fries (L) + 2 Coke",
    description:
      "Get the best value in your meal for 2. Save big on your favourite sharing meal - McSpicy Paneer Burger + Fries (L) + 2 Coke + McAloo Tikki Burger",
    cost: "Rs.329",
    cloudinaryimageid: { mcdfourthdish },

    fifthItem: "McVeggie Burger + McAloo Tikki Burger + Fries (L) + 2 Coke",
    description:
      "Get the best value in your meal for 2. Save big on your favourite sharing meal - McVeggie Burger + Fries (L) + 2 Coke + McAloo Tikki Burger",
    cost: "Rs.389",
    cloudinaryimageid: { mcdfifthdish },
  },

  {
    restaurantId: "151971",

    id: "3",
    restaurantName: "california burrito",
    firstItem: "Barbeque Paneer Rice Bowl (Regular)",
    description:
      "Serves 1 | Fresh cilantro rice and everything nice. Comes with your favourite toppings, fajita veggies like bell peppers and onions, pico de galla and BBQ Paneer.",
    cost: "Rs.309",
    cloudinaryimageid: { califorfirstdish },

    secondItem: "Crispy Mushroom Rice Bowl (Regular)",
    description:
      "Serves 1 | Fresh cilantro rice and everything nice. Comes with your favourite toppings, fajita veggies like bell peppers and onions, pico de galla and crispy mushroom",
    cost: "Rs.299",
    cloudinaryimageid: { califorseconddish },

    thirdItem: "Peri Peri Potato Rice Bowl (Regular)",
    description:
      "Serves 1 | Fresh cilantro rice and everything nice. Comes with your favourite toppings, fajita veggies like bell peppers and onions, pico de galla and peri peri potato",
    cost: "Rs.359",
    cloudinaryimageid: { califorseconddish },

    fourthItem: "Barbeque Paneer Burrito (Regular)",
    description:
      "Serves 1 | Fresh cilantro rice and everything nice. Comes with your favourite toppings, fajita veggies like bell peppers and onions, pico de galla and peri peri potato",
    cost: "Rs.329",
    cloudinaryimageid: { califorfirstdish },

    fifthItem: "Barbeque Paneer Salad (Mini)",
    description:
      "Serves 1 | A crisp bowl of fresh greens that includes a variety of goodness such as corn salsa, pico de galla, pinto beans and barbeque paneer.",
    cost: "Rs.249",
    cloudinaryimageid: { califorseconddish },
  },

  {
    restaurantId: "151972",

    id: "3",
    restaurantName: "a2b",
    firstItem: "Dhal fry",
    description:
      "",
    cost: "Rs.220",
    cloudinaryimageid: { a2bfirstdish },

    firstItem: "Dhal fry",
    description:
      "",
    cost: "Rs.220",
    cloudinaryimageid: { a2bseconddish },

    firstItem: "Malai Koftha",
    description:
      "",
    cost: "Rs.255",
    cloudinaryimageid: { a2bthirddish },

    firstItem: "Paneer Fried Rice",
    description:
      "",
    cost: "Rs.245",
    cloudinaryimageid: { a2bfourthdish },

    firstItem: "Veg Noodles",
    description:
      "",
    cost: "Rs.220",
    cloudinaryimageid: { a2bfifthdish },

  },

  {
    
  }
];
