import { useMemo } from "react";
import ElementDivider from "./ElementDivider";
import PricingContainerFeatures from "./PricingContainerFeatures";
import PricingFeatureListElementNumber from "./PricingFeatureListElementNumber";
import Button from "./Button";

const ContainerPricingCard = ({
  pricingTitleText,
  pricingDescriptionText,
  pricingPriceText,
  pricingImageDividerUrl1,
  pricingFeaturesTitleText,
  pricingFeatureText1,
  pricingFeatureText2,
  pricingFeatureText3,
  pricingFeatureText4,
  pricingFeatureText5,
  pricingImageDividerUrl2,
  pricingDataLimitsText,
  pricingImageDividerUrl3,
  pricingOnboardingFeeText,
  pricingButtonIconLeftUrl,
  pricingButtonText,
  pricingButtonIconRightUrl,
  propBackgroundColor,
  propZIndex,
  propColor,
  propColor1,
  propColor2,
  texth4Color,
  texth4Color1,
  texth4Color2,
  texth4Color3,
  texth4Color4,
  texth4Color5,
  containerdivheaderColor,
  propColor3,
  containerdivheaderColor1,
  containerdivheaderColor2,
  containerdivpricingBorder,
  containerdivpricingBackgroundColor,
  texth4FontWeight,
  showIconLeft,
  showButtonText,
  showIconRight,
}) => {
  const containerdivpricingStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      zIndex: propZIndex,
    };
  }, [propBackgroundColor, propZIndex]);

  const texth41Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const textsmall1Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const texth51Style = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const textsmallStyle = useMemo(() => {
    return {
      color: texth4Color,
    };
  }, [texth4Color]);

  const textspan2Style = useMemo(() => {
    return {
      color: texth4Color1,
    };
  }, [texth4Color1]);

  const textspan2Style1 = useMemo(() => {
    return {
      color: texth4Color2,
    };
  }, [texth4Color2]);

  const textspan2Style2 = useMemo(() => {
    return {
      color: texth4Color3,
    };
  }, [texth4Color3]);

  const textspan2Style3 = useMemo(() => {
    return {
      color: texth4Color4,
    };
  }, [texth4Color4]);

  const textspan2Style4 = useMemo(() => {
    return {
      color: texth4Color5,
    };
  }, [texth4Color5]);

  const textspan3Style = useMemo(() => {
    return {
      color: containerdivheaderColor,
    };
  }, [containerdivheaderColor]);

  const textsmall2Style = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const textspan3Style1 = useMemo(() => {
    return {
      color: containerdivheaderColor1,
    };
  }, [containerdivheaderColor1]);

  const textspan3Style2 = useMemo(() => {
    return {
      color: containerdivheaderColor2,
    };
  }, [containerdivheaderColor2]);

  const typeOutlineStateEnabledSStyle = useMemo(() => {
    return {
      border: containerdivpricingBorder,
      backgroundColor: containerdivpricingBackgroundColor,
    };
  }, [containerdivpricingBorder, containerdivpricingBackgroundColor]);

  const textlabel7Style = useMemo(() => {
    return {
      fontWeight: texth4FontWeight,
    };
  }, [texth4FontWeight]);

  return (
    <div
      className="flex-1 rounded-spacing-32 bg-surfaces-default-surfaceprimary shadow-[-176px_226px_80px_rgba(23,_31,_78,_0),_-113px_144px_73px_rgba(23,_31,_78,_0.01),_-63px_81px_62px_rgba(23,_31,_78,_0.04),_-28px_36px_46px_rgba(23,_31,_78,_0.07),_-7px_9px_25px_rgba(23,_31,_78,_0.08)] flex flex-col items-start justify-start py-spacing-48 px-spacing-40 gap-[2.5rem] z-[0] text-left text-[2.5rem] text-texts-textprimary font-text-regular-headline"
      style={containerdivpricingStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
        <h4
          className="m-0 self-stretch relative text-inherit tracking-[-0.04em] leading-[3.5rem] font-bold font-inherit"
          style={texth41Style}
        >
          {pricingTitleText}
        </h4>
        <div className="w-[41rem] flex flex-row items-center justify-center text-[1.25rem] text-texts-textaccentsubtle">
          <small
            className="flex-1 relative leading-[2.25rem] font-semibold"
            style={textsmall1Style}
          >
            {pricingDescriptionText}
          </small>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-[4rem] text-surfaces-default-surfacetertiary">
          <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[5rem] font-bold font-inherit">
            {pricingPriceText}
          </h1>
          <h5
            className="m-0 relative text-[2rem] tracking-[-0.04em] leading-[3rem] font-bold font-inherit text-texts-textprimary"
            style={texth51Style}
          >
            per month
          </h5>
        </div>
      </div>
      <ElementDivider
        elementDividerUrl="/imagedivider1@2x.png"
        propAlignSelf="unset"
        propMaxWidth="unset"
        propOverflow="unset"
        propWidth="41.13rem"
      />
      <PricingContainerFeatures
        pricingFeaturesLabel="Everything in National, plus"
        pricingFeaturesText1="User data collection"
        pricingFeaturesText2="Initial content entering (up to 300 pages)"
        pricingFeaturesText3="Multi-language mobile app"
        pricingFeaturesText4="Starter-pack promo materials"
        pricingFeaturesText5="Dedicated customer service for admins"
        propColor="#c8d2d8"
        propColor1="#fff"
        propColor2="#fff"
        propColor3="#fff"
        propColor4="#fff"
        propColor5="#fff"
        listIconLeftUrl="/imageiconcheck1.svg"
      />
      <ElementDivider
        elementDividerUrl="/imagedivider1@2x.png"
        propAlignSelf="unset"
        propMaxWidth="unset"
        propOverflow="unset"
        propWidth="41.13rem"
      />
      <PricingFeatureListElementNumber
        listTextLeft="Content/data limits"
        listTextRight="15GB"
        containerdivfeatureListElGap="1rem"
        textspanColor="#fff"
        textspanFontSize="1.5rem"
        textspanLineHeight="2.5rem"
        texth4FontSize="2.5rem"
        texth4LineHeight="3.5rem"
        texth4Margin="0"
        texth4FontWeight="700"
      />
      <ElementDivider
        elementDividerUrl="/imagedivider1@2x.png"
        propAlignSelf="unset"
        propMaxWidth="unset"
        propOverflow="unset"
        propWidth="41.13rem"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-[1.25rem] text-texts-textaccentsubtle">
        <div className="w-[41rem] flex flex-row items-center justify-center">
          <small
            className="flex-1 relative leading-[2.25rem] font-semibold"
            style={textsmall2Style}
          >
            Additional services
          </small>
        </div>
        <PricingFeatureListElementNumber
          listTextLeft="Content entering (every 100 pages)"
          listTextRight="€350"
          containerdivfeatureListElGap="1rem"
          textspanColor="#fff"
          textspanFontSize="1.5rem"
          textspanLineHeight="2.5rem"
          texth4FontSize="2.5rem"
          texth4LineHeight="3.5rem"
          texth4Margin="0"
          texth4FontWeight="700"
        />
        <PricingFeatureListElementNumber
          listTextLeft="Onboarding fee"
          listTextRight="€1500"
          containerdivfeatureListElGap="1rem"
          textspanColor="#fff"
          textspanFontSize="1.5rem"
          textspanLineHeight="2.5rem"
          texth4FontSize="2.5rem"
          texth4LineHeight="3.5rem"
          texth4Margin="0"
          texth4FontWeight="700"
        />
      </div>
      <Button
        buttonIconLeftUrl="/iconarrowleft.svg"
        buttonText="Choose International"
        buttonIconRightUrl="/iconarrowright.svg"
        showIconLeft={false}
        showIconRight={false}
        showButtonText
        typeOutlineStateEnabledSBorder="none"
        typeOutlineStateEnabledSAlignSelf="stretch"
        typeOutlineStateEnabledSBackgroundColor="#fab300"
        typeOutlineStateEnabledSBoxSizing="border-box"
        typeOutlineStateEnabledSPadding="1rem 2rem"
        typeOutlineStateEnabledSGap="1rem"
        typeOutlineStateEnabledSCursor="pointer"
        iconarrowleftWidth="1.5rem"
        iconarrowleftHeight="1.5rem"
        textlabelFontSize="1.5rem"
        textlabelLineHeight="2.5rem"
        textlabelColor="#181f4e"
        textlabelFontWeight="700"
        iconarrowrightWidth="1.5rem"
        iconarrowrightHeight="1.5rem"
      />
    </div>
  );
};

export default ContainerPricingCard;
