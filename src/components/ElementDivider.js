const ElementDivider = ({ elementDividerUrl }) => {
  return (
    <img
      className="self-stretch max-w-full overflow-hidden max-h-full object-cover"
      alt=""
      src={elementDividerUrl}
    />
  );
};

export default ElementDivider;
