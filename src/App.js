import "./App.scss";
import About from "./comp/about/About";
import Banner from "./comp/banner/Banner";
import BenefitCards from "./comp/benefit/Cards";
import Billing from "./comp/billings/Billing";
import Features from "./comp/features/Features";
import Comments from "./comp/comments/Comment";
import Order from "./comp/order/Order";
import Footer from "./comp/footer/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Features />
      <BenefitCards />
      <Billing />
      <Comments />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
