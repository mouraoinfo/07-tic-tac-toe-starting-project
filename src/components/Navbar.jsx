import { useState } from 'react';


function Navbar() {
    const [showReadme, setShowReadme] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <a 
                        href="https:mourao.info" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="nav-link"
                    >
                        Meu site
                    </a>
                    <button 
                        className="nav-link"
                        onClick={() => setShowReadme(!showReadme)}
                    >
                        About Project
                    </button>
                </div>
            </nav>

            {showReadme && (
                <div className="readme-modal">
                    <div className="readme-content">
                        <button 
                            className="close-button"
                            onClick={() => setShowReadme(false)}
                        >
                            ×
                        </button>
                        <h1>React Tic-Tac-Toe Game</h1>
                        <p>Educational project built with React...</p>
                        {/* Add more README content here */}
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;

// Removed inline CSS. Styles are now in Navbar.css.