import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import { Dispatch, SetStateAction } from "react";

const disclosureAnimateIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(-70px);
}
25% {
  opacity: 0;
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

const disclosureStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    placeItems: "center",
    padding: "2rem",
    zIndex: 1,
  },
  dismissButton: {
    background: "#004D49",
    border: "none",
    display: "block",
    borderRadius: "3px",
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: "16px",
    color: "white",
    cursor: "pointer",
    padding: "8px",
    width: "100%",
    // textDecoration: "underline",
  },
  container: {
    animation: `${disclosureAnimateIn} 0.3s cubic-bezier(0.230, 1.000, 0.320, 1.000)`,
    backgroundColor: "#f3f1ec",
    borderRadius: "10px",
    boxShadow: "0 2px 60px #7c7c7c8c",
    margin: "0 auto",
    maxHeight: "calc(100% - 4rem)",
    maxWidth: "500px",
    padding: "2rem",
    // border: "1px solid #f2f2f2",
  },
};

export const Disclosure = ({
  setShowDisclosure,
}: {
  setShowDisclosure: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Box sx={disclosureStyles.overlay}>
      <Box sx={disclosureStyles.container} onAnimationEnd={() => {}}>
        <Typography
          variant="h6"
          marginBottom="1rem"
          fontFamily="'Lora', serif"
          sx={{
            borderBottom: "1px solid #E3E3E3",
          }}
        >
          About this calculation
        </Typography>
        <Box>
          <Typography fontSize="0.9rem" color="#323940">
            {
              "Your home equity and home value are estimates based on data about your home and the market currently available. We use a third party data source, "
            }
            <a href="https://estated.com" target="_blank" rel="noreferrer">
              Estated
            </a>
            {
              ", to estimate your total home value. Recent data about your home, including home renovations, expansions, and repairs may not be reflected. This estimate is not a formal appraisal or substitue for the expertise of a real estate agent or a professional apprasier. These numbers are for estimation and for simulation purposes only."
            }
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" marginTop="1rem">
          <button style={disclosureStyles.dismissButton} onClick={() => setShowDisclosure(false)}>
            Dismiss
          </button>
        </Box>
      </Box>
    </Box>
  );
};
