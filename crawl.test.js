const {normalizeUrl} = require('./crawl.js');
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


