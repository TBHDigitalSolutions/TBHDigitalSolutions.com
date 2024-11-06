# TBHDigitalSolutions.com


.vercel
├── project.json
├── README.txt
assets
├── images
│   ├── 600x400-web site holder.png
│   ├── FullLogo_Transparent_NoBuffer.png
│   ├── Logo_Transparent.svg
│   ├── Print_Transparent (1).svg
│   └── Print_Transparent.svg
├── path-to-fonts
│   ├── aldrich-regular-webfont.woff
│   ├── aldrich-regular-webfont.woff2
│   ├── Aldrich-Regular.ttf
│   ├── sovjetboxbd_v0_9-webfont.woff
│   ├── SovjetBoxBd_v0_9.otf
│   ├── sovjetboxsc_v0_9-webfont.woff
│   └── SovjetBoxSC_v0_9.otf
blog
config
└── cookieconsent-config.js
css
└── home-styles.css
form
├── css
│   └── form-styles.css
├── js
│   └── form-scripts.js
└── index.html
js
└── home-scripts.js
.gitignore
404.html
index.html
privacy-policy.html
README.md
terms.html


----------------------------------------

##VERSION-2

Here’s an updated directory structure with placeholders for a blog, a CMS, and any additional assets needed for a future version (v2) of the website.

```
.vercel
├── project.json
├── README.txt

assets
├── images
│   ├── 600x400-web site holder.png
│   ├── FullLogo_Transparent_NoBuffer.png
│   ├── Logo_Transparent.svg
│   ├── Print_Transparent (1).svg
│   ├── Print_Transparent.svg
├── path-to-fonts
│   ├── aldrich-regular-webfont.woff
│   ├── aldrich-regular-webfont.woff2
│   ├── Aldrich-Regular.ttf
│   ├── sovjetboxbd_v0_9-webfont.woff
│   ├── SovjetBoxBd_v0_9.otf
│   ├── sovjetboxsc_v0_9-webfont.woff
│   └── SovjetBoxSC_v0_9.otf
├── blog-images                 # Directory for blog-specific images (featured, thumbnails, etc.)
└── cms-assets                  # Directory for any assets related to the CMS

blog                             # Blog section for articles and posts
├── css
│   └── blog-styles.css          # Styles specific to the blog section
├── js
│   └── blog-scripts.js          # JavaScript specific to the blog section
├── index.html                   # Main blog index page (listing of posts)
└── posts
    ├── post1.html               # Sample blog post 1
    ├── post2.html               # Sample blog post 2
    └── ...                      # Additional posts

config
├── cookieconsent-config.js
└── cms-config.js                # Configuration for CMS integration

css
└── home-styles.css              # General styles for main pages

form
├── css
│   └── form-styles.css          # Styles specific to form elements
├── js
│   └── form-scripts.js          # Form scripts
└── index.html                   # Main form index page

js
└── home-scripts.js              # General JavaScript for main pages

cms                              # Placeholder directory for future CMS
├── css
│   └── cms-styles.css           # CMS-specific styles (e.g., admin panel)
├── js
│   └── cms-scripts.js           # CMS-specific scripts (e.g., form validation)
└── templates
    ├── dashboard.html           # CMS admin dashboard template
    ├── edit-post.html           # CMS post editor template
    └── settings.html            # CMS settings page

.gitignore                       # Git ignore file

404.html                         # Custom 404 error page
index.html                       # Main website homepage
privacy-policy.html              # Privacy policy page
README.md                        # Project README
terms.html                       # Terms and conditions page
```

### Explanation of the Additions:

1. **Blog**:  
   - **`blog`** folder includes all files for a blog section, such as individual posts, a main index page for listing posts, and specific styles and scripts.
   
2. **CMS**:
   - **`cms`** folder includes templates for a future CMS admin interface with styles, scripts, and a dashboard.
   - **`cms-config.js`** in the `config` directory can be used for CMS configuration details.

3. **Additional Assets**:
   - **`blog-images`** and **`cms-assets`** in the `assets` folder for blog-specific images and CMS resources.

This structure ensures flexibility for adding a blog and a CMS in future versions. You can version-control this in GitHub, and if you’re deploying to Vercel, it will handle all subdirectories in the deployment, keeping the structure intact. Let me know if you have any other additions in mind!