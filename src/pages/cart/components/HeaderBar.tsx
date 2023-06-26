import React from 'react';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ButtonBase from '@mui/material/ButtonBase';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  return (
    <div className={`${props.className ?? ''}`}>
      <ButtonBase onClick={() => navigate(-1)}>
        <ArrowBackIcon sx={{ fontSize: "2.5rem", mr: 1.5 }} />
      </ButtonBase>

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