import Layout from '../components/layout'

export default function Custom500() {
  return (
    <Layout>
      <h1>500 - Server Error</h1>
    </Layout>
  )
}


// TypeError: Cannot read properties of null (reading 'content')
//     at r (main-62ebef1fccc49d63.js:1:4685)
//     at main-62ebef1fccc49d63.js:1:4551
//     at Array.forEach (<anonymous>)
//     at Object.updateHead (main-62ebef1fccc49d63.js:1:4539)
//     at Object.n (main-62ebef1fccc49d63.js:1:83151)
//     at main-62ebef1fccc49d63.js:1:83423
//     at uI (framework-305cb810cde7afac.js:9:84120)
//     at oU (framework-305cb810cde7afac.js:9:113183)
//     at o (framework-305cb810cde7afac.js:9:107736)
//     at x (framework-305cb810cde7afac.js:33:1364)
