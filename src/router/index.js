import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Feedback from "../views/Feedback.vue";
import LogIn from "../views/LogIn.vue";
import CalculatorButtons from "../views/calculatorParts/CalculatorButtons.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: Feedback,
    
  },
  {
    path: "/logIn",
    name: "LogIn",
    component: LogIn,
    
  },
  {
    path: "/",
    name: "CalculatorButtons",
    component: CalculatorButtons,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
