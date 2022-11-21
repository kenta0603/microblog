import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "../compornents/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData  } from "../lib/posts";

//SSGの場合
export async function  getStaticProps() {
  const allPostsData = getSortedPostsData(); //id, title, thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          私は主にフロント中心に活動しているエンジニアです/ReactやNextjsを中心に勉強しています。
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <picture>
                  <source srcSet={thumbnail} type="image/jpg" />
                  <img
                    src={thumbnail}
                    className={styles.thumbnailImage}
                    alt=""
                  />
                </picture>
              </Link>
              <Link legacyBehavior href={`/posts/${id}`}>
                <a className={utilStyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
