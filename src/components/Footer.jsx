import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-content">
                <li>React Practice Tic-Tac-Toe</li>
                <li className="version">Version Beta 1.0</li>
                <li>
                    <a 
                        href="https://mourao.info" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Created by mourao.info
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;