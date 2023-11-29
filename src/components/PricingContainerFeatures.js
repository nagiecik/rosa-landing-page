import { useMemo } from "react";
import PricingFeatureListElementPerk from "./PricingFeatureListElementPerk";

const PricingContainerFeatures = ({
  pricingFeaturesLabel,
  pricingFeaturesText1,
  pricingFeaturesText2,
  pricingFeaturesText3,
  pricingFeaturesText4,
  pricingFeaturesText5,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propColor5,
  listIconLeftUrl,
}) => {
  const textsmallStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const textspan2Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const textspan2Style1 = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const textspan2Style2 = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const textspan2Style3 = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const textspan2Style4 = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[1.25rem] text-texts-textaccentsubtle1 font-text-regular-headline">
      <div className="w-[41rem] flex flex-row items-center justify-center">
        <small
          className="flex-1 relative leading-[2.25rem] font-semibold"
          style={textsmallStyle}
        >
          {pricingFeaturesLabel}
        </small>
      </div>
      <PricingFeatureListElementPerk
        listIconLeftUrl="/imageiconcheck1.svg"
        listText="Primary context (rules/regulations of your sport)"
        containerdivfeatureListElGap="1rem"
        imageiconCheckWidth="2rem"
        imageiconCheckHeight="2rem"
        imageiconCheckObjectFit="cover"
        textspanColor="#181f4e"
        textspanFontSize="1.5rem"
        textspanLineHeight="2.5rem"
      />
      <PricingFeatureListElementPerk
        listIconLeftUrl="/imageiconcheck1.svg"
        listText={`Q&As for your rules/regulations`}
        containerdivfeatureListElGap="1rem"
        imageiconCheckWidth="2rem"
        imageiconCheckHeight="2rem"
        imageiconCheckObjectFit="cover"
        textspanColor="#181f4e"
        textspanFontSize="1.5rem"
        textspanLineHeight="2.5rem"
      />
      <PricingFeatureListElementPerk
        listIconLeftUrl="/imageiconcheck1.svg"
        listText="Custom branding"
        containerdivfeatureListElGap="1rem"
        imageiconCheckWidth="2rem"
        imageiconCheckHeight="2rem"
        imageiconCheckObjectFit="cover"
        textspanColor="#181f4e"
        textspanFontSize="1.5rem"
        textspanLineHeight="2.5rem"
      />
      <PricingFeatureListElementPerk
        listIconLeftUrl="/imageiconcheck1.svg"
        listText="User-friendly browsing and search"
        containerdivfeatureListElGap="1rem"
        imageiconCheckWidth="2rem"
        imageiconCheckHeight="2rem"
        imageiconCheckObjectFit="cover"
        textspanColor="#181f4e"
        textspanFontSize="1.5rem"
        textspanLineHeight="2.5rem"
      />
      <PricingFeatureListElementPerk
        listIconLeftUrl="/imageiconcheck1.svg"
        listText="Bookmarking (adding to favourites, note-taking)"
        containerdivfeatureListElGap="1rem"
        imageiconCheckWidth="2rem"
        imageiconCheckHeight="2rem"
        imageiconCheckObjectFit="cover"
        textspanColor="#181f4e"
        textspanFontSize="1.5rem"
        textspanLineHeight="2.5rem"
      />
    </div>
  );
};

export default PricingContainerFeatures;
