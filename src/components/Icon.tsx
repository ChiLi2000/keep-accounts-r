import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name?: string
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
  const {name, children, ...rest} = props;
  return (
    <svg className="icon" {...rest}>
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  );
};

export default Icon;