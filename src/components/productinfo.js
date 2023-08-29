import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import InfoIcon from '@mui/icons-material/Info';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function DescriptionText() {
  const content = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  );

  return (
    <Root>
      <Divider textAlign="left">
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <InfoIcon />
            <h3 style={{ marginLeft: '8px' }}>Description</h3>
        </div>
      </Divider>
      {content}
    </Root>
  );
}

export function ProductText() {
    const content = (
      <div>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
     Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
     Sed malesuada lobortis pretium.`}
      </div>
    );
  
    return (
      <Root>
        <Divider textAlign="left">
          <div style={{ display: 'flex', alignItems: 'center' }}>
              <LocalFireDepartmentIcon/>
              <h1 style={{ marginLeft: '8px' }}>NFT #12092</h1>
          </div>
        </Divider>
        {content}
      </Root>
    );
  }