import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getPostDatas, getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>ひよこの上のめだまやき</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, body }) => (
            <li className={utilStyles.listItem} key={id}>
              #{id}
              <br />
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              {/* <p>{body}</p> */}
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getPostDatas();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}
