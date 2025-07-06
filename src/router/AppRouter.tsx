import {Route, Routes} from "react-router-dom";
import {ROUTES} from "../constants/routing";
import {Header} from "../components/organisms/Header";
import {Discounts} from "../components/organisms/Discounts";
import {Categories} from "../components/organisms/Categories";
import {Reviews} from "../components/organisms/Reviews";
import {Faq} from "../components/organisms/Faq";
import {Footer} from "../components/organisms/Footer";
import {CatalogPage} from "../pages/Catalog";
import {ReviewsPage} from "../pages/Reviews";
import HomePage from "../pages/Home";
import {ProductPage} from "../components/molecules/ProductPage";
import {Login} from "../pages/Login";
import Cart from "../pages/Cart";


export const AppRouter = () => {
    return (
        <Routes>
            <Route path={ROUTES.INDEX} element={
                <>
                    <Header />
                    <HomePage />
                    <Categories />
                    <Discounts />
                    <Reviews />
                    <Faq />
                    <Footer />
                </>
            }/>
            <Route path={ROUTES.CATALOG} element={
                <>
                    <Header />
                    <CatalogPage />
                    <Footer />
                </>
            }/>
            <Route path={ROUTES.PRODUCT} element={
                <>
                    <Header />
                    <ProductPage />
                    <Footer />
                </>
            } />
            <Route path={ROUTES.CART} element={
                <>
                    <Header />
                    <Cart />
                    <Footer />
                </>
            }/>
            <Route path={ROUTES.CATEGORIES} element={
                <>
                    <Header />
                    <Footer />
                </>
            }/>
            <Route path={ROUTES.REVIEWS} element={
                <>
                    <Header />
                    <ReviewsPage />
                    <Footer />
                </>
            }/>
            <Route path={ROUTES.LOGIN} element={
                <>
                    <Login />
                </>
            }/>
        </Routes>
    )
}