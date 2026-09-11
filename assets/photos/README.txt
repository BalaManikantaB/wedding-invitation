Drop your real photographs here:

  story.webp      — framed portrait on the Our Story page
  story-2.webp    — second tap
  story-3.webp    — third tap
  story-4.webp    — fourth tap

Each tap reveals one polaroid. Portrait photos (3:4) look best.

Keep them small — ~600px wide, quality 80, as WebP (missing ones are
handled gracefully, so you can add them one at a time):

  convert photo.jpg -resize 600x -quality 80 story.webp
