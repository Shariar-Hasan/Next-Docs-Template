export interface RootRouteConfig {
    /**
     * URL path of the route.
     * Example: '/' for home, '/about' for about page.
     */
    path: string;

    /**
     * Optional keywords for SEO, typically in a comma-separated string format.
     */
    keywords?: string;

    /**
     * Array of child routes for nested navigation.
     */
    children?: RootRouteConfig[];

    /**
     * Optional icon for the sidebar, for better UI/UX.
     */
    icon?: string | React.ReactNode;
}
