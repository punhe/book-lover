import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import SignInPage, { SigninPage } from "../pages/SigninPage/SigninPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes = [
    {
        path:'/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path:'/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path:'/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path:'/:type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path:'/Sign-in',
        page: SigninPage,
        isShowHeader: true
    },
    {
        path:'/Sign-up',
        page: SignUpPage,
        isShowHeader: true
    },
    {
        path:'/product-detail',
        page: ProductDetailPage,
        isShowHeader: true
    },
    {
        path:'*',
        page: NotFoundPage
    }
]