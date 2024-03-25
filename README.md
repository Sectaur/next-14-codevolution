This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## NOTES

### Tutorial 12 - Private Folders

Purpose - to exclude a folder from routing so you can't see it in the browser e.g. \_lib (underscore)

note %5FFolderName allows the \_FolderName to be viewed in browser

### Tutorial 13 - Route Groups

Purpose - Logically group files. Helps to organise stuff e.g. all files inside Auth folder. Don't want "Auth" to be a segment in the URL so wrap in parentheses (auth). That way the path wil be by-passed

### Tutorial 14 - Layouts

RootLayout is mandatory for EVERY NEXT JS App

### Tutorial 15 - Nested Routes

can place a layout.tsx inside another route folder which will take in the Page.tsx file in the same folder. BOTH of these then get nested INSIDE the overall RooTLayout (Which is MANDATORY)

Note that the RootLayout is the big dog and dictates EVERYTHING that is shown. It will always 'overwrite'the other nested routes.

### Tutorial 16 - Route Group Layout

Purpose - applies a specific sub-layout to a route group (see above).

1. Create Route Group folder with brackets
2. place subfolders (routes) inside each with their own page.tsx files
3. add a layout.tsx to that route group
   ==> the sub-layout will apply to all Page.Tsx's in the Route Group Folders

### Tutorial 17 - Routing Metadata

Important for SEO.

**title and description**

1. Method One - Static Metadata

export a metadata object in layout.tsx or page.tsx. at the top
page.tsx metadata >> precedence over >> RootLayout.tsx (more specificity)

2. Method Two - dynamic

fuck me. You can grab the params from a dynamic segment and add them to a **function that exports the metadata**.
This can be also be done asynchronously (e.g if you want the title field to be fetched from an API)

NOTE !!! only one method per page

See blog/second

### Tutorial 18 - Title Metadata

Title can be a string OR object with 3 string properties:

1. default: string - this applies to all child routes - if they dont have their own Metadata title e.g. /profile

2. template: string - "%s \_\_\_\_" - applied to all children %s is replaced by title within the child

3. absolute: string - overrides template completely so title is completely replaced (not templated)

Specificity lies within the component !!!

## NAVIGATION

### Tutorial 19 - Link

can use dynamic links e.g. see products

"replace" property in Link deletes routing history

### Tutorial 20 - Active Links

need to use "usePathname" hook NOTE : "use client" needed.

invoke const pathname = usePathname()

then can adjust logic see (comments) route

### Tutorial 21 - Navigating Programmatically
