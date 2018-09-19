# Secure Scuttlebutt Typings

This is a collection of typings that I have written for various SSB packages.

If you found this via Google search or something like that, consider helping out by sending me a pull request or [contacting me privately](http://rickcarlino.com/contact.html).

I've scoured the web for SSB typings and could not find any aside from stubs. I am posting my personal typings in hope that it will help others and that developers will contribute back.

# Goals

 * Should work in TSC `strict` mode.
 * Typings for common libs that are not directly related to SSB (such as `flume` or `pull-stream`) are welcome here.
 * Avoid `any` types, except in cases where typings are absent (something is better than nothing).
 * Use generics and the [`unknown` type](https://github.com/Microsoft/TypeScript/issues/10715) as an alternative to `any` where possible.
