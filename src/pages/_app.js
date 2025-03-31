import "@/styles/globals.css";
import Header from "@/components/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}