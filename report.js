const fs = require('fs');

 function writeToTxt(pages){

    console.log("start writing to to txt.file");

    let fileToWrite = `reports/report${(new Date).toJSON().slice(0,19).replaceAll("-","").replaceAll(":","")}.txt`;

    for(const page of pages){
        const url = page[0];
        const hits = page[1];
        let line = `Founds ${hits} links to page ${url} \n`; 
         
        fs.appendFile(fileToWrite, line, err => {
            if(err){
                console.error(err);
            }
        });
    }


    console.log(" writing to to txt.file done");

}


function printReport(pages){
    console.log("==================");
    console.log("Report");
    console.log("==================");
    const sortedPages = sortPages(pages);
    for(const sortedPage of sortedPages){
        const url = sortedPage[0];
        const hits = sortedPage[1];
        console.log(`Founds ${hits} links to page ${url}`); 
    }
    console.log("==================");
    console.log("End Report");
    console.log("==================");

    writeToTxt(sortedPages);
}



function sortPages(pages){
    const pagesArray = Object.entries(pages)
    pagesArray.sort( (a, b) => {
        aHits = a[1];
        bHits = b[1];
        return b[1] - a[1];
    })
    return pagesArray ;
}

module.exports = {
    sortPages,
    printReport
}