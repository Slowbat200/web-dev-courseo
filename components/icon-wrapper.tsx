import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

export function schoolIcon(props: any) {
  return <SchoolIcon {...props} />;
}

export function htmlIcon(props: any) {
  return <HtmlIcon {...props} />;
}
export function cssIcon(props: any) {
  return <CssIcon {...props} />;
}
export function jsIcon(props: any) {
  return <JavascriptIcon {...props}/>
}

export function devIcon(props: any){
  return <DeveloperModeIcon {...props} />
}