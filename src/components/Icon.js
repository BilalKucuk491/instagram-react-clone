import SVG from "react-inlinesvg";
function Icon({ name, size = 16, ...props }) {
  return (
    <SVG
      // preProcessor={(code) =>
      //   code.replace(/fill=".*?"/g, 'fill="currentColor"')
      // }
      src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
      width={size}
      height={size}
      {...props}
    />
  );
}

export default Icon;
