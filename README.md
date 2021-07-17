# xss-lube

A tool to assist penetrating pages with XSS code.

At times it can be quite challenging to inject XSS code. Whether server side or with HTML rendering, using certain characters can lead to undesirable outcomes. This is particularly true in reflected XSS.

This tool will take a cleverly crafted text document and convert it's contents into HTML Entity Numbers, thereby eliminating most if not all cases under which otherwise valid exploits are hampered by how a character is handled by the server or HTML renderer.

**Dependencies**: NodeJS - consider installing the [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) to resolve this dependency.

Example (test.html):

```html
<script>
  alert("pwned!");
</script>
```

Run the following code:
```sh
npm run start test.html
```
Or, with Yarn:
```sh
yarn start test.html
```

And then observe the output:

```text
===============================================================
██╗  ██╗███████╗███████╗      ██╗     ██╗   ██╗██████╗ ███████╗
╚██╗██╔╝██╔════╝██╔════╝      ██║     ██║   ██║██╔══██╗██╔════╝
 ╚███╔╝ ███████╗███████╗█████╗██║     ██║   ██║██████╔╝█████╗
 ██╔██╗ ╚════██║╚════██║╚════╝██║     ██║   ██║██╔══██╗██╔══╝
██╔╝ ██╗███████║███████║      ███████╗╚██████╔╝██████╔╝███████╗
╚═╝  ╚═╝╚══════╝╚══════╝      ╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝
===============================================================
TEST.HTML - Text to HTML Entity Number for XSS:
---------------------------(start)-----------------------------
&#60;&#115;&#99;&#114;&#105;&#112;&#116;&#62;&#13;&#32;&#32;&#97;&#108;&#101;&#114;&#116;&#40;&#34;&#112;&#119;&#110;&#101;&#100;&#33;&#34;&#41;&#59;&#13;&#60;&#47;&#115;&#99;&#114;&#105;&#112;&#116;&#62;&#13;
---------------------------(end)-----------------------------
```

The string of HTML Entity Numbers can be used in place of cumbersome characters in your exploit, allowing you to slide right in.
