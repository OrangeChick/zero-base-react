export const Icon = (props) => {
  const style = {
    filter:
      'brightness(0) saturate(100%) invert(83%) sepia(2%) saturate(925%) hue-rotate(196deg) brightness(85%) contrast(88%)',
  };

  const path = {
    upload: '../assets/icons/type=up-arrow.svg',
    uploading: '../assets/icons/type=spinner-animate.svg',
    complete: '../assets/icons/type=check-mark.svg',
    failed: '../assets/icons/type=cross.svg',
    disabled: '../assets/icons/type=not-allowed.svg',
  };

  return (
    <img
      src={path[props.type]}
      style={props.type === 'disabled' ? style : {}}
    ></img>
  );
};
