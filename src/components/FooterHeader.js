const FooterHeader = ({
  footerHeaderTitle = "All Provided",
  footerHeaderMail = "Features",
}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[24px] text-left text-61xl text-surfaces-default-surfaceprimary font-text-regular-headline">
      <div className="relative tracking-[-0.04em] leading-[96px] font-thin">
        {footerHeaderTitle}
      </div>
      <div className="relative tracking-[-0.04em] leading-[96px] font-semibold">
        {footerHeaderMail}
      </div>
    </div>
  );
};

export default FooterHeader;
