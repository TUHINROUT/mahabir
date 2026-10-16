/**
 * Free-to-use photos from Unsplash (https://unsplash.com/license).
 * To use your own photos, put files in /public and replace the URL below
 * with a path like "/photos/my-plot.jpg" (and add the file there).
 */
export function unsplash(id: string, width = 1600): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export const photos = {
  hero: unsplash("photo-1773215023063-e662ea91a69c", 2000),
  fields: unsplash("photo-1769258958976-8852440011b8"),
  cityAerial: unsplash("photo-1705954797147-652784bc2484"),
  hillside: unsplash("photo-1764222233275-87dc016c11dc"),
  villa: unsplash("photo-1613977257363-707ba9348227"),
  houseDusk: unsplash("photo-1505843513577-22bb7d21e455"),
  modernHome: unsplash("photo-1600596542815-ffad4c1539a9"),
  glassHome: unsplash("photo-1582268611958-ebfd161ef9cf"),
  settlement: unsplash("photo-1771131825971-af45a242808c"),
  greenLand: unsplash("photo-1655319446878-44e5c1e31551"),
} as const;
