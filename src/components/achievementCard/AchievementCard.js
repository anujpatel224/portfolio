import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  console.log("AchievementCard received:", cardInfo);
  
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    console.log(`Opening URL: ${url} for ${name}`);
    
    // Try to open in new tab first
    var win = window.open(url, "_blank");
    if (win) {
      win.focus();
    } else {
      // If popup is blocked, try alternative methods
      console.log(`Popup blocked for ${name}, trying alternative method`);
      try {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log(`Successfully opened ${name} using alternative method`);
      } catch (error) {
        console.log(`Failed to open ${name} using alternative method:`, error);
        // Method 3: Fallback - show user instructions
        alert(`Please copy and paste this URL to open ${name}:\n${url}`);
      }
    }
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
