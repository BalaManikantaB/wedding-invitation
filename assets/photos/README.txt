Drop your real photograph here:

  story.webp      — framed portrait on the Our Story page

Portrait photos (3:4) look best.

Keep it small — ~600px wide, quality 80, as WebP (a missing file is
handled gracefully — the frame shows a placeholder until you add it):

  convert photo.jpg -resize 600x -quality 80 story.webp
