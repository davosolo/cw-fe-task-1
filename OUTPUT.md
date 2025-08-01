
  

## Changes Made

  

### General Description of Changes

  

- Improved code organization and modularity

- Enhanced accessibility and SEO score

- Fixed styling issues and inconsistencies

- Improved code readability and maintainability

  

### [Page Title]

  

1.  **Incorrect Favicon**

- Issue: Wrong favicon used

- Fix: Use logo provided in public folder

2.  **Typo in Page Title**

- Issue: Page title says 'Wortionary'

- Fix: Add missing 'c' to 'Worctionary'

  

### [App Component]

  

1.  **Incorrect Background Color**

- Issue: Background color not matching Figma design

- Fix: Adjusted Tailwind class names and added correct color to index.css

2.  **Tightly Coupled Data**

- Issue: Data defined within App component

- Fix: Implemented placeholder function to simulate API call and moved to dedicated api folder

3.  **Incorrect Data Fetch**

- Issue: Data fetch not performed in TagList component

- Fix: Moved logic to TagList component to fetch data

  

### [Header Component]

  

1.  **Typo in Header Text**

- Issue: Header text says 'Wortionary'

- Fix: Add missing 'c' to 'Worctionary'

2.  **Incorrect Background Color**

- Issue: Background color not matching Figma design

- Fix: Adjusted index.css to use correct color

3.  **Incorrect Padding**

- Issue: Padding not matching Figma design

- Fix: Changed class names to match correct spacing

4.  **Incorrect Logo Sizing**

- Issue: Logo size not matching Figma design

- Fix: Changed class names to match correct size

5.  **Incorrect Spacing**

- Issue: Spacing not matching Figma design

- Fix: Adjusted Tailwind class names to add correct space between elements

6.  **Style Properties Instead of Tailwind Class Names**

- Issue: Style properties used instead of Tailwind class names

- Fix: Changed style properties to Tailwind class names

7.  **Incorrect Placeholder Text**

- Issue: Placeholder text not set correctly

- Fix: Set placeholder text to 'Search'

8.  **Styling Issues**

- Issue: Styles not matching Figma design

- Fix: Adjusted Tailwind class names to match Figma design

9.  **Semantic Tag Issue**

- Issue: Div tag used instead of semantic tag

- Fix: Changed div tag to h1 tag

10.  **Redundant Tags**

- Issue: Redundant tags increasing rendering time and cognitive complexity

- Fix: Removed redundant tags

11.  **Alt Attribute Description**

- Issue: Alt attribute description not descriptive

- Fix: Added more context to alt attribute description

12.  **Search Icon Accessibility**

- Issue: Search icon not accessible to screen readers

- Fix: Added aria label to provide description

13.  **Search Input Accessibility**

- Issue: Search input not descriptive enough

- Fix: Added aria label, role attributes, and changed type to provide better description

14.  **Component Modularity**

- Issue: Component not self-contained

- Fix: Moved component to independent file in UI components folder

15.  **Customizable Styles**

- Issue: No way to customize component styles

- Fix: Added optional className param to provide way to customize styles

  

### [Search Box Area]

  

1.  **Styling Issues**

- Issue: Styles not matching Figma design

- Fix: Adjusted Tailwind class names to match Figma design

2.  **Component Name**

- Issue: Component name not descriptive

- Fix: Changed component name to describe section's main purpose

3.  **Customizable Styles**

- Issue: No way to customize component styles

- Fix: Added optional className param to provide way to customize styles

4.  **Background Image Alt Attribute**

- Issue: Background image missing alt attribute

- Fix: Added descriptive text to alt attribute

5.  **Search Functionality**

- Issue: Search function performs action on first stroke

- Fix: Added validation to return if search term has less than 3 characters

  

### [Search Box Component]

  

1.  **Component Name**

- Issue: Component name not descriptive

- Fix: Changed component name to align with functionality

2.  **Input Label**

- Issue: Input missing label

- Fix: Added aria-label to describe input purpose

3.  **Component Modularity**

- Issue: Component not self-contained

- Fix: Moved component to independent file in UI components folder

4.  **Customizable Styles**

- Issue: No way to customize component styles

- Fix: Added optional className param to provide way to customize styles

5.  **Input Type**

- Issue: The Input has a mismatching type

- Fix: Changed the input type attribute from text to search

  

### [Tag List Component]

  

1.  **Badge Styling Issues**

- Issue: Badges had incorrect background color and sizing

- Fix: Adjusted Tailwind class names and added correct color to index.css

2.  **Semantic Tag Issue**

- Issue: Div tag used instead of semantic tag for a title

- Fix: Changed div tag to h1 tag

3.  **Component Modularity**

- Issue: Component not self-contained

- Fix: Moved component to independent file in UI components folder

4.  **Untyped Parameters**

- Issue: Parameters not typed

- Fix: Typed parameters to let TS know what to expect

5.  **Non-Unique Key Property**

- Issue: Key property not unique

- Fix: Used combination of tag and index to generate unique identifier

6.  **Customizable Styles**

- Issue: No way to customize component styles

- Fix: Added optional className param to provide way to customize styles

7.  **Stateless Component**

- Issue: Component was receiving props from parent

- Fix: Fetched data directly from component and handled in local state

  

### [Mobile Drawer Component]

  

1.  **Import Error**

- Issue: Importing a type as a value instead of a type

- Fix: Specify the import is a type using the `type` keyword

2.  **Sidebar Provider**

- Issue: Failing to use the Sidebar components and hooks

- Fix: Wrap the app with the Sidebar Provider component to enable sidebar functionality

3.  **Sidebar Mobile Conditioning**

- Issue: Displaying the sidebar on non-mobile devices

- Fix: Use the `useIsMobile` hook to render the Sidebar Provider based on the device type conditionally

4.  **Sidebar Trigger Button**

- Issue: Failing to display the sidebar trigger button on mobile devices

- Fix: Conditionally render the Sidebar Trigger button in the Header component based on the `useIsMobile` hook result

5.  **Mobile Drawer Component**

- Issue: Lacking a component to display content in the Sidebar

- Fix: Implement a new component using the Sidebar set of components and use it in the App component
