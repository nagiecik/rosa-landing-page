import ContainerHeader from "./ContainerHeader";
import ContainerPricingCard from "./ContainerPricingCard";

const ContainerSectionPricing = () => {
  return (
    <section className="bg-texts-textprimary w-[120rem] flex flex-col items-center justify-start pt-spacing-256 px-spacing-200 pb-spacing-128 box-border gap-[8rem] text-left text-[1.25rem] text-texts-textaccentsubtle font-text-regular-headline">
      <ContainerHeader
        containerHeaderLight="Choose Your"
        containerHeaderBold="Plan"
        containerDescription="ROSA provides the tools to streamline rule management, create engaging content, and organize diverse sporting events with precision. Choose a plan that matches your organization's needs and make a lasting impression with a branded home screen, craft informative content effortlessly, and manage events seamlessly."
      />
      <div className="self-stretch flex flex-row items-start justify-start gap-[3rem]">
        <ContainerPricingCard
          pricingTitleText="National"
          pricingDescriptionText="For national sports associations in 2023, 40% off on target fee of €999/ mo from 2024, with new features still under development"
          pricingPriceText="€398"
          pricingImageDividerUrl1="/imagedivider3.svg"
          pricingFeaturesTitleText="Key Features"
          pricingFeatureText1="Primary context (rules/regulations of your sport)"
          pricingFeatureText2={`Q&As for your rules/regulations`}
          pricingFeatureText3="Custom branding"
          pricingFeatureText4="User-friendly browsing and search"
          pricingFeatureText5="Bookmarking (adding to favourites, note-taking)"
          pricingImageDividerUrl2="/imagedivider3.svg"
          pricingDataLimitsText="5GB"
          pricingImageDividerUrl3="/imagedivider3.svg"
          pricingOnboardingFeeText="€980"
          pricingButtonIconLeftUrl="/iconarrowleft1.svg"
          pricingButtonText="Choose National"
          pricingButtonIconRightUrl="/iconarrowright1.svg"
          showIconLeft={false}
          showButtonText
          showIconRight={false}
        />
        <ContainerPricingCard
          pricingTitleText="International"
          pricingDescriptionText="For international sports organisations in 2023, 40% off on target fee of €1999/ mo from 2024, with new features still under development"
          pricingPriceText="€798"
          pricingImageDividerUrl1="/imagedivider3.svg"
          pricingFeaturesTitleText="Everything in National, plus"
          pricingFeatureText1="User data collection"
          pricingFeatureText2="Initial content entering (up to 300 pages)"
          pricingFeatureText3="Multi-language mobile app"
          pricingFeatureText4="Starter-pack promo materials"
          pricingFeatureText5="Dedicated customer service for admins"
          pricingImageDividerUrl2="/imagedivider3.svg"
          pricingDataLimitsText="15GB"
          pricingImageDividerUrl3="/imagedivider3.svg"
          pricingOnboardingFeeText="€1500"
          pricingButtonIconLeftUrl="/iconarrowleft.svg"
          pricingButtonText="Choose International"
          pricingButtonIconRightUrl="/iconarrowright.svg"
          showIconLeft={false}
          showButtonText
          showIconRight={false}
        />
      </div>
    </section>
  );
};

export default ContainerSectionPricing;
