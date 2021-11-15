import { makeStyles } from "@mui/styles";
import LayoutContext from 'components/Layout/context';
import { StyleSizes } from "enuns";
import { FunctionComponent, ReactNode, useContext, useMemo } from "react";

const useStyles = () => {
  let xsSizes: any = {};
  let smSizes: any = {};
  let mdSizes: any = {};
  let lgSizes: any = {};
  let xlSizes: any = {};
  const totalColumns = 12;
  Array.from(Array(totalColumns).keys()).forEach(columnIndex => {
    const column: number = columnIndex + 1;
    const sizeBase = { width: `${(100 / totalColumns) * column}%` };
    xsSizes[`.Grid-xs-${column}`] = { ...sizeBase };
    smSizes['@media (min-width: 600px)'] = {
      ...(smSizes['@media (min-width: 600px)'] || {}),
      [`.Grid-sm-${column}`]: { ...sizeBase },
    }
    mdSizes['@media (min-width: 900px)'] = {
      ...(mdSizes['@media (min-width: 900px)'] || {}),
      [`.Grid-md-${column}`]: { ...sizeBase },
    }
    lgSizes['@media (min-width: 1200px)'] = {
      ...(lgSizes['@media (min-width: 1200px)'] || {}),
      [`.Grid-lg-${column}`]: { ...sizeBase },
    }
    xlSizes['@media (min-width: 1536px)'] = {
      ...(xlSizes['@media (min-width: 1536px)'] || {}),
      [`.Grid-xl-${column}`]: { ...sizeBase },
    }
  })
  return makeStyles({
    '@global': {
      '.Grid-root': {
        display: 'flex',
        boxSizing: 'border-box',
      },
      '.Grid-container': {
        padding: StyleSizes.MobileSpace,
        flexWrap: 'wrap',
        width: '100%',
      },
      '.Grid-desktop-container': {
        padding: StyleSizes.DesktopSpace,
        flexWrap: 'wrap',
      },
      '.Grid-item': {
        padding: StyleSizes.MobileSpace,
      },
      '.Grid-desktop-item': {
        padding: StyleSizes.DesktopSpace,
      },
      ...xsSizes,
      ...smSizes,
      ...mdSizes,
      ...lgSizes,
      ...xlSizes,
    }
  })
}

export type GridColumnType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps {
  container?: boolean;
  xs?: GridColumnType;
  sm?: GridColumnType;
  md?: GridColumnType;
  lg?: GridColumnType;
  xl?: GridColumnType;
  children: ReactNode;
}

const Grid: FunctionComponent<GridProps> = ({
  container,
  xs,
  sm,
  md,
  lg,
  xl,
  children,
}) => {
  const layoutContext = useContext(LayoutContext);
  useStyles()();

  const rootClassName = useMemo<string>(() => {
    return [
      'Grid-root',
      `Grid-${!layoutContext.isMobile ? 'desktop-' : ''}${!!container ? 'container' : 'item'}`,
      `Grid-xs-${xs || 12}`,
      sm && `Grid-sm-${sm}`,
      md && `Grid-md-${md}`,
      lg && `Grid-lg-${lg}`,
      xl && `Grid-xl-${xl}`,
    ].join(' ');
  }, [container, xs, sm, md, lg, xl, layoutContext])

  return (
    <div className={rootClassName}>
      { children }
    </div>
  )
}

export default Grid;