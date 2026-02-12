import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    // Persist language preference
    useEffect(() => {
        const savedLang = localStorage.getItem('appLanguage');
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);

    const switchLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('appLanguage', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
