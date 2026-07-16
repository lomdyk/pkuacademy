# Graph Report - E:\efe  (2026-07-15)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 639 nodes · 1133 edges · 98 communities (37 shown, 61 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `51db590a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- sidebar.tsx
- cn
- react
- alert-dialog.tsx
- App.tsx
- package.json
- Footer.tsx
- command.tsx
- utils.ts
- AudioEngine
- dependencies
- useLang
- menubar.tsx
- GhostButton.tsx
- context-menu.tsx
- dropdown-menu.tsx
- HeroStory.tsx
- carousel.tsx
- CommunicationGame.tsx
- drawer.tsx
- select.tsx
- navigation-menu.tsx
- RunnerGame.tsx
- MissionPrologue.tsx
- i18n.tsx
- toggle-group.tsx
- BackpackGame.tsx
- CrewGreeting.tsx
- accordion.tsx
- alert.tsx
- popover.tsx
- hover-card.tsx
- SectionDivider.tsx
- canvas-confetti
- clsx
- cmdk
- embla-carousel-react
- @emotion/react
- gsap
- @gsap/react
- input-otp
- lenis
- lucide-react
- @mui/icons-material
- @mui/material
- next-themes
- @popperjs/core
- @radix-ui/react-accordion
- @radix-ui/react-alert-dialog
- @radix-ui/react-aspect-ratio
- @radix-ui/react-avatar
- @radix-ui/react-checkbox
- @radix-ui/react-collapsible
- @radix-ui/react-context-menu
- @radix-ui/react-dialog
- @radix-ui/react-dropdown-menu
- @radix-ui/react-hover-card
- @radix-ui/react-label
- @radix-ui/react-menubar
- @radix-ui/react-navigation-menu
- @radix-ui/react-popover
- @radix-ui/react-progress
- @radix-ui/react-radio-group
- @radix-ui/react-select
- @radix-ui/react-separator
- @radix-ui/react-slider
- @radix-ui/react-slot
- @radix-ui/react-switch
- @radix-ui/react-tabs
- @radix-ui/react-toggle
- @radix-ui/react-toggle-group
- @radix-ui/react-tooltip
- react-day-picker
- react-dnd
- react-dnd-html5-backend
- react-dom
- react-hook-form
- react-popper
- react-resizable-panels
- react-responsive-masonry
- react-router
- react-slick
- @react-three/drei
- recharts
- sonner
- @supabase/supabase-js
- tailwind-merge
- three
- tw-animate-css
- valtio

