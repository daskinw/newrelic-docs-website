import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const ApmIcon = (props) => (
  <SVG
    {...props}
    viewBox="0 0 16 16"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.52608 15 0.274022 11.9093 0.016441 8.00059L0 8V7L0.016375 7.00041C0.273466 3.0912 3.52574 0 7.5 0ZM9.99167 8.00072H5.00833C5.12217 11.4123 6.38138 14 7.5 14C8.61862 14 9.87784 11.4123 9.99167 8.00072ZM4.00768 8.00084L1.01897 8.00033C1.22309 10.6818 3.05425 12.9085 5.52739 13.6953C4.6653 12.4331 4.08048 10.3668 4.00768 8.00084ZM13.981 8.00033L10.9923 8.00084C10.9195 10.3668 10.3347 12.4331 9.47309 13.6955C11.9457 12.9085 13.7769 10.6818 13.981 8.00033ZM5.52691 1.30448L5.48768 1.31749C3.03436 2.11547 1.22154 4.33309 1.01889 7.00067L4.00765 7.00016C4.08031 4.63373 4.66518 2.56709 5.52691 1.30448ZM7.5 1C6.38127 1 5.12192 3.58821 5.0083 7.00028H9.9917C9.88121 3.68234 8.68734 1.14342 7.59288 1.00587L7.5 1ZM9.47261 1.30472L9.50735 1.35532C10.3503 2.62215 10.9207 4.66523 10.9923 7.00016L13.9811 7.00067C13.7774 4.31871 11.9461 2.09159 9.47261 1.30472Z"
    />
  </SVG>
);

ApmIcon.propTypes = {
  size: PropTypes.string,
};

export default ApmIcon;
