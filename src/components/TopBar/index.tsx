import { createStyles, makeStyles } from '@mui/styles';
import { Brand } from 'components';
import LayoutContext from 'components/Layout/context';
import { Color, StyleSizes } from 'enuns';
import { useContext } from 'react';

const useStyles = makeStyles(() => createStyles({
  root: {
    position: 'sticky',
    top: 0,
    width: '100%',
    height: StyleSizes.MobileTopBarHeight,
    backgroundColor: Color.Primary,
    boxShadow: '0 2px 15px rgba(0, 0, 0, 0.2)',
    color: Color.PrimaryText,
    fill: Color.PrimaryText,
    minHeight: StyleSizes.MobileTopBarHeight,
    maxHeight: StyleSizes.MobileTopBarHeight,
    padding: StyleSizes.MobileSpace,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [`@media (min-width: ${StyleSizes.MinDesktopSize}px)`]: {
      minHeight: StyleSizes.DesktopTopBarHeight,
      maxHeight: StyleSizes.DesktopTopBarHeight,
      padding: StyleSizes.DesktopSpace,
    },
    zIndex: 99999,
  },
  brand: {
    height: `${StyleSizes.MobileTopBarHeight - (StyleSizes.MobileSpace * 2)}px`,
    [`@media (min-width: ${StyleSizes.MinDesktopSize}px)`]: {
      height: `${StyleSizes.DesktopTopBarHeight - (StyleSizes.DesktopSpace * 2)}px`,
    }
  },
}), { name: 'TopBar'})

const TopBar = () => {
  const classes = useStyles();
  const layoutContext = useContext(LayoutContext);
  return (
    <div
      className={classes.root}
    >
      <Brand
        height={
          layoutContext.isMobile ?
            StyleSizes.MobileTopBarHeight - (StyleSizes.MobileSpace * 2) :
            StyleSizes.DesktopTopBarHeight - (StyleSizes.DesktopSpace * 2)
        }
      />
      { layoutContext.topBarRightWidget || null }
    </div>
  )
}

export default TopBar;