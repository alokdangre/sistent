import { DEFAULT_FILL_NONE, DEFAULT_HEIGHT, DEFAULT_WIDTH } from '../../constants/constants';
import { IconProps } from '../types';

export const ErrorOutlineIcon = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  fill = DEFAULT_FILL_NONE,
  ...props
}: IconProps): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-testid="error-outline-icon-svg"
      {...props}
    >
      <path
        d="M11 15h2v2h-2zm0-8h2v6h-2zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill={fill}
      />
    </svg>
  );
};

export default ErrorOutlineIcon;
