import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, Typography, Stack } from '@pankod/refine-mui';
import { ArrowCircleUpRounded } from '@mui/icons-material';
import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config';

const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#FCFCFC"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
      >

    </Box>
  )
}

export default TotalRevenue;
