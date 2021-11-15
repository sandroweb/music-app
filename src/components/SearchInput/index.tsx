import { createStyles, makeStyles } from "@mui/styles";
import LayoutContext from 'components/Layout/context';
import { Color, StyleSizes } from "enuns";
import { useContext, useEffect, useState } from "react";
import { FaSyncAlt } from 'react-icons/fa';
import { useDebounce } from "use-debounce/lib";
import { getLigthenColor } from 'utils/ColorUtils';

const useStyles = (isMobile: boolean) => makeStyles(() => createStyles({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    WebkitAppearance: 'none',
    flex: 1,
    border: 'none',
    borderRadius: 5,
    outline: 'none',
    backgroundColor: getLigthenColor(Color.Primary),
    color: Color.PrimaryText,
    transition: 'all 0.3s ease',
    lineHeight: '32px',
    padding: `0 ${(isMobile ? StyleSizes.MobileSpace : StyleSizes.DesktopSpace) / 2}px`,
    '&::placeholder': {
      color: Color.PrimaryText,
    },
    '&:focus, &:hover:not(:disabled)': {
      backgroundColor: Color.White,
      color: Color.Primary,
      '&::placeholder': {
        color: Color.Primary,
      },
    },
  },
  disabledInput: {
    opacity: 0.5
  },
  syncIcon: {
    marginRight: (isMobile ? StyleSizes.MobileSpace : StyleSizes.DesktopSpace) / 2,
  }
}), { name: 'SearchInput'})

export interface SearchInputProps {
  disabled?: boolean;
  onSearch?: (text: string) => void;
  className?: string;
  loading?: boolean;
}

const SearchInput = ({
  disabled,
  onSearch,
  className,
  loading,
}: SearchInputProps) => {
  const layoutContext = useContext(LayoutContext);
  const classes = useStyles(layoutContext.isMobile)();
  const [value, setValue] = useState<string>();
  const searchText = useDebounce(value, 500);

  useEffect(() => {
    if (
      !!onSearch &&
      typeof value === 'string' &&
      typeof searchText[0] === 'string' &&
      value.toLowerCase().trim() === searchText[0].toLowerCase().trim()) {
      onSearch(searchText[0]);
    }
  }, [value, searchText, onSearch])

  return (
    <div className={`${classes.root} ${className || ''}`}>
      { loading && <FaSyncAlt className={`${classes.syncIcon} animation-rotate`} /> }
      <input
        onChange={e => setValue(e.target.value)}
        type="text"
        name="text"
        placeholder="Search album ..."
        className={[
          classes.input,
          !!disabled ? classes.disabledInput : ''
        ].join(' ')}
        disabled={disabled || loading}
      />
    </div>
  )
}

export default SearchInput;