import { useEffect, useRef, useState } from 'react'
import './App.css'
import { IData, IDataAuthor } from './hooks/useFetch'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'
interface Props {
  author?: string
}

const App: React.FC<Props> = ({ author = '' }) => {
  let decodedAuthor;
  let url = 'https://api.quotable.io/random';

  if (author) {
    decodedAuthor = window.decodeURIComponent(author).toLowerCase();
    url = `https://quotable.io/quotes?author=${decodedAuthor}`;
  }

  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<IDataAuthor | IData | IData[]>();

  console.log(quote);


  const shouldFetch = useRef(true);

  const getQuotes = async () => {
    if (shouldFetch.current) {
      setLoading(true);
      shouldFetch.current = false;

      try {
        const resp = await fetch(url);
        const data = await resp.json();

        if (author) {
          setQuote(data);
        } else {
          setQuote({
            author: data.author,
            content: data.content
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }

    }
  }

  useEffect(() => {
    getQuotes()
  }, [])

  const handleRandom = () => {
    shouldFetch.current = true;
    setLoading(true);
    getQuotes();
  }

  return (
    <>
      <Header handleClick={handleRandom} />

      <Main quote={quote} loading={loading} />

      <Footer />

    </>
  )
}

export default App
