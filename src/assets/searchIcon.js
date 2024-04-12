import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SearchIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="none"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.74 13c3.553 0 6.434-2.686 6.434-6s-2.881-6-6.435-6-6.435 2.686-6.435 6 2.881 6 6.435 6ZM12.565 11.5 16.32 15"
    />
  </Svg>
);
export default SearchIcon;
