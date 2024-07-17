import KFC from "../assets/kfc.png";
import california from "../assets/california.png";
import hariSuper from "../assets/hariSuper.png";
import empire from "../assets/empire.png";
import burgerking from "../assets/burgerking.png";
import theobroma from "../assets/theobroma.png";
import leon from "../assets/leon.png";
import mcdonalds from "../assets/mcdonalds.png";
import nic from "../assets/nic.png";
import ab from "../assets/ab.png";
import pizza from "../assets/pizza.png";
import subway from "../assets/subway.png";
import truffles from "../assets/truffles.png";
import wowmomos from "../assets/wowmomos.png";
import upahara from "../assets/upahara.png";
export const resList = [
  {
    id: "69876",
    name: "Subway",
    cloudinaryImageId: subway,
    locality: "UB City",
    areaName: "Central Bangalore",
    costForTwo: "₹350 for two",
    cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
    avgRating: 4.2,
    parentId: "2",
    avgRatingString: "4.2",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 43,
      lastMileTravel: 0.5,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "0.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-01 23:00:00",
      opened: true,
    },
  },

  {
    id: "43836",
    name: "McDonald's",
    cloudinaryImageId: mcdonalds,
    locality: "MG Road",
    areaName: "Ashok Nagar",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.3,
    parentId: "630",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 0.7,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "0.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-01 23:00:00",
      opened: true,
    },
  },

  {
    id: "16073",
    name: "California Burrito",
    cloudinaryImageId: california,
    locality: "Malleshwaram",
    areaName: "Malleshwaram",
    costForTwo: "₹250 for two",
    cuisines: ["Mexican", "American", "Salads", "Continental"],
    avgRating: 4.6,
    parentId: "1252",
    avgRatingString: "4.6",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 37,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-01 23:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
  },
  {
    id: "16304",
    name: "A2B - Adyar Ananda Bhavan",
    cloudinaryImageId: ab,
    locality: "Victoria Road",
    areaName: "Ashok Nagar",
    costForTwo: "₹499 for two",
    cuisines: ["Indian"],
    avgRating: 4.3,
    pureVeg: 1,
    parentId: "2403",
    avgRatingString: "4.3",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 3.5,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "3.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-02-28 15:45:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "10% OFF",
      subHeader: "ABOVE ₹800",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
  },

  {
    id: "11551",
    name: "Theobroma",
    cloudinaryImageId: theobroma,
    locality: "Richmond Town",
    areaName: "Richmond Town",
    costForTwo: "₹400 for two",
    cuisines: ["Bakery, Desserts, Savoury,Cakes"],
    avgRating: 4.5,
    parentId: "103",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 31,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-02 00:00:00",
      opened: true,
    },
  },

  {
    id: "15199",
    name: "Hotel Empire",
    cloudinaryImageId: empire,
    locality: "Brigade Road",
    areaName: "Church Street",
    costForTwo: "₹450 for two",
    cuisines: ["North Indian", "Kebabs", "Biryani"],
    avgRating: 4.4,
    parentId: "475",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-02-24 03:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "10% OFF",
      subHeader: "UPTO ₹40",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },

  {
    id: "15190",
    name: "Burger King",
    cloudinaryImageId: burgerking,
    locality: "Gandhi Bazar",
    areaName: "Basavanagudi",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "American", "Fast food", "Wraps"],
    avgRating: 4.2,
    parentId: "166",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-02-24 05:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹129",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
  },

  {
    id: "33699",
    name: "Truffles",
    cloudinaryImageId: truffles,
    locality: "St. Marks Road",
    areaName: "St. Marks Road",
    costForTwo: "₹450 for two",
    cuisines: ["American", "Desserts", "Continental", "Italian"],
    avgRating: 4.6,
    parentId: "218065",
    avgRatingString: "4.6",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 31,
      lastMileTravel: 2.8,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "2.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-02-23 23:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
  },

  {
    id: "15015",
    name: "Hari Super Sandwich",

    cloudinaryImageId: hariSuper,
    locality: "Residency Road",
    areaName: "Residency Road",
    costForTwo: "₹100 for two",
    pureVeg: 1,
    cuisines: ["Chaat", "Snacks", "Sandwiches", "Burgers"],
    avgRating: 3.5,
    parentId: "4284",
    avgRatingString: "4.5",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 37,
      lastMileTravel: 4.2,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "4.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-02-23 22:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
  },

  {
    id: "29673",
    name: "Natural Ice Cream",
    cloudinaryImageId: nic,
    locality: "St. Marks Road",
    areaName: "St Marks Road",
    costForTwo: "₹150 for two",
    cuisines: ["Ice Cream", "Desserts", "Ice Cream Cakes"],
    avgRating: 4.7,
    parentId: "2093",
    avgRatingString: "4.7",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2.8,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-02-29 00:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
  },

  {
    id: "65797",
    name: "Leon's - Burgers & Wings",
    cloudinaryImageId: leon,
    locality: "Koramangala",
    areaName: "Koramangala",
    costForTwo: "₹300 for two",
    cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
    avgRating: 4.4,
    parentId: "371281",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 39,
      lastMileTravel: 6.1,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "6.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-02-29 04:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹499",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },

  {
    id: "30955",
    name: "KFC",
    cloudinaryImageId: KFC,
    locality: "Mantri Square",
    areaName: "Malleshwaram",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 4.2,
    parentId: "547",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 45,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "45-50 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-02-23 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },

  {
    id: "10575",
    name: "Pizza Hut",
    cloudinaryImageId: pizza,
    locality: "Shanti Nagar",
    areaName: "Shanti Nagar",
    costForTwo: "₹600 for two",
    cuisines: ["Pizzas", "Italian", "Beverages", "Pastas"],
    avgRating: 4.1,
    parentId: "721",
    avgRatingString: "4.1",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 26,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-16 01:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "22037",
    name: "Wow! Momo",
    cloudinaryImageId: wowmomos,
    locality: "Brigade Road",
    areaName: "Brigade Road",
    costForTwo: "₹250 for two",
    cuisines: ["Tibetan", "Snacks", "Continental", "Desserts", "Beverages"],
    avgRating: 4.4,
    parentId: "1776",
    avgRatingString: "4.4",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 36,
      lastMileTravel: 3.6,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "3.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-15 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },

  {
    id: "102324",
    name: "Upahara Darshini",
    cloudinaryImageId: upahara,
    locality: "Basavangudi",
    areaName: "Basavangudi",
    costForTwo: "₹400 for two",
    pureVeg: 1,
    cuisines: ["Chinese", "South Indian", "North Indian"],
    avgRating: 4.5,
    parentId: "114900",
    avgRatingString: "4.3",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 3.9,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "3.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-15 23:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
];
