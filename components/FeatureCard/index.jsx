import React from 'react';
import { Card, Text } from '@mantine/core';
import classes from './index.module.css';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card shadow="md" radius="md" className={classes.card} padding="xl">
      {icon}
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>
    </Card>
  );
};

export default FeatureCard;
