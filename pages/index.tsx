// Types
import type { GetServerSideProps, NextPage } from 'next'
import type { data } from '../types/dataTypes';

// Components
import Nav from '../components/nav';

// Functions
import { getData } from '../utils/dataHandler';

// Styles
import styles from '../styles/app.module.sass';

// React Hooks
import { useEffect } from 'react';



export const getServerSideProps: GetServerSideProps = async () => {
  const results = await getData();

  return {
    props: {
      results
    }
  }
}

interface props {
  results: Array<data>;
}

const Home: NextPage<props> = ({ results }) => {

  useEffect(() => {
    console.log(results);
  }, [results])
  
  return (
    <>
      <Nav />
      <div>
        { results.map((story, index) => <a key={index} href={story.url} className={styles.link}>{story.title}</a>) }
      </div>
    </>
  )
}

export default Home
