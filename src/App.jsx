import AppRouter from "./AppRouter";
import Footer from "./components/smart/footer/Footer";
import Header from "./components/smart/header/Header";
import AuthProvider from "./contexts/auth/Auth";

function App() {
  return (
    <AuthProvider>
      <Header />
      <AppRouter />
      <Footer />
    </AuthProvider>
  );
}

export default App;
