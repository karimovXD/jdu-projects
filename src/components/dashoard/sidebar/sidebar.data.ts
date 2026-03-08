import { PageConstants } from "@/constants/pages";

const { ROUTES } = PageConstants;

export interface NavItem {
    title: string;
    url: string;
}

export interface NavSection {
    title: string;
    url: string;
    items: NavItem[];
}

export const data: NavSection[] = [
    {
        title: "Pages",
        url: ROUTES.HOME,
        items: [
            {
                title: "Home",
                url: ROUTES.HOME,
            },
        ],
    },
    {
        title: "HTML",
        url: ROUTES.HTML.ROOT,
        items: [
            {
                title: "html-tags",
                url: ROUTES.HTML.TOPIC("task-1"),
            },
            {
                title: "table",
                url: ROUTES.HTML.TOPIC("task-2"),
            },
        ],
    },
    {
        title: "CSS",
        url: ROUTES.CSS.ROOT,
        items: [
            { title: "flex | nav", url: ROUTES.CSS.TOPIC("task-1") },
            { title: "grid", url: ROUTES.CSS.TOPIC("task-2") },
            { title: "media-quary", url: ROUTES.CSS.TOPIC("task-3") },
        ],
    },
    {
        title: "JS",
        url: ROUTES.JS.ROOT,
        items: [
            { title: "task 1", url: ROUTES.JS.TOPIC("task-1") },
            { title: "task 2", url: ROUTES.JS.TOPIC("task-2") },
            { title: "task 3", url: ROUTES.JS.TOPIC("task-3") },
            { title: "task 4", url: ROUTES.JS.TOPIC("task-4") },
            { title: "task-5", url: ROUTES.JS.TOPIC("tasl-5") },
            { title: "task-6", url: ROUTES.JS.TOPIC("task-6") },
            { title: "task-7", url: ROUTES.JS.TOPIC("task-7") },
            { title: "task-8", url: ROUTES.JS.TOPIC("task-8") },
            { title: "task-9", url: ROUTES.JS.TOPIC("task-9") },
            { title: "task-10", url: ROUTES.JS.TOPIC("task-10") },
            { title: "task-11", url: ROUTES.JS.TOPIC("task-11") },
        ],
    },
];