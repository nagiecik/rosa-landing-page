const CardEnvironmentFeature = ({
  cardIconUrl,
  cardNumberText = "01",
  cardTitleText = "Title Text",
  cardDescriptionText = "Content Text",
}) => {
  return (
    <div className="rounded-spacing-16 bg-texts-textprimary shadow-[-176px_226px_80px_rgba(23,_31,_78,_0),_-113px_144px_73px_rgba(23,_31,_78,_0.01),_-63px_81px_62px_rgba(23,_31,_78,_0.04),_-28px_36px_46px_rgba(23,_31,_78,_0.07),_-7px_9px_25px_rgba(23,_31,_78,_0.08)] flex flex-col items-end justify-start pt-spacing-24 px-spacing-24 pb-spacing-32 box-border gap-[16px] min-w-[356px] text-left text-5xl text-surfaces-default-surfacetertiary font-text-regular-headline flex-1">
      <div className="rounded-spacing-16 bg-surfaces-default-surfaceprimary flex flex-row items-end justify-start p-2">
        <img
          className="relative w-12 h-12 overflow-hidden shrink-0"
          alt=""
          src={cardIconUrl}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
        <b className="self-stretch relative tracking-[-0.04em] leading-[40px]">
          {cardNumberText}
        </b>
        <b className="self-stretch relative tracking-[-0.04em] leading-[40px] text-surfaces-default-surfaceprimary">
          {cardTitleText}
        </b>
        <div className="self-stretch relative text-base leading-[32px] font-semibold text-texts-textaccentsubtle1">
          {cardDescriptionText}
        </div>
      </div>
    </div>
  );
};

export default CardEnvironmentFeature;
