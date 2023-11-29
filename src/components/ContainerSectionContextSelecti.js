import ContainerHeader from "./ContainerHeader";
import CardContext from "./CardContext";

const ContainerSectionContextSelecti = () => {
  return (
    <section className="w-[120rem] flex flex-col items-end justify-start py-spacing-128 px-spacing-200 box-border relative gap-[8rem] bg-[url('/public/containersectioncontext@3x.png')] bg-cover bg-no-repeat bg-[top]">
      <ContainerHeader
        containerHeaderLight="Context"
        containerHeaderBold="Selection"
        containerDescription="ROSA (Rules Of Sports App) is a gamechanger in the way you manage, update and distribute the rules of your sport."
      />
      <div className="w-[58.38rem] flex flex-col items-start justify-start gap-[2rem] z-[1]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[5rem]">
          <CardContext
            cardNumberText="01."
            cardTitleText="Context #1"
            cardDescriptionText="Simply download and install ROSA to unlock a world of sport-specific rules and regulations at your fingertips."
          />
          <CardContext
            cardNumberText="02."
            cardTitleText="Context #2"
            cardDescriptionText="Simply download and install ROSA to unlock a world of sport-specific rules and regulations at your fingertips."
          />
          <CardContext
            cardNumberText="03."
            cardTitleText="Context #3"
            cardDescriptionText="Simply download and install ROSA to unlock a world of sport-specific rules and regulations at your fingertips."
          />
          <CardContext
            cardNumberText="04."
            cardTitleText="Context #4"
            cardDescriptionText="Simply download and install ROSA to unlock a world of sport-specific rules and regulations at your fingertips."
          />
        </div>
        <div className="w-[40rem] flex flex-row items-center justify-center gap-[1rem]">
          <img
            className="relative rounded-md w-[1.13rem] h-[1.13rem] object-cover"
            alt=""
            src="/imagecontrolactive@2x.png"
          />
          <img
            className="relative rounded-10xs w-[0.89rem] h-[0.89rem] object-cover"
            alt=""
            src="/imagecontrolinactive@2x.png"
          />
          <img
            className="relative rounded-10xs w-[0.89rem] h-[0.89rem] object-cover"
            alt=""
            src="/imagecontrolinactive@2x.png"
          />
          <img
            className="relative rounded-10xs w-[0.89rem] h-[0.89rem] object-cover"
            alt=""
            src="/imagecontrolinactive@2x.png"
          />
        </div>
      </div>
      <img
        className="absolute my-0 mx-[!important] top-[24.5rem] left-[12.5rem] w-[24.31rem] h-[57.13rem] object-cover z-[2]"
        alt=""
        src="/imagephone@2x.png"
      />
    </section>
  );
};

export default ContainerSectionContextSelecti;
