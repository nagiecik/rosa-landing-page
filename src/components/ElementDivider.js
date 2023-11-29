import { useMemo } from "react";

const ElementDivider = ({
  elementDividerUrl,
  propAlignSelf,
  propMaxWidth,
  propOverflow,
  propWidth,
}) => {
  const imagedividerIconStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      maxWidth: propMaxWidth,
      overflow: propOverflow,
      width: propWidth,
    };
  }, [propAlignSelf, propMaxWidth, propOverflow, propWidth]);

  return (
    <img
      className="self-stretch max-w-full overflow-hidden max-h-full object-cover"
      alt=""
      src={elementDividerUrl}
      style={imagedividerIconStyle}
    />
  );
};

export default ElementDivider;
