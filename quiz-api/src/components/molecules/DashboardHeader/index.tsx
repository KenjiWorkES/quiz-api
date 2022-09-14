import React from 'react';
import { DashboardImage, DashboardTitle } from '@/components/atoms';
import { Box } from '@chakra-ui/react';

const DashboardHeader: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box bg="purple"></Box>
      <Box display="flex">
        <DashboardImage />
        <DashboardTitle />
      </Box>
    </Box>
  );
};

export default DashboardHeader;
