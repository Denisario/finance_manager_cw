import Finances from "./pages/Finances";
import Finance from "./pages/Finance";

export const routes = [
    {
        path: '',
        Component: null
    },
    {
        path: "/g",
        Component: Finance
    },
    {
        path: '/finances',
        Component: Finances
    },
]