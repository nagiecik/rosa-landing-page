import { useMemo } from "react";

const PricingFeatureListElementNumber = ({
  listTextLeft,
  listTextRight,
  containerdivfeatureListElGap,
  textspanColor,
  textspanFontSize,
  textspanLineHeight,
  texth4FontSize,
  texth4LineHeight,
  texth4Margin,
  texth4FontWeight,
}) => {
  const containerdivfeatureListEle1Style = useMemo(() => {
    return {
      gap: containerdivfeatureListElGap,
    };
  }, [containerdivfeatureListElGap]);

  const textspan3Style = useMemo(() => {
    return {
      color: textspanColor,
      fontSize: textspanFontSize,
      lineHeight: textspanLineHeight,
    };
  }, [textspanColor, textspanFontSize, textspanLineHeight]);

  const texth4Style = useMemo(() => {
    return {
      fontSize: texth4FontSize,
      lineHeight: texth4LineHeight,
      margin: texth4Margin,
      fontWeight: texth4FontWeight,
    };
  }, [texth4FontSize, texth4LineHeight, texth4Margin, texth4FontWeight]);

  return (
    <div
      className="flex flex-row items-center justify-start gap-[16px] text-left text-5xl text-surfaces-default-surfaceprimary font-text-regular-headline self-stretch"
      style={containerdivfeatureListEle1Style}
    >
      <div
        className="flex-1 relative leading-[40px] font-semibold"
        style={textspan3Style}
      >
        {listTextLeft}
      </div>
      <b
        className="relative text-21xl tracking-[-0.04em] leading-[56px] text-surfaces-default-surfacetertiary"
        style={texth4Style}
      >
        {listTextRight}
      </b>
    </div>
  );
};

export default PricingFeatureListElementNumber;
