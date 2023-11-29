const PricingFeatureListElementPerk = ({ listIconLeftUrl, listText }) => {
  return (
    <div className="flex flex-row items-center justify-start gap-[16px] text-left text-5xl text-surfaces-default-surfaceprimary font-text-regular-headline self-stretch">
      <img className="relative w-8 h-8" alt="" src={listIconLeftUrl} />
      <div className="flex-1 relative leading-[40px] font-semibold">
        {listText}
      </div>
    </div>
  );
};

export default PricingFeatureListElementPerk;
