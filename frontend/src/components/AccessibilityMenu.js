import React, { useEffect, useState } from "react";
import { Accessibility, Check, RotateCcw, Type, X } from "lucide-react";

const defaultSettings = { largeText: false, highContrast: false, reduceMotion: false };

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(() => {
    try {
      return { ...defaultSettings, ...JSON.parse(localStorage.getItem("accessibilitySettings") || "{}") };
    } catch {
      return defaultSettings;
    }
  });

  useEffect(() => {
    localStorage.setItem("accessibilitySettings", JSON.stringify(settings));
    document.documentElement.classList.toggle("accessibility-large-text", settings.largeText);
    document.documentElement.classList.toggle("accessibility-high-contrast", settings.highContrast);
    document.documentElement.classList.toggle("accessibility-reduce-motion", settings.reduceMotion);
  }, [settings]);

  const toggle = (setting) => setSettings((current) => ({ ...current, [setting]: !current[setting] }));
  const reset = () => setSettings(defaultSettings);

  return <div className="accessibility-control">
    <button className="accessibility-trigger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="accessibility-menu" aria-label="Open accessibility options">
      <Accessibility size={17} /> <span>Accessibility</span>
    </button>
    {open && <div className="accessibility-menu" id="accessibility-menu" role="dialog" aria-label="Accessibility options">
      <div className="accessibility-menu-heading"><strong>Accessibility options</strong><button onClick={() => setOpen(false)} aria-label="Close accessibility options"><X size={16} /></button></div>
      <button className="accessibility-option" onClick={() => toggle("largeText")} aria-pressed={settings.largeText}><Type size={17} /><span>Larger text</span>{settings.largeText && <Check size={16} />}</button>
      <button className="accessibility-option" onClick={() => toggle("highContrast")} aria-pressed={settings.highContrast}><span className="contrast-icon">◐</span><span>High contrast</span>{settings.highContrast && <Check size={16} />}</button>
      <button className="accessibility-option" onClick={() => toggle("reduceMotion")} aria-pressed={settings.reduceMotion}><span className="motion-icon">▣</span><span>Reduce motion</span>{settings.reduceMotion && <Check size={16} />}</button>
      <button className="accessibility-reset" onClick={reset}><RotateCcw size={15} /> Reset options</button>
    </div>}
  </div>;
}
