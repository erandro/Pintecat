import API from "./API"

const APICall = {
    getImages: function () {
        return API.getPic()
            .then(results => {
                const parser = new DOMParser();
                // returns a Document, but not a SVGDocument nor a HTMLDocument (can use "text/html")
                const doc = parser.parseFromString(results.data, "application/xml");
                // turn HTMLCollection (of all "url" tags) to an array- then map throgh it and get the image src
                const images = Array.from(doc.getElementsByTagName("url")).map(urlElement => urlElement.textContent)
                return Promise.resolve(images);
            }, (error) => {
                console.log('error:', error);
            })
    },
    getFacts: function () {
        return API.getText()
            .then(results => {
                const facts = results.data.data.map(element => element.fact);
                return Promise.resolve(facts)
            }, (error) => {
                console.log('error:', error);
            })
    },
};

export default APICall;