export class PageConstants {
    static ROUTES = new (class {
        private readonly root = '/';

        readonly HOME = this.root;

        readonly HTML = {
            ROOT: `${this.root}html`,
            TOPIC: (slug: string) => `${this.root}html/${slug}`,
        } as const;

        readonly CSS = {
            ROOT: `${this.root}css`,
            TOPIC: (slug: string) => `${this.root}css/${slug}`,
        } as const;

        readonly JS = {
            ROOT: `${this.root}js`,
            TOPIC: (slug: string) => `${this.root}js/${slug}`,
        } as const;
    })();

    static TITLES = {
        HOME: "Home",
        HTML: "HTML",
        CSS: "CSS",
        JS: "JavaScript",
    };

    static META = {
        TITLE: "Docs",
        DESCRIPTION: "Learn HTML, CSS and JavaScript step by step.",
    };
}