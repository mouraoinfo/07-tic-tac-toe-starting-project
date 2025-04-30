import { useEffect } from 'react';

/*
 * Google AdSense Display Options:
 * - Display (rectangle): 336x280 or 300x250 pixels
 * - Leaderboard: 728x90 pixels
 * - Large Mobile Banner: 320x100 pixels
 * 
 * This component is configured for a responsive ad unit
 * that adapts to the container size while maintaining
 * AdSense policies for minimum space between ads
 */

function AdDisplay() {
    useEffect(() => {
        // Initialize AdSense after component mounts
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log('AdSense error:', err);
        }
    }, []);

    return (
        <div className="ad-container">
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="YOUR-CLIENT-ID" // Replace with your AdSense client ID
                data-ad-slot="YOUR-AD-SLOT"     // Replace with your ad slot ID
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </div>
    );
}

export default AdDisplay;