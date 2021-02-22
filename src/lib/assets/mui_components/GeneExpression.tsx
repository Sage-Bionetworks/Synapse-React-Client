import * as React from 'react'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const GeneExpression = (props:SvgIconProps) => {
  const { fill, style } = props
  return (
    <SvgIcon style={style} className={"icon-gene-expression"}>
      <line x1="3.10171" y1="16.5117" x2="4.88551" y2="17.9982" stroke={fill} strokeWidth="0.35" strokeLinecap="round"/>
      <line x1="2.89646" y1="14.5958" x2="4.68026" y2="16.0823" stroke={fill} strokeWidth="0.35" strokeLinecap="round"/>
      <line x1="2.96488" y1="12.8168" x2="4.74867" y2="14.3033" stroke={fill} strokeWidth="0.35" strokeLinecap="round"/>
      <line x1="3.99118" y1="12.0642" x2="5.77497" y2="13.5507" stroke={fill} strokeWidth="0.35" strokeLinecap="round"/>
      <path d="M13.6023 6.21536L15.8156 8.02017" stroke={fill} strokeWidth="0.35" strokeLinecap="round"/>
      <path d="M15.4983 6.23886C15.5726 6.30075 15.6829 6.29074 15.7448 6.2165C15.8067 6.14227 15.7967 6.03192 15.7224 5.97003L15.4983 6.23886ZM13.4902 4.56481L15.4983 6.23886L15.7224 5.97003L13.7144 4.29597L13.4902 4.56481Z" fill={fill}/>
      <line x1="13.9124" y1="3.03251" x2="15.6962" y2="4.51901" stroke={fill} strokeWidth="0.35" strokeLinecap="round"/>
      <path d="M16.5929 3.70731C16.6671 3.76918 16.7775 3.75915 16.8393 3.6849C16.9012 3.61065 16.8912 3.5003 16.8169 3.43843L16.5929 3.70731ZM15.0201 2.39671L16.5929 3.70731L16.8169 3.43843L15.2442 2.12783L15.0201 2.39671Z" fill={fill}/>
      <line x1="14.7881" y1="10.4669" x2="13.0043" y2="8.98044" stroke={fill} strokeWidth="0.35" strokeLinecap="round"/>
      <line x1="14.2407" y1="11.8353" x2="12.4569" y2="10.3488" stroke={fill} strokeWidth="0.35" strokeLinecap="round"/>
      <line x1="13.5565" y1="12.9301" x2="11.7727" y2="11.4436" stroke={fill} strokeWidth="0.35" strokeLinecap="round"/>
      <path d="M12.4345 13.5919L10.6144 12.0812" stroke={fill} strokeWidth="0.35" strokeLinecap="round"/>
      <path d="M10.4501 13.4208L8.69847 12.0812" stroke={fill} strokeWidth="0.35" strokeLinecap="round"/>
      <path d="M3.74477 17.2183C5.40689 20.2027 4.0325 22.1489 3.11047 22.8347C2.96101 22.9458 2.75912 22.9308 2.60797 22.8219C2.32274 22.6166 2.34584 22.1783 2.58903 21.9246C3.83212 20.6275 3.41478 18.3253 2.99213 17.2183C1.93063 14.7277 2.09731 12.7366 2.72932 12.1208C4.06356 10.8208 6.8808 11.9042 7.95276 12.3603C11.8939 13.8382 13.0844 12.9077 13.8029 12.1208C14.6924 11.2313 14.0538 8.57427 13.5976 7.1602C12.6397 4.91595 12.979 3.19269 13.6027 2.64531C15.0391 1.38482 18.5816 2.30881 19.5664 2.59919C19.7222 2.64513 19.824 2.78817 19.8241 2.95061C22.8635 3.73037 21.5236 3.38669 19.8241 2.95072L18.7085 2.66455C13.5368 1.36317 13.6457 5.00052 14.3503 6.98915C15.5819 9.53446 15.7543 11.4024 15.0016 12.8393C13.4279 14.8235 9.68613 13.7288 7.7817 12.8393C2.69107 11.1698 2.96932 15.063 3.74477 17.2183Z" fill={fill}/>
    </SvgIcon>
  );
}

export default GeneExpression