const ContainerFeatureLeft = ({
  featureHeaderLight,
  featureHeaderBold,
  featureParagraphText,
  featureMockupImageUrl,
}) => {
  return (
    <div className="bg-texts-textprimary w-[1920px] flex flex-row items-start justify-center pt-spacing-256 px-spacing-200 pb-spacing-200 box-border gap-[128px] text-left text-77xl text-surfaces-default-surfaceprimary font-text-regular-headline">
      <div className="flex-1 h-[528px] flex flex-col items-start justify-start gap-[32px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="relative tracking-[-0.04em] leading-[96px] font-thin">
            {featureHeaderLight}
          </div>
          <div className="relative tracking-[-0.04em] leading-[96px] font-semibold">
            {featureHeaderBold}
          </div>
        </div>
        <div className="self-stretch relative text-5xl leading-[40px]">
          {featureParagraphText}
        </div>
      </div>
      <img
        className="relative rounded-spacing-64 w-[696px] h-[1181px] object-cover"
        alt=""
        src={featureMockupImageUrl}
      />
    </div>
  );
};

export default ContainerFeatureLeft;
