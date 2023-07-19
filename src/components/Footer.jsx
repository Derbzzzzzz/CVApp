import "../styles/Footer.css"
import logo from "../assets/github-mark-black (1).png"
function Footer() {

  return (
    <>
      <footer>
            <div className="footer-copyright">Copyright</div>
            <div className="footer-logo">
                <span className="material-symbols-outlined">copyright</span>
            </div>
            <div className="footer-info">2022 Derbzzzzzz</div>
            <a href="https://github.com/Derbzzzzzz" target="_blank" rel="noopener noreferrer">
                <img src={logo} className="footer-github"/>
            </a>
        </footer>
    </>
  )
}

export default Footer