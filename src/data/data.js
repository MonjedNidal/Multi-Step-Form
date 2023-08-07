import arcadeSVG from "../assets/images/icon-arcade.svg";
import advancedSVG from "../assets/images/icon-advanced.svg";
import proSVG from "../assets/images/icon-pro.svg";

export const plansData = [
  {
    id: 0,
    name: "Arcade",
    monthlyPrice: "9",
    yearlyPrice: "90",
    imgSource: arcadeSVG,
  },
  {
    id: 1,
    name: "Advanced",
    monthlyPrice: "12",
    yearlyPrice: "120",
    imgSource: advancedSVG,
  },
  {
    id: 2,
    name: "Pro",
    monthlyPrice: "15",
    yearlyPrice: "150",
    imgSource: proSVG,
  },
];
export const addOnsData = [
  {
    id: 0,
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 1,
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 2,
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];
