# xss-lube

A tool to assist penetrating pages with XSS code that needs to find its way into HTML attributes.

At times it can be quite challenging to inject XSS code. Whether server side or with HTML rendering, using certain characters can lead to undesirable outcomes. This is particularly true in server-side reflected XSS that involves exploitation of an HTML attribute.

This tool will take a cleverly crafted text document and convert it's contents into HTML Entity Numbers, thereby circumventing some cases in which otherwise valid exploits are hampered by how a character is handled by the server or HTML renderer.

**Dependencies**: NodeJS - consider installing the [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) to resolve this dependency.

## Example

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

## Caution
As always, there is a lot of nuance in exploiting vulnerable web applications. And you have to gain and understanding of the environment. This tool will not work well in all cases. And, encoded text put into an input field will behave differently than text embedded into a page, etc. So, please temper your expectations. ^_^

## Obligatory Warning
Hacking is illegal, this tool is not intended for illegal activity and the author cannot be held responsible for such use. Please use responsibly either in your own home lab or for legitimate work where you've required established satisfactory legal, business, and moral grounds to perform any penetration testing. 
