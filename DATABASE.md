# Database Documentation

Project Manji uses Supabase for live application data.

## `cars`

| Field | Purpose |
| --- | --- |
| `id` | Unique car ID |
| `slug` | URL-safe car identifier |
| `name` | Car name |
| `manufacturer` | Car brand |
| `country` | Origin country |
| `year` | Model year |
| `driver` | Driver or owner name |
| `class` | Build category, such as Drift, Shutoko, or Racing |
| `power` | Horsepower or power label |
| `weight` | Vehicle weight |
| `drive` | Drivetrain |
| `transmission` | Transmission type |
| `topspeed` | Top speed value |
| `image` | Main image path or URL |
| `description` | Build description |
| `created_at` | Supabase creation timestamp |

## `drivers`

| Field | Purpose |
| --- | --- |
| `id` | Unique driver ID |
| `slug` | URL-safe driver identifier |
| `name` | Driver name |
| `role` | Community role |
| `bio` | Driver biography |
| `country` | Driver country |
| `discipline` | Main driving discipline |
| `experience` | Experience label |
| `favoriteCar` | Favorite car name |
| `favoriteCarSlug` | Linked favorite car slug |
| `image` | Driver image path or URL |
| `rating` | Ranking or rating value |
| `created_at` | Supabase creation timestamp |

## `events`

| Field | Purpose |
| --- | --- |
| `id` | Unique event ID |
| `slug` | URL-safe event identifier |
| `name` | Event name |
| `description` | Event description |
| `date` | Event date |
| `time` | Event time |
| `location` | Event location |
| `status` | Event status |
| `image` | Event image path or URL |
| `featured` | Whether the event is featured |
| `discord` | Discord registration or invite link |
| `created_at` | Supabase creation timestamp |

## `gallery`

| Field | Purpose |
| --- | --- |
| `id` | Unique gallery item ID |
| `title` | Image title |
| `image` | Image path or URL |
| `description` | Optional image description |
| `created_at` | Supabase creation timestamp |

## Data Rules

- Use Supabase for live data.
- Keep field names consistent between public pages and admin pages.
- Use local fallback data only when Supabase data is unavailable.
- Do not expose private keys in client code.
