import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    console.log(results);

    useEffect( () => {
        const search = async () => {
          const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
              params: {
                  action: "query",
                  list: "search",
                  origin: "*",
                  format: "json",
                  srsearch: term,
              }
          });
          setResults(data.query.search);
        };

        if (term && !results.length){
            console.log('Without timeout');
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    console.log("With timeout");
                    search();
                }
            }, 500);

            return () => {
                clearTimeout(timeoutId);
            };
        }

    }, [term, results.length]);


    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a
                        target="_blank"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className="ui button
                        ">Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                </div>
            </div>
        )
    })
    return (
       <div>
           <div className="ui form">
               <div className="field">
                   <label>Enter Search Term</label>
                   <input
                       value={term}
                       onChange={e => setTerm(e.target.value)}
                       className="input"
                   />
               </div>
           </div>
           <div className="ui celled list">
               {renderedResults}
           </div>
       </div>
    )
};

export default Search;