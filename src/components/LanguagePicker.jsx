import { languages, defaultLang } from "../i18n/ui";
import { useState, useEffect } from 'react'

export const LanguagePicker = ({ siteUrl }) => {
  const langsEntries = Object.entries(languages);

  const langsArray = [];

  langsEntries.forEach((l, i) => {
    langsArray.push({
      key: l[0],
      label: l[1],
    });
  });

  const [currentLang, setCurrentLang] = useState('')

  const handleSelect = (e) => {
    // console.log("Acawdad", window.location.hostname)
    window.location.href = window.location.hostname.includes("localhost") ? `${siteUrl.origin}/${e.target.value}` : `/${e.target.value}`;
  }

  useEffect(() => {
    setCurrentLang(window.location.pathname.split("/")[1]);
  }, []);

  return (
    <select onChange={(e) => { handleSelect(e) }} className={"bg-transparent"}>
      {langsArray &&
        langsArray.length > 0 &&
        langsArray.map((l) => {

          return l.key === currentLang ? (
            <option selected key={l.key} value={l.key}>
              {l.label}
            </option>
          ) : (
            <option key={l.key} value={l.key}>
              {l.label}
            </option>
          )
        })}
    </select>
  );
};
