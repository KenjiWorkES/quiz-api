import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useStyleConfig,
} from '@chakra-ui/react';
import { defaultTheme } from '@/themes';

const DashboardForm: React.FC = () => {
  return (
    <Box as="form">
      <FormControl color={defaultTheme.colors.default.black} mb="5">
        <FormLabel>Old Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <FormControl mb="5">
        <FormLabel>New Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button variant="solid">Change Password</Button>
    </Box>
  );
};

export default DashboardForm;
