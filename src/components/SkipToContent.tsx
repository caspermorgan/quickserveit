const SkipToContent = () => {
    return (
        <a
            href="#main-content"
            className="
        sr-only focus:not-sr-only
        fixed top-4 left-4 z-[100]
        px-4 py-2 rounded-lg
        bg-background border border-foreground/20
        text-foreground font-medium text-sm
        focus:outline-none focus:ring-2 focus:ring-institutional
        transition-all duration-200
      "
        >
            Skip to main content
        </a>
    );
};

export default SkipToContent;
