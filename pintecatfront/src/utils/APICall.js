import API from "./API"

export default {
    getImages: function () {
        return API.getPic()
            .then(results => {
                var parser = new DOMParser();
                // returns a Document, but not a SVGDocument nor a HTMLDocument (can use "text/html")
                var doc = parser.parseFromString(results.data, "application/xml");
                // turn HTMLCollection (of all "url" tags) to an array- then map throgh it and get the image src
                let images = Array.from(doc.getElementsByTagName("url")).map(urlElement => urlElement.textContent)
                return Promise.resolve(images);
            }, (error) => {
                console.log('error:', error);
            })
    },
    getFacts: function () {
        return API.getText()
            .then(results => {
                let facts = results.data.data.map(element => element.fact);
                return Promise.resolve(facts)
            }, (error) => {
                console.log('error:', error);
            })
    },
};
