import ContainerHeader from "./ContainerHeader";
import CardEnvironmentFeature from "./CardEnvironmentFeature";
import CardFeatureHover from "./CardFeatureHover";
import CardFeature from "./CardFeature";

const ContainerFeaturesOverall = () => {
  return (
    <section className="bg-texts-textprimary w-[120rem] flex flex-col items-center justify-start pt-spacing-400 px-spacing-200 pb-spacing-128 box-border gap-[8rem] text-left text-[1.5rem] text-surfaces-default-surfacetertiary font-text-regular-headline">
      <ContainerHeader
        containerHeaderLight="All Provided"
        containerHeaderBold="Features"
        containerDescription="Doing your best to get the message across globally, most often you work with PDF files and printouts. They are difficult to personalize and user-unfriendly. It would be nice to make tracking changes, giving feedback and browsing easier, and mobile-optimised."
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
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2rem]">
        <CardEnvironmentFeature
          cardIconUrl="/iconquestionmarkapp.svg"
          cardNumberText="01"
          cardTitleText={`Q&A for your rules`}
          cardDescriptionText="get quick answers to competition rule queries"
          showNumberText
          showTitleText
          showIcon
          showDescriptionText
          containerdivcardFeatureacPadding="1.5rem 1.5rem 2rem"
          containerdivcardFeatureacGap="1rem"
          containerdivcardFeatureacMinWidth="22.25rem"
          imageiconPadding="0.5rem"
          iconhouseWidth="3rem"
          iconhouseHeight="3rem"
          containerdivtextGap="0.75rem"
          texth6FontSize="1.5rem"
          texth6LineHeight="2.5rem"
          texth6Margin="0"
          texth6FontWeight="700"
          texth6FontSize1="1.5rem"
          texth6LineHeight1="2.5rem"
          texth6Margin1="0"
          texth6FontWeight1="700"
          textpFontSize="1rem"
          textpLineHeight="2rem"
          textpMargin="0"
        />
        <CardFeatureHover
          cardFeatureNumberText="02"
          cardFeatureTitleText="Language versions"
          cardFeatureDescriptionText="entire content available in multiple languages"
          showTitleText
          showNumberText
          showContentText
        />
        <CardFeature
          cardFeatureImageIconUrl="/imageicon1@2x.png"
          cardFeatureNumberText="03"
          cardFeatureTitleText="Competition regulations"
          cardFeatureDescriptionText="well-organised regulations, easy to upload and access"
          showNumberText
          showTitleText
          showContentText
        />
        <CardFeature
          cardFeatureImageIconUrl="/imageicon2@2x.png"
          cardFeatureNumberText="04"
          cardFeatureTitleText={`Rules & Changes`}
          cardFeatureDescriptionText="rules always up-to-date, amendments easy to track"
          showNumberText
          showTitleText
          showContentText
        />
        <CardFeature
          cardFeatureImageIconUrl="/imageicon3@2x.png"
          cardFeatureNumberText="05"
          cardFeatureTitleText={`Notes & Favourites`}
          cardFeatureDescriptionText="highlighing passages, adding personal notes, bookmarking favourites"
          showNumberText
          showTitleText
          showContentText
        />
        <CardFeature
          cardFeatureImageIconUrl="/imageicon4@2x.png"
          cardFeatureNumberText="06"
          cardFeatureTitleText="Marketing"
          cardFeatureDescriptionText="building users’ database and sending notifications"
          showNumberText
          showTitleText
          showContentText
        />
        <CardFeature
          cardFeatureImageIconUrl="/imageicon5@2x.png"
          cardFeatureNumberText="07"
          cardFeatureTitleText="Content features"
          cardFeatureDescriptionText="photo, audio, and video content available for download"
          showNumberText
          showTitleText
          showContentText
        />
        <CardFeature
          cardFeatureImageIconUrl="/imageicon6@2x.png"
          cardFeatureNumberText="08"
          cardFeatureTitleText="AI Assistant"
          cardFeatureDescriptionText="experience seamless support with our ai assistant"
          showNumberText
          showTitleText
          showContentText
        />
      </div>
    </section>
  );
};

export default ContainerFeaturesOverall;
