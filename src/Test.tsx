import React, { useState } from "react";
import "./App.css";
import logo from "./assets/youthtopia-lot.svg";

interface EmbedPreviewProps {
  embedTitle?: string;
  embedDescription?: string;
}

const ORGANIZATION_ID = import.meta.env.VITE_ORGANIZATION_ID;
console.log("organization id", ORGANIZATION_ID);
export const EmbedPreview: React.FC<EmbedPreviewProps> = ({
  embedTitle = "Interactive Embed Widget",
  embedDescription = "Our goal is to make embedding Opportunities into Youthtopia as flexible and seamless as possible. You can add it to any page, in any layout you prefer. The embedded experience is designed in simple building blocks—Opportunities, search, and filters—so you can shape the rest of the page to match your design and user experience.",
}) => {
  const [activeTab, setActiveTab] = useState<"user" | "developer">("user");

  return (
    <div className="embed-preview-container">
      <div className="embed-preview-header">
        <img className="embed-preview-logo" src={logo} alt="Youthtopia Logo" />
      </div>
      {/* Tab Navigation */}
      <div className="embed-tabs">
        <button
          className={`tab-button ${activeTab === "user" ? "active" : ""}`}
          onClick={() => setActiveTab("user")}
        >
          👥 For Everyone
        </button>
        <button
          className={`tab-button ${activeTab === "developer" ? "active" : ""}`}
          onClick={() => setActiveTab("developer")}
        >
          💻 For Developers
        </button>
      </div>

      {/* Non-Developer Section */}
      {activeTab === "user" && (
        <div className="section-content user-section">
          <div className="section-header">
            <h2>Live Opportunities Widget Preview</h2>
            <p className="tagline">
              <br></br>Our goal is to make embedding Opportunities into
              Youthtopia as seamless and flexible as possible. We do this by
              providing an <strong>embeddable widget </strong>—a ready-made
              experience that integrates smoothly into Youthtopia and feels
              native to your platform, without disrupting your existing pages or
              branding.
              <br></br>
              <br></br>
              The widget is built from the core elements of an opportunities
              platform—Opportunities, search, and filters—giving you full
              control over how it looks and feels. This modular approach allows
              you to design anything around it and easily plug it into any page
              you choose.
            </p>
          </div>

          {/* Live Preview */}
          <div className="preview-box">
            <lot-widget
              org="558d51d1-215e-4c5d-b872-2f8a5cdeb1f6"
              height="500"
            ></lot-widget>
          </div>
        </div>
      )}

      {/* Developer Section */}
      {activeTab === "developer" && (
        <div className="section-content developer-section">
          <div className="section-header">
            <h2>Developer Integration Guide</h2>
            <p className="tagline">Quick and easy integration in minutes</p>
          </div>

          {/* Installation */}
          <div className="dev-card">
            <h3>📦 Include the Embed Script</h3>
            <p className="tagline">
              Development environment <br></br>
              <br></br>
            </p>
            <pre className="code-block">
              {`<script src="https://youthtopia.vercel.app/embed/lot-widget.js"></script>`}
            </pre>
            <br></br>
            <br></br>
            <p className="tagline">
              Production environment <br></br>
              <br></br>
            </p>
            <pre className="code-block">
              {`<script src="https://www.leadersoftoday.com/embed/lot-widget.js"></script>`}
            </pre>
          </div>

          {/* Basic Usage */}
          <div className="dev-card">
            <h3>💡 Choose where the widget lives</h3>
            <p className="tagline">
              Decide which page and section of Youthtopia the Opportunities
              experience should appear on. The widget can be embedded on any
              page and positioned within your existing layout.
            </p>
          </div>

          {/* Basic Usage */}
          <div className="dev-card">
            <h3>🚀 Insert the custom web component</h3>
            <pre className="code-block">
              <code>
                {`<lot-widget
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
                  <td>
                    <code>apiKey</code>
                  </td>
                  <td>string</td>
                  <td>Your unique API key for authentication</td>
                </tr>
                <tr>
                  <td>
                    <code>theme</code>
                  </td>
                  <td>light | dark</td>
                  <td>Visual theme for the embed</td>
                </tr>
                <tr>
                  <td>
                    <code>height</code>
                  </td>
                  <td>number</td>
                  <td>Container height in pixels (default: 500)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section-header">
            <br></br>
            <br></br>
            <h2>How we handle security</h2>
            <p className="tagline">
              No additional setup is required on your end — this section is
              provided for transparency and informational purposes only.
            </p>
          </div>
          <div className="dev-card">
            <h3>🔑 API Key </h3>
            <p className="tagline">
              The internal opportunities API calls require an API key that is
              stored and used only by the LOT backend. The frontend client never
              sees this key.
            </p>
          </div>
          <div className="dev-card">
            <h3>📋 Domain White-list </h3>
            <p className="tagline">
              Only domains that have been explicitly approved and added to the
              whitelist are permitted to make requests. When a request is
              received, the system checks the request’s origin against this
              whitelist. If the domain is not on the approved list, the request
              is blocked. This prevents unauthorized websites or third-party
              applications from embedding the widget or calling the API, even if
              they attempt to do so from a browser environment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmbedPreview;
