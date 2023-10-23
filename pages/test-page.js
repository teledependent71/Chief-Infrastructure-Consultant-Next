import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Chief Infrastructure Consultant</title>
          <meta
            property="og:title"
            content="test-page - Chief Infrastructure Consultant"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_jbj4j) => (
            <>
              <h1>{context_jbj4j?.Name}</h1>
            </>
          )}
          initialData={props.contextJbj4jProp}
          persistDataDuringLoading={true}
          key={props?.contextJbj4jProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextJbj4jProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextJbj4jProp: contextJbj4jProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
