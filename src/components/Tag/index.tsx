import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "components";
import { Color } from "enuns";
import { ReactNode } from "react";

const useStyles = makeStyles(() => createStyles({
  root: {
    position: 'relative',
    display: 'flex',
    borderRadius: 3,
    padding: 3,
    backgroundColor: Color.Primary,
    color: Color.PrimaryText,
  },
}), { name: 'Tag'})

export interface TagProps {
  children: ReactNode;
  className?: string;
}

const Tag = ({
  children,
  className,
}: TagProps) => {
  const classes = useStyles();
  return (
    <label
      className={`${classes.root} ${className || ''}`}
    >
      <Typography type="tag" color={Color.White}>
        { children }
      </Typography>
    </label>
  )
}

export default Tag;