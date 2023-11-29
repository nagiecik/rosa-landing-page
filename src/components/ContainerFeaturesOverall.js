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
      />
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2rem]">
        <CardEnvironmentFeature
          cardIconUrl="/iconquestionmarkapp.svg"
          cardNumberText="01"
          cardTitleText={`Q&A for your rules`}
          cardDescriptionText="get quick answers to competition rule queries"
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
