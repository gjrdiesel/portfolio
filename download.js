const contentful = require('contentful');
const fs = require('fs');

const client = contentful.createClient({
    space: 'l44oyvq4d24p',
    accessToken: process.env.CONTENTFUL_TOKEN
});

const data = {};

client.getEntries()
    .then((response) => {
        response.items.forEach(entry => {
            let contentType = entry.sys.contentType.sys.id;
            if (!data[contentType]) {
                data[contentType] = [];
            }
            data[contentType].push(entry);
        });
        Object.keys(data).forEach(contentType => {
            fs.writeFile(__dirname + `/src/data/${contentType}.json`, JSON.stringify(data[contentType], null, 2), 'utf8', (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
        });
    })
    .catch(console.error);