import Logo from "../widgets/Logo";
import "./Footer.css";

function Footer() {
    return(
        <div className="footer">
            <div className="footer-widgets">
                <Logo svgPath="./src/assets/Logos/Social/Linkedin.svg" text="/bsaldivia" link="https://www.linkedin.com/in/bsaldivia" />
                <Logo svgPath="./src/assets/Logos/Social/Github.svg" text="@Complinator" link="https://github.com/Complinator" />
                <Logo svgPath="./src/assets/Logos/Social/Email.svg" text="bssaldivia@gmail.com" link="https://github.com/Complinator" />
            </div>
            <div className="footer-text">@2025 Benjamín Saldivia. All rights reserved</div>
        </div>
    );
}

export default Footer;