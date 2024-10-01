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
    const newLang = e.target.value;
    const currentPath = window.location.pathname.split("/").slice(2).join("/"); // Obtiene la ruta actual sin el idioma
    const newUrl = `/${newLang}/${currentPath}`;

    window.location.href = window.location.hostname.includes("localhost")
      ? `${siteUrl.origin}/${newLang}/${currentPath}`
      : newUrl;
  };


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
