import { style } from '@vanilla-extract/css';

export const card = style({
  margin: "1rem",
  width: "24rem",
  height: "14rem",
  backgroundColor: "white",
  borderRadius: "1rem",
  padding: "1rem",
  boxShadow: "0 0 1rem rgba(0, 0, 0, 0.2)",
  ":hover": {
    boxShadow: "0 0 1rem rgba(0, 0, 0, 0.4)",
    transform: "translateY(-0.25rem)",
  },
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
});

export const header = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
});

export const body = style({
  flexGrow: 1,
});

export const button = style({
  width: 'fit-content',
  backgroundColor: '#3182ce',
  color: 'white',
  padding: ".5rem",
  borderRadius: ".4rem",
  border: "none",
  ":hover": {
    backgroundColor: '#2c5282',
    boxShadow: "0 0 1rem rgba(0, 0, 0, 0.4)",
  }
});