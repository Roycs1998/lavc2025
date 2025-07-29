import React from 'react';

import { Button, type ButtonProps, styled } from '@mui/material';
import { darken } from '@mui/material/styles';

interface CustomButtonProps extends ButtonProps {
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  size?: 'small' | 'medium' | 'large';
  width?: string | number;

  mode?: 'default' | 'link' | 'download';
  href?: string;
  newTab?: boolean;
  fileName?: string;
}

const sizeStyles = {
  small: { height: 40, fontSize: '13px' },
  medium: { height: 55, fontSize: '15px' },
  large: { height: 70, fontSize: '18px' },
};

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) =>
    !['bgColor', 'textColor', 'hoverBgColor', 'hoverTextColor', 'width'].includes(prop as string),
})<CustomButtonProps>(
  ({ theme, bgColor, textColor, hoverBgColor, hoverTextColor, size = 'medium', disabled, width }) => {
    const baseColor = bgColor || '#3a3480';
    const hoverColor = hoverBgColor || darken(baseColor, 0.2);
    const activeColor = darken(baseColor, 0.3);
    const { height, fontSize } = sizeStyles[size];

    const disabledBg = theme.palette.action.disabledBackground;
    const disabledColor = theme.palette.action.disabled;

    return {
      width: width || '100%',
      marginTop: '0px',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      height,
      fontSize,
      backgroundColor: disabled ? disabledBg : baseColor,
      color: disabled ? disabledColor : textColor || 'var(--letter-color)',
      pointerEvents: disabled ? 'none' : 'auto',
      boxShadow: disabled ? 'none' : '0px 2px 6px rgba(0, 0, 0, 0.31)',

      '&:hover': {
        backgroundColor: disabled ? disabledBg : `${hoverColor} !important`,
        color: disabled ? disabledColor : hoverTextColor || textColor || 'var(--letter-color)',
        boxShadow: disabled ? 'none' : '0px 4px 12px rgba(15, 10, 10, 0.15)',
      },
      '&:active': {
        backgroundColor: disabled ? disabledBg : `${activeColor} !important`,
      },
    };
  }
);

const CustomButton: React.FC<CustomButtonProps> = ({
  bgColor,
  textColor,
  hoverBgColor,
  hoverTextColor,
  size,
  width,
  className,
  children,
  mode = 'default',
  href,
  newTab = false,
  fileName,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (mode === 'link' && href) {
      window.open(href, newTab ? '_blank' : '_self');
    } else if (mode === 'download' && href) {
      if (newTab) {
        window.open(href, '_blank');
      } else {
        const link = document.createElement('a');
        
        link.href = href;
        if (fileName) link.download = fileName;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
    
    if (onClick) onClick(e);
  };

  return (
    <StyledButton
      bgColor={bgColor}
      textColor={textColor}
      hoverBgColor={hoverBgColor}
      hoverTextColor={hoverTextColor}
      size={size}
      width={width}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
