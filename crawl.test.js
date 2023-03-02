const {normalizeUrl, getURLsFromHTML} = require('./crawl.js');
const {test, expect} = require('@jest/globals');

test('normalizeUrl stips protocol', () =>{
    const input = 'https://blog.boot.dev/path';
    const actual = normalizeUrl(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected);

} );

test('normalizeUrl stips slash', () =>{
    const input = 'https://blog.boot.dev/path/';
    const actual = normalizeUrl(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected);

} );

test('normalizeUrl capitalize', () =>{
    const input = 'https://BLOG.boot.dev/path';
    const actual = normalizeUrl(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected);

} );

test('normalizeUrl stips http', () =>{
    const input = 'https://blog.boot.dev/path';
    const actual = normalizeUrl(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected);

} );

test('getURLFRomHTML absolute', () =>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://blog.boot.dev">
                Boot.dev Blog
            </a>  
        </body>
    </html>` ;

    const inputBaseURL = "https://blog.boot.dev";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://blog.boot.dev/"]
    expect(actual).toEqual(expected);

} );

test('getURLFRomHTML relative', () =>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="/path/">
                Boot.dev Blog
            </a>  
        </body>
    </html>` ;

    const inputBaseURL = "https://blog.boot.dev";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected);

} );

test('getURLFRomHTML both multiple links', () =>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="/path1/">
                Boot.dev Blog
            </a> 
            <a href="https://blog.boot.dev/path2/">
            Boot.dev Blog path2
            </a>  
        </body>
    </html>` ;

    const inputBaseURL = "https://blog.boot.dev";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://blog.boot.dev/path1/", "https://blog.boot.dev/path2/" ]
    expect(actual).toEqual(expected);
} );

test('getURLFRomHTML invalid', () =>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="invalid">
                Boot.dev Blog
            </a>  
        </body>
    </html>` ;

    const inputBaseURL = "https://blog.boot.dev";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = []
    expect(actual).toEqual(expected);

} );





