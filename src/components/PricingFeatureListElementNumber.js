const PricingFeatureListElementNumber = ({ listTextLeft, listTextRight }) => {
  return (
    <div className="flex flex-row items-center justify-start gap-[16px] text-left text-5xl text-surfaces-default-surfaceprimary font-text-regular-headline self-stretch">
      <div className="flex-1 relative leading-[40px] font-semibold">
        {listTextLeft}
      </div>
      <b className="relative text-21xl tracking-[-0.04em] leading-[56px] text-surfaces-default-surfacetertiary">
        {listTextRight}
      </b>
    </div>
  );
};

export default PricingFeatureListElementNumber;
