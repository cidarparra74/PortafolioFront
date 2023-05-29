import { Typography, Link, Container } from "@material-ui/core";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "./styles/Footer.css";
interface FooterProps {
  children: React.ReactNode;
}
function Footer( {children} : FooterProps) {
  return (

    <Container>
        {children}
      <footer className="footer">
        <Container maxWidth="lg">
          <div className="footer-content">
            <AccountBalanceIcon className="footer-icon" />
            <Typography
              variant="body2"
              color="textSecondary"
              className="footer-text">
              <Link href="#" color="inherit">
                Texto del pie de página
              </Link>
            </Typography>
          </div>
        </Container>
      </footer>
    </Container>
     
  );
}

export default Footer;

