# Design Tokens 

**Design tokens** are named variables that store design decisions like colors, fonts, spacing, border styles, and more. Think of them as reusable building blocks for your visual interface. Built on Brad Frost's Atomic Design, this a11y theme builder generates design tokens in **CSS** and **JSON** formats.

# Atomic Design 

Atomic Design is a design system methodology created by Brad Frost. It offers a structured approach to building user interfaces by breaking them down into their smallest, reusable components. This promotes consistency, scalability, and improves collaboration between designers and developers.

## Atoms

 Atoms are the fundamental building blocks of this design system. They represent the most basic visual elements that can't be further broken down. Here's a breakdown of atom categories provided:

-   **Color Palette:**
    
    -   **Theme Colors:** The core set of colors representing your brand identity (e.g., primary, secondary, accent).
    -   **Sub-themes:** Variations on your core theme colors (e.g., dark theme, light theme palettes).
    
-   **Typography:**
    
    -   **Font Families:** Define the base fonts used throughout your interface.
    -   **Style Settings:**
        
        -   **Display Styles:** High-impact text styles for headings (e.g., H1, H2, etc.).
        -   **Header Styles:** Bold and clear styles for headers within sections.
        -   **Body Text Styles:** The primary font styles for paragraphs and regular text.
        -   **Stat Styles:** Specific styles for presenting data (e.g., numbers, percentages).
        
    
-   **Shadow Atoms:**
    
    -   **Elevation:** Define elevation levels to create a sense of depth and hierarchy between elements (e.g., drop shadows, card shadows).
    -   **Bevel:** Control how an element's edges are styled (e.g., soft bevels for buttons).
    -   **Inner Shadow:** Add depth within an element using inner shadows.
    -   **Outer Glow:** Create an outer glow effect around elements.
    
-   **Other Atoms:**
    
    -   **Grid System:** Define your layout grid for consistent spacing and responsive design.
    -   **Target States:** Visual styles for interactive elements like buttons (e.g., hover, focus states).
    -   **Chart Colors:** Color palettes specifically designed for data visualizations.
    -   **Border Settings:** Establish border styles (e.g., thickness, color) for various use cases.
    -   **Hotlink Styles:** Visual indicators for hyperlinks (e.g., underline, color).
    -   **Input Background:** Styles for input fields and textareas.
    -   **Animation Settings:** Define animation properties for dynamic transitions and micro-interactions.
        
    - Find complete list of properties here - https://finos.github.io/a11y-theme-builder-sdk/classes/Atom.html
    
-   **Molecules:** Combinations of atoms to create simple functional units. Examples:
    
    - https://finos.github.io/a11y-theme-builder-sdk/classes/Molecules.html
    
-   **Organisms:** More complex components composed of multiple molecules. Examples:
    
   
    - Find complete list of properties here - https://finos.github.io/a11y-theme-builder-sdk/classes/Organism.html
    
-   **Templates:** Layout structures comprised of organisms, focusing on content arrangement. Example:
    
    -   Homepage template with hero section, product grid, and footer.

