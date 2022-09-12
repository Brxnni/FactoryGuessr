# Disclaimer

This code is a mess. Anyways:

# How to render website-src

This website is made with Svelte-Kit so I can render it as static HTML, CSS and JS files to upload to my file hosting server (I didn't bother getting a real server, just file hosting)

```cmd
cd website-src
./build.cmd
# Final files are located in ./website-src/build
```

# File Structure

## `website-src`

Svelte files that are compiled to HTML, CSS and JS.

## `tools`

Tools (mostly Python files) that I used to make the website.
