import React, { useEffect } from 'react';

export interface VizProps extends JsApi.v260.VizCreateOptions {
  embedDomElement: HTMLElement;
  shareLink: string;
};

declare global {
  interface Window { tableau: any }
}

export const Viz: React.FC<VizProps> = ({ 
  embedDomElement, 
  shareLink,
  children,
  ...vizOptions
}) => {

  useEffect(() => {
    console.log(`Embedding viz at ${shareLink}...`)
    const viz = embedViz();
    return () => {
      console.log('Cleaning up old viz...')
      viz.dispose();
    };
  }, [embedDomElement, shareLink, vizOptions])

  const embedViz = () => {
    const viz: JsApi.v260.Viz = new window.tableau.Viz(embedDomElement, shareLink, vizOptions);
    return viz;
  }

  return null;

}