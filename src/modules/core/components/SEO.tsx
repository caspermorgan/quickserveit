import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    mode?: 'institutional' | 'creator';
    image?: string;
    type?: 'website' | 'article';
    noindex?: boolean;
}

const SEO = ({
    title,
    description,
    mode,
    image,
    type = 'website',
    noindex = false,
}: SEOProps) => {
    const location = useLocation();

    // Base URL - ALWAYS use www subdomain for consistency
    const baseUrl = 'https://www.quickserveit.online';

    // Construct canonical URL (current page with www)
    const canonicalUrl = `${baseUrl}${location.pathname}`;

    // Dynamic OG image based on mode
    const getOGImage = (): string => {
        if (image) return image;

        // Mode-specific OG images
        if (mode === 'institutional') {
            return `${baseUrl}/og-institutional.png`;
        } else if (mode === 'creator') {
            return `${baseUrl}/og-creator.png`;
        }

        // Default OG image
        return `${baseUrl}/og-default.png`;
    };

    const ogImage = getOGImage();
    const siteName = 'QuickServe IT';
    const twitterHandle = '@quickserveit'; // Update with actual handle

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            {/* Canonical URL - Prevents duplicate content issues */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Robots */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />
            <meta property="twitter:site" content={twitterHandle} />
            <meta property="twitter:creator" content={twitterHandle} />

            {/* WhatsApp specific (uses OG tags but good to be explicit) */}
            <meta property="og:image:alt" content={`${siteName} - ${mode === 'institutional' ? 'Institutional Services' : mode === 'creator' ? 'Creator Studio' : 'Professional Services'}`} />

            {/* Additional SEO */}
            <meta name="author" content={siteName} />
            <meta name="theme-color" content={mode === 'institutional' ? '#EAB308' : mode === 'creator' ? '#22D3EE' : '#000000'} />
        </Helmet>
    );
};

export default SEO;
