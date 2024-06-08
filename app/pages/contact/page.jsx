import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import Header from "@/app/components/Header";
import Spacing from "@/app/components/Spacing";

const Contact = () => {
  return (
    <>
      <Header
        src="https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717879550/JEB/tt4tqwrmfczotcjq8zsp.webp"
        width={500}
        height={500}
        className={"absolute z-10 left-8 top-2 w-20 md:w-36"}
      />
      <main>
        <Form />
      </main>
      <Spacing size={50} />
      <Footer />
    </>
  );
};

export default Contact;
