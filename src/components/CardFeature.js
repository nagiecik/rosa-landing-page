const CardFeature = ({
  cardFeatureImageIconUrl,
  cardFeatureNumberText = "08",
  cardFeatureTitleText = "AI Assistant",
  cardFeatureDescriptionText = "experience seamless support with our ai assistant",
  showNumberText = true,
  showTitleText = true,
  showContentText = true,
}) => {
  return (
    <div className="flex-1 rounded-spacing-16 bg-texts-textprimary shadow-[-176px_226px_80px_rgba(23,_31,_78,_0),_-113px_144px_73px_rgba(23,_31,_78,_0.01),_-63px_81px_62px_rgba(23,_31,_78,_0.04),_-28px_36px_46px_rgba(23,_31,_78,_0.07),_-7px_9px_25px_rgba(23,_31,_78,_0.08)] flex flex-col items-end justify-start pt-spacing-24 px-spacing-24 pb-spacing-32 box-border gap-[1rem] min-w-[22.25rem] text-left text-[1.5rem] text-surfaces-default-surfacetertiary font-text-regular-headline">
      <img
        className="rounded-spacing-16 max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={cardFeatureImageIconUrl}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
        {showNumberText && (
          <h6 className="m-0 self-stretch relative text-inherit tracking-[-0.04em] leading-[2.5rem] font-bold font-inherit">
            {cardFeatureNumberText}
          </h6>
        )}
        {showTitleText && (
          <h6 className="m-0 self-stretch relative text-inherit tracking-[-0.04em] leading-[2.5rem] font-bold font-inherit text-surfaces-default-surfaceprimary">
            {cardFeatureTitleText}
          </h6>
        )}
        {showContentText && (
          <p className="m-0 self-stretch relative text-[1rem] leading-[2rem] font-semibold text-texts-textaccentsubtle1">
            {cardFeatureDescriptionText}
          </p>
        )}
      </div>
    </div>
  );
};

export default CardFeature;
