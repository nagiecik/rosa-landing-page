const Button = ({
  buttonIconLeftUrl,
  buttonText = "Button Text",
  buttonIconRightUrl,
  showIconLeft = true,
  showIconRight = true,
  showButtonText = true,
}) => {
  return (
    <div className="rounded-spacing-16 box-border flex flex-row items-center justify-center py-button-padding-top-bottom px-button-padding-left-right gap-[16px] text-center text-base text-surfaces-default-surfaceprimary font-text-regular-headline self-stretch border-[2px] border-solid border-surfaces-default-surfaceprimary">
      {showIconLeft && (
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src={buttonIconLeftUrl}
        />
      )}
      {showButtonText && (
        <b className="relative leading-[32px]">{buttonText}</b>
      )}
      {showIconRight && (
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src={buttonIconRightUrl}
        />
      )}
    </div>
  );
};

export default Button;
