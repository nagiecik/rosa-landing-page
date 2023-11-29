const ContainerHeader = ({
  containerHeaderLight,
  containerHeaderBold,
  containerDescription,
}) => {
  return (
    <div className="w-[1520px] flex flex-row items-center justify-between text-left text-77xl text-surfaces-default-surfaceprimary font-text-regular-headline">
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <div className="relative tracking-[-0.04em] leading-[96px] font-thin">
          {containerHeaderLight}
        </div>
        <div className="relative tracking-[-0.04em] leading-[96px] font-semibold">
          {containerHeaderBold}
        </div>
      </div>
      <div className="flex-1 relative text-5xl leading-[40px] inline-block max-w-[800px]">
        {containerDescription}
      </div>
    </div>
  );
};

export default ContainerHeader;
