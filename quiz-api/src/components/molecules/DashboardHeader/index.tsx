import React from 'react';
import { DashboardImage, DashboardTitle } from '@/components/atoms';
import { Box } from '@chakra-ui/react';

const DashboardHeader: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      w="100vw"
      position="relative"
      marginBottom={['250', '300']}
    >
      <Box bg="purple" w="100%" h="300px"></Box>
      <Box
        display="flex"
        w={['100%', '50%']}
        flexDirection={['column', 'row']}
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="160"
        textAlign={['center', 'left']}
      >
        <DashboardImage />
        <DashboardTitle />
      </Box>
    </Box>
  );
};

export default DashboardHeader;
