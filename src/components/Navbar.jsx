import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/Navbar.css';

function Navbar() {
    const [showReadme, setShowReadme] = useState(false);
    const [readmeContent, setReadmeContent] = useState('');

    useEffect(() => {
        // Fetch README content using relative path
        fetch('/README.md')
            .then(response => response.text())
            .then(text => setReadmeContent(text))
            .catch(err => {
                console.error('Error loading README:', err);
                setReadmeContent('# Error\nFailed to load README content.');
            });
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <a 
                        href="https://mourao.info" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="nav-link"
                    >
                        My site
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
                        <div className="markdown-content">
                            <ReactMarkdown>{readmeContent}</ReactMarkdown>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;