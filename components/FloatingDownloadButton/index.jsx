import { IconDownload } from '@tabler/icons-react';
import { ActionIcon, Affix } from '@mantine/core';

const FloatingDownloadButton = ({ onClick }) => {
  return (
    <Affix position={{ bottom: 120, right: 40 }}>
      <ActionIcon color="blue" radius="xl" size={60} onClick={onClick}>
        <IconDownload stroke={1.5} size={30} />
      </ActionIcon>
    </Affix>
  );
};

export default FloatingDownloadButton;
