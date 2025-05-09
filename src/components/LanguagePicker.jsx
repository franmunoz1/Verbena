import { languages, defaultLang } from "../i18n/ui";
import { useState, useEffect } from "react";

export const LanguagePicker = ({ siteUrl }) => {
  const langsEntries = Object.entries(languages);
  const langsArray = langsEntries.map(([key, label]) => ({ key, label }));

  const [currentLang, setCurrentLang] = useState("");

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
    <div className="relative">
      <select
        value={currentLang} // Usamos value para controlar el valor seleccionado
        onChange={handleSelect}
        className="appearance-none bg-transparent text-2xl  p-2 pr-8 rounded-md cursor-pointer"
      >
        {langsArray.map((l) => (
          <option key={l.key} value={l.key}>
            {l.label}
          </option>
        ))}
      </select>
      {/* Flecha personalizada */}
      <div className="text-xl pb-3 pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
        ⌄
      </div>
    </div>
  );
};
