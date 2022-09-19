# Disclaimer

This code is a mess. Anyways:

# TODO

* TODO: Make the buttons at Finished round look nicer
* TODO: Fix background pattern not working at FInished Round
* TODO: Make Easy/Hard Mode and Time limit work
* TODO: Add a lot more panoramas
* TODO: Make viewing angle random when pan is off for extra difficulty
* TODO: Make space key change behaviour just like #submitbutton
* TODO: Credit: Magnus als "Hurensohn"
* TODO: Credit: Rafa als Betatester

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
