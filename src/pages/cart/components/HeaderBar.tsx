import React from 'react';
import { Box } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';

const TypographyComponent = (props: any) => {
  return (
    <Typography
      variant="h5"
      noWrap
      component="a"
      href=""
      sx={{
        mr: 2,
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        color: props.color,
        textDecoration: 'none',
        fontSize: '2.3rem',
      }}
    >
      {props.children}
    </Typography>
  )
}

interface HeaderBarProps {
  className?: string;
}

function HeaderBar(props: HeaderBarProps) {
  return (
    <div className={`${props.className ?? ''}`}>
      <TypographyComponent color="inherit">
        ROCKNEST
        <div style={{ display: 'inline-block', margin: '0 0.75rem' }} />
        <TypographyComponent color="orangered">
          STORE
        </TypographyComponent>
      </TypographyComponent>
    </div>
  );
}

export default HeaderBar;