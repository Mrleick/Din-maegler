import Banner from "../components/Banner";
import GoogleMap from "../components/GoogleMap";
import "../global.css";

const Contact = () => {
  return (
    <>
      <Banner title="Kontakt os" />
      <div className="max-w-[1110px] mx-auto my-[120px]">
        <h2 className="text-[30px] font-medium mb-[16px]">
          Vi sidder klar til at besvare dine spørgsmål
        </h2>
        <div className="bg-primary h-[4px] max-w-[110px]"></div>
        <p className="text-[18px] text-para01 max-w-[715px] mt-[32px]">
          Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang
          med at sælge sin bolig. Vores medarbejdere sider klar alle ugens dage
          til at svare på dine spørgsmål.
        </p>
        <form className="w-[40rem] border border-shape01 p-[2.5rem]" action="">
          <div className="flex justify-between mb-[1.25rem]">
            <div>
              <label className="" htmlFor="navn">
                Navn
              </label>
              <input
                className="w-[17rem] border border-shape01 mt-[0.5em] pl-[15px] py-[15px] block"
                type="text"
                placeholder="Indtast dit navn"
              ></input>
            </div>
            <div>
              <label className="" for="email">
                Email
              </label>
              <input
                className="w-[17rem] border border-shape01 mt-[0.5em]  pl-[15px] py-[15px] block"
                type="email"
                placeholder="Indtast din email"
              ></input>
            </div>
          </div>

          <label className="mb-[8px]" for="emne">
            Emne
          </label>
          <input
            className="w-[100%] border border-shape01 mt-[0.5em] mb-[1.25rem] pl-[15px] py-[15px] block"
            type="text"
            placeholder="Indtast emne"
          ></input>
          <label htmlFor="Besked">Besked</label>
          <textarea
            className="w-[100%] h-[15rem] block border border-shape01 mt-[0.5rem] pl-[15px] pt-[15px] block"
            placeholder="Indtast din besked..."
          ></textarea>

          <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <label className="text-[16px] leading-[28px] absolute" for="check">
              Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
            </label>
          </label>

          <button className="bg-primary rounded-sm w-[10.5rem] text-white py-[16px]  mt-[32px]">
            Send besked
          </button>
        </form>
        <aside></aside>
      </div>
      <GoogleMap />
    </>
  );
};

export default Contact;
