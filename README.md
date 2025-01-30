# How to reproduce

Have pages with a shared parent in both Page and App router **and** having a basePath
For example
```
.
├── pages
│   └── parent
│       └── [parentId]
│           └── child
│               ├── [childId]
│               │   └── grand-child
│               │       └── [grandChildId].tsx
│               └── [childId].tsx
└── src
    └── app
        └── parent
            └── [parentId]
                └── page.tsx
```
Where `parent` is shared in both routers

# Current vs. Expected behavior

## Case A from App Router to Page Router ✅ 
Navigating from `parent/[parentId]` to `parent/[parentId]/child/[child]` or `parent/[parentId]/child/[child]/grand-child/[grandChildId]`, results in the respective pages being rendered and the url matching the folder structure with the basePath being prepended correctly 

## Case B from Page Router to App Router ✅ 
Navigating from `parent/[parentId]/child/[child]` or `parent/[parentId]/child/[child]/grand-child/[grandChildId]` to `parent/[parentId]`, results the page being rendered and the url matching the folder structure with the basePath being prepended correctly 

## Case C from Page Router to Page Router ❌ 
Navigating from `parent/[parentId]/child/[child]` to `parent/[parentId]/child/[child]/grand-child/[grandChildId]` or from `parent/[parentId]/child/[child]/grand-child/[grandChildId]` to `parent/[parentId]/child/[child]`, results in a redirection to a non-existing page where the basePath is duplicated I.E. `/base/base/*`

## Video 
https://github.com/user-attachments/assets/3b990434-6166-4e5d-8c2f-8d0e284bf9c4

# Environment information
Operating System:
  Platform: darwin
  Arch: arm64
  Version: Darwin Kernel Version 24.2.0: Fri Dec  6 18:51:28 PST 2024; root:xnu-11215.61.5~2/RELEASE_ARM64_T8112
  Available memory (MB): 24576
  Available CPU cores: 8
Binaries:
  Node: 18.20.2
  npm: 9.9.4
  Yarn: N/A
  pnpm: N/A
Relevant Packages:
  next: 15.1.6 // Latest available version is detected (15.1.6).
  eslint-config-next: 14.2.23
  react: 19.0.0
  react-dom: 19.0.0
  typescript: 5.7.3
Next.js Config:
  output: N/A