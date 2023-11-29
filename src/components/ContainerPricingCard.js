import ElementDivider from "./ElementDivider";
import PricingFeatureListElementPerk from "./PricingFeatureListElementPerk";
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
  showIconLeft,
  showButtonText,
  showIconRight,
}) => {
  return (
    <div className="flex-1 rounded-spacing-32 bg-surfaces-default-surfaceprimary shadow-[-176px_226px_80px_rgba(23,_31,_78,_0),_-113px_144px_73px_rgba(23,_31,_78,_0.01),_-63px_81px_62px_rgba(23,_31,_78,_0.04),_-28px_36px_46px_rgba(23,_31,_78,_0.07),_-7px_9px_25px_rgba(23,_31,_78,_0.08)] flex flex-col items-start justify-start py-spacing-48 px-spacing-40 gap-[2.5rem] z-[0] text-left text-[1.25rem] text-texts-textaccentsubtle font-text-regular-headline">
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[2.5rem] text-texts-textprimary">
        <h4 className="m-0 self-stretch relative text-inherit tracking-[-0.04em] leading-[3.5rem] font-bold font-inherit">
          {pricingTitleText}
        </h4>
        <div className="w-[41rem] flex flex-row items-center justify-center text-[1.25rem] text-texts-textaccentsubtle">
          <small className="flex-1 relative leading-[2.25rem] font-semibold">
            {pricingDescriptionText}
          </small>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-[4rem] text-surfaces-default-surfacetertiary">
          <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[5rem] font-bold font-inherit">
            {pricingPriceText}
          </h1>
          <h5 className="m-0 relative text-[2rem] tracking-[-0.04em] leading-[3rem] font-bold font-inherit text-texts-textprimary">
            per month
          </h5>
        </div>
      </div>
      <ElementDivider elementDividerUrl="/imagedivider1@2x.png" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
        <div className="w-[41rem] flex flex-row items-center justify-center">
          <small className="flex-1 relative leading-[2.25rem] font-semibold">
            {pricingFeaturesTitleText}
          </small>
        </div>
        <PricingFeatureListElementPerk
          listIconLeftUrl="/imageiconcheck1.svg"
          listText="User data collection"
        />
        <PricingFeatureListElementPerk
          listIconLeftUrl="/imageiconcheck1.svg"
          listText="Initial content entering (up to 300 pages)"
        />
        <PricingFeatureListElementPerk
          listIconLeftUrl="/imageiconcheck1.svg"
          listText="Multi-language mobile app"
        />
        <PricingFeatureListElementPerk
          listIconLeftUrl="/imageiconcheck1.svg"
          listText="Starter-pack promo materials"
        />
        <PricingFeatureListElementPerk
          listIconLeftUrl="/imageiconcheck1.svg"
          listText="Dedicated customer service for admins"
        />
      </div>
      <ElementDivider elementDividerUrl="/imagedivider1@2x.png" />
      <PricingFeatureListElementNumber
        listTextLeft="Content/data limits"
        listTextRight="15GB"
      />
      <ElementDivider elementDividerUrl="/imagedivider1@2x.png" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
        <div className="w-[41rem] flex flex-row items-center justify-center">
          <small className="flex-1 relative leading-[2.25rem] font-semibold">
            Additional services
          </small>
        </div>
        <PricingFeatureListElementNumber
          listTextLeft="Content entering (every 100 pages)"
          listTextRight="€350"
        />
        <PricingFeatureListElementNumber
          listTextLeft="Onboarding fee"
          listTextRight="€1500"
        />
      </div>
      <Button
        buttonIconLeftUrl="/iconarrowleft.svg"
        buttonText="Choose International"
        buttonIconRightUrl="/iconarrowright.svg"
        showIconLeft={false}
        showIconRight={false}
        showButtonText
      />
    </div>
  );
};

export default ContainerPricingCard;