## God Nodes (most connected - your core abstractions)
1. `cn()` - 223 edges
2. `useLang()` - 42 edges
3. `react` - 18 edges
4. `AudioEngine` - 18 edges
5. `GhostButton()` - 17 edges
6. `soundEngine` - 15 edges
7. `buttonVariants` - 9 edges
8. `Button()` - 6 edges
9. `useCarousel()` - 6 edges
10. `useFormField()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `AppInner()` --references--> `lenis`  [EXTRACTED]
  src/app/App.tsx → package.json
- `CommunicationGame()` --references--> `react`  [EXTRACTED]
  src/app/components/CommunicationGame.tsx → package.json
- `HeroStory()` --references--> `react`  [EXTRACTED]
  src/app/components/HeroStory.tsx → package.json
- `Carousel()` --references--> `react`  [EXTRACTED]
  src/app/components/ui/carousel.tsx → package.json
- `useCarousel()` --references--> `react`  [EXTRACTED]
  src/app/components/ui/carousel.tsx → package.json

## Import Cycles
- None detected.

## Communities (98 total, 61 thin omitted)

### Community 0 - "sidebar.tsx"
Cohesion: 0.05
Nodes (41): Input(), Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle() (+33 more)

### Community 1 - "cn"
Cohesion: 0.09
Nodes (33): Avatar(), AvatarFallback(), AvatarImage(), BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage() (+25 more)

### Community 2 - "react"
Cohesion: 0.09
Nodes (25): react, react, ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartTooltipContent() (+17 more)

### Community 3 - "alert-dialog.tsx"
Cohesion: 0.10
Nodes (18): AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay(), AlertDialogTitle() (+10 more)

### Community 4 - "App.tsx"
Cohesion: 0.16
Nodes (11): Scene, BonusPrologue(), Props, ScrollDots(), SECTIONS, StarField(), Props, STAGES (+3 more)

### Community 5 - "package.json"
Cohesion: 0.10
Nodes (20): devDependencies, sharp, tailwindcss, @tailwindcss/vite, @types/uuid, vite, @vitejs/plugin-react, name (+12 more)

### Community 6 - "Footer.tsx"
Cohesion: 0.12
Nodes (15): FlipCard(), Footer(), HERO_STORIES, LogsMarquee(), PKU_FACTS, TIPS_KEYS, Card(), CardProps (+7 more)

### Community 7 - "command.tsx"
Cohesion: 0.12
Nodes (14): Command(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator(), CommandShortcut(), Dialog() (+6 more)

### Community 8 - "utils.ts"
Cohesion: 0.11
Nodes (10): Badge(), badgeVariants, Checkbox(), Progress(), ResizableHandle(), ResizablePanelGroup(), Separator(), Slider() (+2 more)

### Community 10 - "dependencies"
Cohesion: 0.12
Nodes (17): class-variance-authority, date-fns, @emotion/styled, motion, dependencies, class-variance-authority, date-fns, @emotion/styled (+9 more)

### Community 11 - "useLang"
Cohesion: 0.15
Nodes (14): AppInner(), BonusScenariosSelector(), GroupTransition(), HeroStory(), PostTestModal(), PostTestModalProps, assetModules, PRELOAD_ASSETS (+6 more)

### Community 12 - "menubar.tsx"
Cohesion: 0.12
Nodes (11): Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarRadioItem(), MenubarSeparator(), MenubarShortcut() (+3 more)

### Community 13 - "GhostButton.tsx"
Cohesion: 0.16
Nodes (12): PreTestModal(), PreTestModalProps, SubmitLogModal(), SubmitLogModalProps, GhostButton(), hexToRgb(), paletteFromColor(), Props (+4 more)

### Community 14 - "context-menu.tsx"
Cohesion: 0.12
Nodes (9): ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut(), ContextMenuSubContent() (+1 more)

### Community 15 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 16 - "HeroStory.tsx"
Cohesion: 0.21
Nodes (6): AnimatedShip, Props, ThreeScene(), Keyframe, keyframes, scrollState

### Community 17 - "carousel.tsx"
Cohesion: 0.20
Nodes (13): Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions (+5 more)

### Community 18 - "CommunicationGame.tsx"
Cohesion: 0.18
Nodes (9): ChatMsg, CommunicationGame(), GRADE_CONFIG, localizeScenarios(), Option, Scenario, SCENARIOS_BIRTHDAY, SCENARIOS_SCHOOL_TRIP (+1 more)

### Community 19 - "drawer.tsx"
Cohesion: 0.18
Nodes (6): DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerTitle()

### Community 20 - "select.tsx"
Cohesion: 0.18
Nodes (7): SelectContent(), SelectItem(), SelectLabel(), SelectScrollDownButton(), SelectScrollUpButton(), SelectSeparator(), SelectTrigger()

### Community 21 - "navigation-menu.tsx"
Cohesion: 0.22
Nodes (9): NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+1 more)

### Community 22 - "RunnerGame.tsx"
Cohesion: 0.25
Nodes (7): collides(), Entity, GameState, Kind, OBSTACLE_IMGS, Particle, RunnerGame()

### Community 23 - "MissionPrologue.tsx"
Cohesion: 0.29
Nodes (6): ACCENT, MissionPrologue(), Props, Tone, Props, ScrollRevealText()

### Community 24 - "i18n.tsx"
Cohesion: 0.25
Nodes (6): Ctx, Dict, Lang, LangCtx, LanguageProvider(), TRANSLATIONS

### Community 25 - "toggle-group.tsx"
Cohesion: 0.43
Nodes (5): ToggleGroup(), ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants

### Community 26 - "BackpackGame.tsx"
Cohesion: 0.33
Nodes (5): BackpackGame(), FoodItem, FoodItemCard, FoodType, ITEMS_POOLS

### Community 27 - "CrewGreeting.tsx"
Cohesion: 0.40
Nodes (5): ACCENT, CREW, CrewGreeting(), Props, Tone

### Community 28 - "accordion.tsx"
Cohesion: 0.40
Nodes (3): AccordionContent(), AccordionItem(), AccordionTrigger()

### Community 29 - "alert.tsx"
Cohesion: 0.50
Nodes (4): Alert(), AlertDescription(), AlertTitle(), alertVariants

## Knowledge Gaps
- **149 isolated node(s):** `name`, `private`, `version`, `type`, `build` (+144 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **61 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `hover-card.tsx`, `sidebar.tsx`, `react`, `alert-dialog.tsx`, `command.tsx`, `utils.ts`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `carousel.tsx`, `drawer.tsx`, `select.tsx`, `navigation-menu.tsx`, `toggle-group.tsx`, `accordion.tsx`, `alert.tsx`, `popover.tsx`?**
  _High betweenness centrality (0.559) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `sidebar.tsx`, `utils.ts`, `dependencies`, `useLang`, `carousel.tsx`, `CommunicationGame.tsx`, `toggle-group.tsx`?**
  _High betweenness centrality (0.558) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `react`, `package.json`, `canvas-confetti`, `clsx`, `cmdk`, `embla-carousel-react`, `@emotion/react`, `gsap`, `@gsap/react`, `input-otp`, `lenis`, `lucide-react`, `@mui/icons-material`, `@mui/material`, `next-themes`, `@popperjs/core`, `@radix-ui/react-accordion`, `@radix-ui/react-alert-dialog`, `@radix-ui/react-aspect-ratio`, `@radix-ui/react-avatar`, `@radix-ui/react-checkbox`, `@radix-ui/react-collapsible`, `@radix-ui/react-context-menu`, `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-hover-card`, `@radix-ui/react-label`, `@radix-ui/react-menubar`, `@radix-ui/react-navigation-menu`, `@radix-ui/react-popover`, `@radix-ui/react-progress`, `@radix-ui/react-radio-group`, `@radix-ui/react-select`, `@radix-ui/react-separator`, `@radix-ui/react-slider`, `@radix-ui/react-slot`, `@radix-ui/react-switch`, `@radix-ui/react-tabs`, `@radix-ui/react-toggle`, `@radix-ui/react-toggle-group`, `@radix-ui/react-tooltip`, `react-day-picker`, `react-dnd`, `react-dnd-html5-backend`, `react-dom`, `react-hook-form`, `react-popper`, `react-resizable-panels`, `react-responsive-masonry`, `react-router`, `react-slick`, `@react-three/drei`, `recharts`, `sonner`, `@supabase/supabase-js`, `tailwind-merge`, `three`, `tw-animate-css`, `valtio`?**
  _High betweenness centrality (0.401) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _149 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.054693877551020405 - nodes in this community are weakly interconnected._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.08780487804878048 - nodes in this community are weakly interconnected._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.08669354838709678 - nodes in this community are weakly interconnected._