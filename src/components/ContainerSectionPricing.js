import ContainerHeader from "./ContainerHeader";
import ContainerPricingCard from "./ContainerPricingCard";

const ContainerSectionPricing = () => {
  return (
    <section className="bg-texts-textprimary w-[120rem] flex flex-col items-center justify-start pt-spacing-256 px-spacing-200 pb-spacing-128 box-border gap-[8rem] text-left text-[2.5rem] text-texts-textprimary font-text-regular-headline">
      <ContainerHeader
        containerHeaderLight="Choose Your"
        containerHeaderBold="Plan"
        containerDescription="ROSA provides the tools to streamline rule management, create engaging content, and organize diverse sporting events with precision. Choose a plan that matches your organization's needs and make a lasting impression with a branded home screen, craft informative content effortlessly, and manage events seamlessly."
        containerheaderZIndex="unset"
        containerheaderWidth="95rem"
        textsectionTitleh1Gap="1.5rem"
        texth1lightColor="#181f4e"
        texth1lightFontSize="6rem"
        texth1lightLineHeight="6rem"
        texth1lightMargin="0"
        texth1boldColor="#181f4e"
        texth1boldFontSize="6rem"
        texth1boldLineHeight="6rem"
        texth1boldMargin="0"
        textpColor="#181f4e"
        textpFontSize="1.5rem"
        textpLineHeight="2.5rem"
        textpMaxWidth="50rem"
        textpMargin="0"
        showSecondaryText
        showPrimaryText
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
          propBackgroundColor="#fff"
          propZIndex="1"
          propColor="#181f4e"
          propColor1="#7e84b5"
          propColor2="#181f4e"
          texth4Color="#7e84b5"
          texth4Color1="#181f4e"
          texth4Color2="#181f4e"
          texth4Color3="#181f4e"
          texth4Color4="#181f4e"
          texth4Color5="#181f4e"
          containerdivheaderColor="#181f4e"
          propColor3="#7e84b5"
          containerdivheaderColor1="#181f4e"
          containerdivheaderColor2="#181f4e"
          containerdivpricingBorder="2px solid #181f4e"
          containerdivpricingBackgroundColor="transparent"
          texth4FontWeight="bold"
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
