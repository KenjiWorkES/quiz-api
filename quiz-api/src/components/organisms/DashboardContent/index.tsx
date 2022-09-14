import React from 'react';
import { DashboardHeader } from '@/components/molecules';
import { Container } from '@chakra-ui/react';

const DashboardContext: React.FC = () => {
  return (
    <Container w="100%" centerContent>
      <DashboardHeader />
    </Container>
  );
};

export default DashboardContext;
