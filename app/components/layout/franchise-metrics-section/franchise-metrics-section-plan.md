# Franchise Metrics Section - Implementation Plan

## Phase 1: Mobile Layout (< 390px)

1.  **Main Section Container:**

    - Create a top-level `div`.
    - Apply background: `bg-[url('/four-dusted.png')] bg-cover bg-center`.
    - Padding: `py-12 px-4`.

2.  **Header Content:**

    - Container `div`.
    - `h2`: "Why Great Harvest?" (`text-5xl font-normal text-center leading-[55px] text-gray-800`).
    - `p`: Description (`text-lg text-center text-gray-700 mt-4`).
    - `p`: "TASTE THE GREAT..." (`text-xl font-semibold text-center text-gray-800 mt-6`).

3.  **Cards Container:**

    - `div` below header.
    - Layout: `flex flex-col items-center gap-12 mt-10`.

4.  **Individual Card Component (`MetricCard.tsx` - Proposed):**

    - **Card Wrapper:** `div` (`bg-white bg-opacity-95 rounded-xl shadow-lg p-6 w-full max-w-sm relative pt-20`).
    - **Image Wrapper:** `div` (`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2`).
    - **Image:** `next/image` (`rounded-full w-32 h-32 object-cover border-4 border-white shadow-md`). Data: `imageSrc`, `imageAlt`.
    - **Badge/Tag:** `div` (`bg-brand-blue text-white text-xl font-normal leading-7 py-1 px-4 rounded inline-block mb-3`). Needs centering. Data: `badgeText`.
    - **Title/Value:** `h3` or `p` (`text-5xl font-normal text-center leading-[55px] text-gray-900`). Data: `title`.
    - **Bullet Points:** `ul` (`mt-4 space-y-1 text-center text-gray-600 text-lg font-normal leading-[25px]`). Map `li` elements. Data: `bullets` (array).
    - **Separator:** `hr` (`my-4 border-charcoal-gray`).
    - **Footer Text:** `p` (`text-center font-normal text-lg leading-[25px] text-gray-800`). Data: `footerText`.

5.  **Data Structure (`./metric-data.ts` & `./metric.interface.ts`):**
    - **Note:** These files already exist but need modification.
    - Update `metric.interface.ts` (or rename/replace) to define the `MetricCardData` interface with: `id`, `imageSrc`, `imageAlt`, `badgeText`, `title` (string | number), `bullets` (string[]), `footerText`.
    - Update `metric-data.ts` to export an array (`metricCardData`) conforming to the new `MetricCardData` interface, using the content derived from the Figma designs.

## Phase 2: Tablet Layout (`md:` prefix, < 800px)

1.  **Cards Container Adjustments:**

    - Modify the container `div` from Phase 1, Step 3.
    - Apply `md:grid md:grid-cols-2 md:gap-8 md:max-w-3xl md:mx-auto`. (Constrains width for 2 columns).

2.  **Centering the Third Card:**
    - Requires logic to target the _last_ card specifically (assuming 3 total cards).
    - Add a wrapper `div` around each card instance in the map.
    - Apply classes to the wrapper of the third card: `md:col-span-2 md:flex md:justify-center`.
    - The `MetricCard` component itself retains its `max-w-sm` to control its size within the centered wrapper.

## Phase 3: Desktop Layout (`lg:` prefix, >= 1024px)

1.  **Cards Container Adjustments:**

    - Modify the container `div`.
    - Change to 3 columns: `lg:grid-cols-3`.
    - Adjust max-width: `lg:max-w-6xl` (or similar).

2.  **Resetting Third Card Wrapper Styles:**
    - Target the wrapper `div` for the third card.
    - Reset column span: `lg:col-span-1`.
    - Remove flex centering behavior: `lg:block` (or ensure no `lg:flex` overrides).
