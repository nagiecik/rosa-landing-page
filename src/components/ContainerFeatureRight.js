const ContainerFeatureRight = ({
  featureMockupImage,
  featureHeaderLight,
  featureHeaderBold,
}) => {
  return (
    <div className="bg-texts-textprimary w-[1920px] flex flex-row items-start justify-center pt-spacing-256 px-spacing-200 pb-spacing-200 box-border gap-[128px] text-left text-77xl text-surfaces-default-surfaceprimary font-text-regular-headline">
      <img
        className="relative rounded-45xl w-[696px] h-[1181px] object-cover"
        alt=""
        src={featureMockupImage}
      />
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
          treamline access to crucial resources with the Documents Selection
          feature. Organize and display a wide range of file types, from PDFs to
          documents, within dedicated sections of your app. Whether it's
          competition rules, equipment specifications, or instructional
          materials, ROSA empowers your organization to provide a comprehensive
          library of documents, making it easy for users to find and download
          the information they need, enhancing their engagement and knowledge.
        </div>
      </div>
    </div>
  );
};

export default ContainerFeatureRight;
