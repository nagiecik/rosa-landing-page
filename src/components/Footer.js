import FooterHeader from "./FooterHeader";
import ElementDivider from "./ElementDivider";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="bg-surfacegray box-border w-[120rem] flex flex-col items-center justify-start py-spacing-128 px-spacing-200 gap-[8rem] text-right text-[1rem] text-texts-textprimary font-text-regular-headline border-t-[2px] border-solid border-surfaces-default-surfacetertiary">
      <header className="self-stretch flex flex-row items-center justify-start gap-[2rem]">
        <FooterHeader
          footerHeaderTitle="Interested in working with us?"
          footerHeaderMail="hello@rosa.zone"
        />
        <img
          className="relative w-[11.94rem] h-[12.08rem] object-cover"
          alt=""
          src="/imagescrollup@2x.png"
        />
      </header>
      <ElementDivider elementDividerUrl="/imagedivider5.svg" />
      <div className="self-stretch flex flex-row items-start justify-between">
        <img
          className="relative w-[9.16rem] h-[2.62rem] object-cover"
          alt=""
          src="/imagelogo1@2x.png"
        />
        <div className="flex flex-row items-start justify-end gap-[8rem]">
          <FooterList
            footerListTitle="Menu"
            footerListElement1="START"
            footerListElement2="FEATURES"
            showListElement1
            showListElement2
            showListElement3
            showListElement4
            showListElement5
            containerdivlinkscolumnWidth="15rem"
            containerdivlinkscolumnGap="1rem"
            texth5boldFontSize="2rem"
            texth5boldLineHeight="3rem"
            texth5boldMargin="0"
            texth5boldFontWeight="700"
            link1TextDecoration="none"
            textlabelFontSize="1rem"
            textlabelLineHeight="2rem"
            link2TextDecoration="none"
            textlabelFontSize1="1rem"
            textlabelLineHeight1="2rem"
            link3TextDecoration="none"
            textlabelFontSize2="1rem"
            textlabelLineHeight2="2rem"
            link4TextDecoration="none"
            textlabelFontSize3="1rem"
            textlabelLineHeight3="2rem"
            link5TextDecoration="none"
            textlabelFontSize4="1rem"
            textlabelLineHeight4="2rem"
          />
          <FooterList
            footerListTitle="Support"
            footerListElement1="PRIVACY POLICY"
            footerListElement2={`TERMS & CONDITIONS`}
            showListElement1
            showListElement2="true"
            showListElement3="false"
            showListElement4="false"
            showListElement5={false}
            containerdivlinkscolumnWidth="15rem"
            containerdivlinkscolumnGap="1rem"
            texth5boldFontSize="2rem"
            texth5boldLineHeight="3rem"
            texth5boldMargin="0"
            texth5boldFontWeight="700"
            link1TextDecoration="none"
            textlabelFontSize="1rem"
            textlabelLineHeight="2rem"
            link2TextDecoration="none"
            textlabelFontSize1="1rem"
            textlabelLineHeight1="2rem"
            link3TextDecoration="unset"
            textlabelFontSize2="1rem"
            textlabelLineHeight2="2rem"
            link4TextDecoration="unset"
            textlabelFontSize3="1rem"
            textlabelLineHeight3="2rem"
            link5TextDecoration="unset"
            textlabelFontSize4="1rem"
            textlabelLineHeight4="2rem"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-end">
        <p className="m-0 flex-1 relative leading-[2rem]">
          ©2023 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
