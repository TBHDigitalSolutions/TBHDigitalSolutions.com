import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0/dist/cookieconsent.umd.js';

CookieConsent.run({
    categories: {
        necessary: {
            enabled: true,
            readOnly: true,  // Cannot be disabled by the user
            services: {
                essential: {
                    label: 'Essential Cookies',
                    description: 'Necessary for core functionality, including security and navigation.',
                },
                session_management: {
                    label: 'Session Management Cookies',
                    description: 'Maintains user sessions and remembers login status and preferences.',
                },
                authentication: {
                    label: 'Authentication Cookies',
                    description: 'Verifies logged-in users for secure access to personalized features.',
                },
                security: {
                    label: 'Security and Fraud Prevention Cookies',
                    description: 'Detects unauthorized access, mitigates security risks, and safeguards personal data.',
                },
                consent_management: {
                    label: 'Consent Management Cookies',
                    description: 'Stores user cookie preferences and consent choices to comply with legal requirements.',
                }
            }
        },
        performance: {
            autoClear: {
                cookies: [
                    { name: /^_ga/ },  // Google Analytics ID
                    { name: /^_gid/ }, // Google Analytics session tracking
                ]
            },
            services: {
                performance: {
                    label: 'Performance Cookies',
                    description: 'Collects anonymous data on site performance, error tracking, and load times to optimize functionality.',
                    cookie_table: [
                        {
                            name: "_ga",
                            domain: location.hostname,
                            desc: "Google Analytics: Used to distinguish unique users.",
                            duration: "2 years"
                        },
                        {
                            name: "_gid",
                            domain: location.hostname,
                            desc: "Google Analytics: Tracks user behavior for reports on site usage.",
                            duration: "24 hours"
                        }
                    ]
                }
            }
        },
        analytics: {
            services: {
                analytics: {
                    label: 'Analytics Cookies',
                    description: 'Gathers data on page views, site visits, and user activity to improve user experience and content.',
                    cookie_table: [
                        {
                            name: "_ga",
                            domain: location.hostname,
                            desc: "Google Analytics: Tracks overall site usage and user interaction.",
                            duration: "2 years"
                        },
                        {
                            name: "_gid",
                            domain: location.hostname,
                            desc: "Google Analytics: Provides insights into visitor interactions.",
                            duration: "24 hours"
                        }
                    ]
                }
            }
        },
        marketing: {
            services: {
                marketing: {
                    label: 'Marketing Cookies',
                    description: 'Used for ad personalization, targeting, and remarketing. Tracks ad interaction on other platforms.',
                    cookie_table: [
                        {
                            name: "fr",
                            domain: "facebook.com",
                            desc: "Facebook: Enables ad retargeting and tracking on Facebook and Instagram.",
                            duration: "3 months"
                        },
                        {
                            name: "IDE",
                            domain: "doubleclick.net",
                            desc: "Google Ads: Tracks ad interactions and measures ad performance.",
                            duration: "13 months"
                        }
                    ]
                }
            }
        },
        social: {
            services: {
                social_media: {
                    label: 'Social Media Cookies',
                    description: 'Allows content sharing on social media and tracks engagement. Supports cross-platform advertising.',
                    cookie_table: [
                        {
                            name: "_fbp",
                            domain: "facebook.com",
                            desc: "Facebook Pixel: Tracks visits for personalized ads on Facebook.",
                            duration: "3 months"
                        }
                    ]
                }
            }
        },
        preferences: {
            services: {
                preferences: {
                    label: 'Preferences Cookies',
                    description: 'Remembers language settings, location, and other preferences for a customized experience.',
                    cookie_table: [
                        {
                            name: "language",
                            domain: location.hostname,
                            desc: "Stores the user’s preferred language for a consistent browsing experience.",
                            duration: "1 year"
                        }
                    ]
                },
                functional: {
                    label: 'Functional Cookies',
                    description: 'Tracks site behavior for a seamless, customized browsing experience, such as preferred layout and interaction history.'
                }
            }
        }
    },
    language: {
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: "We use cookies",
                    description: 'This website uses cookies to enhance user experience. View our <a href="/privacy-policy.html" target="_blank">Privacy Policy</a> for details.',
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Decline",
                    showPreferencesBtn: "Customize"
                },
                preferencesModal: {
                    title: "Manage Cookie Preferences",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Decline all",
                    savePreferencesBtn: "Save preferences",
                    sections: [
                        {
                            title: "Essential Cookies",
                            description: "These cookies are required for the website’s core functionality, like secure navigation and account access.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Performance and Analytics Cookies",
                            description: "These cookies help improve site performance and gather data on user behavior for optimization.",
                            linkedCategory: "performance"
                        },
                        {
                            title: "Marketing and Advertising Cookies",
                            description: "These cookies are used for ad targeting and tracking to show relevant ads.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "Social Media Cookies",
                            description: "Used to allow sharing on social platforms and personalize ads.",
                            linkedCategory: "social"
                        },
                        {
                            title: "Preferences and Functional Cookies",
                            description: "Remember settings and site behaviors to personalize the user experience.",
                            linkedCategory: "preferences"
                        }
                    ]
                }
            }
        }
    }
});
