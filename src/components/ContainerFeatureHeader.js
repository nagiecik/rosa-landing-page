const ContainerFeatureHeader = ({
  featureHeaderLight = "All Provided",
  featureHeaderBold = "Features",
}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[24px] text-left text-77xl text-surfaces-default-surfaceprimary font-text-regular-headline">
      <div className="relative tracking-[-0.04em] leading-[96px] font-thin">
        {featureHeaderLight}
      </div>
      <div className="relative tracking-[-0.04em] leading-[96px] font-semibold">
        {featureHeaderBold}
      </div>
    </div>
  );
};

export default ContainerFeatureHeader;
