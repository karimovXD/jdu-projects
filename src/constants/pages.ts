export class PageConstants {
    static ROUTES = new (class {
        private readonly root = '/';

        readonly HOME = this.root;

        readonly STUDY = `${this.root}study`;

        readonly GENRES = {
            ROOT: `${this.root}genres`,
            GENRE_ID: (id: string, title: string) => `${this.GENRES.ROOT}/${id}/${title}`,
        } as const;

        readonly ANIME = {
            ROOT: `${this.root}anime`,
            ANIME_ID: (id: string, title: string) => `${this.ANIME.ROOT}/${id}/${title}`,
        } as const;

        readonly MANGA = {
            ROOT: `${this.root}manga`,
            MANGA_ID: (id: string, title: string) => `${this.MANGA.ROOT}/${id}/${title}`,
        } as const;

        readonly CHARACTERS = {
            ROOT: `${this.root}characters`,
            CHARACTER_ID: (id: string, title: string) => `${this.CHARACTERS.ROOT}/${id}/${title}`,
        } as const;

        readonly PEOPLE = {
            ROOT: `${this.root}people`,
            QUERY: (id: string, title: string) => `${this.PEOPLE.ROOT}/${id}/${title}`,
        } as const;

        readonly SEARCH = {
            ROOT: `${this.root}search`,
            QUERY: (result: string, category: string) => {
                const params = new URLSearchParams();
                if (result.trim()) params.set('result', result.trim());
                if (category) params.set('category', category);
                return `${this.SEARCH.ROOT}?${params.toString()}`;
            },
        } as const;
    })();

    static TITLES = {
        HOME: "Home",
        RESUME: "Resume",
        UPLOAD: "Upload Resume",
        WIPE: "Wipe",
        SIGN_IN: "Sign in",
        SIGN_UP: "Sign up",
    };

    static META = {
        TITLE: "AI Resume Analyzer",
        DESCRIPTION: "Quickly and accurately analyze resumes with AI.",
        IMAGE: "/default-og-image.png",
    };
}
