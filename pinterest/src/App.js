import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header'
import Mainboard from './Mainboard'
import unsplash from './api/unsplash'
import { useRecoilState } from 'recoil';
import { nextState, queryState } from './recoil/next';

function App() {

  const[result, setResult] = useState([]);
  const[query, setQuery] = useRecoilState(queryState);
  const[next,setNext] = useRecoilState(nextState);

  useEffect(() => {
    setResult([]);
  }, [query])

  const makeAPICall = input => {
    let apiResult = null;
    if(input==="request") {
      let split = next.split(",");
      let nextURL = null;
      split.forEach(s=>{
        if(s.includes("next")) nextURL=s;
      })
      if(nextURL==null) {
        setNext(null)
        return;
      } 
      let start = nextURL.indexOf("<");
      let end = nextURL.indexOf(">");
      let redirect = nextURL.slice(start+1,end);
      apiResult = unsplash.get(redirect);
      apiResult.then(data => {
        let totalResult = [...result, ...data?.data?.results];
        setResult(totalResult);
        setNext(data?.headers?.link);  
      })
    } else {
      setQuery(input);
      apiResult = unsplash.get("https://api.unsplash.com/search/photos",{
        params: {query: input, per_page: 25}
      });
      apiResult.then(data => {
        let totalResult = [...data?.data?.results];
        setResult(totalResult);
        setNext(data?.headers?.link);  
      })
    }

  }

  return (
      <div className="app">
          <div className="app__header">
            <Header apicall={makeAPICall} />
          </div>
          <div className="app__body">
            <Mainboard result={result} apicall={makeAPICall} />
          </div>
      </div>
  );
}

export default App;
