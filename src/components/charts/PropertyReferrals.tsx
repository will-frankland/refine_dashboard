import React from 'react';
import { Box, Stack, Typography } from '@pankod/refine-mui';
import { propertyReferralsInfo } from 'constants/index';

interface ProgressBarProps {
  title: string,
  percentage: number,
  color: string
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
  <Box width="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={16} fontWeight={500} color="#11142d">
        {title}
      </Typography>
      <Typography fontSize={16} fontWeight={500} color="#11142d">
        {percentage}
      </Typography>
    </Stack>
  </Box>
)

const PropertyReferrals = () => {
  return (
    <Box
      p={4}
      bgcolor="#FCFCFC"
      id="chart"
      minWidth={490}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142D">
        Property Referrals
      </Typography>
      <Stack my="20px" direction="column" gap={4}>

      </Stack>
    </Box>
  )
}

export default PropertyReferrals;
