# Blog Images Guide

## Cover Images

Add a cover image to any blog post by adding these fields to the frontmatter:

```markdown
---
title: "Your Post Title"
# ... other fields
coverImage: "/images/your-image.jpg"
coverAlt: "Description of the image"
---
```

### Cover Image Display

- **Blog listing**: 256px tall, full width, with category-colored left border
- **Individual post**: Full width hero image below the title/meta section
- **Hover effect**: Slight zoom on listing hover

## Images in Content

You can add images anywhere in the blog post content using standard markdown:

```markdown
![Alt text for the image](/images/my-image.jpg)
```

Or with HTML for more control:

```html
<figure>
  <img src="/images/my-image.jpg" alt="Description">
  <figcaption>Optional caption text</figcaption>
</figure>
```

## Image Styling

All images in blog posts get:
- Full width display
- 6px colored left border (brutalist style)
- Proper spacing (2rem top/bottom)
- Responsive sizing

## Image Organization

### Directory Structure
```
public/
  images/
    # Graphics/UI elements (logos, favicons, etc.)
    favicon.png
    favicon_cv.svg
    godot_logo.svg
    
    # Blog post images (separate folder)
    blog/
      placeholder-blog.jpg
      post-1-cover.jpg
      post-1-diagram.png
      post-2-cover.jpg
```

### Usage in Blog Posts
- Cover images: `/images/blog/your-cover.jpg`
- Content images: `/images/blog/your-image.jpg`
- Graphics/logos: `/images/logo.svg` (if needed in content)

## Image Recommendations

### Ideal Resolutions

**Cover Images (Blog Listing & Post Hero)**
- **Resolution**: 1600x900px (16:9 ratio)
- **Why**: Looks great on all screens, 16:9 is web-standard
- **Alternative**: 1920x1080px (if you want extra sharp)
- **Format**: JPG (photos), PNG (graphics/screenshots)
- **Quality**: 75-85% compression for JPG
- **File size**: Keep under 300KB

**Content Images (Inside Posts)**
- **Resolution**: 1200px wide (height varies)
- **Why**: Max content width is ~800px, 1200px covers retina displays
- **Format**: JPG for photos, PNG for diagrams/screenshots/text
- **File size**: Keep under 200KB each

### Quick Reference
```
Cover images:  1600x900px  (16:9) - JPG, <300KB
Content images: 1200px wide      - JPG/PNG, <200KB
Placeholder:    1600x900px  (same as cover)
```

## Placeholder Images

For testing, you can use placeholder services:
- `https://via.placeholder.com/1200x600/1a1a24/6366f1?text=Your+Text`
- Replace colors with your theme colors
