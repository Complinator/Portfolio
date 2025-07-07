import Logo from "../widgets/Logo";
import "./Footer.css";

function Footer() {
    return(
        <div className="footer">
            <div className="footer-widgets">
                <Logo svgPath="./src/assets/Logos/Social/Linkedin.svg" text="/bsaldivia" link="https://www.linkedin.com/in/bsaldivia" />
                <Logo svgPath="./src/assets/Logos/Social/Github.svg" text="@Complinator" link="https://github.com/Complinator" />
                <Logo svgPath="./src/assets/Logos/Social/Email.svg" text="bssaldivia@gmail.com" link="mailto:bssaldivia@gmail.com?subject=Hello%20from%20your%20portfolio&body=Hi%20Benjamín,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0D%0A%0D%0ABest%20regards," />
            </div>
            <div className="footer-text">@2025 Benjamín Saldivia. All rights reserved</div>
        </div>
    );
}

export default Footer;