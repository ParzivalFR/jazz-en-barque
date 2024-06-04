import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import Header from "@/app/components/Header";
import Spacing from "@/app/components/Spacing";
import ImgContact from "@/app/images/page_contact.webp";

const Contact = () => {
  return (
    <>
      <Header
        src={ImgContact}
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
