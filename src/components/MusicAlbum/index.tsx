import { createStyles, makeStyles } from "@mui/styles";
import { Tag, Typography } from "components";
import LayoutContext from 'components/Layout/context';
import { Color, StyleSizes } from "enuns";
import IMusicAlbum from "interfaces/IMusicAlbum";
import { CSSProperties, useContext } from "react";

const useStyles = (
  isMobile: boolean,
  album: IMusicAlbum,
  size?: number,
) => {
  return makeStyles(() => createStyles({
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: isMobile ? StyleSizes.MobileSpace : StyleSizes.DesktopSpace,
      width: size || '100%',
      minWidth: size,
      maxWidth: size,
      overflow: 'hidden',
      backgroundColor: Color.Secondary,
      borderRadius: 25,
    },
    cover: {
      backgroundImage: `url(${album["im:image"][album["im:image"].length - 1].label})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      width: '100%',
      paddingTop: '100%',
      position: 'relative',
      borderRadius: 25,
    },
    info: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      marginTop: (isMobile ? StyleSizes.MobileSpace : StyleSizes.DesktopSpace),
    },
    leftInfo: {
      overflow: 'hidden',
      color: Color.SecondaryText,
    },
    rightInfo: {
      paddingLeft: (isMobile ? StyleSizes.MobileSpace : StyleSizes.DesktopSpace) / 2,
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    name: {
      display: 'block',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      maxWidth: size,
      width: '100%',
    },
    artist: {
      // display: 'block',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      maxWidth: size,
      width: '100%',
      marginTop: (isMobile ? StyleSizes.MobileSpace : StyleSizes.DesktopSpace) / 2,
    },
    price: {
      marginTop: (isMobile ? StyleSizes.MobileSpace : StyleSizes.DesktopSpace) / 2,
    }
  }), { name: 'MusicAlbum'})
}

export interface MusicAlbumProps {
  album: IMusicAlbum;
  className?: string;
  style?: CSSProperties;
  size?: number;
}

const MusicAlbum = ({
  album,
  className,
  style,
  size,
}: MusicAlbumProps) => {
  const layoutContext = useContext(LayoutContext);
  const classes = useStyles(layoutContext.isMobile, album, size)();

  return (
    <div
      className={`${classes.root} ${className || ''}`}
      style={style || {}}
    >
      <div className={classes.cover} />
      <div className={classes.info}>
        <div className={classes.leftInfo}>
          <Typography type="bigLabel" color={Color.White} className={classes.name}>
            {album["im:name"].label}
          </Typography>
          <Typography type="smallLabel" color={Color.White} className={classes.artist}>
            {album["im:artist"].label}
          </Typography>
        </div>
        <div className={classes.rightInfo}>
          <Tag>
            {album["im:price"].label}
          </Tag>
        </div>
      </div>
    </div>
  )
}

export default MusicAlbum;