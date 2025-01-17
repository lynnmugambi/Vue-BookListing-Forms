const assert = require("chai").assert;
const parse5 = require("parse5");
const cheerio = require("cheerio");
const helpers = require("../helpers");

describe("BookItem.vue", () => {
  it("should show read or not read according to book.finishedReading @book-item-should-show-not-read", () => {
    const file = helpers.readFile("src/components/BookItem.vue");
    const nodes = helpers.parseFile(file);
    const tagName = helpers.getHtmlTag("template", nodes);
    const content = parse5.serialize(tagName[0].content);
    const $ = cheerio.load(content);

    const firstSpan = $("span");
    const secondSpan = $("span:nth-of-type(2)");

    assert(
      $(firstSpan).length > 0,
      "It doesn't look like we are adding the `<span></span>` HTML element to the `BookList`'s template."
    );

    assert(
      $(secondSpan).length > 0,
      "It doesn't look like we are adding two `<span></span>` elements to the `BookList`'s template."
    );

    assert(
      !!firstSpan.attr()["v-if"],
      "The `BookItem`'s template does not have a `<span></span>` with a `v-if` directive."
    );

    assert(
      firstSpan.attr()["v-if"].match(/\s*book.finishedReading\s*$/),
      "The `BookItem`'s template does not have a `<span></span>` with a `v-if` directive containing `book.finishedReading` as its value."
    );

    assert(
      $(firstSpan)
        .text()
        .match(/\s*Read/gi),
      "The `BookItem`'s `<span></span>` with the `v-if` directive does not have a text of `Read`."
    );

    assert(
      secondSpan.attr()["v-else"] !== undefined,
      "The `BookItem`'s template does not a `<span></span>` with a `v-else` directive."
    );

    assert(
      $(secondSpan)
        .text()
        .match(/\s*Not\s*Read/gi),
      "The `BookItem`'s `<span></span>` with the `v-else` directive does not have a text of `Not Read`."
    );
  });
});
