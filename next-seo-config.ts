export const NEXT_SEO_DEFAULT = {
    title: 'Home',
    themeColor: '#abcdef',  // Add a custom theme color if needed
    noindex: false,  // Set to true if you don't want search engines to index this page
    nofollow: false, // Set to true if you don't want search engines to follow the links on this page
    robotsProps: undefined, // Add custom robots meta tag properties if needed
    useAppDir: true,
    description: 'Welcome to Aster\'s corner! where you can see myriad stuffs of my both digital and physical collections.',
    canonical: 'https://animu.monemone.site', // Add canonical URL if needed
    openGraph: {
      type: 'website',
      locale: 'id_ID',
      url: 'https://animu.monemone.site',
      title: 'Aster | Home',
      description: 'Welcome to Aster\'s corner! where you can see myriad of Aster\'s digital and physical collections.',
      siteName: 'Aster\'s Corner',
    },

    twitter: {
      handle: '@mmonenen', // Add your Twitter handle
      site: '@mmonenen', // Add your site's Twitter handle
      cardType: 'summary_large_image', // Choose the card type for Twitter
    },
    additionalMetaTags: [
      { name: 'author', content: 'Aster' }, // Add additional meta tags as needed
      { name: 'keywords', content: 'aster, anime, records, review' },
    ],
    titleTemplate: 'Aster | %s', // Customize the title template
    defaultTitle: 'Aster\'s Corner', // Set a default title
    mobileAlternate: {
      media: 'only screen and (max-width: 640px)', // Set the media query for mobile
      href: 'https://animu.monemone.site', // Add the mobile alternate URL
    },
    languageAlternates: [
      { hrefLang: 'en-US', href: 'https://animu.monemone.site' }, // Add language alternates
      { hrefLang: 'id-ID', href: 'https://animu.monemone.site' },
    ],
  };
  