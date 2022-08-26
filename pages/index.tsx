import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect } from 'react';
import styles from '../styles/app.module.css';

type data = {
  url: string,
  title: string
}

const getData = async () => {
  const dataArray: Array<object> = [];

  for (let index = 1; index <= 20; index++) {
    // 124
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${index}.json`);
    
    const data: data = await response.json();

    if (data.url) {
      dataArray.push(data);
    }
  }

  return dataArray;
}

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
      <div>
        { results.map((story, index) => <a key={index} href={story.url} className={styles.link}>{story.title}</a>) }
      </div>
    </>
  )
}

export default Home
