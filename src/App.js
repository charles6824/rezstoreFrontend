import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import PreLoader from "./components/Preloader";
import Header from "./components/Header";

const HomePage = Loadable({
	loader: () => import("./screens/HomeScreen"),
	loading: PreLoader,
});

const LoginPage = Loadable({
	loader: () => import("./screens/LoginScreen"),
	loading: PreLoader,
});

const RegisterPage = Loadable({
	loader: () => import("./screens/RegisterScreen"),
	loading: PreLoader,
});

const NewArrivalPage = Loadable({
	loader: () => import("./screens/NewArrivalsScreen"),
	loading: PreLoader,
});

const CategoryPage = Loadable({
	loader: () => import("./screens/CategoryScreen"),
	loading: PreLoader,
});
const BrandPage = Loadable({
	loader: () => import("./screens/BrandScreen"),
	loading: PreLoader,
});

const ProductPage = Loadable({
	loader: () => import("./screens/ProductScreen"),
	loading: PreLoader,
});

const CartPage = Loadable({
	loader: () => import("./screens/CartScreen"),
	loading: PreLoader,
});

const ShippingPage = Loadable({
	loader: () => import("./screens/ShippingScreen"),
	loading: PreLoader,
});

const PlaceOrderPage = Loadable({
	loader: () => import("./screens/PlaceOrderScreen"),
	loading: PreLoader,
});

const OrderPage = Loadable({
	loader: () => import("./screens/OrderScreen"),
	loading: PreLoader,
});

const ProfilePage = Loadable({
	loader: () => import("./screens/ProfileScreen"),
	loading: PreLoader,
});

const UserListPage = Loadable({
	loader: () => import("./screens/UserListScreen"),
	loading: PreLoader,
});

const ProductListPage = Loadable({
	loader: () => import("./screens/ProductListScreen"),
	loading: PreLoader,
});

const ProductEditPage = Loadable({
	loader: () => import("./screens/ProductEditScreen"),
	loading: PreLoader,
});

const OrderListPage = Loadable({
	loader: () => import("./screens/OrderListScreen"),
	loading: PreLoader,
});

const IssueListPage = Loadable({
	loader: () => import("./screens/IssueListScreen"),
	loading: PreLoader,
});

const SearchPage = Loadable({
	loader: () => import("./screens/SearchScreen"),
	loading: PreLoader,
});

const AboutPage = Loadable({
	loader: () => import("./screens/AboutScreen"),
	loading: PreLoader,
});

const ContactPage = Loadable({
	loader: () => import("./screens/ContactScreen"),
	loading: PreLoader,
});

const TermsPage = Loadable({
	loader: () => import("./screens/TermsScreen"),
	loading: PreLoader,
});

const App = () => {
	return (
		<Router>
			<Header />
			<main className="main-section">
				<Suspense fallback={<PreLoader />}>
					<Switch>
						<Route
							path="/terms-and-conditions"
							component={TermsPage}
						/>
						<Route path="/order/:id" component={OrderPage} />
						<Route path="/placeorder" component={PlaceOrderPage} />
						<Route path="/shipping" component={ShippingPage} />
						<Route path="/profile" component={ProfilePage} />
						<Route path="/register" component={RegisterPage} />
						<Route path="/sign-in" component={LoginPage} />
						<Route path="/cart" component={CartPage} />
						<Route path="/product/:id" component={ProductPage} />
						<Route
							path="/categories/:categoryName/page/:pageNumber"
							component={CategoryPage}
							exact
						/>
						<Route
							path="/categories/:categoryName"
							component={CategoryPage}
						/>
						<Route
							path="/brands/:brandName/page/:pageNumber"
							component={BrandPage}
							exact
						/>
						<Route
							path="/brands/:brandName"
							component={BrandPage}
						/>
						<Route
							path="/new-arrivals/page/:pageNumber"
							component={NewArrivalPage}
							exact
						/>
						<Route
							path="/new-arrivals"
							component={NewArrivalPage}
						/>
						<Route
							path="/admin/issues"
							exact
							component={IssueListPage}
						/>
						<Route
							path="/admin/issues/:pageNumber"
							component={IssueListPage}
							exact
						/>
						<Route
							path="/admin/users"
							exact
							component={UserListPage}
						/>
						<Route
							path="/admin/users/:pageNumber"
							component={UserListPage}
							exact
						/>
						<Route
							path="/admin/orders"
							component={OrderListPage}
							exact
						/>
						<Route
							path="/admin/products"
							component={ProductListPage}
							exact
						/>
						<Route
							path="/admin/products/:pageNumber"
							component={ProductListPage}
							exact
						/>
						<Route
							path="/admin/products/:id/edit"
							component={ProductEditPage}
						/>
						<Route exact path="/search" component={SearchPage} />
						<Route
							path="/search/:keyword"
							component={SearchPage}
							exact
						/>
						<Route
							path="/search/:keyword/page/:pageNumber"
							component={SearchPage}
							exact
						/>
						<Route path="/contact" component={ContactPage} />
						<Route path="/about" component={AboutPage} />
						<Route exact path="/" component={HomePage} />
					</Switch>
				</Suspense>
			</main>
		</Router>
	);
};

export default App;
