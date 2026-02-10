import React, { useState } from 'react';
import './App.css';
import logo from './assets/youthtopia-lot.svg'

interface EmbedPreviewProps {
  embedTitle?: string;
  embedDescription?: string;
}

export const EmbedPreview: React.FC<EmbedPreviewProps> = ({
  embedTitle = "Interactive Embed Widget",
  embedDescription = "Our goal is to make embedding Opportunities into Youthtopia as flexible and seamless as possible. You can add it to any page, in any layout you prefer. The embedded experience is designed in simple building blocks—Opportunities, search, and filters—so you can shape the rest of the page to match your design and user experience."
}) => {
  const [activeTab, setActiveTab] = useState<'user' | 'developer'>('user');

  return (
    <div className="embed-preview-container">
      <div className="embed-preview-header">
        <img className="embed-preview-logo" src={logo} alt="Youthtopia Logo" />
        {/* <h1 className="embed-preview-title">Embedded Opportunities Experience</h1>
        <p className="tagline">
          A concise guide and demo for both technical and non-technical readers, showcasing the embedded Opportunities experience integrated into Youthtopia and powered by Leaders of Today. This preview highlights how it works and the value it delivers.
        </p>       */}
      </div>
      {/* Tab Navigation */}
      <div className="embed-tabs">
        <button
          className={`tab-button ${activeTab === 'user' ? 'active' : ''}`}
          onClick={() => setActiveTab('user')}
        >
          👥 For Everyone
        </button>
        <button
          className={`tab-button ${activeTab === 'developer' ? 'active' : ''}`}
          onClick={() => setActiveTab('developer')}
        >
          💻 For Developers
        </button>
      </div>

      {/* Non-Developer Section */}
      {activeTab === 'user' && (
        <div className="section-content user-section">
          <div className="section-header">
             <h2>Live Opportunities Widget Preview</h2>
            <p className="tagline">
              <br></br>Our goal is to make embedding Opportunities into Youthtopia as seamless and flexible as possible. We do this by providing an <strong>embeddable widget </strong>—a ready-made experience that integrates smoothly into Youthtopia and feels native to your platform, without disrupting your existing pages or branding.
<br></br><br></br>
The widget is built from the core elements of an opportunities platform—Opportunities, search, and filters—giving you full control over how it looks and feels. This modular approach allows you to design anything around it and easily plug it into any page you choose.
            </p>
           
          </div>
        
       
          {/* Live Preview */}
          <div className="preview-box">
            
            <lot-widget
              org="farah"
              theme="light"
              height="500">
            </lot-widget>
          </div>

         

         
        </div>
      )}

      {/* Developer Section */}
      {activeTab === 'developer' && (
        <div className="section-content developer-section">
          <div className="section-header">
            <h2>Developer Integration Guide</h2>
            <p className="tagline">Quick and easy integration in minutes</p>
          </div>

          {/* Installation */}
          <div className="dev-card">
            <h3>📦 Include the Embed Script</h3>
            <pre className="code-block">
             {`<script src="https://youthtopia.vercel.app/embed/lot-widget.js"></script>`}
            </pre>
          </div>

            {/* Basic Usage */}
          <div className="dev-card">
            <h3>💡 Choose where the widget lives</h3>
           <p className="tagline">Decide which page and section of Youthtopia the Opportunities experience should appear on. The widget can be embedded on any page and positioned within your existing layout.</p>
          </div>

          {/* Basic Usage */}
          <div className="dev-card">
            <h3>🚀 Insert the custom web component</h3>
            <pre className="code-block">
              <code>{`<lot-widget
      org="youthtopia"
      theme="light"
      height="400">
</lot-widget>`}
            </code>
            </pre>
          </div>

          {/* Configuration */}
          <div className="dev-card">
            <h3>⚙️ Configuration Options</h3>
            <table className="config-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>apiKey</code></td>
                  <td>string</td>
                  <td>Your unique API key for authentication</td>
                </tr>
                <tr>
                  <td><code>theme</code></td>
                  <td>light | dark</td>
                  <td>Visual theme for the embed</td>
                </tr>
                <tr>
                  <td><code>height</code></td>
                  <td>number</td>
                  <td>Container height in pixels (default: 500)</td>
                </tr>
                <tr>
                  <td><code>onLoad</code></td>
                  <td>function</td>
                  <td>Callback when embed finishes loading</td>
                </tr>
              </tbody>
            </table>
          </div>

    
       
        </div>
      )}
    </div>
    
  );
};

export default EmbedPreview;