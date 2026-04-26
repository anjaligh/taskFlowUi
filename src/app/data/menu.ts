export const MENU_ITEMS = [
    {
        "title": "Dashboard",
        "icon": "fas fa-tachometer-alt",
        "link": "/dashboard",
        "role": ["admin", "user"],
        "submenuItems": [],
        "active": true

    },
    {
        "title": "Tasks",
        "icon": "fas fa-tasks",
        "link": "/tasks",
        "role": ["admin", "user"],
        "submenuItems": [
            {
                "title": "All Tasks",
                "link": "/tasks",
                "icon": "folder",
                "active": false
            },
            {
                "title": "My Tasks",
                "link": "/tasks/my",
                "icon": "folder",
                "active": false
            },
            {
                "title": "Create Task",
                "link": "/tasks/create",
                "role": ["admin"],
                "icon": "folder",
                "active": false
            }
        ],
        "active": false
    },
    {
        "title": "Workflow",
        "icon": "fas fa-project-diagram",
        "link": "/workflow",
        "role": ["admin"],
        "submenuItems": [],
        "active": false
    },
    {
        "title": "Reports",
        "icon": "fas fa-file-alt",
        "link": "/reports",
        "role": ["admin"],
        "submenuItems": [],
        "active": false
    },
    {
        "title": "Users",
        "icon": "fas fa-users",
        "link": "/users",
        "role": ["admin"],
        "submenuItems": [],
        "active": false
    },
    {
        "title": "Activity Log",
        "icon": "fas fa-clipboard-list",
        "link": "/activity",
        "role": ["admin", "user"],
        "submenuItems": [],
        "active": false
    },
    {
        "title": "Settings",
        "icon": "fas fa-tools",
        "link": "/settings",
        "role": ["admin", "user"],
        "submenuItems": [],
        "active": false
    },
        {
        "title": "App Status",
        "icon": "fas fa-tools",
        "link": "/app-status",
        "role": ["admin"],
        "submenuItems": [],
        "active": false
    },
        {
        "title": "Permissions",
        "icon": "fas fa-tools",
        "link": "/permissions",
        "role": ["admin"],
        "submenuItems": [],
        "active": false
    }
]