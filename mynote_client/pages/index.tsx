import type {NextPage} from 'next'
import Note from "../components/Note/Note";
import MainLayout from "../layout/MainLayout";
import {addApolloState, initializeApollo} from "../lib/apolloClient";
import {gql} from "@apollo/client";
import path from "path";
import {promises as fs} from "fs";



const Home: NextPage = () => <MainLayout><Note/></MainLayout>

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const coursesDirectory = path.join(process.cwd(), 'public/')
  const filePath = path.join(coursesDirectory, 'response.json')

  const dataJSON = await fs.readFile(filePath, 'utf8')
  const dataParse = JSON.parse(dataJSON)
  console.log(dataParse.length)


  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  })
}

export default Home


