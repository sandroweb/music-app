import { makeStyles } from "@mui/styles"
import { Color } from "enuns"
import { ReactNode } from "react"

export type TypographyTypes = 
  | 'title'
  | 'subTitle'
  | 'tag'
  | 'button'
  | 'smallLabel'
  | 'bigLabel'
  | 'text'

const useStyles = (color: Color) => makeStyles({
  color: {
    color,
  },
  '@global': {
    '.Typography-root': {
      
    },
    '.Typography-title': {
      fontSize: 32,
      fontWeight: 700,
      lineHeignt: '38px',
    },
    '.Typography-subTitle': {
      fontSize: 28,
      fontWeight: 500,
      lineHeight: '32px',
    },
    '.Typography-tag': {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: '18px',
    },
    '.Typography-button': {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '20px',
    },
    '.Typography-smallLabel': {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: '18px',
      fontStyle: 'italic',
    },
    '.Typography-bigLabel': {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '20px',
    },
    '.Typography-text': {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '18px',
    },
  }
})

export interface TypographyProps {
  type: TypographyTypes;
  color?: Color;
  children: ReactNode;
  className?: string;
}

const Typography = ({
  type,
  color,
  children,
  className,
}: TypographyProps) => {
  const classes = useStyles(color || Color.Black)();

  return (
    <div
      className={[
        'Typography-root',
        `Typography-${type}`,
        classes.color,
        className || '',
      ].join(' ')}
    >
      { children }
    </div>
  )
}

export default Typography;